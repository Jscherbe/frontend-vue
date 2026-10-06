import { ref as B, computed as m, watch as x, nextTick as g, onUnmounted as L, createElementBlock as u, openBlock as d, withKeys as M, unref as l, normalizeStyle as y, normalizeClass as T, createElementVNode as j, createCommentVNode as v, renderSlot as O } from "vue";
import { useUluFloating as A } from "../../composables/useUluFloating.js";
import { useModifiers as H } from "../../composables/useModifiers.js";
import { wasClickOutside as U } from "@ulu/utils/browser/dom.js";
const $ = ["data-placement"], z = { class: "popover__inner" }, K = {
  key: 0,
  class: "popover__footer"
}, G = {
  __name: "UluPopoverBase",
  props: {
    /**
     * Controls the open/active state of the popover
     */
    isOpen: {
      type: Boolean,
      default: !1
    },
    /**
     * Close popover when click is outside
     */
    clickOutsideCloses: {
      type: Boolean,
      default: !0
    },
    /**
     * Close popover when escape key is pressed
     */
    escapeCloses: {
      type: Boolean,
      default: !0
    },
    /**
     * Direct focus when open/closing popover
     */
    directFocus: {
      type: Function,
      default: ({ isOpen: s, trigger: r, content: c }) => {
        s && c ? c.focus({ preventScroll: !0 }) : !s && r && r instanceof HTMLElement && r.focus({ preventScroll: !0 });
      }
    },
    /**
     * The target element for the popover to float alongside
     */
    trigger: {
      type: Object,
      default: null
    },
    /**
     * Floating UI configuration
     */
    config: {
      type: Object,
      default: () => ({})
    },
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'large'])
     */
    modifiers: [String, Array, Object]
  },
  emits: ["close"],
  setup(s, { expose: r, emit: c }) {
    const k = c, e = s, o = B(null), { resolvedModifiers: C } = H({ props: e, baseClass: "popover" }), f = m(() => e.config || {}), { floatingStyles: _, placement: w, arrowStyles: E, update: p, isFixedStrategy: F, contentArrow: S } = A(
      m(() => e.trigger),
      o,
      f
    ), i = () => {
      k("close");
    }, h = (t) => {
      e.isOpen && e.escapeCloses && (t.preventDefault(), i());
    };
    let n = null;
    const a = () => {
      n && (document.removeEventListener("click", n), n = null);
    }, b = () => {
      a(), e.clickOutsideCloses && (n = (t) => {
        if (!(!e.isOpen || !o.value) && document.body.contains(t.target) && !o.value.contains(t.target) && U(o.value, t)) {
          if (e.trigger instanceof HTMLElement && e.trigger.contains(t.target))
            return;
          i();
        }
      }, setTimeout(() => {
        n && document.addEventListener("click", n);
      }, 0));
    };
    return x(() => e.isOpen, (t) => {
      t ? (p(), b(), e.directFocus && g(() => {
        e.directFocus({ isOpen: !0, trigger: e.trigger, content: o.value });
      })) : (a(), e.directFocus && g(() => {
        e.directFocus({ isOpen: !1, trigger: e.trigger, content: o.value });
      }));
    }, { immediate: !0 }), L(() => {
      a();
    }), r({
      /**
       * Emits the close event
       */
      close: i,
      /**
       * Manually trigger a floating UI position update
       */
      update: p,
      /**
       * The internal root popover element reference
       */
      content: o
    }), (t, N) => (d(), u("span", {
      class: T(["popover", [
        {
          "popover--fixed": l(F),
          "is-active": s.isOpen
        },
        l(C)
      ]]),
      ref_key: "contentEl",
      ref: o,
      style: y(l(_)),
      "data-placement": l(w),
      onKeydown: M(h, ["esc"]),
      tabindex: "-1"
    }, [
      j("span", z, [
        O(t.$slots, "default", {
          isOpen: s.isOpen,
          close: i
        })
      ]),
      t.$slots.footer ? (d(), u("span", K, [
        O(t.$slots, "footer", {
          isOpen: s.isOpen,
          close: i
        })
      ])) : v("", !0),
      f.value.arrow ? (d(), u("span", {
        key: 1,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: S,
        style: y(l(E)),
        "data-ulu-popover-arrow": ""
      }, null, 4)) : v("", !0)
    ], 46, $));
  }
};
export {
  G as default
};
