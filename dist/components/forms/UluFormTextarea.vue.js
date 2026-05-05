import { inject as a, computed as n, createElementBlock as m, openBlock as s, mergeProps as d } from "vue";
const p = ["value"], c = {
  __name: "UluFormTextarea",
  props: {
    /**
     * The value of the textarea (for v-model).
     */
    modelValue: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(l) {
    const e = a("uluFormFieldAttrs", null), u = n(() => e ? e.value : {});
    return (o, t) => (s(), m("textarea", d(u.value, {
      value: l.modelValue,
      onInput: t[0] || (t[0] = (r) => o.$emit("update:modelValue", r.target.value))
    }), null, 16, p));
  }
};
export {
  c as default
};
