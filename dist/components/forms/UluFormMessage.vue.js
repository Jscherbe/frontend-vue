import { createElementBlock as n, openBlock as r, normalizeClass as t, createBlock as a, createCommentVNode as m, renderSlot as l } from "vue";
import c from "../elements/UluIcon.vue.js";
const u = {
  __name: "UluFormMessage",
  props: {
    /**
     * If true, the message will be styled as a warning.
     */
    warning: Boolean,
    /**
     * If true, the message will be styled as an error.
     */
    error: Boolean
  },
  setup(e) {
    return (o, i) => (r(), n("p", {
      class: t(["form-theme__description", {
        "form-theme__error": e.error,
        "form-theme__warning": e.warning
      }])
    }, [
      e.error || e.warning ? (r(), a(c, {
        key: 0,
        icon: `type:${e.error ? "error" : "warning"}`
      }, null, 8, ["icon"])) : m("", !0),
      l(o.$slots, "default")
    ], 2));
  }
};
export {
  u as default
};
