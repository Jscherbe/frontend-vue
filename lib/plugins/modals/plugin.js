/**
 * @module plugins/modals/plugin.js
 * @version 3.0.0
 * Modals plugin (adds components, global registry, etc)
 * - Updated version handles both independent and global registered/triggered modals
 */

import { ref, markRaw } from "vue";
import UluModals from "./UluModals.vue";
import UluModal from "./UluModal.vue";

/**
 * Individual modal defaults
 * @typedef {Object} UluModalOptions
 * @property {Object} component Modal component to be mounted
 * @property {String} position Position option for modals component (ie. center, right, etc)
 * @property {Object} labeledBy Id of the element that should be used to label the modal (usually the headline in the modal header), can be overridden on individual modal config
 * @property {Boolean} clickOutsideCloses Close the modal if the user clicks outside of it, default for all modals, can be overridden on individual modal config
 */
const modalDefaults = {
  component: null,
  position: "center",
  labeledBy: "modal__label",
  clickOutsideCloses: true,
};

/**
 * Default plugin options
 * @typedef {Object} UluModalsPluginOptions
 * @property {String} componentNameModals Name for modals component
 * @property {String} componentNameModal Name for modal component
 * @property {String|Node} teleportTo Element/selector to use for modals, defaults to body so everything is on top of page
 * @property {Object} modals Modals configs 
 * @property {UluModalOptions} modalOptions Options to merge into individual modal options (to serve as defaults for each modal, see UluModalOptions)
 */
const pluginDefaults = {
  componentNameModals: "UluModals",
  componentNameModal: "UluModal",
  teleportTo: "body",
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
  const resolveModalOptions = opts => Object.assign({}, modalDefaults, options.modalOptions, opts);

  // Register the two global components
  app.component(options.componentNameModals, UluModals);
  app.component(options.componentNameModal, UluModal);

  // Create array to be used internally to manage individual modals
  const modals = options.modals.map(config => resolveModalOptions(config));

  /**
   * Reactive State Object (used inside global components)
   */
  const state = ref({
    /**
     * Holds active component options (including component, and options)
     */
    active: null,
    /**
     * Populated with any props passed to open method, bound to modal component
     */
    activeProps: null,
  });

  /**
   * Reactive data from state
   */
  const data = state.value;

  /**
   * State object exposed via global property for modals component
   */
  const modalsState = {
    data,
    options,
    modals,
  };

  /**
   * API exposed to the user (used for interacting with modals)
   */
  const api = {
    open(name, props = null) {
      const modal = this.get(name);
      data.active = markRaw(modal);
      data.activeProps = props;
    },
    /**
     * Close the active modal
     * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
     * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
     */
    close() {
      data.active = null;
      data.activeProps = null;
    },
    /**
     * Get a modal's config object by name
     * @return {Object} Modal config object
     */
    get(name) {
      const modal = modals.find(m => m.name === name);
      if (modal) {
        return modal;
      } else {
        throw new Error(`Unable to find modal named: ${ name }`);
      }
    },
    /**
     * Add a modal config
     */
    add(config) {
      const resolved = resolveModalOptions(config);
      modals.push(resolved);
    },
    /**
     * Removes a modal config by name
     * @return {Object} Modal that was removed
     */
    remove(name) {
      const index = modals.findIndex(m => m.name === name);
      if (index > -1) {
        return modals.splice(index, 1);
      } else {
        warn("unable to find modal to remove");
      }
    }
  };

  // Global property with API so user can interact with modals
  app.config.globalProperties.$uluModals = api;

  // Global property for modals component to access state
  // and for debugging logging if needed
  app.config.globalProperties.$uluModalsState = modalsState;
}