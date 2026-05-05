import { inject as A, defineAsyncComponent as P, computed as e, onMounted as k, createBlock as v, createElementBlock as w, createCommentVNode as F, openBlock as a, resolveDynamicComponent as g, mergeProps as I, normalizeClass as S } from "vue";
import { useIcon as _ } from "../../composables/useIcon.js";
const D = {
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
    const t = A("uluCore"), { getIconProps: f, getClassesFromDefinition: y } = _(), C = P(
      () => import("@fortawesome/vue-fontawesome").then((o) => (console.log("[UluIcon] Async component loaded successfully:", o), o.FontAwesomeIcon)).catch((o) => {
        console.error("[UluIcon] Failed to load async component:", o);
      })
    ), s = d, r = e(() => t.getSetting("fontAwesomeStatic")), c = e(() => t.getSetting("iconComponent")), h = e(() => t.getSetting("iconPropResolver")), n = e(() => {
      const { icon: o } = s;
      if (typeof o == "string" && o.startsWith("type:"))
        try {
          const l = o.substring(5);
          return t.getIcon(l);
        } catch (l) {
          return console.warn(l), null;
        }
      return o;
    }), i = e(() => !c.value || !n.value ? null : h.value(n.value)), p = e(() => f(n.value)), U = e(() => y(n.value)), u = e(() => ({
      "flow-inline": s.spaced
    })), m = e(() => !r.value && n.value ? C : null);
    return k(() => {
      console.log("[UluIcon] mounted with props:", s), console.log("[UluIcon] customIconComponent:", c.value), console.log("[UluIcon] resolvedDefinition:", n.value), console.log("[UluIcon] iconProps:", p.value), console.log("[UluIcon] customIconProps:", i.value), import("@fortawesome/fontawesome-svg-core").then((o) => {
        console.log("[UluIcon] FA Library Definitions in this chunk:", o.library.definitions);
      }).catch((o) => {
        console.error("[UluIcon] Could not load fontawesome-svg-core for debugging", o);
      });
    }), (o, l) => c.value ? (a(), v(g(c.value), I({ key: 0 }, i.value, { class: u.value }), null, 16, ["class"])) : !r.value && m.value ? (a(), v(g(m.value), I({ key: 1 }, p.value, { class: u.value }), null, 16, ["class"])) : r.value && n.value ? (a(), w("span", {
      key: 2,
      class: S([U.value, u.value]),
      "aria-hidden": "true"
    }, null, 2)) : F("", !0);
  }
};
export {
  D as default
};
