import { createElementBlock as u, openBlock as a, Fragment as d, createElementVNode as n, unref as o, renderSlot as m, createTextVNode as i, createBlock as c, createCommentVNode as f, toDisplayString as s } from "vue";
import { newId as g } from "../../utils/dom.js";
import v from "./UluFormRequiredChar.vue.js";
const V = ["id", "name", "value", "checked", "required"], k = ["for"], h = {
  __name: "UluFormRadio",
  props: {
    /**
     * The label for the radio button.
     */
    label: String,
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: [String, Number],
    /**
     * The value of this radio button.
     */
    value: [String, Number],
    /**
     * The name of the radio button group.
     */
    name: String,
    /**
     * If true, the field will be required.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = g();
    return (l, r) => (a(), u(d, null, [
      n("input", {
        type: "radio",
        id: o(t),
        name: e.name,
        value: e.value,
        checked: e.modelValue === e.value,
        onChange: r[0] || (r[0] = (S) => l.$emit("update:modelValue", e.value)),
        required: e.required
      }, null, 40, V),
      n("label", { for: o(t) }, [
        m(l.$slots, "default", {}, () => [
          i(s(e.label), 1),
          e.required ? (a(), c(v, { key: 0 })) : f("", !0)
        ])
      ], 8, k)
    ], 64));
  }
};
export {
  h as default
};
