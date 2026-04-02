import { useSlots as V, computed as o, ref as f, createBlock as k, openBlock as a, resolveDynamicComponent as P, normalizeStyle as p, normalizeClass as h, unref as n, withCtx as S, createElementVNode as $, createElementBlock as m, createCommentVNode as y, renderSlot as i, createTextVNode as C, toDisplayString as x, createVNode as A, normalizeProps as I, guardReactiveProps as q } from "vue";
import { RouterLink as B } from "vue-router";
import { useModifiers as L } from "../../composables/useModifiers.js";
import { refToElement as F } from "../../utils/dom.js";
import G from "./UluImage.vue.js";
const J = { class: "card__body" }, K = { class: "card__main" }, Q = ["href", "target"], W = {
  key: 0,
  class: "card__aside"
}, X = {
  key: 1,
  class: "card__footer"
}, le = {
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
     * Advanced configuration for the underlying `<UluImage>` component.
     * Accepts a full configuration object (e.g., for lazy loading, srcset, etc.).
     */
    image: Object,
    /**
     * Convenience prop for quickly setting the image source. 
     * For advanced image configurations, use the `image` prop or `#image` slot instead.
     */
    imageSrc: String,
    /**
     * The alt text for the image when using the `imageSrc` convenience prop.
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
  setup(t, { emit: O }) {
    const e = t, H = O, s = V();
    e.proxyClick && (e.to || e.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (e.titleTo || e.titleHref) && (e.to || e.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const b = o(() => e.image ? e.image : e.imageSrc ? {
      src: e.imageSrc,
      alt: e.imageAlt || ""
    } : null), T = f(null), v = f(null), { resolvedModifiers: M } = L({ props: e, baseClass: "card" }), E = f(null), c = f(!1), u = o(() => e.proxyClick && !e.to && !e.href), w = o(() => u.value && (e.titleTo || e.titleHref)), j = o(() => u.value && !w.value), g = o(() => u.value || null), z = o(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...e.proxyClickOptions
    })), D = o(() => u.value ? "pointer" : null), N = o(() => e.to ? B : e.href ? "a" : e.cardElement);
    function R({ target: l, timeStamp: d }) {
      if (!g.value) return;
      const { selectorPrevent: r } = z.value;
      c.value = !1, l.closest(r) || (c.value = !0, E.value = d);
    }
    function U({ timeStamp: l }) {
      if (!g.value || !c.value) return;
      const { mousedownDurationPrevent: d } = z.value;
      if (l - E.value < d) {
        if (w.value) {
          const r = F(v.value);
          r ? r.click() : console.warn("Unable to resolve title link ref");
        } else if (j.value) {
          const r = T.value?.querySelector("[data-ulu-card-proxy-target]");
          r ? r.click() : H("proxy-click");
        }
      }
      c.value = !1;
    }
    return (l, d) => (a(), k(P(N.value), {
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
      onMousedown: R,
      onMouseup: U,
      style: p({ cursor: D.value }),
      target: t.target,
      to: t.to,
      href: t.href,
      "data-ulu-proxy-click-init": g.value
    }, {
      default: S(() => [
        $("div", J, [
          $("div", K, [
            t.title || n(s).title ? (a(), k(P(t.titleElement), {
              key: 0,
              class: h(["card__title", t.classes.title])
            }, {
              default: S(() => [
                t.titleTo ? (a(), k(n(B), {
                  key: 0,
                  class: "card__title-link",
                  to: t.titleTo,
                  ref_key: "link",
                  ref: v
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
                  ref: v
                }, [
                  i(l.$slots, "title", {}, () => [
                    C(x(t.title), 1)
                  ])
                ], 8, Q)) : i(l.$slots, "title", { key: 2 }, () => [
                  C(x(t.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : y("", !0),
            i(l.$slots, "body")
          ]),
          n(s).aside ? (a(), m("div", W, [
            i(l.$slots, "aside")
          ])) : y("", !0)
        ]),
        n(s).image || b.value ? (a(), m("div", {
          key: 0,
          class: h(["card__image", [
            { "card__image--icon": t.imageIcon },
            t.classes.image
          ]])
        }, [
          i(l.$slots, "image", {}, () => [
            A(G, I(q(b.value)), null, 16)
          ])
        ], 2)) : y("", !0),
        n(s).footer ? (a(), m("div", X, [
          i(l.$slots, "footer")
        ])) : y("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
};
export {
  le as default
};
