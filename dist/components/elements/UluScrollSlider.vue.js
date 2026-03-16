import { ref as f, onMounted as g, nextTick as A, onBeforeUnmount as $, createElementBlock as i, openBlock as n, normalizeClass as C, unref as m, createVNode as x, createSlots as E, withCtx as v, createElementVNode as k, createCommentVNode as S, Fragment as N, renderList as O, renderSlot as p } from "vue";
import { useModifiers as w } from "../../composables/useModifiers.js";
import { newId as M } from "../../utils/dom.js";
import R from "./UluOverflowScroller.vue.js";
const V = { class: "scroll-slider__track-crop" }, U = ["id", "onScroll"], j = {
  key: 0,
  class: "scroll-slider__slide scroll-slider__slide--empty",
  role: "presentation"
}, q = {
  key: 1,
  class: "scroll-slider__slide scroll-slider__slide--empty",
  role: "presentation"
}, D = {
  __name: "UluScrollSlider",
  props: {
    /**
     * Array of items to render.
     */
    items: {
      type: Array,
      required: !0
    },
    /**
     * Show previous/next controls.
     */
    controls: {
      type: Boolean,
      default: !0
    },
    /**
     * Scroll amount (in pixels) for the next/prev buttons.
     * If not provided, it defaults to the visible width of the track.
     */
    scrollAmount: {
      type: [Number, String],
      default: "auto"
    },
    /**
     * Scroll behavior ('smooth' or 'auto').
     */
    scrollBehavior: {
      type: String,
      default: "smooth"
    },
    /**
     * Include empty start and end slides (needed for correct margin collapsing with some styles).
     */
    emptySlides: {
      type: Boolean,
      default: !0
    },
    /**
     * Options passed to the IntersectionObserver (determines when a slide is considered "intersecting").
     */
    observerOptions: {
      type: Object,
      default: () => ({ threshold: 0.1 })
    },
    /**
     * Base class modifiers.
     */
    modifiers: [String, Array]
  },
  setup(l) {
    const _ = l, { resolvedModifiers: B } = w({ props: _, baseClass: "scroll-slider" }), y = M("ulu-scroll-slider-track"), h = f(null), u = f([]), r = f([]);
    let c = null;
    const I = (e, o) => {
      e && (u.value[o] = e);
    };
    return g(() => {
      A(() => {
        c = new IntersectionObserver((e) => {
          e.forEach((o) => {
            const s = u.value.findIndex((t) => t === o.target);
            s > -1 && (o.isIntersecting ? r.value.includes(s) || r.value.push(s) : r.value = r.value.filter((t) => t !== s));
          });
        }, {
          ..._.observerOptions,
          root: h.value
        }), u.value.forEach((e) => {
          e && c.observe(e);
        });
      });
    }), $(() => {
      c && c.disconnect();
    }), (e, o) => (n(), i("div", {
      class: C(["scroll-slider", m(B)])
    }, [
      x(R, {
        class: "scroll-slider__control-context",
        controlsClass: "scroll-slider__controls",
        controls: l.controls,
        scrollAmount: l.scrollAmount,
        scrollBehavior: l.scrollBehavior,
        trackId: m(y)
      }, E({
        default: v(({ setTrackRef: s, onScroll: t }) => [
          k("div", V, [
            k("ul", {
              class: "scroll-slider__track",
              id: m(y),
              ref: (d) => {
                h.value = d, s(d);
              },
              onScroll: t
            }, [
              l.emptySlides ? (n(), i("li", j, " ")) : S("", !0),
              (n(!0), i(N, null, O(l.items, (d, a) => (n(), i("li", {
                key: a,
                class: "scroll-slider__slide",
                ref_for: !0,
                ref: (b) => I(b, a)
              }, [
                p(e.$slots, "slide", {
                  item: d,
                  index: a,
                  isIntersecting: r.value.includes(a)
                })
              ]))), 128)),
              l.emptySlides ? (n(), i("li", q, " ")) : S("", !0)
            ], 40, U)
          ])
        ]),
        _: 2
      }, [
        e.$slots.previous ? {
          name: "previous",
          fn: v(() => [
            p(e.$slots, "previous")
          ]),
          key: "0"
        } : void 0,
        e.$slots.next ? {
          name: "next",
          fn: v(() => [
            p(e.$slots, "next")
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["controls", "scrollAmount", "scrollBehavior", "trackId"])
    ], 2));
  }
};
export {
  D as default
};
