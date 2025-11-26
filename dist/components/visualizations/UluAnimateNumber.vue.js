import r from "gsap";
import { createElementBlock as a, openBlock as u, renderSlot as n, createTextVNode as l, toDisplayString as o } from "vue";
import s from "../../_virtual/_plugin-vue_export-helper.js";
const c = {
  name: "AnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  watch: {
    value() {
      r.to(this, {
        tweenValue: this.value,
        onUpdate: () => {
          this.currentValue = Math.ceil(this.tweenValue);
        }
      });
    }
  },
  data() {
    return {
      currentValue: this.value,
      tweenValue: this.value
    };
  }
};
function i(t, p, m, f, e, h) {
  return u(), a("span", null, [
    n(t.$slots, "default", { currentValue: e.currentValue }, () => [
      l(o(e.currentValue), 1)
    ])
  ]);
}
const v = /* @__PURE__ */ s(c, [["render", i]]);
export {
  v as default
};
