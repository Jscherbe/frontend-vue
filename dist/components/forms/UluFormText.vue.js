import { inject as n, computed as a, createElementBlock as d, openBlock as m, mergeProps as p } from "vue";
import { checkDeprecatedProps as s } from "../../utils/props.js";
const i = ["value"], b = {
  __name: "UluFormText",
  props: {
    /**
     * The value of the text input (for v-model).
     */
    modelValue: [String, Number],
    /**
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: String,
    /**
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(t) {
    s(t, ["label", "labelHidden", "required"], (e) => {
      console.warn(`[@ulu/frontend-vue] UluFormText: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const l = n("uluFormFieldAttrs", null), r = a(() => l ? l.value : {});
    return (e, o) => (m(), d("input", p({ type: "text" }, r.value, {
      value: t.modelValue,
      onInput: o[0] || (o[0] = (u) => e.$emit("update:modelValue", u.target.value))
    }), null, 16, i));
  }
};
export {
  b as default
};
