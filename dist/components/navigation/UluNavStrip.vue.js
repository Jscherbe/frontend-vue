import n from "./UluMenu.vue.js";
import { resolveComponent as r, createElementBlock as i, createCommentVNode as o, openBlock as a, normalizeClass as s, createVNode as l } from "vue";
import c from "../../_virtual/_plugin-vue_export-helper.js";
const m = {
  name: "UluNavStrip",
  components: {
    UluMenu: n
  },
  props: {
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: Array,
    /**
     * Center aligned
     */
    center: Boolean,
    /**
     * Right aligned
     */
    right: Boolean,
    /**
     * Rule nav strip style
     */
    rule: Boolean
  }
};
function u(_, p, e, v, f, d) {
  const t = r("UluMenu");
  return e.items?.length ? (a(), i("nav", {
    key: 0,
    class: s(["nav-strip", {
      "nav-strip--rule": e.rule,
      "nav-strip--center": e.center,
      "nav-strip--right": e.right
    }])
  }, [
    l(t, {
      items: e.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, null, 8, ["items"])
  ], 2)) : o("", !0);
}
const U = /* @__PURE__ */ c(m, [["render", u]]);
export {
  U as default
};
