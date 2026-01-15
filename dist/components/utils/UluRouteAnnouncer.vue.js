import { ref as i, computed as d, watch as f, nextTick as p, createElementBlock as m, createCommentVNode as h, openBlock as y, toDisplayString as v } from "vue";
import { useRoute as _ } from "vue-router";
const x = {
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
      default: (r) => r.meta?.title
    }
  },
  setup(r) {
    const o = r, t = _(), u = i(null), l = d(() => {
      if (!t) return "";
      const e = o.getTitle(t);
      return e || console.warn("RouteAnnouncer: No page title!"), e;
    });
    return t ? f(
      () => t.path,
      async (e, s) => {
        if (t.hash)
          return;
        const a = o.validator(e, s, t), c = o.exclude.some((n) => n.endsWith("*") ? e.startsWith(n.slice(0, n.length - 1)) : e === n);
        a && !c && (await p(), u.value?.focus());
      }
    ) : console.error("RouteAnnouncer: No route instance found. Ensure vue-router is installed."), (e, s) => l.value ? (y(), m("p", {
      key: 0,
      tabindex: "-1",
      class: "hidden-visually",
      ref_key: "el",
      ref: u
    }, v(l.value), 513)) : h("", !0);
  }
};
export {
  x as default
};
