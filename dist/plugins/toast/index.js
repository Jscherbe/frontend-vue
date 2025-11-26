import { store as s, api as l } from "./store.js";
import i from "./UluToast.vue.js";
import a from "./UluToastDisplay.vue.js";
function e(o, t = {}) {
  s.setPluginOptions(t?.plugin), s.setToastOptions(t?.toast), o.component("UluToast", i), o.component("UluToastDisplay", a), o.config.globalProperties.$uluToast = l, o.provide("uluToast", l);
}
export {
  e as default
};
