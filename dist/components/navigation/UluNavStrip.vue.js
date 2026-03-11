import o from "./UluMenu.vue.js";
import { resolveComponent as s, createElementBlock as a, createCommentVNode as l, openBlock as c, normalizeClass as m, createVNode as u, createSlots as p, renderList as _, withCtx as v, renderSlot as d, normalizeProps as f, guardReactiveProps as h } from "vue";
import k from "../../_virtual/_plugin-vue_export-helper.js";
const g = {
  name: "UluNavStrip",
  components: {
    UluMenu: o
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
function B(t, U, e, C, N, S) {
  const n = s("UluMenu");
  return e.items?.length ? (c(), a("nav", {
    key: 0,
    class: m(["nav-strip", {
      "nav-strip--rule": e.rule,
      "nav-strip--center": e.center,
      "nav-strip--right": e.right
    }])
  }, [
    u(n, {
      items: e.items,
      classes: {
        list: "nav-strip__list",
        item: "nav-strip__item",
        link: "nav-strip__link",
        linkExactActive: "is-active"
      }
    }, p({ _: 2 }, [
      _(t.$slots, (x, r) => ({
        name: r,
        fn: v((i) => [
          d(t.$slots, r, f(h(i)))
        ])
      }))
    ]), 1032, ["items"])
  ], 2)) : l("", !0);
}
const A = /* @__PURE__ */ k(g, [["render", B]]);
export {
  A as default
};
