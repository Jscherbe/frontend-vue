import p from "../../elements/UluIcon.vue.js";
import { resolveComponent as S, createElementBlock as a, openBlock as d, createElementVNode as r, createCommentVNode as w, Fragment as v, renderList as f, normalizeClass as _, renderSlot as m, createVNode as b, toDisplayString as g } from "vue";
import k from "../../../_virtual/_plugin-vue_export-helper.js";
const y = {
  name: "SlideShow",
  emits: ["slide-change"],
  components: {
    UluIcon: p
  },
  props: {
    /**
     * Should slides be focusable by tab key
     */
    slideFocusable: Boolean,
    /**
     * Setting for element.focus() when navigating to() a specific slide
     */
    focusOptions: {
      type: Object,
      default: () => ({
        preventScroll: !0,
        focusVisible: !1
      })
    },
    /**
     * Array of slide items (data)
     * - Use slot (#slide) to template
     */
    items: Array,
    /**
     * Slideshow without a nav
     */
    noNav: Boolean,
    /**
     * Allow user to change the scroll behavior when a slide is navigated to()
     */
    scrollBehaviorNav: {
      type: String,
      default: "instant"
    },
    /**
     * Allow user to change the scroll behavior when a slide is navigated via next/prev
     */
    scrollBehaviorControl: {
      type: String,
      default: "smooth"
    },
    /**
     * Observe 
     */
    observerOptions: {
      type: Object,
      default: () => ({
        threshhold: 0,
        rootMargin: "-50% 0px"
      })
    },
    /**
     * The intial slide index to use for active slide (zero based)
     */
    initialActive: {
      type: Number,
      default: 0
    },
    /**
     * Allow user to control scroll amount (element.scrollTo) for prev/next controls
     * - For future scroll implementations (like ulu scroll-slider for cards, etc)
     * - Function is passed (direction, DomRefs)
     * - Number is passed directly
     */
    scrollAmount: [Number, Function]
  },
  data() {
    return {
      slides: this.createSlides()
    };
  },
  computed: {
    canScrollRight() {
      const { slides: e } = this;
      return !e[e.length - 1].active;
    },
    canScrollLeft() {
      const { slides: e } = this;
      return !e[0].active;
    }
  },
  watch: {
    "items.length"() {
      this.slides = this.createSlides(), this.$nextTick(() => {
        this.observeSlides();
      });
    }
  },
  methods: {
    /**
     * Creates the internal array of slides based on user's passed items
     */
    createSlides() {
      return this.items.map((e) => ({
        element: null,
        active: !1,
        item: e
      }));
    },
    /**
     * Find the corresponding slide data by slide element
     */
    getSlideByElement(e) {
      return this.slides.find(({ element: t }) => e === t);
    },
    /**
     * Provides scroll measurements
     */
    getScrollData() {
      const { scrollLeft: e, offsetWidth: t, scrollWidth: s } = this.$refs.track;
      return { scrollLeft: e, offsetWidth: t, scrollWidth: s };
    },
    /**
     * Determines the amount to scroll the track
     */
    resolveAmount(e) {
      const t = e === "next", { scrollAmount: s } = this, { scrollLeft: n, offsetWidth: l } = this.getScrollData();
      return typeof s == "function" ? s(e, this.$refs) : typeof s == "number" ? t ? n + s : n - s : t ? n + l : n - l;
    },
    /**
     * Scroll the track to a specified point 
     */
    scrollTo(e, t) {
      this.$refs.track.scrollTo({ left: e, top: 0, behavior: t });
    },
    /**
     * Scroll to specific index
     * @param {Number} index Slide index
     */
    to(e) {
      const t = this.slides[e], { track: s } = this.$refs;
      if (t) {
        let n = t.element.offsetLeft;
        const l = () => {
          t.element.focus(this.focusOptions), s.removeEventListener("scrollend", l);
        };
        s.addEventListener("scrollend", l), this.scrollTo(n, this.scrollBehaviorNav);
      }
    },
    /**
     * Goto to next slide
     */
    next() {
      const e = this.resolveAmount("next");
      this.scrollTo(e, this.scrollBehaviorControl);
    },
    /**
     * Goto to previous slide
     */
    previous() {
      const e = this.resolveAmount("previous");
      this.scrollTo(e, this.scrollBehaviorControl);
    },
    /**
     * Sets up a new observer to watch the slides visibility (within track)
     */
    createObserver() {
      const { observerOptions: e } = this, { track: t, nav: s } = this.$refs, n = (l) => {
        l.forEach((i) => {
          this.$nextTick(() => {
            const h = this.getSlideByElement(i.target);
            h.active = i.isIntersecting, this.$emit("slide-change", { slide: h, track: t, nav: s });
          });
        });
      };
      this.observer = new IntersectionObserver(n, {
        root: t,
        ...e
      });
    },
    /**
     * Add all slide elements as targets in observer
     */
    observeSlides() {
      const { observer: e, slides: t } = this;
      e.disconnect(), t.forEach(({ element: s }) => {
        s && e.observe(s);
      });
    },
    /**
     * Remove observer and it's internal DOM references (GC)
     */
    destroyObserver() {
      this.observer.disconnect(), this.observer = null;
    }
  },
  mounted() {
    this.createObserver(), this.observeSlides();
  },
  beforeUnmount() {
    this.destroyObserver();
  }
}, x = { class: "slideshow" }, O = {
  class: "slideshow__control-context",
  ref: "context"
}, B = {
  class: "slideshow__track-crop",
  ref: "crop"
}, C = {
  class: "slideshow__track",
  ref: "track"
}, N = ["tabindex"], E = { class: "slideshow__controls" }, L = { class: "slideshow__controls-item slideshow__controls-item--previous" }, A = ["disabled"], T = { class: "slideshow__controls-item slideshow__controls-item--next" }, I = ["disabled"], U = {
  key: 0,
  class: "slideshow__nav",
  ref: "nav"
}, $ = ["onClick"], F = { class: "hidden-visually" };
function V(e, t, s, n, l, i) {
  const h = S("UluIcon");
  return d(), a("div", x, [
    r("div", O, [
      r("div", B, [
        r("ul", C, [
          (d(!0), a(v, null, f(l.slides, (o, c) => (d(), a("li", {
            class: _(["slideshow__slide", { "is-active": o.active }]),
            key: c,
            tabindex: s.slideFocusable ? "0" : "-1",
            ref_for: !0,
            ref: (u) => {
              o.element = u;
            }
          }, [
            m(e.$slots, "slide", {
              item: o.item,
              index: c
            })
          ], 10, N))), 128))
        ], 512)
      ], 512),
      r("ul", E, [
        r("li", L, [
          r("button", {
            class: "slideshow__control-button slideshow__control-button--previous",
            "aria-label": "Scroll Right",
            onClick: t[0] || (t[0] = (...o) => i.previous && i.previous(...o)),
            disabled: !i.canScrollLeft
          }, [
            b(h, {
              class: "slideshow__control-icon",
              icon: "type:previous"
            })
          ], 8, A)
        ]),
        r("li", T, [
          r("button", {
            class: "slideshow__control-button slideshow__control-button--next",
            "aria-label": "Scroll Left",
            onClick: t[1] || (t[1] = (...o) => i.next && i.next(...o)),
            disabled: !i.canScrollRight
          }, [
            b(h, {
              class: "slideshow__control-icon",
              icon: "type:next"
            })
          ], 8, I)
        ])
      ])
    ], 512),
    s.noNav ? w("", !0) : (d(), a("ul", U, [
      (d(!0), a(v, null, f(l.slides, (o, c) => (d(), a("li", {
        class: _(["slideshow__nav-item", { "is-active": o.active }]),
        ref_for: !0,
        ref: (u) => {
          o.navElement = u;
        },
        key: c
      }, [
        r("button", {
          class: _(["slideshow__nav-button", { "is-active": o.active }]),
          onClick: (u) => i.to(c)
        }, [
          m(e.$slots, "nav", {
            item: o.item,
            index: c,
            active: o.active
          }, () => [
            r("span", F, "Item " + g(c + 1), 1)
          ])
        ], 10, $)
      ], 2))), 128))
    ], 512))
  ]);
}
const j = /* @__PURE__ */ k(y, [["render", V]]);
export {
  j as default
};
