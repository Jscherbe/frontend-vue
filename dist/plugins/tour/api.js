import { markRaw as o } from "vue";
const s = (e) => ({
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
   * @param {Function} [tour.onStop] - Async hook called when the tour is closed/finished.
   */
  async start(n) {
    n?.steps?.length && (await this._runHooks(n.steps[0]), e.active = o(n), e.stepIndex = 0);
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    const n = e.active;
    if (n)
      if (e.stepIndex < n.steps.length - 1) {
        await this._runLeaveHook(n.steps[e.stepIndex]);
        const i = e.stepIndex + 1;
        await this._runHooks(n.steps[i]), e.stepIndex = i;
      } else
        await this.stop();
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    const n = e.active;
    if (n && e.stepIndex > 0) {
      await this._runLeaveHook(n.steps[e.stepIndex]);
      const i = e.stepIndex - 1;
      await this._runHooks(n.steps[i]), e.stepIndex = i;
    }
  },
  /**
   * Stops and closes the current tour
   */
  async stop() {
    const n = e.active;
    n && (n.steps[e.stepIndex] && await this._runLeaveHook(n.steps[e.stepIndex]), typeof n.onStop == "function" && await n.onStop()), e.active = null, e.stepIndex = 0;
  },
  /**
   * Internal method to run asynchronous enter hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runHooks(n) {
    n && typeof n.onEnter == "function" && await n.onEnter();
  },
  /**
   * Internal method to run asynchronous leave hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runLeaveHook(n) {
    n && typeof n.onLeave == "function" && await n.onLeave();
  }
});
export {
  s as createApi
};
