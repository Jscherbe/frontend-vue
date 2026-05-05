import { inject as a, computed as n, createElementBlock as r, openBlock as m, mergeProps as d } from "vue";
const i = ["value", "checked"], v = {
  __name: "UluFormRadio",
  props: {
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: [String, Number, Boolean],
    /**
     * The value of this radio button.
     */
    value: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = a("uluFormFieldAttrs", null), u = n(() => t ? t.value : {});
    return (o, l) => (m(), r("input", d({ type: "radio" }, u.value, {
      value: e.value,
      checked: e.modelValue === e.value,
      onChange: l[0] || (l[0] = (c) => o.$emit("update:modelValue", e.value))
    }), null, 16, i));
  }
};
export {
  v as default
};
