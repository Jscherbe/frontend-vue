import { createElementBlock as o, openBlock as t, normalizeClass as i, unref as c, createBlock as s, createCommentVNode as l, renderSlot as m, createElementVNode as u, toDisplayString as g } from "vue";
import f from "./UluIcon.vue.js";
import { useModifiers as d } from "../../composables/useModifiers.js";
const B = {
  __name: "UluTag",
  props: {
    /**
     * Type (corresponds with styles setup for tag in scss module)
     */
    type: [String],
    /**
     * Size (corresponds with sizes setup for tag in scss module)
     */
    size: String,
    /**
     * Use counter style (for numbers, etc)
     */
    counter: Boolean,
    /**
     * Text for tag, or use slot
     */
    text: [String, Number],
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons use slot instead
     */
    icon: [String, Array],
    /**
     * Modifiers for tag class
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const n = e, { resolvedModifiers: r } = d({ props: n, baseClass: "tag" });
    return (a, y) => (t(), o("span", {
      class: i(["tag", [
        {
          "tag--counter": e.counter,
          [`tag--${e.size}`]: e.size,
          [`tag--${e.type}`]: e.type
        },
        c(r)
      ]])
    }, [
      e.icon ? (t(), s(f, {
        key: 0,
        icon: e.icon,
        spaced: ""
      }, null, 8, ["icon"])) : l("", !0),
      m(a.$slots, "default", {}, () => [
        u("span", null, g(e.text), 1)
      ])
    ], 2));
  }
};
export {
  B as default
};
