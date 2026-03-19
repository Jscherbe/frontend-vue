import { computed as m, createElementBlock as n, openBlock as s, normalizeClass as v, unref as B, createCommentVNode as r, createElementVNode as o, createBlock as h, resolveDynamicComponent as k, withCtx as V, renderSlot as i, createTextVNode as d, toDisplayString as u, normalizeStyle as b } from "vue";
import { useModifiers as $ } from "../../composables/useModifiers.js";
const C = {
  key: 0,
  class: "progress-bar__header"
}, H = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, N = {
  key: 2,
  class: "progress-bar__icon"
}, S = { class: "progress-bar__track" }, A = {
  key: 1,
  class: "progress-bar__values"
}, D = { class: "progress-bar__value progress-bar__value--amount" }, E = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, I = { class: "progress-bar__value progress-bar__value--total" }, M = {
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
    * Applies the 'positive' style (e.g., green).
    */
    positive: Boolean,
    /**
    * Applies the 'negative' style (e.g., red).
    */
    negative: Boolean,
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
    const a = e, c = (t, l) => `${l === 0 ? 0 : t / l * 100}%`, f = m(() => a.indeterminate ? null : c(a.amount, a.total)), g = m(() => c(a.deficit, a.total)), { resolvedModifiers: y } = $({
      props: a,
      baseClass: "progress-bar",
      internal: m(() => ({
        small: a.small,
        positive: a.positive,
        negative: a.negative,
        loader: a.loader,
        rounded: a.rounded,
        indeterminate: a.indeterminate
      }))
    });
    return (t, l) => (s(), n("div", {
      class: v(["progress-bar", [
        B(y),
        { "type-small": e.small }
      ]])
    }, [
      e.label || t.$slots.label || t.$slots.icon || e.amountInHeader ? (s(), n("div", C, [
        e.label ? (s(), h(k(e.labelElement), {
          key: 0,
          class: v(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: V(() => [
            i(t.$slots, "label", {}, () => [
              d(u(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : r("", !0),
        e.amountInHeader ? (s(), n("div", H, [
          l[0] || (l[0] = o("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            d(u(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : r("", !0),
        t.$slots.icon ? (s(), n("div", N, [
          i(t.$slots, "icon")
        ])) : r("", !0)
      ])) : r("", !0),
      o("div", S, [
        o("div", {
          class: "progress-bar__bar",
          style: b({ width: f.value })
        }, null, 4),
        e.deficit > 0 ? (s(), n("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: b({ width: g.value })
        }, null, 4)) : r("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (s(), n("div", A, [
        o("div", D, [
          l[1] || (l[1] = o("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            d(u(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (s(), n("div", E, [
          l[2] || (l[2] = o("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          i(t.$slots, "valueDeficit", { value: e.deficit }, () => [
            d("-" + u(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : r("", !0),
        o("div", I, [
          l[3] || (l[3] = o("strong", { class: "hidden-visually" }, "Total:", -1)),
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
