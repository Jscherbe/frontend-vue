import { createElementBlock as t, openBlock as o, renderSlot as r } from "vue";
const s = { class: "form-theme__actions" }, a = {
  __name: "UluFormActions",
  setup(c) {
    return (e, n) => (o(), t("div", s, [
      r(e.$slots, "default")
    ]));
  }
};
export {
  a as default
};
