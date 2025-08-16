import { ref, markRaw } from "vue";

// Create array to be used internally to manage individual modals
const modals = [];

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
 * API exposed to the user (used for interacting with modals)
 */
export const api = {
  open(name, props = null) {
    const modal = this.get(name);
    data.active = markRaw(modal);
    data.activeProps = Object.assign({}, modal.props, props);
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
    modals.push(config);
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

export const modalsState = {
  data,
  modals,
};