import { ref as B, watch as h, computed as i, onMounted as k, createElementBlock as o, openBlock as n, normalizeClass as w, unref as V, createElementVNode as l, createCommentVNode as f, toDisplayString as u, normalizeStyle as S, renderSlot as y, createTextVNode as v } from "vue";
import { useModifiers as _ } from "../../composables/useModifiers.js";
const b = { class: "hidden-visually" }, x = { class: "progress-circle__chart" }, M = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, N = {
  key: 0,
  class: "progress-circle__chart-value"
}, $ = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, z = {
  __name: "UluProgressCircle",
  props: {
    /**
     * The label for accessibility (visually hidden).
     */
    label: {
      type: String,
      default: "Progress"
    },
    /**
     * The progress percentage (0-100).
     */
    percentage: {
      type: Number,
      default: 0
    },
    /**
     * A function to format the percentage value.
     * Takes the number as input and should return a string.
     */
    formatValue: {
      type: Function,
      default: (a) => `${a}%`
    },
    /**
     * Hides the percentage value display.
     */
    noValue: Boolean,
    /**
     * Renders a smaller version of the component.
     */
    small: Boolean,
    /**
     * Displays the percentage value outside (to the side) of the circle.
     */
    outside: Boolean,
    /**
     * Displays the percentage value below the circle.
     */
    outsideBelow: Boolean,
    /**
     * Applies the 'danger' style.
     */
    danger: Boolean,
    /**
     * Applies the 'warning' style.
     */
    warning: Boolean,
    /**
     * Applies the 'success' style.
     */
    success: Boolean,
    /**
     * Renders the component as a solid pie chart instead of a donut.
     */
    pieStyle: Boolean,
    /**
     * Removes the center mask, filling the entire circle.
     */
    noMask: Boolean,
    /**
     * The duration of the animation in milliseconds.
     */
    duration: {
      type: Number,
      default: 1e3
      // Matches SCSS animation-duration
    },
    /**
     * The easing function for the animation.
     */
    easing: {
      type: String,
      default: "ease-in"
      // Matches SCSS animation-timing
    },
    /**
     * Modifiers (to add any modifier classes based on base class)
     */
    modifiers: [String, Array]
  },
  setup(a) {
    const e = a, t = B(null), d = (s) => s === 100 ? 101 : s, g = (s = 0) => {
      if (!t.value || !t.value.animate) return;
      const r = { strokeDasharray: [`${s} 100`, m.value] };
      t.value.animate(r, { duration: e.duration, easing: e.easing, fill: "forwards" });
    };
    h(() => e.percentage, (s, r) => {
      s !== r && g(d(r));
    });
    const m = i(() => `${d(e.percentage)} 100`), c = i(() => e.outside || e.outsideBelow || e.small), { resolvedModifiers: p } = _({
      props: e,
      baseClass: "progress-circle",
      internal: i(() => ({
        small: e.small,
        pie: e.pieStyle,
        outside: c.value,
        "outside-below": e.outsideBelow,
        "no-mask": e.noMask,
        danger: e.danger,
        warning: e.warning,
        success: e.success
      }))
    });
    return k(() => {
      g();
    }), (s, r) => (n(), o("div", {
      class: w(["progress-circle", V(p)])
    }, [
      l("strong", b, u(a.label), 1),
      l("div", x, [
        (n(), o("svg", M, [
          r[0] || (r[0] = l("circle", {
            class: "progress-circle__chart-track",
            r: "16",
            cx: "16",
            cy: "16"
          }, null, -1)),
          l("circle", {
            class: "progress-circle__chart-pie",
            ref_key: "pie",
            ref: t,
            r: "16",
            cx: "16",
            cy: "16",
            style: S({ strokeDasharray: m.value })
          }, null, 4),
          r[1] || (r[1] = l("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !c.value && !a.noValue ? (n(), o("strong", N, [
          y(s.$slots, "value", { value: a.percentage }, () => [
            v(u(a.formatValue(a.percentage)), 1)
          ])
        ])) : f("", !0)
      ]),
      c.value && !a.noValue ? (n(), o("strong", $, [
        y(s.$slots, "value", { value: a.percentage }, () => [
          v(u(a.formatValue(a.percentage)), 1)
        ])
      ])) : f("", !0)
    ], 2));
  }
};
export {
  z as default
};
