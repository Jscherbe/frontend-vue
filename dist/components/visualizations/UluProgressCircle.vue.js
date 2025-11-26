import { ref as h, watch as k, computed as i, onMounted as B, createElementBlock as o, openBlock as c, normalizeClass as V, createElementVNode as a, createCommentVNode as p, toDisplayString as u, normalizeStyle as w, renderSlot as y, createTextVNode as f } from "vue";
const S = { class: "hidden-visually" }, _ = { class: "progress-circle__chart" }, x = {
  class: "progress-circle__chart-svg",
  viewBox: "0 0 32 32"
}, $ = {
  key: 0,
  class: "progress-circle__chart-value"
}, b = {
  key: 0,
  class: "progress-circle__value type-small-x"
}, C = {
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
      default: (s) => `${s}%`
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
     * Sets the status color of the progress circle (e.g., 'low', 'incomplete', 'complete').
     */
    status: {
      type: String,
      default: ""
    },
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
    }
  },
  setup(s) {
    const e = s, l = h(null), d = (r) => r === 100 ? 101 : r, g = (r = 0) => {
      if (!l.value || !l.value.animate) return;
      const t = { strokeDasharray: [`${r} 100`, m.value] };
      l.value.animate(t, { duration: e.duration, easing: e.easing, fill: "forwards" });
    };
    k(() => e.percentage, (r, t) => {
      r !== t && g(d(t));
    });
    const m = i(() => `${d(e.percentage)} 100`), n = i(() => e.outside || e.outsideBelow || e.small), v = i(() => {
      const r = {
        "progress-circle": !0,
        "progress-circle--small": e.small,
        "progress-circle--pie": e.pieStyle,
        "progress-circle--outside": n.value,
        "progress-circle--outside-below": e.outsideBelow,
        "progress-circle--no-mask": e.noMask
      };
      return e.status && (r[`progress-circle--${e.status}`] = !0), r;
    });
    return B(() => {
      g();
    }), (r, t) => (c(), o("div", {
      class: V(v.value)
    }, [
      a("strong", S, u(s.label), 1),
      a("div", _, [
        (c(), o("svg", x, [
          t[0] || (t[0] = a("circle", {
            class: "progress-circle__chart-track",
            r: "16",
            cx: "16",
            cy: "16"
          }, null, -1)),
          a("circle", {
            class: "progress-circle__chart-pie",
            ref_key: "pie",
            ref: l,
            r: "16",
            cx: "16",
            cy: "16",
            style: w({ strokeDasharray: m.value })
          }, null, 4),
          t[1] || (t[1] = a("circle", {
            class: "progress-circle__chart-mask",
            cx: "16",
            cy: "16"
          }, null, -1))
        ])),
        !n.value && !s.noValue ? (c(), o("strong", $, [
          y(r.$slots, "value", { value: s.percentage }, () => [
            f(u(s.formatValue(s.percentage)), 1)
          ])
        ])) : p("", !0)
      ]),
      n.value && !s.noValue ? (c(), o("strong", b, [
        y(r.$slots, "value", { value: s.percentage }, () => [
          f(u(s.formatValue(s.percentage)), 1)
        ])
      ])) : p("", !0)
    ], 2));
  }
};
export {
  C as default
};
