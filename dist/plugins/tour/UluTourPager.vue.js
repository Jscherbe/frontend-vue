import { computed as a, createElementBlock as u, openBlock as c, normalizeClass as m, unref as s, createVNode as o } from "vue";
import { useTour as d } from "./useTour.js";
import l from "../../components/elements/UluButton.vue.js";
const y = {
  __name: "UluTourPager",
  setup(v) {
    const { api: n, state: e } = d(), i = a(() => e.active?.steps[e.stepIndex]), r = a(() => e.active && e.stepIndex === e.active.steps.length - 1);
    return (x, t) => (c(), u("div", {
      class: m([
        "tour-pager layout-flex-justified",
        s(e).active?.pagerClass,
        i.value?.pagerClass
      ])
    }, [
      o(l, {
        onClick: t[0] || (t[0] = (p) => s(n).prev()),
        text: "Previous",
        disabled: s(e).stepIndex === 0,
        icon: "type:previous",
        iconBefore: "",
        small: "",
        secondary: "",
        transparent: ""
      }, null, 8, ["disabled"]),
      o(l, {
        primary: "",
        icon: r.value ? null : "type:next",
        onClick: t[1] || (t[1] = (p) => s(n).next()),
        text: r.value ? "Finish" : "Next",
        small: ""
      }, null, 8, ["icon", "text"])
    ], 2));
  }
};
export {
  y as default
};
