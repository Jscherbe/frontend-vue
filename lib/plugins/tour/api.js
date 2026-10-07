import { markRaw } from "vue";

/**
 * @typedef {Object} TourStep
 * @property {String} [target] - The CSS selector for the target element. If omitted, step renders as a modal.
 * @property {String} [title] - The title text for the step.
 * @property {String|Array|Object} [titleClass] - Class to apply to the title.
 * @property {String|Array|Object} [pagerClass] - Class to apply to the pager footer.
 * @property {String} [content] - The content text for the step.
 * @property {Object} [component] - A Vue component to completely replace the modal/popover wrapper and layout.
 * @property {Object} [contentComponent] - A Vue component to replace the step text content, keeping the modal/popover wrappers and default footer.
 * @property {Object} [componentProps] - Props to bind to the custom component.
 * @property {Boolean} [hideFooter] - If true, hides the default tour footer (Next/Back buttons).
 * @property {String} [placement] - Floating UI placement string (e.g. 'bottom', 'right').
 * @property {Boolean} [highlight] - If true, darkens the backdrop around the target element.
 * @property {Object} [modalProps] - Props to pass to the modal (if target is omitted).
 * @property {Object} [popoverProps] - Props to pass to the popover (if target is present).
 * @property {Function} [onEnter] - Async hook called before the step is rendered.
 * @property {Function} [onLeave] - Async hook called after the step is exited.
 */

/**
 * Creates the tour API methods used to control the tour lifecycle
 * @param {Object} state - The reactive state object
 * @returns {Object} Tour API object
 */
export const createApi = (state) => ({
  /**
   * Starts a new tour
   * @param {Object} tour - The tour configuration object
   * @param {TourStep[]} tour.steps - Array of steps for the tour
   * @param {String} [tour.name] - Optional name for the tour
   * @param {Object} [tour.modalProps] - Global props applied to all modal steps in this tour (can be overridden by step)
   * @param {Object} [tour.popoverProps] - Global props applied to all popover steps in this tour (can be overridden by step)
   * @param {String|Array|Object} [tour.modalTitleClass] - Global class applied to the title of modal steps.
   * @param {String|Array|Object} [tour.popoverTitleClass] - Global class applied to the title of popover steps.
   * @param {String|Array|Object} [tour.pagerClass] - Global class applied to the pager.
   * @param {Function} [tour.onStart] - Async hook called before the tour starts.
   * @param {Function} [tour.onStop] - Async hook called when the tour is closed/finished.
   */
  async start(tour) {
    if (!tour?.steps?.length) return;
    if (typeof tour.onStart === 'function') {
      await tour.onStart();
    }
    await this._runHooks(tour.steps[0]);
    state.active = markRaw(tour);
    state.stepIndex = 0;
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    const active = state.active;
    if (!active) return;
    
    if (state.stepIndex < active.steps.length - 1) {
      await this._runLeaveHook(active.steps[state.stepIndex]);
      const nextIndex = state.stepIndex + 1;
      await this._runHooks(active.steps[nextIndex]);
      state.stepIndex = nextIndex;
    } else {
      await this.stop();
    }
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    const active = state.active;
    if (!active) return;
    
    if (state.stepIndex > 0) {
      await this._runLeaveHook(active.steps[state.stepIndex]);
      const prevIndex = state.stepIndex - 1;
      await this._runHooks(active.steps[prevIndex]);
      state.stepIndex = prevIndex;
    }
  },
  /**
   * Stops and closes the current tour
   */
  async stop() {
    const active = state.active;
    if (active) {
      if (active.steps[state.stepIndex]) {
        await this._runLeaveHook(active.steps[state.stepIndex]);
      }
      if (typeof active.onStop === 'function') {
        await active.onStop();
      }
    }
    state.active = null;
    state.stepIndex = 0;
  },
  /**
   * Internal method to run asynchronous enter hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runHooks(step) {
    if (step && typeof step.onEnter === 'function') {
      await step.onEnter();
    }
  },
  /**
   * Internal method to run asynchronous leave hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runLeaveHook(step) {
    if (step && typeof step.onLeave === 'function') {
      await step.onLeave();
    }
  }
});
