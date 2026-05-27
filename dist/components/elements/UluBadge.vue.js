import { computed as o, createBlock as m, openBlock as a, resolveDynamicComponent as f, normalizeClass as i, unref as g, withCtx as h, createElementVNode as y, createElementBlock as r, renderSlot as S, createCommentVNode as b, toDisplayString as c } from "vue";
import { RouterLink as C } from "vue-router";
import { useModifiers as v } from "../../composables/useModifiers.js";
const B = ["aria-hidden"], x = {
  key: 2,
  class: "hidden-visually"
}, E = {
  __name: "UluBadge",
  props: {
    /**
     * Whether to display a skeleton loading state.
     */
    skeleton: Boolean,
    /**
     * The size of the badge (e.g., 'small', 'large').
     */
    size: String,
    /**
     * The text content of the badge.
     */
    text: String,
    /**
     * Alt text for the badge, for accessibility.
     */
    alt: String,
    /**
     * The type or style of the badge (e.g., 'primary', 'secondary').
     */
    type: String,
    /**
     * A function to call when the badge is clicked. Renders as a <button>.
     */
    click: Function,
    /**
     * A Vue Router link location. Renders as a <router-link>.
     */
    to: [Object, String],
    /**
     * A URL. Renders as a standard <a> tag.
     */
    href: String,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const t = e, s = o(() => !!(t.to || t.click)), { resolvedModifiers: d } = v({
      props: t,
      baseClass: "badge",
      internal: o(() => ({
        [t.size]: t.size,
        [t.type]: t.type,
        clickable: s.value
      }))
    }), u = o(() => {
      const { click: n, to: l, href: k } = t;
      return n ? "button" : l ? C : k ? "a" : "span";
    });
    return (n, l) => (a(), m(f(u.value), {
      class: i(["badge", g(d)]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: h(() => [
        y("span", {
          class: i(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (a(), r("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, c(e.text), 9, B)) : S(n.$slots, "default", { key: 1 }),
          e.alt ? (a(), r("span", x, c(e.alt), 1)) : b("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
};
export {
  E as default
};
