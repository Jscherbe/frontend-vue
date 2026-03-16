import { computed as u, createBlock as l, openBlock as o, normalizeClass as f, unref as m, withCtx as r, createCommentVNode as i, createElementBlock as b, resolveDynamicComponent as g, renderSlot as a, createTextVNode as s, toDisplayString as d } from "vue";
import y from "../utils/UluAction.vue.js";
import h from "./UluIcon.vue.js";
import { useModifiers as S } from "../../composables/useModifiers.js";
const v = {
  key: 1,
  class: "button-verbose__body"
}, E = {
  __name: "UluButtonVerbose",
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
  setup(t) {
    const n = t, { resolvedModifiers: c } = S({
      props: n,
      baseClass: "button-verbose",
      internal: u(() => ({
        inline: n.inline,
        "full-width": n.fullWidth
      }))
    });
    return (e, B) => (o(), l(y, {
      to: t.to,
      href: t.href,
      target: t.target,
      download: t.download,
      class: f(["button-verbose", m(c)])
    }, {
      default: r(() => [
        e.$slots.title || t.title ? (o(), l(g(t.titleElement), {
          key: 0,
          class: "button-verbose__title"
        }, {
          default: r(() => [
            a(e.$slots, "title", {}, () => [
              s(d(t.title), 1)
            ])
          ]),
          _: 3
        })) : i("", !0),
        e.$slots.default || t.body ? (o(), b("span", v, [
          a(e.$slots, "default", {}, () => [
            s(d(t.body), 1)
          ])
        ])) : i("", !0),
        t.icon ? (o(), l(h, {
          key: 2,
          icon: t.icon,
          class: "button-verbose__icon",
          "aria-hidden": "true"
        }, null, 8, ["icon"])) : i("", !0)
      ]),
      _: 3
    }, 8, ["to", "href", "target", "download", "class"]));
  }
};
export {
  E as default
};
