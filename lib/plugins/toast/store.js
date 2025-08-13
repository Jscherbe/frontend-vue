import { reactive } from "vue";
import defaults from "./defaults.js";

const { assign: merge } = Object;
let counter = 0;

/**
 * Reactive State Object (used inside global components, and as API globally)
 */
export const store = reactive({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: defaults.pluginOptions,
  toastOptions: defaults.toastOptions,
  setToastOptions(options) {
    this.toastOptions = merge({}, this.toastOptions, options);
    return this.pluginOptions;
  },
  setPluginOptions(options) {
    this.pluginOptions = merge({}, this.pluginOptions, options);
    return this.pluginOptions;
  },
  createToast(options) {
    const uid = `toast-${ ++counter }`;
    return merge({}, this.toastOptions, options, { 
      uid,
      close() {
        api.remove(uid);
      }
    });
  }
});

/**
 * Public API
 */
export const api = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(options) {
    const toast = store.createToast(options);
    store.toasts.unshift(toast);
    if (toast.duration) {
      setTimeout(() => {
        this.remove(toast.uid);
      }, toast.duration);
    }
    return toast;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(uid) {
    const index = store.toasts.findIndex(t => t.uid === uid);
    if (index > -1) {
      store.toasts.splice(index, 1);
    }
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    store.toasts = [];
  },
};