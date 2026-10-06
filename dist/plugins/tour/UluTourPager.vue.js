import { computed as s, createElementBlock as p, openBlock as u, createVNode as i, unref as n } from "vue";
import { useTour as c } from "./useTour.js";
import l from "../../components/elements/UluButton.vue.js";
const d = { class: "tour-pager layout-flex-justified" }, y = {
  __name: "UluTourPager",
  setup(m) {
    const { api: r, state: e } = c(), o = s(() => e.active && e.stepIndex === e.active.steps.length - 1);
    return s(() => e.active && e.stepIndex === 0), (x, t) => (u(), p("div", d, [
      i(l, {
        onClick: t[0] || (t[0] = (a) => n(r).prev()),
        text: "Previous",
        disabled: n(e).stepIndex === 0,
        icon: "type:previous",
        iconBefore: "",
        small: "",
        secondary: "",
        transparent: ""
      }, null, 8, ["disabled"]),
      i(l, {
        primary: "",
        icon: o.value ? null : "type:next",
        onClick: t[1] || (t[1] = (a) => n(r).next()),
        text: o.value ? "Finish" : "Next",
        small: ""
      }, null, 8, ["icon", "text"])
    ]));
  }
};
export {
  y as default
};
