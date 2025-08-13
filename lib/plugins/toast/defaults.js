import { markRaw } from "vue";
import ToastComponent from "./UluToast.vue";
/**
 * Default plugin options
 */
export default {
  toastOptions: {
    /**
     * Component used to render the toast in the display
     */
    component: markRaw(ToastComponent),
    /**
     * Duration of toast
     */
    duration: 6000, // 8.5s
    /**
     * Array of actions { label, click }
     */
    actions: [],
  },
  pluginOptions: {
    componentName: "UluToast",
    teleportTo: "body",
    /**
     * Position of the toast container (holds toasts)
     */
    position: ["top", "right"],
  }
};