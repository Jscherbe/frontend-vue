import { reactive as r } from "vue";
import n from "./defaults.js";
const { assign: i } = Object;
let a = 0;
const o = r({
  toasts: [],
  /**
   * Saveable 
   */
  pluginOptions: n.pluginOptions,
  toastOptions: n.toastOptions,
  setToastOptions(s) {
    return this.toastOptions = i({}, this.toastOptions, s), this.pluginOptions;
  },
  setPluginOptions(s) {
    return this.pluginOptions = i({}, this.pluginOptions, s), this.pluginOptions;
  },
  createToast(s) {
    const t = `toast-${++a}`;
    return i({}, this.toastOptions, s, {
      uid: t,
      close() {
        p.remove(t);
      }
    });
  }
}), p = {
  /**
   * 
   * @param {Object} options Toast options
   * @returns Toast object (to be used to remove)
   */
  add(s) {
    const t = o.createToast(s);
    return o.toasts.unshift(t), t.duration && setTimeout(() => {
      this.remove(t.uid);
    }, t.duration), t;
  },
  /**
   * 
   * @param {Object} toast Toast uid
   */
  remove(s) {
    const t = o.toasts.findIndex((e) => e.uid === s);
    t > -1 && o.toasts.splice(t, 1);
  },
  /**
   * Remove all toasts
   */
  removeAll() {
    o.toasts = [];
  }
};
export {
  p as api,
  o as store
};
