import { ref, computed } from "vue";
import { useBreakpointManager } from "../../composables/useBreakpointManager";

export default {
  install: (app, options) => {
    const isMobile = ref(false);

    const defaultOptions = {
      onReady(manager) {
        manager.at("small").max(() => isMobile.value = true);
        manager.at("large").min(() => isMobile.value = false);
      }
    };

    const {
      breakpointManager,
      breakpointActive,
      breakpointDirection
    } = useBreakpointManager(options || defaultOptions);

    app.provide("breakpointActive", computed(() => breakpointActive));
    app.provide("breakpointDirection", computed(() => breakpointDirection));
    app.provide("breakpointManager", computed(() => breakpointManager));
    app.provide("isMobile", computed(() => isMobile));
  }
};
