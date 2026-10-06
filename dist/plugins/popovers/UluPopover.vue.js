import { computed as x, ref as n, resolveDirective as T, createElementBlock as p, openBlock as m, Fragment as j, withDirectives as z, createVNode as I, unref as s, normalizeClass as O, renderSlot as r, createTextVNode as h, toDisplayString as w, createSlots as D, withCtx as b } from "vue";
import { useRequiredInject as E } from "../../composables/useRequiredInject.js";
import { POPOVER_OPTIONS_KEY as N } from "./index.js";
import V from "./defaults.js";
import { newId as C } from "../../utils/dom.js";
import A from "./UluPopoverBase.vue.js";
const R = ["id", "disabled", "aria-expanded", "aria-controls", "aria-label"], L = {
  __name: "UluPopover",
  props: {
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
  emits: ["toggle"],
  setup(e, { expose: y, emit: k }) {
    const S = k, c = e, d = C(), g = C(), u = E(N), B = u ? u.popover : V.popover, $ = x(() => ({ ...B, ...c.config })), t = n(c.startOpen || !1), f = n(null), F = n(null), a = () => {
      i(!t.value);
    }, i = (o) => {
      t.value = o, S("toggle", { isOpen: o });
    }, l = () => i(!1);
    return y({
      /**
       * The reactive internal open/closed state of the popover
       */
      isOpen: t,
      /**
       * Method to toggle the popover open/closed
       */
      toggle: a,
      /**
       * Method to force the popover closed
       */
      close: l,
      /**
       * Method to explicitly set the open state
       * @param {Boolean} toOpen - The desired state
       */
      changeTo: i
    }), (o, v) => {
      const P = T("ulu-tooltip");
      return m(), p(j, null, [
        z((m(), p("button", {
          type: "button",
          ref_key: "trigger",
          ref: f,
          onClick: a,
          id: s(g),
          disabled: e.disabled,
          class: O([
            { [e.activeClass]: t.value },
            e.classes.trigger
          ]),
          "aria-expanded": t.value ? "true" : "false",
          "aria-controls": s(d),
          "aria-label": e.triggerAlt
        }, [
          r(o.$slots, "trigger", {
            isOpen: t.value,
            close: l
          }, () => [
            h(w(e.triggerText), 1)
          ])
        ], 10, R)), [
          [P, e.tooltip ? e.tooltip : null]
        ]),
        I(A, {
          ref_key: "popoverBase",
          ref: F,
          trigger: f.value,
          config: $.value,
          isOpen: t.value,
          clickOutsideCloses: e.clickOutsideCloses,
          directFocus: e.directFocus,
          class: O([
            e.size ? `popover--${e.size}` : "",
            {
              "popover--no-padding": e.noPadding
            },
            e.classes.content
          ]),
          "aria-labelledby": s(g),
          id: s(d),
          onClose: v[0] || (v[0] = (q) => i(!1))
        }, D({
          default: b(() => [
            r(o.$slots, "default", {
              isOpen: t.value,
              toggle: a,
              close: l
            })
          ]),
          _: 2
        }, [
          o.$slots.footer ? {
            name: "footer",
            fn: b(() => [
              r(o.$slots, "footer", { close: l })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["trigger", "config", "isOpen", "clickOutsideCloses", "directFocus", "class", "aria-labelledby", "id"])
      ], 64);
    };
  }
};
export {
  L as default
};
