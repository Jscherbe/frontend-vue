import { inject as r } from "vue";
const l = () => {
  const o = r("uluModals");
  if (!o)
    throw new Error("Modals plugin not installed");
  return o;
};
export {
  l as useModals
};
