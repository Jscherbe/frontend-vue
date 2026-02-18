import { ref as f, watch as p, createElementBlock as g, createCommentVNode as y, openBlock as s, Fragment as O, renderList as h, createBlock as k, createSlots as v, withCtx as l, renderSlot as m, createTextVNode as $, toDisplayString as S } from "vue";
import B from "./UluAccordion.vue.js";
const E = {
  key: 0,
  class: "accordion-group"
}, x = {
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
    modifiers: [String, Array],
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
  setup(a) {
    const u = a, o = f([]);
    p(() => u.items, (e) => {
      o.value = e.map((i) => ({
        ...i,
        isOpen: i.isOpen || !1
      }));
    }, { immediate: !0, deep: !0 });
    function c(e, i) {
      i ? o.value.forEach((t, r) => {
        t.isOpen = r === e;
      }) : o.value[e].isOpen = !1;
    }
    return (e, i) => a.items?.length ? (s(), g("div", E, [
      (s(!0), g(O, null, h(o.value, (t, r) => (s(), k(B, {
        key: r,
        "model-value": t.isOpen,
        "onUpdate:modelValue": (n) => c(r, n),
        "trigger-text": t.title,
        classes: t.classes,
        "trigger-text-element": a.triggerTextElement,
        modifiers: a.modifiers,
        animate: a.animate
      }, v({
        default: l(({ isOpen: n, toggle: d }) => [
          m(e.$slots, "item", {
            item: t,
            index: r,
            isOpen: n,
            toggle: d
          }, () => [
            $(S(t.content), 1)
          ])
        ]),
        _: 2
      }, [
        e.$slots.trigger ? {
          name: "trigger",
          fn: l(({ isOpen: n }) => [
            m(e.$slots, "trigger", {
              item: t,
              index: r,
              isOpen: n
            })
          ]),
          key: "0"
        } : void 0,
        e.$slots.icon ? {
          name: "icon",
          fn: l(({ isOpen: n }) => [
            m(e.$slots, "icon", {
              item: t,
              index: r,
              isOpen: n
            })
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["model-value", "onUpdate:modelValue", "trigger-text", "classes", "trigger-text-element", "modifiers", "animate"]))), 128))
    ])) : y("", !0);
  }
};
export {
  x as default
};
