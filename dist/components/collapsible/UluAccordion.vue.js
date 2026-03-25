import { computed as c, inject as x, onMounted as V, createBlock as s, openBlock as d, unref as O, withCtx as i, renderSlot as l, resolveDynamicComponent as T, createTextVNode as B, toDisplayString as C, createElementVNode as M, normalizeClass as S, createVNode as $ } from "vue";
import A from "../elements/UluIcon.vue.js";
import b from "./UluCollapsible.vue.js";
import { useModifiers as h } from "../../composables/useModifiers.js";
import { newId as j } from "../../utils/dom.js";
const G = {
  __name: "UluAccordion",
  props: {
    /**
     * v-model for controlling open state  (optional)
     */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    /**
     * Whether the accordion is open by default
     */
    startOpen: Boolean,
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: !0
    },
    /**
     * Text to use for accordion, alternatively use #trigger slot
     */
    triggerText: String,
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    triggerTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: "accordion",
        trigger: "accordion__summary",
        content: "accordion__content",
        containerOpen: "is-active"
      })
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  },
  emits: ["update:modelValue"],
  setup(t, { emit: u }) {
    const r = t, m = u, { resolvedModifiers: g } = h({ props: r, baseClass: "accordion" }), p = c(() => {
      const e = { ...r.classes };
      return e.container = [e.container, g.value], e;
    }), o = x("uluAccordionGroup", null), a = j("ulu-accordion");
    V(() => {
      o && r.startOpen && o.toggle(a, !0);
    });
    const f = c(() => o ? o.activeAccordionId.value === a : r.modelValue);
    function y(e) {
      o && o.toggle(a, e), m("update:modelValue", e);
    }
    return (e, E) => (d(), s(b, {
      id: O(a),
      "model-value": f.value,
      "start-open": t.startOpen,
      "trigger-text": t.triggerText,
      classes: p.value,
      animate: t.animate,
      "onUpdate:modelValue": y
    }, {
      trigger: i(({ isOpen: n }) => [
        l(e.$slots, "trigger", { isOpen: n }, () => [
          (d(), s(T(t.triggerTextElement), null, {
            default: i(() => [
              B(C(t.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        l(e.$slots, "icon", { isOpen: n }, () => [
          M("span", {
            class: S(["accordion__icon", t.classes.icon])
          }, [
            $(A, {
              icon: n ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: i(({ isOpen: n, toggle: v }) => [
        l(e.$slots, "default", {
          isOpen: n,
          toggle: v
        })
      ]),
      _: 3
    }, 8, ["id", "model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
};
export {
  G as default
};
