import { computed as c, createBlock as k, openBlock as l, resolveDynamicComponent as m, normalizeClass as o, withCtx as g, createElementVNode as h, createElementBlock as i, renderSlot as f, createCommentVNode as b, toDisplayString as r } from "vue";
import { RouterLink as y } from "vue-router";
const S = ["aria-hidden"], B = {
  key: 2,
  class: "hidden-visually"
}, x = {
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
    href: String
  },
  setup(e) {
    const t = e, s = c(() => !!(t.to || t.click)), d = c(() => {
      const { click: n, to: a, href: u } = t;
      return n ? "button" : a ? y : u ? "a" : "span";
    });
    return (n, a) => (l(), k(m(d.value), {
      class: o(["badge", [
        e.size ? `badge--${e.size}` : null,
        e.type ? `badge--${e.type}` : null,
        { "badge--clickable": s.value }
      ]]),
      to: e.to,
      href: e.href,
      onClick: e.click
    }, {
      default: g(() => [
        h("span", {
          class: o(["badge__inner", { "skeleton__background-color": e.skeleton }])
        }, [
          e.text ? (l(), i("span", {
            key: 0,
            "aria-hidden": e.alt ? "true" : null
          }, r(e.text), 9, S)) : f(n.$slots, "default", { key: 1 }),
          e.alt ? (l(), i("span", B, r(e.alt), 1)) : b("", !0)
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "to", "href", "onClick"]));
  }
};
export {
  x as default
};
