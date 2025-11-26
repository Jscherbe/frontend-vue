import { ref as f, watch as p, createElementBlock as g, openBlock as o, Fragment as y, renderList as O, createBlock as v, createSlots as h, withCtx as l, renderSlot as m, createTextVNode as k, toDisplayString as $ } from "vue";
import S from "./UluAccordion.vue.js";
const B = { class: "accordion-group" }, x = {
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
  setup(i) {
    const u = i, s = f([]);
    p(() => u.items, (e) => {
      s.value = e.map((a) => ({
        ...a,
        isOpen: a.isOpen || !1
      }));
    }, { immediate: !0, deep: !0 });
    function c(e, a) {
      a ? s.value.forEach((t, r) => {
        t.isOpen = r === e;
      }) : s.value[e].isOpen = !1;
    }
    return (e, a) => (o(), g("div", B, [
      (o(!0), g(y, null, O(s.value, (t, r) => (o(), v(S, {
        key: r,
        "model-value": t.isOpen,
        "onUpdate:modelValue": (n) => c(r, n),
        "trigger-text": t.title,
        classes: t.classes,
        "trigger-text-element": i.triggerTextElement,
        modifiers: i.modifiers,
        animate: i.animate
      }, h({
        default: l(({ isOpen: n, toggle: d }) => [
          m(e.$slots, "item", {
            item: t,
            index: r,
            isOpen: n,
            toggle: d
          }, () => [
            k($(t.content), 1)
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
    ]));
  }
};
export {
  x as default
};
