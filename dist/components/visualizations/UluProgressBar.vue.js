import { computed as m, createElementBlock as r, openBlock as s, normalizeClass as v, createCommentVNode as n, createElementVNode as o, createBlock as B, resolveDynamicComponent as h, withCtx as k, renderSlot as i, createTextVNode as u, toDisplayString as d, normalizeStyle as b } from "vue";
const V = {
  key: 0,
  class: "progress-bar__header"
}, $ = {
  key: 1,
  class: "progress-bar__value progress-bar__value--amount"
}, C = {
  key: 2,
  class: "progress-bar__icon"
}, H = { class: "progress-bar__track" }, N = {
  key: 1,
  class: "progress-bar__values"
}, S = { class: "progress-bar__value progress-bar__value--amount" }, A = {
  key: 0,
  class: "progress-bar__value progress-bar__value--deficit"
}, D = { class: "progress-bar__value progress-bar__value--total" }, w = {
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
    amountInHeader: Boolean
  },
  setup(e) {
    const a = e, c = (t, l) => `${l === 0 ? 0 : t / l * 100}%`, g = m(() => a.indeterminate ? null : c(a.amount, a.total)), f = m(() => c(a.deficit, a.total)), y = m(() => ({
      "progress-bar": !0,
      "progress-bar--small": a.small,
      "progress-bar--positive": a.positive,
      "progress-bar--negative": a.negative,
      "progress-bar--loader": a.loader,
      "progress-bar--indeterminate": a.indeterminate,
      "type-small": a.small
      // From original component, seems to control font size
    }));
    return (t, l) => (s(), r("div", {
      class: v(y.value)
    }, [
      e.label || t.$slots.label || t.$slots.icon || e.amountInHeader ? (s(), r("div", V, [
        e.label ? (s(), B(h(e.labelElement), {
          key: 0,
          class: v(["progress-bar__label", [e.classes.label, { "hidden-visually": e.labelHidden }]])
        }, {
          default: k(() => [
            i(t.$slots, "label", {}, () => [
              u(d(e.label), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"])) : n("", !0),
        e.amountInHeader ? (s(), r("div", $, [
          l[0] || (l[0] = o("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            u(d(e.formatValue(e.amount, "amount")), 1)
          ])
        ])) : n("", !0),
        t.$slots.icon ? (s(), r("div", C, [
          i(t.$slots, "icon")
        ])) : n("", !0)
      ])) : n("", !0),
      o("div", H, [
        o("div", {
          class: "progress-bar__bar",
          style: b({ width: g.value })
        }, null, 4),
        e.deficit > 0 ? (s(), r("div", {
          key: 0,
          class: "progress-bar__bar--deficit",
          style: b({ width: f.value })
        }, null, 4)) : n("", !0)
      ]),
      !e.noValues && !e.amountInHeader && !e.loader && !e.indeterminate ? (s(), r("div", N, [
        o("div", S, [
          l[1] || (l[1] = o("strong", { class: "hidden-visually" }, "Amount:", -1)),
          i(t.$slots, "valueAmount", { value: e.amount }, () => [
            u(d(e.formatValue(e.amount, "amount")), 1)
          ])
        ]),
        e.deficit > 0 ? (s(), r("div", A, [
          l[2] || (l[2] = o("strong", { class: "hidden-visually" }, "Deficit: ", -1)),
          i(t.$slots, "valueDeficit", { value: e.deficit }, () => [
            u("-" + d(e.formatValue(e.deficit, "deficit")), 1)
          ])
        ])) : n("", !0),
        o("div", D, [
          l[3] || (l[3] = o("strong", { class: "hidden-visually" }, "Total:", -1)),
          i(t.$slots, "valueTotal", { value: e.total }, () => [
            u(d(e.formatValue(e.total, "total")), 1)
          ])
        ])
      ])) : n("", !0)
    ], 2));
  }
};
export {
  w as default
};
