import { ref as x, computed as y, watch as L, nextTick as O, onUnmounted as M, createElementBlock as u, openBlock as d, withKeys as T, unref as l, normalizeStyle as v, normalizeClass as j, createElementVNode as A, createCommentVNode as k, renderSlot as C } from "vue";
import { useUluFloating as H } from "../../composables/useUluFloating.js";
import { useModifiers as U } from "../../composables/useModifiers.js";
import { wasClickOutside as $ } from "@ulu/utils/browser/dom.js";
const z = ["data-placement"], K = { class: "popover__inner" }, N = {
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
      default: ({ isOpen: s, trigger: n, content: c }) => {
        s && c ? c.focus({ preventScroll: !0 }) : !s && n && n instanceof HTMLElement && n.focus({ preventScroll: !0 });
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
  setup(s, { expose: n, emit: c }) {
    const p = c, e = s, o = x(null), { resolvedModifiers: _ } = U({ props: e, baseClass: "popover" }), f = y(() => e.config || {}), { floatingStyles: w, placement: E, arrowStyles: F, update: m, isFixedStrategy: S, contentArrow: h } = H(
      y(() => e.trigger),
      o,
      f
    ), i = () => {
      p("close"), p("update:isOpen", !1);
    }, b = (t) => {
      e.isOpen && e.escapeCloses && (t.preventDefault(), i());
    };
    let r = null;
    const a = () => {
      r && (document.removeEventListener("click", r), r = null);
    }, B = () => {
      a(), e.clickOutsideCloses && (r = (t) => {
        if (!(!e.isOpen || !o.value) && document.body.contains(t.target) && !o.value.contains(t.target) && !t.target.closest("[data-ulu-tour-ui]") && $(o.value, t)) {
          if (e.trigger instanceof HTMLElement && e.trigger.contains(t.target))
            return;
          i();
        }
      }, setTimeout(() => {
        r && document.addEventListener("click", r);
      }, 0));
    };
    return L(() => e.isOpen, (t, g) => {
      t ? (m(), B(), e.directFocus && O(() => {
        e.directFocus({ isOpen: !0, trigger: e.trigger, content: o.value });
      })) : (a(), e.directFocus && g === !0 && O(() => {
        e.directFocus({ isOpen: !1, trigger: e.trigger, content: o.value });
      }));
    }, { immediate: !0 }), M(() => {
      a();
    }), n({
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
    }), (t, g) => (d(), u("span", {
      class: j(["popover", [
        {
          "popover--fixed": l(S),
          "is-active": s.isOpen
        },
        l(_)
      ]]),
      ref_key: "contentEl",
      ref: o,
      style: v(l(w)),
      "data-placement": l(E),
      onKeydown: T(b, ["esc"]),
      tabindex: "-1"
    }, [
      A("span", K, [
        C(t.$slots, "default", {
          isOpen: s.isOpen,
          close: i
        })
      ]),
      t.$slots.footer ? (d(), u("span", N, [
        C(t.$slots, "footer", {
          isOpen: s.isOpen,
          close: i
        })
      ])) : k("", !0),
      f.value.arrow ? (d(), u("span", {
        key: 1,
        class: "popover__arrow",
        ref_key: "contentArrow",
        ref: h,
        style: v(l(F)),
        "data-ulu-popover-arrow": ""
      }, null, 4)) : k("", !0)
    ], 46, z));
  }
};
export {
  G as default
};
