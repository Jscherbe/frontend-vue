import { reactive as r } from "vue";
import e from "./UluTourDisplay.vue.js";
import { createApi as u } from "./api.js";
function a(o) {
  const t = r({
    active: null,
    stepIndex: 0,
    isTransitioning: !1
  }), i = u(t);
  o.component("UluTourDisplay", e), o.config.globalProperties.$uluTour = i, o.config.globalProperties.$uluTourState = t, o.provide("uluTour", i), o.provide("uluTourState", t);
}
export {
  e as UluTourDisplay,
  a as default
};
