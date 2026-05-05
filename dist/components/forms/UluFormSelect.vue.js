import { inject as i, computed as c, createElementBlock as l, openBlock as o, mergeProps as m, createCommentVNode as p, toDisplayString as u, Fragment as v, renderList as f } from "vue";
import { checkDeprecatedProps as h } from "../../utils/props.js";
const g = ["value"], b = {
  key: 0,
  disabled: "",
  value: ""
}, y = ["value"], A = {
  __name: "UluFormSelect",
  props: {
    /**
     * The value of the select input (for v-model).
     */
    modelValue: [String, Number, Array],
    /**
     * An array of options for the select input. Each option should be an object with `value` and `text` properties.
     */
    options: Array,
    /**
     * The text for the default disabled option. Pass false to hide it.
     */
    placeholder: {
      type: [String, Boolean],
      default: "Please select one"
    },
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
  setup(e) {
    h(e, ["label", "labelHidden", "required"], (r) => {
      console.warn(`[@ulu/frontend-vue] UluFormSelect: The "${r}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const a = i("uluFormFieldAttrs", null), d = c(() => a ? a.value : {});
    return (r, n) => (o(), l("select", m(d.value, {
      value: e.modelValue,
      onInput: n[0] || (n[0] = (t) => r.$emit("update:modelValue", t.target.value))
    }), [
      e.placeholder !== !1 ? (o(), l("option", b, u(e.placeholder || "Please select one"), 1)) : p("", !0),
      (o(!0), l(v, null, f(e.options, (t, s) => (o(), l("option", {
        key: s,
        value: t.value
      }, u(t.text), 9, y))), 128))
    ], 16, g));
  }
};
export {
  A as default
};
