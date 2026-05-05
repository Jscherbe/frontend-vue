import { inject as n, computed as a, createElementBlock as m, openBlock as s, mergeProps as p } from "vue";
const d = ["value"], c = {
  __name: "UluFormText",
  props: {
    /**
     * The value of the text input (for v-model).
     */
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(l) {
    const e = n("uluFormFieldAttrs", null), u = a(() => e ? e.value : {});
    return (o, t) => (s(), m("input", p({ type: "text" }, u.value, {
      value: l.modelValue,
      onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r.target.value))
    }), null, 16, d));
  }
};
export {
  c as default
};
