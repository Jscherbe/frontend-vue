import { ref as d, computed as f, watch as p, nextTick as h, createElementBlock as m, createCommentVNode as g, openBlock as v, toDisplayString as y } from "vue";
import { useRoute as R, useRouter as _, START_LOCATION as A } from "vue-router";
import { getRouteTitle as T } from "../../utils/router.js";
const b = {
  __name: "UluRouteAnnouncer",
  props: {
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be announced
     * - Function is passed (to, from) => {}
     *   - to/from are RouteLocationNormalizedLoaded objects
     */
    validator: {
      type: Function,
      default: () => !0
    },
    /**
     * Array of paths to exclude
     * - Can be exact path "/about" 
     * - Or can be path with wildcard "/about/*" (match all paths under about)
     */
    exclude: {
      type: Array,
      default: () => []
    },
    /**
     * Function to retrieve routes title
     */
    getTitle: {
      type: Function,
      default: (r) => T(r)
    },
    /**
     * Enable debug logging
     */
    debug: Boolean
  },
  setup(r) {
    const t = r, l = R(), c = _(), a = d(null), n = f(() => {
      if (!l || l.matched.length === 0) return "";
      const e = t.getTitle(l);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    });
    return c ? p(
      c.currentRoute,
      async (e, o) => {
        if (o === A || o.matched.length === 0 || e.hash)
          return;
        const s = t.validator(e, o), i = t.exclude.some((u) => u.endsWith("*") ? e.path.startsWith(u.slice(0, u.length - 1)) : e.path === u);
        n.value && s && !i && (t.debug && console.log("RouteAnnouncer: Focused title:", n.value), await h(), a.value?.focus());
      }
    ) : console.error("RouteAnnouncer: No route found (install vue-router)."), (e, o) => n.value ? (v(), m("p", {
      key: 0,
      tabindex: "-1",
      class: "hidden-visually",
      ref_key: "el",
      ref: a
    }, y(n.value), 513)) : g("", !0);
  }
};
export {
  b as default
};
