import n from "./UluModalsDisplay.vue.js";
import e from "../../components/collapsible/UluModal.vue.js";
import { createApi as d, modalsState as a } from "./api.js";
const r = {
  modals: [],
  modalOptions: {}
};
function f(o, i) {
  const l = Object.assign({}, r, i), s = d((t) => Object.assign({}, l.modalOptions, t));
  o.component("UluModalsDisplay", n), o.component("UluModal", e), l.modals.forEach((t) => {
    s.add(t);
  }), a.options = l, o.config.globalProperties.$uluModals = s, o.provide("uluModals", s), o.config.globalProperties.$uluModalsState = a;
}
export {
  f as default
};
