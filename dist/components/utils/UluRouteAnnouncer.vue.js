import { createElementBlock as s, createCommentVNode as l, openBlock as u, toDisplayString as c } from "vue";
import a from "../../_virtual/_plugin-vue_export-helper.js";
const d = {
  name: "RouteAnnouncer",
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
      default: (t) => t.meta?.title
    }
  },
  watch: {
    "$route.path"(t, r) {
      if (this.$route.hash)
        return;
      const n = this.validator(t, r, this.$route), i = this.exclude.some((e) => e.endsWith("*") ? t.startsWith(e.slice(0, e.length - 1)) : t === e);
      n && !i && this.$refs.el.focus();
    }
  },
  computed: {
    title() {
      const t = this.getTitle(this.$route);
      return t || console.warn("RouteAnnouncer: No page title!"), t;
    }
  }
};
function f(t, r, n, i, e, o) {
  return o.title ? (u(), s("p", {
    key: 0,
    tabindex: "-1",
    class: "hidden-visually",
    ref: "el"
  }, c(o.title), 513)) : l("", !0);
}
const m = /* @__PURE__ */ a(d, [["render", f]]);
export {
  m as default
};
