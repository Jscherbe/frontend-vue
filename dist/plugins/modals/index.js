import n from "./UluModalsDisplay.vue.js";
import e from "../../components/collapsible/UluModal.vue.js";
import { createApi as d, modalsState as a } from "./api.js";
const r = {
  modals: [],
  modalOptions: {}
};
function p(o, i) {
  const s = Object.assign({}, r, i), l = d((t) => Object.assign({}, s.modalOptions, t));
  o.component("UluModalsDisplay", n), o.component("UluModal", e), s.modals.forEach((t) => {
    l.add(t);
  }), a.options = s, o.config.globalProperties.$uluModals = l, o.provide("uluModals", l), o.config.globalProperties.$uluModalsState = a;
}
export {
  p as default
};
