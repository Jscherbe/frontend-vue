import { ref } from "vue";
import defaults from "./defaults.js";

export const options = {
  plugin: { ...defaults.plugin },
  tooltip: { ...defaults.tooltip }
};

/**
 * Whether or not the tooltip is active
 */
export const active = ref(false);
/**
 * Current tooltip config
 */
export const activeConfig = ref(null);

/**
 * Setup the store options 
 * @param {Object} userOptions
 * @param {Object} options Resolved options
 */
export function init(userOptions = {}) {
  Object.assign(options.tooltip, userOptions.tooltip);
  Object.assign(options.plugin, userOptions.plugin);
  return options;
}

/**
   * Config for a single tooltip instance
   */
export function createConfig(userConfig) {
  return Object.assign({}, options.tooltip, userConfig);
} 

/**
 * Show a tooltip
 * - Set by directive
 */
export function show(config) {
  active.value = true;
  activeConfig.value = config;
}

/**
 * Hide a tooltip
 * - Set by directive
 */
export function hide() {
  active.value = false;
  activeConfig.value = null;
}