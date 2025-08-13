import { store, api } from "./store.js";

/**
 * Install plugin
 */
export default function install(app, userOptions = {}) {
  store.setPluginOptions(userOptions?.plugin);
  store.setToastOptions(userOptions?.toast);
  app.config.globalProperties.$uluToast = api;
}