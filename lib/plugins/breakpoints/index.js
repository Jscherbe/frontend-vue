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
   * Breakpoint larger than mobile size (think up/min)
   */
  breakpointAfterMobile: "medium",
  /**
   * Options to pass to useBreakpointManager()
   */
  managerOptions: {}
};

export default function install(app, userOptions) {
  const isMobile = ref(false);
  const options = Object.assign({}, defaults, userOptions);
  const { breakpointMobile, breakpointAfterMobile } = options;
  const { onReady: userOnReady } = options.managerOptions;

  // Setup breakpoint manager options but insert our own onReady (create flag for mobile)
  const pluginManagerOptions = { 
    onReady(manager) {
      manager.at(breakpointMobile).max(() => isMobile.value = true);
      manager.at(breakpointAfterMobile).min(() => isMobile.value = false);
      if (userOnReady) userOnReady(manager);
    }
  };

  const managerOptions = Object.assign({}, options.managerOptions, pluginManagerOptions);

  const {
    breakpointManager,
    breakpointActive,
    breakpointDirection
  } = useBreakpointManager(managerOptions);

  app.provide("breakpointActive", computed(() => breakpointActive.value));
  app.provide("breakpointDirection", computed(() => breakpointDirection.value));
  app.provide("breakpointManager", computed(() => breakpointManager.value));
  app.provide("isMobile", computed(() => isMobile.value));
}