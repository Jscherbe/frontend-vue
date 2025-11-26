import { createElementBlock as t, openBlock as o, renderSlot as n } from "vue";
const r = { class: "form-theme__items-inline" }, m = {
  __name: "UluFormItemsInline",
  setup(s) {
    return (e, l) => (o(), t("div", r, [
      n(e.$slots, "default")
    ]));
  }
};
export {
  m as default
};
