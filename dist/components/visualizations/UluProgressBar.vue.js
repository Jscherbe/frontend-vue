import { computed as m, createElementBlock as o, openBlock as s, normalizeClass as b, unref as B, createCommentVNode as r, createElementVNode as n, createBlock as h, resolveDynamicComponent as k, withCtx as V, renderSlot as i, createTextVNode as d, toDisplayString as u, normalizeStyle as v } from "vue";
import { useModifiers as $ } from "../../composables/useModifiers.js";
const w = {
  key: 0,
  class: "progress-bar__header"
}, C = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, H = {
  key: 2,
  class: "progress-bar__icon"
}, N = { class: "progress-bar__track" }, S = {
  key: 1,
  class: "progress-bar__values"
}, A = { class: "progress-bar__value progress-bar__value--amount" }, D = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, E = { class: "progress-bar__value progress-bar__value--total" }, M = {
  __name: "UluProgressBar",
  props: {
    /**
    * The label to display above the progress bar. (or use label slot)
    */
    label: String,
    /**
    * Hides the label visually, but keeps it for screen readers.
    */
    labelHidden: Boolean,
    /**
    * Optional classes object (currently only allowing { label } class)
    */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
    * Element to use for label
    */
    labelElement: {
      type: String,
      default: "strong"
    },
    /**
    * The current amount of progress.
    */
    amount: {
      type: Number,
      default: 0
    },
    /**
    * The total amount that represents 100% progress.
    */
    total: {
      type: Number,
      default: 100
    },
    /**
    * The amount of deficit to display on the bar.
    */
    deficit: {
      type: Number,
      default: 0
    },
    /**
    * Renders a smaller version of the progress bar.
    */
    small: Boolean,
    /**
    * Applies the 'success' style.
    */
    success: Boolean,
    /**
    * Applies the 'warning' style.
    */
    warning: Boolean,
    /**
    * Applies the 'danger' style.
    */
    danger: Boolean,
    /**
    * Applies styles for use as a thin loader.
    */
    loader: Boolean,
    /**
    * Applies styles for use as a thin loader.
    */
    rounded: Boolean,
    /**
    * Applies an indeterminate animation for unknown progress.
    */
    indeterminate: Boolean,
    /**
    * Omit values from output (the numbers below the progress bar)
    */
    noValues: Boolean,
    /**
    * A function to format the numerical values (amount, deficit, total).
    * Takes the value and type ('amount', 'deficit', 'total') as input and should return a string.
    */
    formatValue: {
      type: Function,
      default: (e, a) => e
    },
    /**
    * Will put the amount only in header (there is a headerValue slot it you want to format)
    */
    amountInHeader: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  },
  setup(e) {
    const a = e, c = (t, l) => `${l === 0 ? 0 : t / l * 100}%`, g = m(() => a.indeterminate ? null : c(a.amount, a.total)), f = m(() => c(a.deficit, a.total)), { resolvedModifiers: y } = $({
      props: a,
      baseClass: "progress-bar",
      internal: m(() => ({
        small: a.small,
        success: a.success,
        warning: a.warning,
        danger: a.danger,
        loader: a.loader,
        rounded: a.rounded,
        indeterminate: a.indeterminate
      }))
    });
    return (t, l) => (s(), o("div", {
      class: b(["progress-bar", [
        B(y),
        { "type-small": e.small }
      ]])
    }, [
      e.label || t.$slots.label || t.$slots.icon || e.amountInHeader ? (s(), o("div", w, [
        e.label ? (s(), h(k(e.labelElement), {
          key: 0,
          class: b(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: V(() => [
            i(t.$slots, "label", {}, () => [
              d(u(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : r("", !0),
        e.amountInHeader ? (s(), o("div", C, [
          l[0] || (l[0] = n("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            d(u(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : r("", !0),
        t.$slots.icon ? (s(), o("div", H, [
          i(t.$slots, "icon")
        ])) : r("", !0)
      ])) : r("", !0),
      n("div", N, [
        n("div", {
          class: "progress-bar__bar",
          style: v({ width: g.value })
        }, null, 4),
        e.deficit > 0 ? (s(), o("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: v({ width: f.value })
        }, null, 4)) : r("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (s(), o("div", S, [
        n("div", A, [
          l[1] || (l[1] = n("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            d(u(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (s(), o("div", D, [
          l[2] || (l[2] = n("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          i(t.$slots, "valueDeficit", { value: e.deficit }, () => [
            d("-" + u(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : r("", !0),
        n("div", E, [
          l[3] || (l[3] = n("strong", { class: "hidden-visually" }, "Total:", -1)),
          i(t.$slots, "valueTotal", { value: e.total }, () => [
            d(u(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : r("", !0)
    ], 2));
  }
};
export {
  M as default
};
