import { inject as a, computed as c, createElementBlock as s, openBlock as m, mergeProps as p } from "vue";
import { checkDeprecatedProps as d } from "../../utils/props.js";
const f = ["multiple"], _ = {
  __name: "UluFormFile",
  props: {
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * Deprecated: Use `<UluFormItem label="...">` instead.
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * Deprecated: Use `<UluFormItem labelHidden>` instead.
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * Deprecated: Use <UluFormItem required> instead.
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  },
  emits: ["file-change"],
  setup(t, { emit: o }) {
    const l = t, n = o;
    d(l, ["label", "labelHidden", "required"], (e) => {
      console.warn(`[@ulu/frontend-vue] UluFormFile: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const r = a("uluFormFieldAttrs", null), i = c(() => {
      const e = r ? { ...r.value } : {};
      return l.required && (e.required = !0), e;
    }), u = (e) => {
      n("file-change", e.target.files);
    };
    return (e, h) => (m(), s("input", p({ type: "file" }, i.value, {
      multiple: t.multiple,
      onChange: u
    }), null, 16, f));
  }
};
export {
  _ as default
};
