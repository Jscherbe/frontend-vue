import { reactive, markRaw } from 'vue';
import UluTooltipDisplay from './UluTooltipDisplay.vue';
import UluPopover from "./UluPopover.vue";
import defaults from './defaults.js';
import { useTooltip } from './useTooltip.js';

/**
 * Injection key for popover options (merged/resolved with users defaults)
 */
export const POPOVER_OPTIONS_KEY = 'uluPopoverOptions'; 

/**
 * Injection key for tooltip state object (used in tooltip composable, display, etc)
 */
export const TOOLTIP_STATE_KEY = 'uluTooltipState';

/**
 * The id for the global tooltip (which is on the tooltip and put on the element aria-describedby)
 */
export const TOOLTIP_ID = "ulu-global-tooltip";

/**
 * The public export of the composable function
 */
export { useTooltip };
export { default as useTooltipFollow } from './useTooltipFollow.js';

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
  app.provide(POPOVER_OPTIONS_KEY, mergedOptions);

  // Create and provide the tooltip state and methods
  const tooltipState = reactive({
    visible: false,
    trigger: null,
    config: {},
  });
  const showTooltip = (triggerEl, configObj) => {
    // If a tooltip is already active for a different element, remove its attribute.
    if (tooltipState.trigger && tooltipState.trigger !== triggerEl) {
      if (tooltipState.trigger?.removeAttribute) {
        tooltipState.trigger.removeAttribute('aria-describedby');
      }
    }

    if (triggerEl?.setAttribute) {
      triggerEl.setAttribute('aria-describedby', TOOLTIP_ID);
    }

    tooltipState.trigger = triggerEl;
    tooltipState.config = configObj;
    tooltipState.visible = true;
  };
  const hideTooltip = () => {
    if (tooltipState.trigger?.removeAttribute) {
      tooltipState.trigger.removeAttribute('aria-describedby');
    }
    tooltipState.visible = false;
  };
  
  // Global API for tooltips
  app.provide(TOOLTIP_STATE_KEY, {
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
      // If this element is being unmounted while its tooltip is active, hide it.
      if (tooltipState.visible && tooltipState.trigger === el) {
        hideTooltip();
      }
      const handlers = elementHandlers.get(el);
      if (handlers) {
        handlers.showEvents.forEach(event => el.removeEventListener(event, handlers.show));
        handlers.hideEvents.forEach(event => el.removeEventListener(event, handlers.hide));
        elementHandlers.delete(el);
      }
    }
  });
}