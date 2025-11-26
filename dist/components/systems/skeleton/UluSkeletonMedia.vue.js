import { createElementBlock as e, openBlock as o, createVNode as t } from "vue";
import c from "../../elements/UluIcon.vue.js";
const n = { class: "skeleton skeleton-block--media" }, l = {
  __name: "UluSkeletonMedia",
  setup(a) {
    return (r, s) => (o(), e("div", n, [
      t(c, { icon: "type:image" })
    ]));
  }
};
export {
  l as default
};
