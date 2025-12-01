import { ref, markRaw } from "vue";
import { isBrowser } from "@ulu/utils/browser/dom.js";

const defaults = {
  /**
   * Set an initial value (value in mounted, SSR)
   */
  initialValue: null,
  /**
   * Function called after init (passed manager)
   */
  onReady: null,
  /**
   * Options sent to CssBreakpoints library
   */
  plugin: {
    customProperty: "--breakpoint"
  }
};

/**
 * A composable that provides a reactive interface to the `@ulu/frontend/js/ui/breakpoints.js` library.
 * It manages breakpoint state and provides reactive variables for the active breakpoint and resize direction.
 * This is intended for standalone use; for app-wide integration, use the `breakpointsPlugin`.
 *
 * @param {object} options - Configuration options.
 * @param {string} [options.initialValue=null] - Initial value for the active breakpoint, useful for SSR.
 * @param {Function} [options.onReady] - A callback function that receives the `BreakpointManager` instance once it's initialized.
 * @param {object} [options.plugin] - Options to pass directly to the underlying `BreakpointManager` library.
 * @returns {{
 *   breakpointManager: import('vue').Ref<import('@ulu/frontend').BreakpointManager | null>,
 *   breakpointActive: import('vue').Ref<string | null>,
 *   breakpointDirection: import('vue').Ref<string | null>
 * }} An object containing reactive refs for:
 * - `breakpointManager`: The `BreakpointManager` instance.
 * - `breakpointActive`: The name of the currently active breakpoint.
 * - `breakpointDirection`: The direction of the last resize (`'up'` or `'down'`).
 */
export function useBreakpointManager(options) {
  const config = Object.assign({}, defaults, options);

  const breakpointManager = ref(null);
  const breakpointActive = ref(config.initialValue);
  const breakpointDirection = ref(null);

  const init = async () => {
    if (!isBrowser()) return;

    // Wait for the DOM to be ready before initializing the breakpoint manager
    await new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => resolve());
      } else {
        resolve();
      }
    });

    const { BreakpointManager } = await import("@ulu/frontend/js/ui/breakpoints.js");
    const manager = markRaw(new BreakpointManager(config.plugin));
    
    breakpointManager.value = markRaw(manager);
    
    const setValues = () => {
      breakpointActive.value = manager.active;
      breakpointDirection.value = manager.resizeDirection;
    };
    
    setValues();
    if (config.onReady) {
      config.onReady(manager);
    }
    manager.onChange(setValues);
  };

  // Initialize automatically
  init();

  return { breakpointManager, breakpointActive, breakpointDirection };
}
