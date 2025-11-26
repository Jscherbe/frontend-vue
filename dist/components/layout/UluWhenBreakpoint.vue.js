import { ref as f, computed as d, watch as m, onBeforeUnmount as y, renderSlot as k, createCommentVNode as S } from "vue";
import { useRequiredInject as g } from "../../composables/useRequiredInject.js";
const B = {
  __name: "UluWhenBreakpoint",
  props: {
    /**
     * The maximum breakpoint to show the content at.
     */
    max: String,
    /**
     * The minimum breakpoint to show the content at.
     */
    min: String,
    /**
     * Only show the content at this breakpoint.
     */
    only: String
  },
  setup(p) {
    const o = p, r = g("uluBreakpointManager"), l = f({}), c = f([]), u = f(!1), h = d(() => !u.value || ["max", "min", "only"].filter((e) => o[e]).length === 0 ? !1 : Object.values(l.value).every((e) => e)), v = (a) => {
      const e = (t) => {
        const n = o[t];
        if (n) {
          l.value[t] = !1;
          const s = {
            on: () => {
              l.value[t] = !0;
            },
            off: () => {
              l.value[t] = !1;
            }
          };
          a.at(n)[t](s), c.value.push({ name: n, direction: t, handler: s });
        }
      };
      e("max"), e("min"), e("only"), u.value = !0;
    }, i = () => {
      r.value && c.value.forEach(({ name: a, direction: e, handler: t }) => {
        const n = r.value.at(a);
        if (n)
          try {
            n.remove(t, e);
          } catch (s) {
            console.error(s);
          }
      }), c.value = [], l.value = {}, u.value = !1;
    };
    return m(r, (a) => {
      a && !u.value && v(a);
    }, { immediate: !0 }), m([() => o.max, () => o.min, () => o.only], () => {
      r.value && u.value && (i(), v(r.value));
    }), y(() => {
      i();
    }), (a, e) => h.value ? k(a.$slots, "default", { key: 0 }) : S("", !0);
  }
};
export {
  B as default
};
