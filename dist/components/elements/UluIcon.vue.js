import { inject as S, ref as _, computed as e, watchEffect as h, defineAsyncComponent as A, markRaw as v, createBlock as p, createElementBlock as B, createCommentVNode as F, openBlock as i, resolveDynamicComponent as f, mergeProps as g, normalizeClass as D } from "vue";
import { useIcon as R } from "../../composables/useIcon.js";
const x = {
  __name: "UluIcon",
  props: {
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
  },
  setup(y) {
    const s = S("uluCore"), l = _(null), { getIconProps: C, getClassesFromDefinition: d } = R();
    let a;
    const m = y, c = e(() => s.getSetting("fontAwesomeStatic")), r = e(() => s.getSetting("iconComponent")), I = e(() => s.getSetting("iconPropResolver")), n = e(() => {
      const { icon: o } = m;
      if (typeof o == "string" && o.startsWith("type:"))
        try {
          const t = o.substring(5);
          return s.getIcon(t);
        } catch (t) {
          return console.warn(t), null;
        }
      return o;
    }), w = e(() => !r.value || !n.value ? null : I.value(n.value)), k = e(() => C(n.value)), P = e(() => d(n.value)), u = e(() => ({
      "flow-inline": m.spaced
    }));
    return h(async () => {
      if (!c.value && n.value) {
        if (l.value === null)
          if (a)
            l.value = v(a.FontAwesomeIcon);
          else {
            const o = A(async () => {
              const t = await import("@fortawesome/vue-fontawesome");
              return a = t, t.FontAwesomeIcon;
            });
            l.value = v(o);
          }
      } else
        l.value = null;
    }), (o, t) => r.value ? (i(), p(f(r.value), g({ key: 0 }, w.value, { class: u.value }), null, 16, ["class"])) : !c.value && l.value && n.value ? (i(), p(f(l.value), g({ key: 1 }, k.value, { class: u.value }), null, 16, ["class"])) : c.value && n.value ? (i(), B("span", {
      key: 2,
      class: D([P.value, u.value]),
      "aria-hidden": "true"
    }, null, 2)) : F("", !0);
  }
};
export {
  x as default
};
