import { createElementBlock as u, openBlock as l, Fragment as i, createElementVNode as d, unref as n, renderSlot as m, createTextVNode as c, createBlock as s, createCommentVNode as f, toDisplayString as k } from "vue";
import { newId as h } from "../../utils/dom.js";
import p from "./UluFormRequiredChar.vue.js";
const V = ["id", "checked", "required"], b = ["for"], x = {
  __name: "UluFormCheckbox",
  props: {
    /**
     * The label for the checkbox.
     */
    label: String,
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = h();
    return (o, r) => (l(), u(i, null, [
      d("input", {
        type: "checkbox",
        id: n(t),
        checked: e.modelValue,
        onChange: r[0] || (r[0] = (a) => o.$emit("update:modelValue", a.target.checked)),
        required: e.required
      }, null, 40, V),
      d("label", { for: n(t) }, [
        m(o.$slots, "default", {}, () => [
          c(k(e.label), 1),
          e.required ? (l(), s(p, { key: 0 })) : f("", !0)
        ])
      ], 8, b)
    ], 64));
  }
};
export {
  x as default
};
