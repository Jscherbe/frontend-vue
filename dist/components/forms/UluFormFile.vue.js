import { inject as u, computed as s, createElementBlock as c, openBlock as m, mergeProps as p } from "vue";
import { checkDeprecatedProps as d } from "../../utils/props.js";
const f = ["multiple"], B = {
  __name: "UluFormFile",
  props: {
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean,
    /**
     * @deprecated Use <UluFormItem label="..."> instead.
     */
    label: {
      type: String,
      default: "Select File"
    },
    /**
     * @deprecated Use <UluFormItem labelHidden> instead.
     */
    labelHidden: Boolean,
    /**
     * If true, default classes will not be applied.
     */
    noClasses: Boolean,
    /**
     * @deprecated Use <UluFormItem required> instead.
     */
    required: Boolean
  },
  emits: ["file-change"],
  setup(t, { emit: r }) {
    const l = t, n = r;
    d(l, ["label", "labelHidden", "required"], (e) => {
      console.warn(`[@ulu/frontend-vue] UluFormFile: The "${e}" prop is deprecated. Please move it to the parent <UluFormItem>.`);
    });
    const o = u("uluFormFieldAttrs", null), i = s(() => {
      const e = o ? { ...o.value } : {};
      return l.required && (e.required = !0), e;
    }), a = (e) => {
      n("file-change", e.target.files);
    };
    return (e, h) => (m(), c("input", p({ type: "file" }, i.value, {
      multiple: t.multiple,
      onChange: a
    }), null, 16, f));
  }
};
export {
  B as default
};
