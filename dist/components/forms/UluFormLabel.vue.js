import { createElementBlock as o, openBlock as r, normalizeClass as t, renderSlot as a, createBlock as n, createCommentVNode as d } from "vue";
import i from "./UluFormRequiredChar.vue.js";
const c = ["for"], f = {
  __name: "UluFormLabel",
  props: {
    /**
     * The ID of the input this label is associated with.
     */
    id: {
      type: String,
      required: !0
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, appends the required character.
     */
    required: Boolean
  },
  setup(e) {
    return (l, s) => (r(), o("label", {
      for: e.id,
      class: t({ "hidden-visually": e.labelHidden })
    }, [
      a(l.$slots, "default"),
      e.required ? (r(), n(i, { key: 0 })) : d("", !0)
    ], 10, c));
  }
};
export {
  f as default
};
