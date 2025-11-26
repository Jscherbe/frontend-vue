import { computed as u, createBlock as l, openBlock as s, withCtx as n, renderSlot as o, resolveDynamicComponent as g, createTextVNode as f, toDisplayString as p, createElementVNode as y, normalizeClass as x, createVNode as V } from "vue";
import v from "../elements/UluIcon.vue.js";
import O from "./UluCollapsible.vue.js";
import { useModifiers as T } from "../../composables/useModifiers.js";
const E = {
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
  setup(e, { emit: $ }) {
    const r = e, { resolvedModifiers: c } = T({ props: r, baseClass: "accordion" }), d = u(() => {
      const t = { ...r.classes };
      return t.container = [t.container, c.value], t;
    });
    return (t, i) => (s(), l(O, {
      "model-value": e.modelValue,
      "start-open": e.startOpen,
      "trigger-text": e.triggerText,
      classes: d.value,
      animate: e.animate,
      "onUpdate:modelValue": i[0] || (i[0] = (a) => t.$emit("update:modelValue", a))
    }, {
      trigger: n(({ isOpen: a }) => [
        o(t.$slots, "trigger", { isOpen: a }, () => [
          (s(), l(g(e.triggerTextElement), null, {
            default: n(() => [
              f(p(e.triggerText), 1)
            ]),
            _: 1
          }))
        ]),
        o(t.$slots, "icon", { isOpen: a }, () => [
          y("span", {
            class: x(["accordion__icon", e.classes.icon])
          }, [
            V(v, {
              icon: a ? "type:collapse" : "type:expand",
              style: { display: "inline" }
            }, null, 8, ["icon"])
          ], 2)
        ])
      ]),
      default: n(({ isOpen: a, toggle: m }) => [
        o(t.$slots, "default", {
          isOpen: a,
          toggle: m
        })
      ]),
      _: 3
    }, 8, ["model-value", "start-open", "trigger-text", "classes", "animate"]));
  }
};
export {
  E as default
};
