import { markRaw as t } from "vue";
const o = (e) => ({
  /**
   * Starts a new tour
   * @param {Object} tour - The tour configuration object
   * @param {TourStep[]} tour.steps - Array of steps for the tour
   * @param {String} [tour.name] - Optional name for the tour
   * @param {Object} [tour.modalProps] - Global props applied to all modal steps in this tour (can be overridden by step)
   * @param {Object} [tour.popoverProps] - Global props applied to all popover steps in this tour (can be overridden by step)
   */
  async start(n) {
    n?.steps?.length && (await this._runHooks(n.steps[0]), e.active = t(n), e.stepIndex = 0);
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    const n = e.active;
    if (n)
      if (e.stepIndex < n.steps.length - 1) {
        const s = e.stepIndex + 1;
        await this._runHooks(n.steps[s]), e.stepIndex = s;
      } else
        this.stop();
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    const n = e.active;
    if (n && e.stepIndex > 0) {
      const s = e.stepIndex - 1;
      await this._runHooks(n.steps[s]), e.stepIndex = s;
    }
  },
  /**
   * Stops and closes the current tour
   */
  stop() {
    e.active = null, e.stepIndex = 0;
  },
  /**
   * Internal method to run asynchronous lifecycle hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runHooks(n) {
    n && typeof n.onEnter == "function" && await n.onEnter();
  }
});
export {
  o as createApi
};
