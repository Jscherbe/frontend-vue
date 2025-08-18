import { store, api } from "./store.js";
import UluToast from "./UluToast.vue";
import UluToastDisplay from "./UluToastDisplay.vue";

/**
 * Install plugin
 */
export default function install(app, userOptions = {}) {
  const options = store.setPluginOptions(userOptions?.plugin);
  store.setToastOptions(userOptions?.toast);

  app.component(options.componentName, UluToast);
  app.component(options.componentNameDisplay, UluToastDisplay);

  app.config.globalProperties.$uluToast = api;
  app.provide('uluToast', api);
}