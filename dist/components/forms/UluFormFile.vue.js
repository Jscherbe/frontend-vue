import { inject as s, computed as c, createElementBlock as u, openBlock as a, mergeProps as m } from "vue";
const p = ["multiple"], d = {
  __name: "UluFormFile",
  props: {
    /**
     * If true, allows multiple file selection.
     */
    multiple: Boolean
  },
  emits: ["file-change"],
  setup(l, { emit: n }) {
    const o = n, t = s("uluFormFieldAttrs", null), i = c(() => t ? { ...t.value } : {}), r = (e) => {
      o("file-change", e.target.files);
    };
    return (e, f) => (a(), u("input", m({ type: "file" }, i.value, {
      multiple: l.multiple,
      onChange: r
    }), null, 16, p));
  }
};
export {
  d as default
};
