import { ref as B, computed as g, watch as x, nextTick as y, onUnmounted as L, createElementBlock as u, openBlock as p, withKeys as M, unref as l, normalizeStyle as v, normalizeClass as T, createElementVNode as j, createCommentVNode as O, renderSlot as k } from "vue";
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
  emits: ["close", "update:isOpen"],
  setup(s, { expose: r, emit: c }) {
    const d = c, e = s, o = B(null), { resolvedModifiers: C } = H({ props: e, baseClass: "popover" }), f = g(() => e.config || {}), { floatingStyles: _, placement: w, arrowStyles: E, update: m, isFixedStrategy: F, contentArrow: S } = A(
      g(() => e.trigger),
      o,
      f
    ), i = () => {
      d("close"), d("update:isOpen", !1);
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
      t ? (m(), b(), e.directFocus && y(() => {
        e.directFocus({ isOpen: !0, trigger: e.trigger, content: o.value });
      })) : (a(), e.directFocus && y(() => {
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
      update: m,
      /**
       * The internal root popover element reference
       */
      content: o
    }), (t, N) => (p(), u("span", {
      class: T(["popover", [
        {
          "popover--fixed": l(F),
          "is-active": s.isOpen
        },
        l(C)
      ]]),
      ref_key: "contentEl",
      ref: o,
      style: v(l(_)),
      "data-placement": l(w),
      onKeydown: M(h, ["esc"]),
      tabindex: "-1"
    }, [
      j("span", z, [
        k(t.$slots, "default", {
          isOpen: s.isOpen,
          close: i
        })
      ]),
      t.$slots.footer ? (p(), u("span", K, [
        k(t.$slots, "footer", {
          isOpen: s.isOpen,
          close: i
        })
      ])) : O("", !0),
      f.value.arrow ? (p(), u("span", {
        key: 1,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: S,
        style: v(l(E)),
        "data-ulu-popover-arrow": ""
      }, null, 4)) : O("", !0)
    ], 46, $));
  }
};
export {
  G as default
};
