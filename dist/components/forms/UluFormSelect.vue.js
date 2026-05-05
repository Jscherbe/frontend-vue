import { inject as i, computed as c, createElementBlock as l, openBlock as o, mergeProps as m, createCommentVNode as p, toDisplayString as n, Fragment as v, renderList as f } from "vue";
const g = ["value"], y = {
  key: 0,
  disabled: "",
  value: ""
}, h = ["value"], V = {
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
    }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const a = i("uluFormFieldAttrs", null), u = c(() => a ? a.value : {});
    return (s, r) => (o(), l("select", m(u.value, {
      value: e.modelValue,
      onInput: r[0] || (r[0] = (t) => s.$emit("update:modelValue", t.target.value))
    }), [
      e.placeholder !== !1 ? (o(), l("option", y, n(e.placeholder || "Please select one"), 1)) : p("", !0),
      (o(!0), l(v, null, f(e.options, (t, d) => (o(), l("option", {
        key: d,
        value: t.value
      }, n(t.text), 9, h))), 128))
    ], 16, g));
  }
};
export {
  V as default
};
