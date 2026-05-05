import { inject as w, defineAsyncComponent as P, computed as e, createBlock as p, createElementBlock as S, createCommentVNode as _, openBlock as u, resolveDynamicComponent as m, mergeProps as v, normalizeClass as h } from "vue";
import { useIcon as B } from "../../composables/useIcon.js";
const b = {
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
  setup(f) {
    const t = w("uluCore"), { getIconProps: g, getClassesFromDefinition: C } = B(), d = P(
      () => import("@fortawesome/vue-fontawesome").then((n) => (console.log("[UluIcon] FontAwesome Module resolved:", n), n.FontAwesomeIcon))
    ), a = f, r = e(() => t.getSetting("fontAwesomeStatic")), c = e(() => t.getSetting("iconComponent")), y = e(() => t.getSetting("iconPropResolver")), o = e(() => {
      const { icon: n } = a;
      if (typeof n == "string" && n.startsWith("type:"))
        try {
          const s = n.substring(5);
          return t.getIcon(s);
        } catch (s) {
          return console.warn(s), null;
        }
      return n;
    }), I = e(() => !c.value || !o.value ? null : y.value(o.value)), A = e(() => g(o.value)), k = e(() => C(o.value)), l = e(() => ({
      "flow-inline": a.spaced
    })), i = e(() => !r.value && o.value ? d : null);
    return (n, s) => c.value ? (u(), p(m(c.value), v({ key: 0 }, I.value, { class: l.value }), null, 16, ["class"])) : !r.value && i.value ? (u(), p(m(i.value), v({ key: 1 }, A.value, { class: l.value }), null, 16, ["class"])) : r.value && o.value ? (u(), S("span", {
      key: 2,
      class: h([k.value, l.value]),
      "aria-hidden": "true"
    }, null, 2)) : _("", !0);
  }
};
export {
  b as default
};
