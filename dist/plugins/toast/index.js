import { store as s, api as a } from "./store.js";
import i from "./UluToast.vue.js";
import l from "./UluToastDisplay.vue.js";
function r(o, t = {}) {
  s.setPluginOptions(t?.plugin), s.setToastOptions(t?.toast), o.component("UluToast", i), o.component("UluToastDisplay", l), o.config.globalProperties.$uluToast = a, o.provide("uluToast", a);
}
export {
  i as UluToast,
  l as UluToastDisplay,
  r as default
};
