import { store as i, api as s } from "./store.js";
import n from "./UluToast.vue.js";
import l from "./UluToastDisplay.vue.js";
function e(o, t = {}) {
  i.setPluginOptions(t?.plugin), i.setToastOptions(t?.toast), o.component("UluToast", n), o.component("UluToastDisplay", l), o.config.globalProperties.$uluToast = s, o.provide("uluToast", s);
}
export {
  e as default
};
