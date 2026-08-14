import { inject as o } from "vue";
const n = () => {
  const t = o("uluToast");
  if (!t)
    throw new Error("Toast plugin not installed");
  return t;
};
export {
  n as useToast
};
