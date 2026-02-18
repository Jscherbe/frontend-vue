import { createElementBlock as e, createCommentVNode as c, openBlock as t, Fragment as m, renderList as n, createVNode as o, mergeProps as l } from "vue";
import u from "./UluBadge.vue.js";
const i = {
  key: 0,
  class: "badge-stack"
}, g = {
  __name: "UluBadgeStack",
  props: {
    /**
     * Array of props for each badge
     */
    items: Array
  },
  setup(r) {
    return (_, d) => r.items?.length ? (t(), e("ul", i, [
      (t(!0), e(m, null, n(r.items, (a, s) => (t(), e("li", {
        class: "badge-stack__item",
        key: s
      }, [
        o(u, l({ ref_for: !0 }, a), null, 16)
      ]))), 128))
    ])) : c("", !0);
  }
};
export {
  g as default
};
