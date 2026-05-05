import { inject as u, computed as a, createElementBlock as n, openBlock as d, mergeProps as m } from "vue";
import { checkDeprecatedProps as i } from "../../utils/props.js";
const c = ["value", "checked"], h = {
  __name: "UluFormRadio",
  props: {
    /**
     * The value of the selected radio button in the group (for v-model).
     */
    modelValue: [String, Number, Boolean],
    /**
     * The value of this radio button.
     */
    value: [String, Number, Boolean],
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
  setup(e) {
    i(e, ["label", "required"], (t) => {
      console.warn(`[@ulu/frontend-vue] UluFormRadio: The "${t}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const l = u("uluFormFieldAttrs", null), r = a(() => l ? l.value : {});
    return (t, o) => (d(), n("input", m({ type: "radio" }, r.value, {
      value: e.value,
      checked: e.modelValue === e.value,
      onChange: o[0] || (o[0] = (p) => t.$emit("update:modelValue", e.value))
    }), null, 16, c));
  }
};
export {
  h as default
};
