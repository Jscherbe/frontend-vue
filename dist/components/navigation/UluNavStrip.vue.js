import n from "./UluMenu.vue.js";
import { resolveComponent as r, createElementBlock as i, openBlock as o, normalizeClass as s, createVNode as a } from "vue";
import l from "../../_virtual/_plugin-vue_export-helper.js";
const c = {
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
function m(p, u, e, _, v, f) {
  const t = r("UluMenu");
  return o(), i("nav", {
    class: s(["nav-strip", {
      "nav-strip--rule": e.rule,
      "nav-strip--center": e.center,
      "nav-strip--right": e.right
    }])
  }, [
    a(t, {
      items: e.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, null, 8, ["items"])
  ], 2);
}
const U = /* @__PURE__ */ l(c, [["render", m]]);
export {
  U as default
};
