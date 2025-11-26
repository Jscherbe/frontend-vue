import { computed as i, createElementBlock as o, openBlock as n, normalizeClass as a, unref as s } from "vue";
import { useModifiers as c } from "../../composables/useModifiers.js";
const d = {
  __name: "UluRule",
  props: {
    /**
     * Whether to use the actual <hr> vs superficial <div></div> for rule element
     */
    semantic: Boolean,
    /**
     * Use short modifier
     */
    short: Boolean,
    /**
     * Optional margin (keyword from your rule margins config in frontend)
     */
    margin: String,
    /**
     * Add light modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    light: Boolean,
    /**
     * Add large modifier (if set, usually exists, this is for convenience, use modifiers prop if you have custom naming)
     */
    large: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(r) {
    const e = r, t = i(() => ({
      short: e.short,
      light: e.light,
      large: e.large,
      [`margin-${e.margin}`]: e.margin
    })), { resolvedModifiers: l } = c({
      props: e,
      baseClass: "rule",
      internal: t
    });
    return (m, u) => r.semantic ? (n(), o("hr", {
      key: 0,
      class: a(["rule", s(l)])
    }, null, 2)) : (n(), o("div", {
      key: 1,
      class: a(["rule", s(l)])
    }, null, 2));
  }
};
export {
  d as default
};
