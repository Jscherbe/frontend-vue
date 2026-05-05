import { inject as n, computed as r, createElementBlock as a, openBlock as d, mergeProps as m } from "vue";
const s = ["checked"], i = {
  __name: "UluFormCheckbox",
  props: {
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean
  },
  emits: ["update:modelValue"],
  setup(o) {
    const e = n("uluFormFieldAttrs", null), l = r(() => e ? e.value : {});
    return (u, t) => (d(), a("input", m({ type: "checkbox" }, l.value, {
      checked: o.modelValue,
      onChange: t[0] || (t[0] = (c) => u.$emit("update:modelValue", c.target.checked))
    }), null, 16, s));
  }
};
export {
  i as default
};
