import { inject as u, computed as c, createElementBlock as a, openBlock as d, mergeProps as m } from "vue";
import { checkDeprecatedProps as p } from "../../utils/props.js";
const s = ["checked"], f = {
  __name: "UluFormCheckbox",
  props: {
    /**
     * The value of the checkbox (for v-model).
     */
    modelValue: Boolean,
    /**
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: String,
    /**
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  },
  emits: ["update:modelValue"],
  setup(o) {
    p(o, ["label", "required"], (e) => {
      console.warn(`[@ulu/frontend-vue] UluFormCheckbox: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const t = u("uluFormFieldAttrs", null), l = c(() => t ? t.value : {});
    return (e, r) => (d(), a("input", m({ type: "checkbox" }, l.value, {
      checked: o.modelValue,
      onChange: r[0] || (r[0] = (n) => e.$emit("update:modelValue", n.target.checked))
    }), null, 16, s));
  }
};
export {
  f as default
};
