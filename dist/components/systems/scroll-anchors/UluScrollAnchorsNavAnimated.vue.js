import { ref as c, onMounted as $, onBeforeUnmount as w, computed as N, watch as C, createBlock as z, createCommentVNode as B, unref as p, openBlock as y, resolveDynamicComponent as M, normalizeStyle as g, withCtx as T, createElementVNode as _, createElementBlock as k, Fragment as W, renderList as E, normalizeClass as S, renderSlot as H, createTextVNode as I, toDisplayString as V } from "vue";
import { runAfterFramePaint as D } from "@ulu/utils/browser/performance.js";
import { useScrollAnchorSections as F } from "./useScrollAnchorSections.js";
const L = ["href"], j = {
  __name: "UluScrollAnchorsNavAnimated",
  props: {
    /**
     * The HTML element to use for the navigation root
     */
    element: {
      type: String,
      default: "nav"
    },
    /**
     * The width of the navigation rail
     */
    railWidth: {
      type: Number,
      default: 3
    },
    /**
     * Dynamically trims the rail to span exactly from the center of the first indicator to the center of the last indicator. Disabled by default
     */
    trimRailToCenters: {
      type: Boolean
    },
    /**
     * Pixel offset for the start (top) of the dynamic rail.
     */
    railStartOffset: {
      type: Number,
      default: 0
    },
    /**
     * Pixel offset for the end (bottom) of the dynamic rail.
     */
    railEndOffset: {
      type: Number,
      default: 0
    },
    /**
     * The width of the indicator, defaults to railWidth
     */
    indicatorWidth: {
      type: Number,
      default: null
    },
    /**
     * If set, creates a static height, centered indicator
     */
    indicatorHeight: {
      type: Number,
      default: null
    },
    /**
     * Vertical alignment of the indicator relative to the link
     */
    indicatorAlignment: {
      type: String,
      default: "center"
      // options: center, top
    },
    /**
     * Pixel offset for the indicator's vertical alignment
     */
    indicatorAlignmentOffset: {
      type: Number,
      default: 0
    }
  },
  setup(u) {
    const l = u, a = F(), f = c(null), x = c({}), d = c(!1), h = c(0);
    let s = null;
    $(() => {
      f.value && (s = new ResizeObserver(() => {
        h.value++;
      }), s.observe(f.value));
    }), w(() => {
      s && (s.disconnect(), s = null);
    });
    function v(e) {
      const t = x.value[e];
      if (!t) return null;
      const { offsetTop: n, offsetHeight: r } = t, o = l.indicatorHeight != null, R = l.indicatorWidth ?? l.railWidth, b = o ? l.indicatorHeight : r;
      let m = n;
      return l.indicatorAlignment === "center" && (m = n + r / 2 - b / 2), m += l.indicatorAlignmentOffset, { y: m, height: b, width: R };
    }
    const i = N(() => {
      if (h.value, !a || !a.value || !a.value.length)
        return !1;
      const e = a.value.findIndex((t) => t.active);
      return e === -1 ? !1 : v(e) || !1;
    }), A = N(() => {
      if (h.value, !l.trimRailToCenters) return {};
      if (!a || !a.value || a.value.length < 1) return {};
      const e = v(0), t = v(a.value.length - 1);
      if (!e || !t) return {};
      let n = e.y + e.height / 2, r = t.y + t.height / 2;
      n += l.railStartOffset, r += l.railEndOffset;
      const o = Math.max(0, r - n);
      return {
        "--ulu-sa-nav-rail-top": `${n}px`,
        "--ulu-sa-nav-rail-height": `${o}px`
      };
    });
    C(i, (e) => {
      e && !d.value && D(() => {
        d.value = !0;
      });
    });
    function O(e, t) {
      t && (x.value[e] = t);
    }
    return (e, t) => p(a) && p(a).length ? (y(), z(M(u.element), {
      key: 0,
      class: "scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated",
      style: g({ "--ulu-sa-nav-rail-width": `${u.railWidth}px` })
    }, {
      default: T(() => [
        _("ul", {
          class: "scroll-anchors-nav-animated__rail",
          ref_key: "listRef",
          ref: f,
          style: g(A.value)
        }, [
          (y(!0), k(W, null, E(p(a), (n, r) => (y(), k("li", {
            key: r,
            class: S({ "is-active": n.active })
          }, [
            _("a", {
              class: S({ "is-active": n.active }),
              ref_for: !0,
              ref: (o) => O(r, o),
              href: `#${n.titleId}`
            }, [
              H(e.$slots, "default", {
                item: n,
                index: r
              }, () => [
                I(V(n.title), 1)
              ])
            ], 10, L)
          ], 2))), 128))
        ], 4),
        _("div", {
          class: S(["scroll-anchors-nav-animated__indicator", {
            "scroll-anchors-nav-animated__indicator--can-transition": d.value
          }]),
          style: g({
            opacity: i.value ? "1" : "0",
            transform: `translateY(${i.value ? i.value.y : 0}px)`,
            height: `${i.value ? i.value.height : 0}px`,
            width: `${i.value ? i.value.width : 0}px`
          })
        }, null, 6)
      ]),
      _: 3
    }, 8, ["style"])) : B("", !0);
  }
};
export {
  j as default
};
