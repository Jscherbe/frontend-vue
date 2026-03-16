import { ref as n, reactive as u, watch as o, createElementBlock as c, openBlock as s, renderSlot as p, createTextVNode as m, toDisplayString as i } from "vue";
import v from "gsap";
const _ = {
  __name: "UluAnimateNumber",
  props: {
    /**
     * The target number to animate to.
     */
    value: Number
  },
  setup(r) {
    const e = r, t = n(e.value), l = u({
      tweenValue: e.value
    });
    return o(() => e.value, (a) => {
      v.to(l, {
        tweenValue: a,
        onUpdate: () => {
          t.value = Math.ceil(l.tweenValue);
        }
      });
    }), (a, f) => (s(), c("span", null, [
      p(a.$slots, "default", { currentValue: t.value }, () => [
        m(i(t.value), 1)
      ])
    ]));
  }
};
export {
  _ as default
};
