import { createElementBlock as i, openBlock as o, Fragment as u, createElementVNode as a, unref as n, normalizeClass as m, renderSlot as s, createTextVNode as c, createBlock as f, createCommentVNode as V, toDisplayString as b } from "vue";
import { newId as p } from "../../utils/dom.js";
import g from "./UluFormRequiredChar.vue.js";
const q = ["for"], B = ["value", "id", "required"], S = {
  __name: "UluFormText",
  props: {
    /**
     * The label for the text input.
     */
    label: String,
    /**
     * The value of the text input (for v-model).
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
    const l = p();
    return (t, r) => (o(), i(u, null, [
      a("label", {
        class: m({ "hidden-visually": e.labelHidden }),
        for: n(l)
      }, [
        s(t.$slots, "label", {}, () => [
          c(b(e.label), 1),
          e.required ? (o(), f(g, { key: 0 })) : V("", !0)
        ])
      ], 10, q),
      a("input", {
        type: "text",
        value: e.modelValue,
        onInput: r[0] || (r[0] = (d) => t.$emit("update:modelValue", d.target.value)),
        id: n(l),
        required: e.required
      }, null, 40, B)
    ], 64));
  }
};
export {
  S as default
};
