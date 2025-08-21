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