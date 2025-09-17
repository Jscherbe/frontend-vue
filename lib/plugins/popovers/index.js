import { reactive } from 'vue';
import UluTooltipDisplay from './UluTooltipDisplay.vue';
import UluPopover from "./UluPopover.vue";
import defaults from './defaults.js';
import { useTooltip } from './useTooltip.js';

// Define and export injection keys from the plugin's entry point
import { reactive } from 'vue';
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
 * Helper to resolve the directive binding value into a consistent config object.
 */
const resolveDirectiveConfig = (binding, tooltipDefaults) => {
  let config = binding.value;
  if (config === false || config === null) return null;

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
 * Creates the directive object.
 */
const createDirective = () => {
  return {
    mounted(el, binding, vnode) {
      // Using vnode.ctx.provides as a workaround for lack of inject in directives
      const tooltip = vnode.ctx.provides[TooltipStateKey];
      const allOptions = vnode.ctx.provides[PopoverOptionsKey];
      
      if (!tooltip) {
        console.warn('[UluTooltip] Directive requires the popoversPlugin to be installed.');
        return;
      }

      const popoverDefaults = allOptions ? allOptions.popover : defaults.popover;
      const tooltipDefaults = allOptions ? allOptions.tooltip : defaults.tooltip;
      const mergedDefaults = { ...popoverDefaults, ...tooltipDefaults };
      const config = resolveDirectiveConfig(binding, mergedDefaults);
      if (!config) return;

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          tooltip.show(el, config);
        }, config.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        tooltip.hide();
      };

      const showEvents = config.showEvents;
      const hideEvents = config.hideEvents;

      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      el._uluTooltip = { show, hide, showEvents, hideEvents };
    },

    updated(el, binding, vnode) {
      const tooltip = vnode.ctx.provides[TooltipStateKey];
      const allOptions = vnode.ctx.provides[PopoverOptionsKey];
      if (!tooltip) return;

      if (el._uluTooltip) {
        el._uluTooltip.showEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.show));
        el._uluTooltip.hideEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.hide));
      }

      const popoverDefaults = allOptions ? allOptions.popover : defaults.popover;
      const tooltipDefaults = allOptions ? allOptions.tooltip : defaults.tooltip;
      const mergedDefaults = { ...popoverDefaults, ...tooltipDefaults };
      const newConfig = resolveDirectiveConfig(binding, mergedDefaults);
      if (!newConfig) {
        if (tooltip.state.trigger === el) tooltip.hide();
        return;
      }

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          tooltip.show(el, newConfig);
        }, newConfig.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        tooltip.hide();
      };

      const showEvents = newConfig.showEvents;
      const hideEvents = newConfig.hideEvents;

      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      el._uluTooltip = { show, hide, showEvents, hideEvents };

      if (tooltip.state.visible && tooltip.state.trigger === el) {
        tooltip.show(el, newConfig);
      }
    },

    beforeUnmount(el) {
      if (el._uluTooltip) {
        el._uluTooltip.showEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.show));
        el._uluTooltip.hideEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.hide));
        delete el._uluTooltip;
      }
    }
  };
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
  app.provide(TooltipStateKey, {
    state: tooltipState,
    show: showTooltip,
    hide: hideTooltip,
  });

  // Register components and directives
  if (mergedOptions.plugin.global) {
    app.component('UluTooltipDisplay', UluTooltipDisplay);
    app.component('UluPopover', UluPopover);
    app.directive(mergedOptions.plugin.directiveName, createDirective());
  }
}

export const TooltipStateKey = 'uluTooltipState';

// Export the composable
export { useTooltip };

/**
 * Helper to resolve the directive binding value into a consistent config object.
 */
const resolveDirectiveConfig = (binding, tooltipDefaults) => {
  let config = binding.value;
  if (config === false || config === null) return null;

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
 * Creates the directive object.
 */
const createDirective = () => {
  return {
    mounted(el, binding, vnode) {
      // Using vnode.ctx.provides as a workaround for lack of inject in directives
      const tooltip = vnode.ctx.provides[TooltipStateKey];
      const allOptions = vnode.ctx.provides[PopoverOptionsKey];
      
      if (!tooltip) {
        console.warn('[UluTooltip] Directive requires the popoversPlugin to be installed.');
        return;
      }

      const tooltipDefaults = allOptions ? allOptions.tooltip : defaults.tooltip;
      const config = resolveDirectiveConfig(binding, tooltipDefaults);
      if (!config) return;

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          tooltip.show(el, config);
        }, config.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        tooltip.hide();
      };

      const showEvents = config.showEvents;
      const hideEvents = config.hideEvents;

      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      el._uluTooltip = { show, hide, showEvents, hideEvents };
    },

    updated(el, binding, vnode) {
      const tooltip = vnode.ctx.provides[TooltipStateKey];
      const allOptions = vnode.ctx.provides[PopoverOptionsKey];
      if (!tooltip) return;

      if (el._uluTooltip) {
        el._uluTooltip.showEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.show));
        el._uluTooltip.hideEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.hide));
      }

      const tooltipDefaults = allOptions ? allOptions.tooltip : defaults.tooltip;
      const newConfig = resolveDirectiveConfig(binding, tooltipDefaults);
      if (!newConfig) {
        if (tooltip.state.trigger === el) tooltip.hide();
        return;
      }

      let showTimeout = null;
      const show = () => {
        if (showTimeout) return;
        showTimeout = setTimeout(() => {
          tooltip.show(el, newConfig);
        }, newConfig.delay);
      };

      const hide = () => {
        clearTimeout(showTimeout);
        showTimeout = null;
        tooltip.hide();
      };

      const showEvents = newConfig.showEvents;
      const hideEvents = newConfig.hideEvents;

      showEvents.forEach(event => el.addEventListener(event, show));
      hideEvents.forEach(event => el.addEventListener(event, hide));

      el._uluTooltip = { show, hide, showEvents, hideEvents };

      if (tooltip.state.visible && tooltip.state.trigger === el) {
        tooltip.show(el, newConfig);
      }
    },

    beforeUnmount(el) {
      if (el._uluTooltip) {
        el._uluTooltip.showEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.show));
        el._uluTooltip.hideEvents.forEach(event => el.removeEventListener(event, el._uluTooltip.hide));
        delete el._uluTooltip;
      }
    }
  };
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
  app.provide(TooltipStateKey, {
    state: tooltipState,
    show: showTooltip,
    hide: hideTooltip,
  });

  // Register components and directives
  if (mergedOptions.plugin.global) {
    app.component('UluTooltipDisplay', UluTooltipDisplay);
    app.component('UluPopover', UluPopover);
    app.directive(mergedOptions.plugin.directiveName, createDirective());
  }
}