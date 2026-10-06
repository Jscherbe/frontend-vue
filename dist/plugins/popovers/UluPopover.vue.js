import { computed as O, ref as r, resolveDirective as I, createElementBlock as b, openBlock as y, Fragment as T, withDirectives as j, createVNode as z, unref as a, normalizeClass as C, renderSlot as d, createTextVNode as h, toDisplayString as w, createSlots as D, withCtx as k } from "vue";
import { useRequiredInject as E } from "../../composables/useRequiredInject.js";
import { POPOVER_OPTIONS_KEY as N } from "./index.js";
import A from "./defaults.js";
import { newId as B } from "../../utils/dom.js";
import R from "./UluPopoverBase.vue.js";
const q = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], M = {
  __name: "UluPopover",
  props: {
    /**
     * V-model state to control the popover externally
     */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    triggerText: String,
    triggerAlt: String,
    disabled: Boolean,
    tooltip: String,
    size: String,
    noPadding: Boolean,
    config: {
      type: Object,
      default: () => ({})
    },
    startOpen: Boolean,
    activeClass: {
      type: String,
      default: "is-active"
    },
    classes: {
      type: Object,
      default: () => ({})
    },
    clickOutsideCloses: {
      type: Boolean,
      default: !0
    },
    /**
     * Direct focus when open/closing popover.
     * Overrides UluPopoverBase's default focus management.
     */
    directFocus: Function
  },
  emits: ["toggle", "update:modelValue"],
  setup(e, { expose: S, emit: V }) {
    const c = V, l = e, u = B(), g = B(), f = E(N), $ = f ? f.popover : A.popover, F = O(() => ({ ...$, ...l.config })), m = r(l.startOpen || !1), p = r(null), P = r(null), o = O({
      get() {
        return l.modelValue !== void 0 ? l.modelValue : m.value;
      },
      set(t) {
        l.modelValue !== void 0 ? c("update:modelValue", t) : m.value = t;
      }
    }), n = () => {
      i(!o.value);
    }, i = (t) => {
      o.value = t, c("toggle", { isOpen: t });
    }, s = () => i(!1);
    return S({
      /**
       * The reactive internal open/closed state of the popover
       */
      isOpen: o,
      /**
       * Method to toggle the popover open/closed
       */
      toggle: n,
      /**
       * Method to force the popover closed
       */
      close: s,
      /**
       * Method to explicitly set the open state
       * @param {Boolean} toOpen - The desired state
       */
      changeTo: i
    }), (t, v) => {
      const x = I("ulu-tooltip");
      return y(), b(T, null, [
        j((y(), b("button", {
          type: "button",
          ref_key: "trigger",
          ref: p,
          onClick: n,
          id: a(g),
          disabled: e.disabled,
          class: C([
            { [e.activeClass]: o.value },
            e.classes.trigger
          ]),
          "aria-expanded": o.value ? "true" : "false",
          "aria-controls": a(u),
          "aria-label": e.triggerAlt
        }, [
          d(t.$slots, "trigger", {
            isOpen: o.value,
            close: s
          }, () => [
            h(w(e.triggerText), 1)
          ])
        ], 10, q)), [
          [x, e.tooltip ? e.tooltip : null]
        ]),
        z(R, {
          ref_key: "popoverBase",
          ref: P,
          trigger: p.value,
          config: F.value,
          isOpen: o.value,
          clickOutsideCloses: e.clickOutsideCloses,
          directFocus: e.directFocus,
          class: C([
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding
            },
            e.classes.content
          ]),
          "aria-labelledby": a(g),
          id: a(u),
          onClose: v[0] || (v[0] = (K) => i(!1))
        }, D({
          default: k(() => [
            d(t.$slots, "default", {
              isOpen: o.value,
              toggle: n,
              close: s
            })
          ]),
          _: 2
        }, [
          t.$slots.footer ? {
            name: "footer",
            fn: k(() => [
              d(t.$slots, "footer", { close: s })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["trigger", "config", "isOpen", "clickOutsideCloses", "directFocus", "class", "aria-labelledby", "id"])
      ], 64);
    };
  }
};
export {
  M as default
};
