import { reactive, markRaw } from 'vue';
import UluTooltipDisplay from './UluTooltipDisplay.vue';
import UluPopover from "./UluPopover.vue";
import defaults from './defaults.js';
import { useTooltip } from './useTooltip.js';

// Define and export injection keys from the plugin's entry point
export const PopoverOptionsKey = 'uluPopoverOptions';
export const TooltipStateKey = 'uluTooltipState';

// Export the composable
export { useTooltip };

/**
 * Helper to resolve a raw tooltip config into a consistent config object.
 * @param {*} rawConfig - The raw value from the directive or composable.
 * @param {object} tooltipDefaults - The merged default options for tooltips.
 * @returns {object|null} A fully resolved config object or null.
 */
export const resolveTooltipConfig = (rawConfig, tooltipDefaults) => {
  if (rawConfig === false || rawConfig === null) return null;

  let config = rawConfig;
  if (typeof config !== 'object' || Array.isArray(config)) {
    config = { content: config };
  }

  // If a component is passed, mark it as raw to prevent Vue from making it reactive.
  if (config.component) {
    config.component = markRaw(config.component);
  }

  return { ...tooltipDefaults, ...config };
};

/**
 * Install the UluPopovers plugin.
 * @param {object} app - The Vue app instance.
 * @param {object} userOptions - User-defined options to override defaults.
 */
export default function install(app, userOptions = {}) {
  // Merge user options with defaults
  const mergedOptions = {
    plugin: { ...defaults.plugin, ...(userOptions.plugin || {}) },
    popover: { ...defaults.popover, ...(userOptions.popover || {}) },
    tooltip: { ...defaults.tooltip, ...(userOptions.tooltip || {}) },
  };
  
  // This is still needed for components like UluPopover to get the base config
  app.provide(PopoverOptionsKey, mergedOptions);

  // Create and provide the tooltip state and methods
  const tooltipState = reactive({
    visible: false,
    trigger: null,
    config: {},
  });
  const showTooltip = (triggerEl, configObj) => {
    tooltipState.trigger = triggerEl;
    tooltipState.config = configObj;
    tooltipState.visible = true;
  };
  const hideTooltip = () => {
    tooltipState.visible = false;
  };
  
  // This is still needed for useTooltip and useFollow composables
  app.provide(TooltipStateKey, {
    state: tooltipState,
    show: showTooltip,
    hide: hideTooltip,
  });

  // Register components and directives
  app.component('UluTooltipDisplay', UluTooltipDisplay);
  app.component('UluPopover', UluPopover);

  const elementHandlers = new WeakMap();
  const popoverDefaults = mergedOptions.popover;
  const tooltipDefaults = mergedOptions.tooltip;
  const mergedDefaults = { ...popoverDefaults, ...tooltipDefaults };

  app.directive(mergedOptions.plugin.directiveName, {
    mounted(el, binding) {
      const config = resolveTooltipConfig(binding.value, mergedDefaults);
      if (!config) return;

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          showTooltip(el, config);
        }, config.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        hideTooltip();
      };

      const { showEvents, hideEvents } = config;
      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      elementHandlers.set(el, { show, hide, showEvents, hideEvents });
    },

    updated(el, binding) {
      const handlers = elementHandlers.get(el);
      if (handlers) {
        handlers.showEvents.forEach(event => el.removeEventListener(event, handlers.show));
        handlers.hideEvents.forEach(event => el.removeEventListener(event, handlers.hide));
      }

      const newConfig = resolveTooltipConfig(binding.value, mergedDefaults);
      if (!newConfig) {
        if (tooltipState.trigger === el) hideTooltip();
        return;
      }

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          showTooltip(el, newConfig);
        }, newConfig.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        hideTooltip();
      };

      const { showEvents, hideEvents } = newConfig;
      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      elementHandlers.set(el, { show, hide, showEvents, hideEvents });

      if (tooltipState.visible && tooltipState.trigger === el) {
        showTooltip(el, newConfig);
      }
    },

    beforeUnmount(el) {
      const handlers = elementHandlers.get(el);
      if (handlers) {
        handlers.showEvents.forEach(event => el.removeEventListener(event, handlers.show));
        handlers.hideEvents.forEach(event => el.removeEventListener(event, handlers.hide));
        elementHandlers.delete(el);
      }
    }
  });
}