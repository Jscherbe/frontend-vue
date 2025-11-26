import { createElementBlock as i, openBlock as a, Fragment as u, createElementVNode as o, unref as n, normalizeClass as m, renderSlot as s, createTextVNode as c, createBlock as f, createCommentVNode as V, toDisplayString as b } from "vue";
import { newId as g } from "../../utils/dom.js";
import q from "./UluFormRequiredChar.vue.js";
const B = ["for"], k = ["value", "id", "required"], x = {
  __name: "UluFormTextarea",
  props: {
    /**
     * The label for the textarea.
     */
    label: String,
    /**
     * The value of the textarea (for v-model).
     */
    modelValue: String,
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const l = g();
    return (t, r) => (a(), i(u, null, [
      o("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: n(l)
      }, [
        s(t.$slots, "label", {}, () => [
          c(b(e.label), 1),
          e.required ? (a(), f(q, { key: 0 })) : V("", !0)
        ])
      ], 10, B),
      o("textarea", {
        value: e.modelValue,
        onInput: r[0] || (r[0] = (d) => t.$emit("update:modelValue", d.target.value)),
        id: n(l),
        required: e.required
      }, null, 40, k)
    ], 64));
  }
};
export {
  x as default
};
