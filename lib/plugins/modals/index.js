/**
 * @module plugins/modals/index.js
 * @version 3.0.0
 * Modals plugin (adds components, global registry, etc)
 * - Updated version handles both independent and global registered/triggered modals
 */

import UluModalsDisplay from "./UluModalsDisplay.vue";
import UluModal from "../../components/collapsible/UluModal.vue";
import { createApi, modalsState } from "./api.js";

/**
 * Default plugin options
 * @typedef {Object} UluModalsPluginOptions
 * @property {String} componentNameDisplay Name for modals component that displays app-wide modals
 * @property {String} componentNameModal Name for modal component
 * @property {Array} modals Modals configs [{ name, component, props }]
 * @property {UluModalOptions} modalOptions Options to merge into individual modal options (to serve as defaults for each modal, see UluModalOptions)
 */
const pluginDefaults = {
  componentNameDisplay: "UluModalsDisplay",
  componentNameModal: "UluModal",
  modals: [],
  modalOptions: {}
};

/**
 * Modals Vue Plugin
 * @param {Object} App Vue app instance passed to plugin
 * @param {UluModalsPluginOptions} userOptions Options to change (see defaults)
 */
export default function install(app, userOptions) {
  const options = Object.assign({}, pluginDefaults, userOptions);

  // Merges in default modal config options on individual modal config
  const resolveModalOptions = opts => Object.assign({}, options.modalOptions, opts);

  const api = createApi(resolveModalOptions);

  // Register the two global components
  app.component(options.componentNameDisplay, UluModalsDisplay);
  app.component(options.componentNameModal, UluModal);

  // Create array to be used internally to manage individual modals
  options.modals.forEach(config => {
    api.add(config)
  });

  modalsState.options = options;

  // Global property with API so user can interact with modals
  app.config.globalProperties.$uluModals = api;
  
  // Provide the api for composition api usage
  app.provide('uluModals', api);

  // Global property for modals component to access state
  // and for debugging logging if needed
  app.config.globalProperties.$uluModalsState = modalsState;
}