import { computed as i, createBlock as a, openBlock as o, normalizeClass as d, unref as m, withCtx as f, renderSlot as l, createCommentVNode as r, createElementBlock as g, createTextVNode as y, toDisplayString as B } from "vue";
import b from "../utils/UluAction.vue.js";
import c from "./UluIcon.vue.js";
import { useModifiers as S } from "../../composables/useModifiers.js";
import { checkDeprecatedProps as h } from "../../utils/props.js";
const k = { key: 1 }, C = {
  __name: "UluButton",
  props: {
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons don't use this prop, use before or after slots with correct classes (ie .button__icon)
     */
    icon: [String, Array],
    /**
     * If passing an icon (and not using iconOnly) this determines if the icon is before or after (default) the text
     */
    iconBefore: Boolean,
    /**
     * Button style for only icon
     */
    iconOnly: Boolean,
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: [String, Object],
    /**
     * Sets the button to a link with this href
     */
    href: String,
    /**
     * Set a value for target attribute when button is a link
     */
    target: String,
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: [Boolean, String],
    /**
     * @deprecated Use `ariaLabel` instead. For icon only buttons or buttons that need an explicit label
     */
    alt: String,
    /**
     * For icon only buttons or buttons that need an explicit aria-label
     */
    ariaLabel: String,
    /**
     * If not using slot this sets the buttons text via prop
     */
    text: String,
    /**
     * Pass any sizes setup for button (ie. small, large, etc)
     */
    size: String,
    /**
     * Preset to set primary style (needs to be a button style in ulu scss)
     */
    primary: Boolean,
    /**
     * Preset to set secondary style (needs to be a button style in ulu scss)
     */
    secondary: Boolean,
    /**
     * Preset to set small size (use "size" for any sizes)
     */
    small: Boolean,
    /**
     * Preset to set large size (use "size" for any sizes)
     */
    large: Boolean,
    /**
     * Preset to set outline style button (needs to be a button style in ulu scss)
     */
    outline: Boolean,
    /**
     * Preset to set transparent style button (needs to be a button style in ulu scss)
     */
    transparent: Boolean,
    /**
     * Add no-margin utility
     */
    noMargin: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array],
    /**
     * Button type (e.g. 'submit', 'reset', 'button').
     */
    type: String
  },
  setup(e) {
    const n = e;
    h(n, ["alt"], (t) => {
      console.warn(`[@ulu/frontend-vue] UluButton: The "${t}" prop is deprecated. Please use "ariaLabel" instead.`);
    });
    const { resolvedModifiers: s } = S({
      props: n,
      baseClass: "button",
      internal: i(() => ({
        transparent: n.transparent,
        primary: n.primary,
        secondary: n.secondary,
        outline: n.outline,
        small: n.small,
        large: n.large,
        icon: n.iconOnly,
        [n.size]: n.size
      }))
    }), u = i(() => {
      const t = n.ariaLabel || n.alt || n.iconOnly && n.text;
      return t || null;
    });
    return (t, O) => (o(), a(b, {
      to: e.to,
      href: e.href,
      target: e.target,
      download: e.download,
      type: e.type,
      class: d(["button", [
        {
          "no-margin": e.noMargin
        },
        m(s)
      ]]),
      "aria-label": u.value
    }, {
      default: f(() => [
        l(t.$slots, "before"),
        e.icon && (e.iconBefore || e.iconOnly) ? (o(), a(c, {
          key: 0,
          icon: e.icon,
          class: "button__icon"
        }, null, 8, ["icon"])) : r("", !0),
        (t.$slots.default || e.text) && !e.iconOnly ? (o(), g("span", k, [
          l(t.$slots, "default", {}, () => [
            y(B(e.text), 1)
          ])
        ])) : r("", !0),
        e.icon && !e.iconBefore && !e.iconOnly ? (o(), a(c, {
          key: 2,
          icon: e.icon,
          class: "button__icon"
        }, null, 8, ["icon"])) : r("", !0),
        l(t.$slots, "after")
      ]),
      _: 3
    }, 8, ["to", "href", "target", "download", "type", "class", "aria-label"]));
  }
};
export {
  C as default
};
