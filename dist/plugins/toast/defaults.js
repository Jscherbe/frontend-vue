import { markRaw as o } from "vue";
import t from "./UluToast.vue.js";
const a = {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: o(t),
    /**
     * Duration of toast
     */
    duration: 6e3,
    // 8.5s
    /**
     * Array of actions { label, click }
     */
    actions: []
  },
  pluginOptions: {
    teleportTo: "body",
    /**
     * Position of the toast container (holds toasts)
     */
    position: ["top", "right"]
  }
};
export {
  a as default
};
