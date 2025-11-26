import { RouterLink as _ } from "vue-router";
import g from "./UluIcon.vue.js";
import { useModifiers as h } from "../../composables/useModifiers.js";
import { resolveComponent as y, createBlock as l, openBlock as i, resolveDynamicComponent as u, mergeProps as v, withCtx as c, createCommentVNode as s, createElementBlock as S, renderSlot as d, createTextVNode as f, toDisplayString as m } from "vue";
import B from "../../_virtual/_plugin-vue_export-helper.js";
const k = {
  name: "UluButtonVerbose",
  components: {
    UluIcon: g
  },
  props: {
    /**
     * The title of the button. Can also be passed via slot.
     */
    title: String,
    /**
     * Optional element to use for title
     */
    titleElement: {
      type: String,
      default: "strong"
    },
    /**
     * The body text of the button. Can also be passed via slot.
     */
    body: String,
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     */
    icon: [String, Array],
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
     * Preset to set inline style
     */
    inline: Boolean,
    /**
     * Preset to set full-width style
     */
    fullWidth: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const { resolvedModifiers: o } = h({ props: e, baseClass: "button-verbose" });
    return { resolvedModifiers: o };
  },
  computed: {
    element() {
      return this.to ? _ : this.href ? "a" : "button";
    },
    attrs() {
      const { to: e, href: o, download: t, target: n } = this, r = e ? { to: e } : o ? { href: o } : {};
      return o && (n && (r.target = n), t && (r.download = typeof t == "string" ? t : !0)), r;
    }
  }
}, w = {
  key: 1,
  class: "button-verbose__body"
};
function C(e, o, t, n, r, a) {
  const b = y("UluIcon");
  return i(), l(u(a.element), v({
    class: ["button-verbose", [
      {
        "button-verbose--inline": t.inline,
        "button-verbose--full-width": t.fullWidth
      },
      n.resolvedModifiers
    ]]
  }, a.attrs), {
    default: c(() => [
      e.$slots.title || t.title ? (i(), l(u(t.titleElement), {
        key: 0,
        class: "button-verbose__title"
      }, {
        default: c(() => [
          d(e.$slots, "title", {}, () => [
            f(m(t.title), 1)
          ])
        ]),
        _: 3
      })) : s("", !0),
      e.$slots.default || t.body ? (i(), S("span", w, [
        d(e.$slots, "default", {}, () => [
          f(m(t.body), 1)
        ])
      ])) : s("", !0),
      t.icon ? (i(), l(b, {
        key: 2,
        icon: t.icon,
        class: "button-verbose__icon",
        "aria-hidden": "true"
      }, null, 8, ["icon"])) : s("", !0)
    ]),
    _: 3
  }, 16, ["class"]);
}
const M = /* @__PURE__ */ B(k, [["render", C]]);
export {
  M as default
};
