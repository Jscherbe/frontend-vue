import { ref, computed } from "vue";
import { useBreakpointManager } from "../../composables/useBreakpointManager.js";

export default function install(app, options) {
  const isMobile = ref(false);

  const defaultOptions = {
    onReady(manager) {
      manager.at("small").max(() => isMobile.value = true);
      manager.at("large").min(() => isMobile.value = false);
    }
  };

  const finalOptions = { ...defaultOptions, ...options };

  const {
    breakpointManager,
    breakpointActive,
    breakpointDirection
  } = useBreakpointManager(finalOptions);

  app.provide("breakpointActive", computed(() => breakpointActive.value));
  app.provide("breakpointDirection", computed(() => breakpointDirection.value));
  app.provide("breakpointManager", computed(() => breakpointManager.value));
  app.provide("isMobile", computed(() => isMobile.value));
}