import { markRaw as o } from "vue";
const a = (n) => ({
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
        typeof i.onStart == "function" && await i.onStart();
        let s = 0;
        for (; s < i.steps.length; ) {
          const e = i.steps[s];
          if (!(typeof e.skip == "function" ? await e.skip() : e.skip)) break;
          s++;
        }
        if (s >= i.steps.length) {
          typeof i.onStop == "function" && await i.onStop();
          return;
        }
        await this._runHooks(i.steps[s]), n.active = o(i), n.stepIndex = s;
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
        let s = n.stepIndex + 1;
        for (; s < i.steps.length; ) {
          const e = i.steps[s];
          if (!(typeof e.skip == "function" ? await e.skip() : e.skip)) break;
          s++;
        }
        s < i.steps.length ? (await this._runLeaveHook(i.steps[n.stepIndex]), await this._runHooks(i.steps[s]), n.stepIndex = s) : await this.stop(!0);
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
        let s = n.stepIndex - 1;
        for (; s >= 0; ) {
          const e = i.steps[s];
          if (!(typeof e.skip == "function" ? await e.skip() : e.skip)) break;
          s--;
        }
        s >= 0 && (await this._runLeaveHook(i.steps[n.stepIndex]), await this._runHooks(i.steps[s]), n.stepIndex = s);
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
        const s = n.active;
        s && (s.steps[n.stepIndex] && await this._runLeaveHook(s.steps[n.stepIndex]), typeof s.onStop == "function" && await s.onStop()), n.active = null, n.stepIndex = 0;
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
  a as createApi
};
