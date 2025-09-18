import { ref, computed } from "vue";
import { useBreakpointManager } from "../../composables/useBreakpointManager.js";

/**
 * Plugin Options
 */
const defaults = {
  /**
   * Breakpoint for mobile down/max
   */
  breakpointMobile: "small",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};

/**
 * Installs the breakpoints plugin, providing app-wide reactive breakpoint information.
 * It uses `useBreakpointManager` internally and provides `uluIsMobile`,
 * `uluBreakpointActive`, `uluBreakpointDirection`, and `uluBreakpointManager` to all components.
 *
 * @param {object} app The Vue app instance.
 * @param {object} userOptions - User-defined options.
 * @param {string} [userOptions.breakpointMobile="small"] - The breakpoint name to use for `isMobile` detection.
 * @param {object} [userOptions.managerOptions] - Options to pass to the underlying `useBreakpointManager`.
 */
export default function install(app, userOptions) {
  const isMobile = ref(false);
  const options = Object.assign({}, defaults, userOptions);
  const { breakpointMobile } = options;
  const { onReady: userOnReady } = options.managerOptions;

  // Setup breakpoint manager options but insert our own onReady (create flag for mobile)
  const pluginManagerOptions = { 
    onReady(manager) {
      manager.at(breakpointMobile).max({
        on() { isMobile.value = true; },
        off() { isMobile.value = false; }
      });
      if (userOnReady) userOnReady(manager);
    }
  };

  const managerOptions = Object.assign({}, options.managerOptions, pluginManagerOptions);

  const {
    breakpointManager,
    breakpointActive,
    breakpointDirection
  } = useBreakpointManager(managerOptions);

  app.provide("uluBreakpointActive", computed(() => breakpointActive.value));
  app.provide("uluBreakpointDirection", computed(() => breakpointDirection.value));
  app.provide("uluBreakpointManager", computed(() => breakpointManager.value));
  app.provide("uluIsMobile", computed(() => isMobile.value));
}