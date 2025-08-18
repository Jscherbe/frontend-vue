import { ref, markRaw, onBeforeMount } from "vue";

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
 * @return {Object} { manager, active, direction } (all are null in SSR environment)
 */
export function useBreakpointManager(options) {
  const config = Object.assign({}, defaults, options);

  const breakpointManager = ref(null);
  const breakpointActive = ref(config.initialValue);
  const breakpointDirection = ref(null);

  // We don't want this happening in SSR
  onBeforeMount(async () => {
    const mod = await import("@ulu/frontend/js/ui/breakpoints.js");
    const { CssBreakpoints } = mod;
    const manager = markRaw(new CssBreakpoints(config.plugin));
    
    breakpointManager.value = markRaw(manager);
    
    const setValues = () => {
      breakpointActive.value = manager.active;
      breakpointDirection.value = manager.resizeDirection;
    };
    // Initialize for the first time and watch for changes
    setValues();
    options?.onReady(manager);
    manager.onChange(setValues);
  });

  return { breakpointManager, breakpointActive, breakpointDirection };
}
