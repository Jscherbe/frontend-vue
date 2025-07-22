// =============================================================================
// Modals Plugin
// =============================================================================
//
// Version:         2.0.0
//
// Description:     This is a Vue 3 version of modals, that no longer uses the Ally.js library and 
//                  leverages Teleport so that you don't need to create seperate app for the modals
//
// Todo             - Should we make a method (either in  modal config or on close()) to disable
//                    returnFocus on focus trap, so that they could focus programmatically themselves
//                    think this would only be if the user was opening anothe modal. Not sure if this
//                    matters, they could still change focus. Wait for use case to implement


import { ref, markRaw } from "vue";
import AppModals from "./AppModals.vue";
import AppModal from "./AppModal.vue";

const warn = (...msgs) => console.warn("Modals Plugin: ", ...msgs);
// const err = (...msgs) => console.warn("Modals Plugin (error): ", ...msgs);

/**
 * Default options
 * @property {String} componentNameModals Name for modals component
 * @property {String} componentNameModal Name for modal component
 * @property {String|Node} teleportTo Element/selector to use for modals, defaults to body so everything is on top of page
 * @property {Object} modals Modals configs 
 * @property {Object} labeledBy Id of the element that should be used to label the modal (usually the headline in the modal header), can be overriden on individual modal config
 * @property {Boolean} clickOutsideCloses Close the modal if the user clicks outside of it, default for all modals, can be overridden on individual modal config
 */
const defaults = {
  componentNameModals: "AppModals",
  componentNameModal: "AppModal",
  teleportTo: "body",
  modals: [],
  labeledBy: "modal__label",
  clickOutsideCloses: true
};

/**
 * Plugin Install
 */
export default function install(app, userOptions) {
  const options = Object.assign({}, defaults, userOptions);
  const modalOptions = {
    labeledBy: options.labeledBy,
    clickOutsideCloses: options.clickOutsideCloses
  };
  /**
   * Register the two global components
   * - Modals component is the teleporting root component that is used to load any modal into
   */
  app.component(options.componentNameModals, AppModals);
  app.component(options.componentNameModal, AppModal);
  /**
   * Create array to be used internally to manage individual modals
   */
  const modals = options.modals.map(config => setModalDefaults(config));

  /**
   * Reactive State Object (used inside global components)
   */
  const state = ref({
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
   * API exposed to the user (used for interacting with modals)
   */
  const api = {
    data,
    options,
    modals,
    open(name, props = null) {
      const modal = this.get(name);
      if (modal) {
        data.active = markRaw(modal);
        data.activeProps = props;
      } else {
        warn("Unable to find modal named:", name);
      }
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
      return modals.find(m => m.name === name);
    },
    /**
     * Add a modal config
     */
    add(config) {
      modals.push(setModalDefaults(config));
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
  /**
   * Global property with API so user can interact with modals
   */
  app.config.globalProperties.$modals = api;

  /**
   * Merges in default modal config options on individual modal config
   */
  function setModalDefaults(config) {
    const modal = Object.assign({}, modalOptions, config);
    return modal;
  }
}

