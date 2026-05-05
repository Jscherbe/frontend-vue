import { inject as u, computed as n, createElementBlock as d, openBlock as m, mergeProps as p } from "vue";
import { checkDeprecatedProps as s } from "../../utils/props.js";
const i = ["value"], b = {
  __name: "UluFormTextarea",
  props: {
    /**
     * The value of the textarea (for v-model).
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
      console.warn(`[@ulu/frontend-vue] UluFormTextarea: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const l = u("uluFormFieldAttrs", null), o = n(() => l ? l.value : {});
    return (e, r) => (m(), d("textarea", p(o.value, {
      value: t.modelValue,
      onInput: r[0] || (r[0] = (a) => e.$emit("update:modelValue", a.target.value))
    }), null, 16, i));
  }
};
export {
  b as default
};
