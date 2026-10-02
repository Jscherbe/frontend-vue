import { reactive, markRaw } from "vue";

/**
 * Global reactive state for the tour plugin
 * @type {Object}
 * @property {Object|null} active - The currently active tour configuration
 * @property {Number} stepIndex - The index of the current step in the active tour
 */
export const tourState = reactive({
  active: null,
  stepIndex: 0
});

/**
 * Creates the tour API methods used to control the tour lifecycle
 * @returns {Object} Tour API object
 */
export const createApi = () => ({
  /**
   * Starts a new tour
   * @param {Object} tour - The tour configuration object containing a steps array
   */
  async start(tour) {
    if (!tour?.steps?.length) return;
    await this._runHooks(tour.steps[0]);
    tourState.active = markRaw(tour);
    tourState.stepIndex = 0;
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    const active = tourState.active;
    if (!active) return;
    
    if (tourState.stepIndex < active.steps.length - 1) {
      const nextIndex = tourState.stepIndex + 1;
      await this._runHooks(active.steps[nextIndex]);
      tourState.stepIndex = nextIndex;
    } else {
      this.stop();
    }
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    const active = tourState.active;
    if (!active) return;
    
    if (tourState.stepIndex > 0) {
      const prevIndex = tourState.stepIndex - 1;
      await this._runHooks(active.steps[prevIndex]);
      tourState.stepIndex = prevIndex;
    }
  },
  /**
   * Stops and closes the current tour
   */
  stop() {
    tourState.active = null;
    tourState.stepIndex = 0;
  },
  /**
   * Internal method to run asynchronous lifecycle hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runHooks(step) {
    if (step && typeof step.onEnter === 'function') {
      await step.onEnter();
    }
  }
});

