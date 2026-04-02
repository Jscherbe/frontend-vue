import { useSlots as R, computed as r, ref as f, createBlock as k, openBlock as a, resolveDynamicComponent as z, normalizeStyle as V, normalizeClass as h, unref as n, withCtx as S, createElementVNode as $, createElementBlock as m, createCommentVNode as g, renderSlot as i, createTextVNode as C, toDisplayString as x, createVNode as I, normalizeProps as q, guardReactiveProps as L } from "vue";
import { RouterLink as B } from "vue-router";
import { useModifiers as F } from "../../composables/useModifiers.js";
import { refToElement as G } from "../../utils/dom.js";
import { warnDeprecatedProp as O } from "../../utils/props.js";
import J from "./UluImage.vue.js";
const K = { class: "card__body" }, Q = { class: "card__main" }, W = ["href", "target"], X = {
  key: 0,
  class: "card__aside"
}, Y = {
  key: 1,
  class: "card__footer"
}, oe = {
  __name: "UluCard",
  props: {
    /**
     * Specify card element, unless to or href are used which will use 'a' or 'router-link'
     * - Other than changing to more appropriate element (ie 'li' if in list for example), this can 
     *   be used to set the card to a button to attach your own click handlers to
     */
    cardElement: {
      type: String,
      default: "article"
    },
    /**
     * Text for title if not using slot
     */
    title: String,
    /**
     * Element to use for title
     */
    titleElement: {
      type: String,
      default: "h3"
    },
    /**
     * Title will be router link
     */
    titleTo: [String, Object],
    /**
     * Will make title a link to href
     */
    titleHref: String,
    /**
     * When using href this will set title link's target attribute
     */
    titleTarget: String,
    /**
     * If set the entire card will be router link
     * - Do not us in combination with titleTo or titleHref
     */
    to: [String, Object],
    /**
     * If set the entire card will be a link to href
     * - Do not us in combination with titleTo or titleHref
     */
    href: String,
    /**
     * When using href this will set link's target attribute
     */
    target: String,
    /**
     * Classes with class bindings for different elements including ({ title, image })
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Whether to proxy clicks of non-interactive elements (making whole card clickable).
     * This is for accessibility, allowing a non-link card to have a primary action.
     * The proxy action is determined in the following order:
     * 1. If the title has a link (`titleTo` or `titleHref`), it will proxy the click to the title's link.
     * 2. If not, it will look for an element with the `data-ulu-card-proxy-target` attribute within the card's slots and click it.
     * 3. If no proxy target is found, it will emit a `proxy-click` event.
     * Note: This should not be used with the `to` or `href` props.
     */
    proxyClick: Boolean,
    /**
     * Options to be merged for proxy click settings ({ preventSelector, preventSelectionDuration })
     */
    proxyClickOptions: {
      type: Object,
      default: () => ({})
    },
    /**
     * Unified image prop configuration passed to UluImage. Can be a string (src) or an object matching UluImage props.
     */
    image: [String, Object],
    /**
     * This is deprecated and will be removed in future version use "image" prop or image slot
     * @deprecated Use `image` instead.
     */
    imageSrc: String,
    /**
     * This is deprecated and will be removed in future version use "image" prop or image slot
     * @deprecated Use `image` (as an object with `alt`) instead.
     */
    imageAlt: String,
    /**
     * If true image will use icon modifier (displays for image adjusts for icon vs full image)
     */
    imageIcon: Boolean,
    /**
     * Horizontal card layout
     */
    horizontal: Boolean,
    /**
     * Horizontal centered card layout
     */
    horizontalCenter: Boolean,
    /**
     * Overlay card layout
     */
    overlay: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String or Array of Strings
     */
    modifiers: [Array, String]
  },
  emits: ["proxy-click"],
  setup(t, { emit: p }) {
    const e = t, H = p, s = R();
    e.proxyClick && (e.to || e.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (e.titleTo || e.titleHref) && (e.to || e.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'."), O("UluCard", e, "imageSrc", "image"), O("UluCard", e, "imageAlt", "image");
    const b = r(() => e.image ? typeof e.image == "string" ? { src: e.image } : e.image : e.imageSrc ? {
      src: e.imageSrc,
      alt: e.imageAlt || ""
    } : null), T = f(null), y = f(null), { resolvedModifiers: M } = F({ props: e, baseClass: "card" }), w = f(null), c = f(!1), u = r(() => e.proxyClick && !e.to && !e.href), E = r(() => u.value && (e.titleTo || e.titleHref)), U = r(() => u.value && !E.value), v = r(() => u.value || null), P = r(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...e.proxyClickOptions
    })), j = r(() => u.value ? "pointer" : null), D = r(() => e.to ? B : e.href ? "a" : e.cardElement);
    function A({ target: l, timeStamp: d }) {
      if (!v.value) return;
      const { selectorPrevent: o } = P.value;
      c.value = !1, l.closest(o) || (c.value = !0, w.value = d);
    }
    function N({ timeStamp: l }) {
      if (!v.value || !c.value) return;
      const { mousedownDurationPrevent: d } = P.value;
      if (l - w.value < d) {
        if (E.value) {
          const o = G(y.value);
          o ? o.click() : console.warn("Unable to resolve title link ref");
        } else if (U.value) {
          const o = T.value?.querySelector("[data-ulu-card-proxy-target]");
          o ? o.click() : H("proxy-click");
        }
      }
      c.value = !1;
    }
    return (l, d) => (a(), k(z(D.value), {
      ref_key: "cardRoot",
      ref: T,
      class: h(["card", [
        {
          "card--horizontal": t.horizontal || t.horizontalCenter,
          "card--horizontal-center": t.horizontalCenter,
          "card--overlay": t.overlay
        },
        n(M)
      ]]),
      onMousedown: A,
      onMouseup: N,
      style: V({ cursor: j.value }),
      target: t.target,
      to: t.to,
      href: t.href,
      "data-ulu-proxy-click-init": v.value
    }, {
      default: S(() => [
        $("div", K, [
          $("div", Q, [
            t.title || n(s).title ? (a(), k(z(t.titleElement), {
              key: 0,
              class: h(["card__title", t.classes.title])
            }, {
              default: S(() => [
                t.titleTo ? (a(), k(n(B), {
                  key: 0,
                  class: "card__title-link",
                  to: t.titleTo,
                  ref_key: "link",
                  ref: y
                }, {
                  default: S(() => [
                    i(l.$slots, "title", {}, () => [
                      C(x(t.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : t.titleHref ? (a(), m("a", {
                  key: 1,
                  class: "card__title-link",
                  href: t.titleHref,
                  target: t.titleTarget,
                  ref_key: "link",
                  ref: y
                }, [
                  i(l.$slots, "title", {}, () => [
                    C(x(t.title), 1)
                  ])
                ], 8, W)) : i(l.$slots, "title", { key: 2 }, () => [
                  C(x(t.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : g("", !0),
            i(l.$slots, "body")
          ]),
          n(s).aside ? (a(), m("div", X, [
            i(l.$slots, "aside")
          ])) : g("", !0)
        ]),
        n(s).image || b.value ? (a(), m("div", {
          key: 0,
          class: h(["card__image", [
            { "card__image--icon": t.imageIcon },
            t.classes.image
          ]])
        }, [
          i(l.$slots, "image", {}, () => [
            I(J, q(L(b.value)), null, 16)
          ])
        ], 2)) : g("", !0),
        n(s).footer ? (a(), m("div", Y, [
          i(l.$slots, "footer")
        ])) : g("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
};
export {
  oe as default
};
