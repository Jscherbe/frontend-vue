import { inject as P, defineAsyncComponent as S, computed as e, createBlock as p, createElementBlock as _, createCommentVNode as h, openBlock as a, resolveDynamicComponent as m, mergeProps as v, normalizeClass as w } from "vue";
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
  setup(f) {
    const t = P("uluCore"), { getIconProps: g, getClassesFromDefinition: C } = B(), y = S(
      () => import("@fortawesome/vue-fontawesome").then((n) => n.FontAwesomeIcon)
    ), u = f, r = e(() => t.getSetting("fontAwesomeStatic")), c = e(() => t.getSetting("iconComponent")), I = e(() => t.getSetting("iconPropResolver")), o = e(() => {
      const { icon: n } = u;
      if (typeof n == "string" && n.startsWith("type:"))
        try {
          const s = n.substring(5);
          return t.getIcon(s);
        } catch (s) {
          return console.warn(s), null;
        }
      return n;
    }), d = e(() => !c.value || !o.value ? null : I.value(o.value)), k = e(() => g(o.value)), A = e(() => C(o.value)), l = e(() => ({
      "flow-inline": u.spaced
    })), i = e(() => !r.value && o.value ? y : null);
    return (n, s) => c.value ? (a(), p(m(c.value), v({ key: 0 }, d.value, { class: l.value }), null, 16, ["class"])) : !r.value && i.value ? (a(), p(m(i.value), v({ key: 1 }, k.value, { class: l.value }), null, 16, ["class"])) : r.value && o.value ? (a(), _("span", {
      key: 2,
      class: w([A.value, l.value]),
      "aria-hidden": "true"
    }, null, 2)) : h("", !0);
  }
};
export {
  b as default
};
