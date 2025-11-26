import { useSlots as N, ref as f, computed as r, createBlock as k, openBlock as a, resolveDynamicComponent as B, normalizeStyle as R, normalizeClass as h, unref as n, withCtx as S, createElementVNode as C, createElementBlock as m, createCommentVNode as y, renderSlot as i, createTextVNode as x, toDisplayString as b } from "vue";
import { RouterLink as P } from "vue-router";
import { useModifiers as V } from "../../composables/useModifiers.js";
import { refToElement as I } from "../../utils/dom.js";
const q = { class: "card__body" }, L = { class: "card__main" }, F = ["href", "target"], G = {
  key: 0,
  class: "card__aside"
}, J = ["src", "alt"], K = {
  key: 1,
  class: "card__footer"
}, Z = {
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
     * Source of image
     */
    imageSrc: String,
    /**
     * Alt text for image
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
  setup(e, { emit: $ }) {
    const t = e, O = $, s = N();
    t.proxyClick && (t.to || t.href) && console.warn("UluCard: 'proxyClick' is ignored when 'to' or 'href' are present."), (t.titleTo || t.titleHref) && (t.to || t.href) && console.warn("UluCard: 'titleTo'/'titleHref' should not be used with 'to'/'href'.");
    const T = f(null), v = f(null), { resolvedModifiers: H } = V({ props: t, baseClass: "card" }), E = f(null), c = f(!1), u = r(() => t.proxyClick && !t.to && !t.href), w = r(() => u.value && (t.titleTo || t.titleHref)), M = r(() => u.value && !w.value), g = r(() => u.value || null), z = r(() => ({
      selectorPrevent: "input, select, textarea, button, a, [tabindex='-1']",
      mousedownDurationPrevent: 250,
      ...t.proxyClickOptions
    })), j = r(() => u.value ? "pointer" : null), D = r(() => t.to ? P : t.href ? "a" : t.cardElement);
    function U({ target: l, timeStamp: d }) {
      if (!g.value) return;
      const { selectorPrevent: o } = z.value;
      c.value = !1, l.closest(o) || (c.value = !0, E.value = d);
    }
    function A({ timeStamp: l }) {
      if (!g.value || !c.value) return;
      const { mousedownDurationPrevent: d } = z.value;
      if (l - E.value < d) {
        if (w.value) {
          const o = I(v.value);
          o ? o.click() : console.warn("Unable to resolve title link ref");
        } else if (M.value) {
          const o = T.value?.querySelector("[data-ulu-card-proxy-target]");
          o ? o.click() : O("proxy-click");
        }
      }
      c.value = !1;
    }
    return (l, d) => (a(), k(B(D.value), {
      ref_key: "cardRoot",
      ref: T,
      class: h(["card", [
        {
          "card--horizontal": e.horizontal || e.horizontalCenter,
          "card--horizontal-center": e.horizontalCenter,
          "card--overlay": e.overlay
        },
        n(H)
      ]]),
      onMousedown: U,
      onMouseup: A,
      style: R({ cursor: j.value }),
      target: e.target,
      to: e.to,
      href: e.href,
      "data-ulu-proxy-click-init": g.value
    }, {
      default: S(() => [
        C("div", q, [
          C("div", L, [
            e.title || n(s).title ? (a(), k(B(e.titleElement), {
              key: 0,
              class: h(["card__title", e.classes.title])
            }, {
              default: S(() => [
                e.titleTo ? (a(), k(n(P), {
                  key: 0,
                  class: "card__title-link",
                  to: e.titleTo,
                  ref_key: "link",
                  ref: v
                }, {
                  default: S(() => [
                    i(l.$slots, "title", {}, () => [
                      x(b(e.title), 1)
                    ])
                  ]),
                  _: 3
                }, 8, ["to"])) : e.titleHref ? (a(), m("a", {
                  key: 1,
                  class: "card__title-link",
                  href: e.titleHref,
                  target: e.titleTarget,
                  ref_key: "link",
                  ref: v
                }, [
                  i(l.$slots, "title", {}, () => [
                    x(b(e.title), 1)
                  ])
                ], 8, F)) : i(l.$slots, "title", { key: 2 }, () => [
                  x(b(e.title), 1)
                ])
              ]),
              _: 3
            }, 8, ["class"])) : y("", !0),
            i(l.$slots, "body")
          ]),
          n(s).aside ? (a(), m("div", G, [
            i(l.$slots, "aside")
          ])) : y("", !0)
        ]),
        n(s).image || e.imageSrc ? (a(), m("div", {
          key: 0,
          class: h(["card__image", [
            { "card__image--icon": e.imageIcon },
            e.classes.image
          ]])
        }, [
          i(l.$slots, "image", {}, () => [
            C("img", {
              src: e.imageSrc,
              alt: e.imageAlt
            }, null, 8, J)
          ])
        ], 2)) : y("", !0),
        n(s).footer ? (a(), m("div", K, [
          i(l.$slots, "footer")
        ])) : y("", !0)
      ]),
      _: 3
    }, 40, ["class", "style", "target", "to", "href", "data-ulu-proxy-click-init"]));
  }
};
export {
  Z as default
};
