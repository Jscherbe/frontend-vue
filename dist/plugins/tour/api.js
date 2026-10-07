import { markRaw as s } from "vue";
const r = (n) => ({
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
  async start(i) {
    if (!n.isTransitioning) {
      n.isTransitioning = !0;
      try {
        if (!i?.steps?.length) return;
        typeof i.onStart == "function" && await i.onStart(), await this._runHooks(i.steps[0]), n.active = s(i), n.stepIndex = 0;
      } finally {
        n.isTransitioning = !1;
      }
    }
  },
  /**
   * Advances the tour to the next step, or stops if it is the last step
   */
  async next() {
    if (n.isTransitioning) return;
    const i = n.active;
    if (i) {
      n.isTransitioning = !0;
      try {
        if (n.stepIndex < i.steps.length - 1) {
          await this._runLeaveHook(i.steps[n.stepIndex]);
          const e = n.stepIndex + 1;
          await this._runHooks(i.steps[e]), n.stepIndex = e;
        } else
          await this.stop(!0);
      } finally {
        n.isTransitioning = !1;
      }
    }
  },
  /**
   * Returns the tour to the previous step
   */
  async prev() {
    if (n.isTransitioning) return;
    const i = n.active;
    if (i) {
      n.isTransitioning = !0;
      try {
        if (n.stepIndex > 0) {
          await this._runLeaveHook(i.steps[n.stepIndex]);
          const e = n.stepIndex - 1;
          await this._runHooks(i.steps[e]), n.stepIndex = e;
        }
      } finally {
        n.isTransitioning = !1;
      }
    }
  },
  /**
   * Stops and closes the current tour
   * @param {Boolean} [internalBypass=false] - Used internally to bypass transition check
   */
  async stop(i = !1) {
    if (!(!i && n.isTransitioning)) {
      n.isTransitioning = !0;
      try {
        const e = n.active;
        e && (e.steps[n.stepIndex] && await this._runLeaveHook(e.steps[n.stepIndex]), typeof e.onStop == "function" && await e.onStop()), n.active = null, n.stepIndex = 0;
      } finally {
        n.isTransitioning = !1;
      }
    }
  },
  /**
   * Internal method to run asynchronous enter hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runHooks(i) {
    i && typeof i.onEnter == "function" && await i.onEnter();
  },
  /**
   * Internal method to run asynchronous leave hooks on a step
   * @param {Object} step - The tour step configuration
   */
  async _runLeaveHook(i) {
    i && typeof i.onLeave == "function" && await i.onLeave();
  }
});
export {
  r as createApi
};
