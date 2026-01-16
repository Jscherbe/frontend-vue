import { ref as s, computed as f, watch as d, nextTick as p, createElementBlock as m, createCommentVNode as h, openBlock as y, toDisplayString as v } from "vue";
import { useRoute as _ } from "vue-router";
import { getRouteTitle as g } from "../../utils/router.js";
const A = {
  __name: "UluRouteAnnouncer",
  props: {
    /**
     * Allow user to bypass this functionality
     * - Function should return true if the page should be announced
     * - Function is passed  (to, from, $route) => {}
     *   - to/from are path strings
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
      default: (r) => g(r)
    }
  },
  setup(r) {
    const n = r, t = _(), u = s(null), l = f(() => {
      if (!t) return "";
      const e = n.getTitle(t);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    });
    return t ? d(
      () => t.path,
      async (e, a) => {
        if (t.hash)
          return;
        const c = n.validator(e, a, t), i = n.exclude.some((o) => o.endsWith("*") ? e.startsWith(o.slice(0, o.length - 1)) : e === o);
        c && !i && (await p(), u.value?.focus());
      }
    ) : console.error("RouteAnnouncer: No route found (install vue-router)."), (e, a) => l.value ? (y(), m("p", {
      key: 0,
      tabindex: "-1",
      class: "hidden-visually",
      ref_key: "el",
      ref: u
    }, v(l.value), 513)) : h("", !0);
  }
};
export {
  A as default
};
