import { reactive as e } from "vue";
import u from "./UluTourDisplay.vue.js";
import { createApi as i } from "./api.js";
function s(o) {
  const t = e({
    active: null,
    stepIndex: 0
  }), r = i(t);
  o.component("UluTourDisplay", u), o.config.globalProperties.$uluTour = r, o.config.globalProperties.$uluTourState = t, o.provide("uluTour", r), o.provide("uluTourState", t);
}
export {
  u as UluTourDisplay,
  s as default
};
