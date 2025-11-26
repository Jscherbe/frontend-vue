import { RouterLink as m } from "vue-router";
import f from "./UluIcon.vue.js";
import { useModifiers as d } from "../../composables/useModifiers.js";
import { resolveComponent as b, createBlock as i, openBlock as l, resolveDynamicComponent as g, mergeProps as y, withCtx as B, renderSlot as s, createCommentVNode as c, createElementBlock as _, createTextVNode as h, toDisplayString as S } from "vue";
import k from "../../_virtual/_plugin-vue_export-helper.js";
const O = {
  name: "UluButton",
  components: {
    UluIcon: f
  },
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
     * For icon only buttons or buttons that need an explicit label
     */
    alt: String,
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
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: n } = d({ props: e, baseClass: "button" });
    return { resolvedModifiers: n };
  },
  computed: {
    resolvedAriaLabel() {
      const e = this.alt || this.iconOnly && this.text;
      return e || null;
    },
    classes() {
      const e = [], { size: n } = this;
      return n && e.push(`button--${n}`), e;
    },
    element() {
      return this.to ? m : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: n, download: t, target: o } = this, r = e ? { to: e } : n ? { href: n } : {};
      return n && (o && (r.target = o), t && (r.download = typeof t == "string" ? t : !0)), r;
    }
  }
}, v = { key: 1 };
function x(e, n, t, o, r, a) {
  const u = b("UluIcon");
  return l(), i(g(a.element), y({
    class: ["button", [
      {
        "button--transparent": t.transparent,
        "button--primary": t.primary,
        "button--secondary": t.secondary,
        "button--outline": t.outline,
        "button--small": t.small,
        "button--large": t.large,
        "button--icon": t.iconOnly,
        "no-margin": t.noMargin
      },
      a.classes,
      o.resolvedModifiers
    ]]
  }, a.attrs, { "aria-label": a.resolvedAriaLabel }), {
    default: B(() => [
      s(e.$slots, "before"),
      t.icon && (t.iconBefore || t.iconOnly) ? (l(), i(u, {
        key: 0,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : c("", !0),
      (e.$slots.default || t.text) && !t.iconOnly ? (l(), _("span", v, [
        s(e.$slots, "default", {}, () => [
          h(S(t.text), 1)
        ])
      ])) : c("", !0),
      t.icon && !t.iconBefore && !t.iconOnly ? (l(), i(u, {
        key: 2,
        icon: t.icon,
        class: "button__icon"
      }, null, 8, ["icon"])) : c("", !0),
      s(e.$slots, "after")
    ]),
    _: 3
  }, 16, ["class", "aria-label"]);
}
const I = /* @__PURE__ */ k(O, [["render", x]]);
export {
  I as default
};
