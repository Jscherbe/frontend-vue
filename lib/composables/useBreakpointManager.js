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
 * Use the CssBreakpoints module in Vue
 * - Normally use only once, unless you have different sets of breakpoints
 * @param {Object} options Configuration options overrides
 * @return {Object} { manager, active, direction } (all are null in SSR environment until init)
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

    const mod = await import("@ulu/frontend/js/ui/breakpoints.js");
    const { BreakpointManager } = mod;
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
