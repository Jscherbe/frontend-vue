import { markRaw } from "vue";

/**
 * @typedef {Object} TourStep
 * @property {String|Function|HTMLElement} [target] - The CSS selector, DOM element, or function returning either, for the target element. If omitted or resolves to falsy, step renders as a modal.
 * @property {String|Function|HTMLElement} [highlightElement] - Element to highlight if different from target. Falls back to target if not provided.
 * @property {String} [title] - The title text for the step.
 * @property {String|Array|Object} [titleClass] - Class to apply to the title.
 * @property {String|Array|Object} [pagerClass] - Class to apply to the pager footer.
 * @property {String} [content] - The content text for the step.
 * @property {Object} [component] - A Vue component to completely replace the modal/popover wrapper and layout.
 * @property {Object} [contentComponent] - A Vue component to replace the step text content, keeping the modal/popover wrappers and default footer.
 * @property {Object} [componentProps] - Props to bind to the custom component.
 * @property {Boolean} [hideFooter] - If true, hides the default tour footer (Next/Back buttons).
 * @property {Boolean} [hideProgress] - If true, hides the "Part X / Y" progress indicator for this step.
 * @property {String} [placement] - Floating UI placement string (e.g. 'bottom', 'right').
 * @property {Boolean} [highlight] - If true, darkens the backdrop around the target element.
 * @property {Boolean|Function} [skip] - If true or returns true, this step will be skipped when navigating the tour.
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
   * @param {Boolean} [tour.hideProgress] - Globally hides the progress indicator for all steps unless overridden.
   * @param {Function} [tour.onStart] - Async hook called before the tour starts.
   * @param {Function} [tour.onStop] - Async hook called when the tour is closed/finished.
   */
  async start(tour) {
    if (state.isTransitioning) return;
    state.isTransitioning = true;
    try {
      if (!tour?.steps?.length) return;
      if (typeof tour.onStart === 'function') {
        await tour.onStart();
      }

      let startIndex = 0;
      while (startIndex < tour.steps.length) {
        const step = tour.steps[startIndex];
        const shouldSkip = typeof step.skip === 'function' ? await step.skip() : step.skip;
        if (!shouldSkip) break;
        startIndex++;
      }

      if (startIndex >= tour.steps.length) {
        if (typeof tour.onStop === 'function') await tour.onStop();
        return;
      }

      await this._runHooks(tour.steps[startIndex]);
      state.active = markRaw(tour);
      state.stepIndex = startIndex;
    } finally {
      state.isTransitioning = false;
    }
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    if (state.isTransitioning) return;
    const active = state.active;
    if (!active) return;
    
    state.isTransitioning = true;
    try {
      let nextIndex = state.stepIndex + 1;
      while (nextIndex < active.steps.length) {
        const step = active.steps[nextIndex];
        const shouldSkip = typeof step.skip === 'function' ? await step.skip() : step.skip;
        if (!shouldSkip) break;
        nextIndex++;
      }

      if (nextIndex < active.steps.length) {
        await this._runLeaveHook(active.steps[state.stepIndex]);
        await this._runHooks(active.steps[nextIndex]);
        state.stepIndex = nextIndex;
      } else {
        await this.stop(true);
      }
    } finally {
      state.isTransitioning = false;
    }
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    if (state.isTransitioning) return;
    const active = state.active;
    if (!active) return;
    
    state.isTransitioning = true;
    try {
      let prevIndex = state.stepIndex - 1;
      while (prevIndex >= 0) {
        const step = active.steps[prevIndex];
        const shouldSkip = typeof step.skip === 'function' ? await step.skip() : step.skip;
        if (!shouldSkip) break;
        prevIndex--;
      }

      if (prevIndex >= 0) {
        await this._runLeaveHook(active.steps[state.stepIndex]);
        await this._runHooks(active.steps[prevIndex]);
        state.stepIndex = prevIndex;
      }
    } finally {
      state.isTransitioning = false;
    }
  },
  /**
   * Stops and closes the current tour
   * @param {Boolean} [internalBypass=false] - Used internally to bypass transition check
   */
  async stop(internalBypass = false) {
    if (!internalBypass && state.isTransitioning) return;
    state.isTransitioning = true;
    try {
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
    } finally {
      state.isTransitioning = false;
    }
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
