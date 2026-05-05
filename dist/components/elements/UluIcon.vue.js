import { inject as h, defineAsyncComponent as A, computed as e, onMounted as k, createBlock as v, createElementBlock as w, createCommentVNode as S, openBlock as a, resolveDynamicComponent as g, mergeProps as I, normalizeClass as _ } from "vue";
import { useIcon as B } from "../../composables/useIcon.js";
const b = {
  __name: "UluIcon",
  props: {
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     */
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
  },
  setup(d) {
    const t = h("uluCore"), { getIconProps: f, getClassesFromDefinition: y } = B(), C = A(
      () => import("@fortawesome/vue-fontawesome").then((o) => (console.log("[UluIcon] Async component loaded successfully:", o), o.FontAwesomeIcon)).catch((o) => {
        console.error("[UluIcon] Failed to load async component:", o);
      })
    ), s = d, r = e(() => t.getSetting("fontAwesomeStatic")), c = e(() => t.getSetting("iconComponent")), P = e(() => t.getSetting("iconPropResolver")), n = e(() => {
      const { icon: o } = s;
      if (typeof o == "string" && o.startsWith("type:"))
        try {
          const l = o.substring(5);
          return t.getIcon(l);
        } catch (l) {
          return console.warn(l), null;
        }
      return o;
    }), i = e(() => !c.value || !n.value ? null : P.value(n.value)), p = e(() => f(n.value)), U = e(() => y(n.value)), u = e(() => ({
      "flow-inline": s.spaced
    })), m = e(() => !r.value && n.value ? C : null);
    return k(() => {
      console.log("[UluIcon] mounted with props:", s), console.log("[UluIcon] customIconComponent:", c.value), console.log("[UluIcon] resolvedDefinition:", n.value), console.log("[UluIcon] iconProps:", p.value), console.log("[UluIcon] customIconProps:", i.value);
    }), (o, l) => c.value ? (a(), v(g(c.value), I({ key: 0 }, i.value, { class: u.value }), null, 16, ["class"])) : !r.value && m.value ? (a(), v(g(m.value), I({ key: 1 }, p.value, { class: u.value }), null, 16, ["class"])) : r.value && n.value ? (a(), w("span", {
      key: 2,
      class: _([U.value, u.value]),
      "aria-hidden": "true"
    }, null, 2)) : S("", !0);
  }
};
export {
  b as default
};
