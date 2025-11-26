import { createElementBlock as s, openBlock as t, normalizeClass as l, renderSlot as i } from "vue";
import n from "../../../_virtual/_plugin-vue_export-helper.js";
const r = {
  name: "SlideShowSlide",
  props: {
    /**
     * Provided by grandparent, not user
     */
    active: Boolean,
    someClassTest: String
  },
  mounted() {
    console.log("slide mounted");
  }
};
function a(e, c, o, d, m, p) {
  return t(), s("li", {
    class: l(["slideshow__slide", { "is-active": o.active }])
  }, [
    i(e.$slots, "default")
  ], 2);
}
const u = /* @__PURE__ */ n(r, [["render", a]]);
export {
  u as default
};
