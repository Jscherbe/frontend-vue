import { ref as a, computed as et, watch as it, onMounted as lt, nextTick as z, onBeforeUnmount as ot, createElementBlock as y, openBlock as p, normalizeClass as L, unref as M, createElementVNode as d, createCommentVNode as G, Fragment as X, renderList as H, renderSlot as C, createVNode as J, toDisplayString as st } from "vue";
import { useModifiers as nt } from "../../composables/useModifiers.js";
import { newId as at } from "../../utils/dom.js";
import K from "./UluIcon.vue.js";
const rt = { class: "slider__control-context" }, ut = {
  class: "slider__track-crop",
  style: { overflow: "hidden" }
}, ct = ["id", "inert", "aria-live"], dt = ["id", "aria-label", "inert", "aria-hidden"], vt = {
  key: 0,
  class: "Slider__controls"
}, ft = { class: "Slider__controls-item Slider__controls-item--previous" }, mt = ["aria-controls", "disabled"], yt = { class: "Slider__controls-item Slider__controls-item--next" }, pt = ["aria-controls", "disabled"], _t = {
  key: 0,
  class: "Slider__nav"
}, bt = ["onClick", "aria-controls", "aria-label", "aria-current"], gt = { class: "hidden-visually" }, $t = {
  __name: "UluSlider",
  props: {
    /**
     * Array of slide items.
     */
    items: {
      type: Array,
      required: !0
    },
    /**
     * Transition type: 'slide', 'fade', or 'none'.
     */
    transition: {
      type: String,
      default: "slide",
      validator: (r) => ["slide", "fade", "none"].includes(r)
    },
    /**
     * Transition duration in milliseconds.
     */
    duration: {
      type: Number,
      default: 700
    },
    /**
     * Easing function for the transition.
     */
    timingFunction: {
      type: String,
      default: "ease-in-out"
    },
    /**
     * Enable infinite looping.
     */
    loop: {
      type: Boolean,
      default: !0
    },
    /**
     * Show dot navigation.
     */
    nav: {
      type: Boolean,
      default: !0
    },
    /**
     * Show previous/next controls.
     */
    controls: {
      type: Boolean,
      default: !0
    },
    /**
     * Autoplay duration in ms. If > 0, autoplay is enabled.
     */
    autoplay: {
      type: Number,
      default: 0
    },
    /**
     * Automatically switch to 'fade' transition if OS prefers reduced motion.
     */
    reduceMotionFallback: {
      type: Boolean,
      default: !0
    },
    /**
     * Setting for element.focus() when navigating to a specific slide.
     */
    focusOptions: {
      type: Object,
      default: () => ({
        preventScroll: !0,
        focusVisible: !1
      })
    },
    /**
     * Base class modifiers.
     */
    modifiers: [String, Array]
  },
  emits: ["change"],
  setup(r, { emit: Q }) {
    const o = r, W = Q, k = at("ulu-slider-track"), N = (t) => `${k}-slide-${t}`, h = a(null), u = a([]), s = a(0), _ = a(!1), R = a(!1), { resolvedModifiers: Y } = nt({ props: o, baseClass: "slider" }), A = et(() => o.transition === "none" ? "none" : o.reduceMotionFallback && R.value ? "fade" : o.transition), Z = (t, l) => {
      t && (u.value[l] = t);
    }, x = (t) => {
      if (!o.items || o.items.length === 0) return !1;
      const l = s.value === o.items.length - 1 ? 0 : s.value + 1, e = s.value === 0 ? o.items.length - 1 : s.value - 1;
      return t === l || t === e;
    }, S = a(null), T = () => {
      o.autoplay > 0 && ($(), S.value = setInterval(() => {
        D();
      }, o.autoplay));
    }, $ = () => {
      S.value && (clearInterval(S.value), S.value = null);
    }, O = () => $(), V = () => T();
    it(() => o.autoplay, () => {
      T();
    }), a(0), a(0), a(null), a([]), a(!1);
    const b = (t, l) => {
      u.value.forEach((e, i) => {
        e && (l ? e.style.visibility = "visible" : e.style.visibility = i === t ? "visible" : "hidden");
      });
    }, f = (t, l) => {
      const e = h.value;
      e && (e.style.transitionProperty = "transform", e.style.transitionDuration = `${l}ms`, e.style.transitionTimingFunction = o.timingFunction, e.style.transform = `translateX(-${t}px)`);
    }, I = (t, l, e) => {
      const i = u.value[t];
      i && (i.style.transitionProperty = "opacity", i.style.transitionDuration = `${e}ms`, i.style.transitionTimingFunction = o.timingFunction, i.style.opacity = l);
    }, g = (t, l) => {
      const e = u.value[t];
      e && (e.style.order = l);
    }, w = (t) => u.value[t]?.offsetLeft || 0, F = (t, l) => new Promise((e) => {
      if (l <= 0 || !t) {
        e();
        return;
      }
      let i = null, v = null;
      const c = () => {
        clearTimeout(i), clearTimeout(v), t.removeEventListener("transitionrun", m), t.removeEventListener("transitionend", c), t.removeEventListener("transitioncancel", c), e();
      }, m = () => {
        clearTimeout(i), v = setTimeout(c, l + 500);
      };
      t.addEventListener("transitionrun", m, { once: !0 }), t.addEventListener("transitionend", c, { once: !0 }), t.addEventListener("transitioncancel", c, { once: !0 }), i = setTimeout(c, l + 500);
    }), E = async (t, l = "nav") => {
      if (t === s.value || _.value || !o.items || o.items.length === 0) return;
      _.value = !0, $();
      const e = s.value, i = o.items.length, v = l === "previous", c = i - 1, m = t === 0 && e === c, B = t === c && e === 0, U = A.value;
      if (U === "slide") {
        let n = null, j = 1;
        e !== null && !m && !B && (j = Math.abs(e - t)), i < 3 ? m && !v ? n = e : B && (n = v ? t : e) : m ? n = e : B && (n = t), b(null, !0), n !== null && (g(n, "-1"), f(m ? 0 : w(e), 0));
        const q = o.duration * Math.min(j, i);
        h.value?.getBoundingClientRect(), f(w(t), q), await F(h.value, q), n !== null && (g(n, "0"), f(w(t), 0), await z(), h.value?.getBoundingClientRect()), b(t, !1);
      } else if (U === "fade") {
        const n = o.duration;
        b(null, !0), e !== null && (I(e, "0", n), await F(u.value[e], n), g(e, "0")), f(0, 0), g(t, "-1"), u.value[t]?.getBoundingClientRect(), I(t, "1", n), await F(u.value[t], n), b(t, !1);
      } else
        b(null, !0), e !== null && (g(e, "0"), I(e, "1", 0)), f(0, 0), g(t, "-1"), I(t, "1", 0), b(t, !1);
      if (s.value = t, _.value = !1, l !== "init") {
        const n = u.value[t];
        n && n.focus && n.focus(o.focusOptions), W("change", { index: t, item: o.items[t] });
      }
      T();
    }, P = (t) => {
      if (!o.items) return;
      const l = o.items.length;
      if (l === 0) return;
      const i = t === "next" ? s.value + 1 : s.value - 1;
      i > l - 1 ? o.loop && E(0, t) : i < 0 ? o.loop && E(l - 1, t) : E(i, t);
    }, D = () => P("next"), tt = () => P("previous");
    return lt(() => {
      typeof window < "u" && (R.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches), z(() => {
        const t = A.value === "slide";
        u.value.forEach((l, e) => {
          l && (l.style.visibility = e === s.value ? "visible" : "hidden", t ? (l.style.opacity = "1", l.style.order = "0") : (l.style.opacity = e === s.value ? "1" : "0", l.style.order = e === s.value ? "-1" : "0"));
        }), f(t ? w(s.value) : 0, 0), T();
      });
    }), ot(() => {
      $();
    }), (t, l) => (p(), y("div", {
      class: L(["slider", [M(Y), { "slider--transitioning": _.value }]]),
      onMouseenter: O,
      onMouseleave: V,
      onFocusin: O,
      onFocusout: V
    }, [
      d("div", rt, [
        d("div", ut, [
          d("ul", {
            class: "slider__track",
            id: M(k),
            ref_key: "trackRef",
            ref: h,
            style: { display: "flex", "list-style": "none", position: "relative", margin: "0", padding: "0" },
            inert: _.value,
            "aria-live": S.value ? "off" : "polite"
          }, [
            (p(!0), y(X, null, H(r.items, (e, i) => (p(), y("li", {
              key: i,
              id: N(i),
              class: L(["slider__slide", { "is-active": i === s.value }]),
              style: { flex: "0 0 100%", width: "100%", visibility: "hidden" },
              tabindex: "-1",
              role: "group",
              "aria-roledescription": "slide",
              "aria-label": `Slide ${i + 1} of ${r.items.length}`,
              inert: !_.value && i !== s.value,
              "aria-hidden": i !== s.value,
              ref_for: !0,
              ref: (v) => Z(v, i)
            }, [
              C(t.$slots, "slide", {
                item: e,
                index: i,
                active: i === s.value,
                upcoming: x(i)
              })
            ], 10, dt))), 128))
          ], 8, ct)
        ]),
        r.controls ? (p(), y("ul", vt, [
          d("li", ft, [
            d("button", {
              class: "Slider__control-button Slider__control-button--previous button button--icon",
              "aria-label": "Previous Slide",
              "aria-controls": M(k),
              onClick: l[0] || (l[0] = (e) => tt()),
              disabled: !r.loop && s.value === 0
            }, [
              C(t.$slots, "previous", {}, () => [
                J(K, {
                  icon: "type:previous",
                  class: "Slider__control-icon"
                })
              ])
            ], 8, mt)
          ]),
          d("li", yt, [
            d("button", {
              class: "Slider__control-button Slider__control-button--next button button--icon",
              "aria-label": "Next Slide",
              "aria-controls": M(k),
              onClick: l[1] || (l[1] = (e) => D()),
              disabled: !r.loop && s.value === o.items.length - 1
            }, [
              C(t.$slots, "next", {}, () => [
                J(K, {
                  icon: "type:next",
                  class: "Slider__control-icon"
                })
              ])
            ], 8, pt)
          ])
        ])) : G("", !0)
      ]),
      r.nav ? (p(), y("ul", _t, [
        (p(!0), y(X, null, H(r.items, (e, i) => (p(), y("li", {
          key: i,
          class: "Slider__nav-item"
        }, [
          d("button", {
            class: L(["Slider__nav-button", { "Slider__nav-button--active": i === s.value }]),
            onClick: (v) => E(i, "nav"),
            "aria-controls": N(i),
            "aria-label": `Go to slide ${i + 1}`,
            "aria-current": i === s.value ? "true" : null
          }, [
            C(t.$slots, "nav", {
              item: e,
              index: i,
              active: i === s.value
            }, () => [
              d("span", gt, "Item " + st(i + 1), 1)
            ])
          ], 10, bt)
        ]))), 128))
      ])) : G("", !0)
    ], 34));
  }
};
export {
  $t as default
};
