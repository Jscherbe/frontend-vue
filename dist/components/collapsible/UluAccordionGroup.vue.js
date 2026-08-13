import { ref as m, provide as f, createElementBlock as g, openBlock as l, renderSlot as s, Fragment as p, renderList as y, createBlock as k, createSlots as $, withCtx as a, createTextVNode as v, toDisplayString as O } from "vue";
import A from "./UluAccordion.vue.js";
const S = { class: "accordion-group" }, B = {
  __name: "UluAccordionGroup",
  props: {
    /**
     * Array of items to render as accordions.
     * Each item can have: title, content, isOpen, classes
     */
    items: {
      type: Array,
      default: () => []
    },
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    triggerTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array, Object],
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: !0
    }
  },
  setup(r) {
    const i = m(null);
    function u(e, c) {
      c ? i.value = e : i.value === e && (i.value = null);
    }
    return f("uluAccordionGroup", {
      activeAccordionId: i,
      toggle: u
    }), (e, c) => (l(), g("div", S, [
      r.items?.length ? (l(!0), g(p, { key: 0 }, y(r.items, (t, o) => (l(), k(A, {
        key: o,
        "start-open": t.isOpen,
        "trigger-text": t.title,
        classes: t.classes,
        "trigger-text-element": r.triggerTextElement,
        modifiers: r.modifiers,
        animate: r.animate
      }, $({
        default: a(({ isOpen: n, toggle: d }) => [
          s(e.$slots, "item", {
            item: t,
            index: o,
            isOpen: n,
            toggle: d
          }, () => [
            v(O(t.content), 1)
          ])
        ]),
        _: 2
      }, [
        e.$slots.trigger ? {
          name: "trigger",
          fn: a(({ isOpen: n }) => [
            s(e.$slots, "trigger", {
              item: t,
              index: o,
              isOpen: n
            })
          ]),
          key: "0"
        } : void 0,
        e.$slots.icon ? {
          name: "icon",
          fn: a(({ isOpen: n }) => [
            s(e.$slots, "icon", {
              item: t,
              index: o,
              isOpen: n
            })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["start-open", "trigger-text", "classes", "trigger-text-element", "modifiers", "animate"]))), 128)) : s(e.$slots, "default", { key: 1 })
    ]));
  }
};
export {
  B as default
};
