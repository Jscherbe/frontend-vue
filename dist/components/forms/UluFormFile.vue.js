import { createElementBlock as s, openBlock as n, Fragment as c, createElementVNode as i, unref as o, normalizeClass as d, renderSlot as u, createTextVNode as f, createBlock as g, createCommentVNode as p, toDisplayString as h, mergeProps as b } from "vue";
import { newId as B } from "../../utils/dom.js";
import q from "./UluFormRequiredChar.vue.js";
const y = ["for"], C = ["multiple", "id", "required"], V = {
  __name: "UluFormFile",
  props: {
    /**
     * The label for the file input.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Additional attributes to bind to the input element.
     */
    inputAttrs: Object,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["file-change"],
  setup(e, { emit: r }) {
    const a = r, t = B(), m = (l) => {
      a("file-change", l.target.files);
    };
    return (l, F) => (n(), s(c, null, [
      i("label", {
        class: d({ "hidden-visually": e.labelHidden }),
        for: o(t)
      }, [
        u(l.$slots, "label", {}, () => [
          f(h(e.label), 1),
          e.required ? (n(), g(q, { key: 0 })) : p("", !0)
        ])
      ], 10, y),
      i("input", b({
        type: "file",
        onChange: m,
        multiple: e.multiple,
        id: o(t)
      }, e.inputAttrs, { required: e.required }), null, 16, C)
    ], 64));
  }
};
export {
  V as default
};
