import { computed as s, inject as V, onMounted as O, createBlock as d, openBlock as u, unref as S, withCtx as i, renderSlot as l, resolveDynamicComponent as C, createTextVNode as T, toDisplayString as A, createElementVNode as B, normalizeClass as _, createVNode as E } from "vue";
import M from "../elements/UluIcon.vue.js";
import $ from "./UluCollapsible.vue.js";
import { useModifiers as b } from "../../composables/useModifiers.js";
import { newId as j } from "../../utils/dom.js";
import { mergeClassLookups as U } from "../../utils/props.js";
const I = {
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
      type: [Object, Boolean, Function],
      default: () => ({})
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array, Object]
  },
  emits: ["update:modelValue"],
  setup(t, { emit: m }) {
    const g = {
      container: "accordion",
      trigger: "accordion__summary",
      content: "accordion__content",
      containerOpen: "is-active",
      icon: "accordion__icon"
    }, r = t, p = m, { resolvedModifiers: f } = b({ props: r, baseClass: "accordion" }), c = s(() => {
      const e = U(g, r.classes);
      return e.container = [e.container, f.value], e;
    }), o = V("uluAccordionGroup", null), a = j("ulu-accordion");
    O(() => {
      o && r.startOpen && o.toggle(a, !0);
    });
    const v = s(() => o ? o.activeAccordionId.value === a : r.modelValue);
    function y(e) {
      o && o.toggle(a, e), p("update:modelValue", e);
    }
    return (e, h) => (u(), d($, {
      id: S(a),
      "model-value": v.value,
      "start-open": t.startOpen,
      "trigger-text": t.triggerText,
      classes: c.value,
      animate: t.animate,
      "onUpdate:modelValue": y
    }, {
      trigger: i(({ isOpen: n }) => [
        l(e.$slots, "trigger", { isOpen: n }, () => [
          (u(), d(C(t.triggerTextElement), null, {
            default: i(() => [
              T(A(t.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        l(e.$slots, "icon", { isOpen: n }, () => [
          B("span", {
            class: _(c.value.icon)
          }, [
            E(M, {
              icon: n ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: i(({ isOpen: n, toggle: x }) => [
        l(e.$slots, "default", {
          isOpen: n,
          toggle: x
        })
      ]),
      _: 3
    }, 8, ["id", "model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
};
export {
  I as default
};
