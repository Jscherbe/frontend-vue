/**
 * @module plugins/installer/index.js
 * Installer Plugin
 * - Register components globally (app.component)
 * - Add global properties (app.config.globalProperties) if needed
 * - Install other plugins (app.use)
 * - Provide singleton services (app.provide) (might be useful for breakpoints)
 */

import tooltipPlugin from "../tooltip/index.js";
import modalsPlugin from "../modals/index.js";
import * as components from "../../components/index.js";

/**
 * Default plugin options
 * @typedef {Object} UluPluginOptions
 */
const pluginDefaults = {
  modals: {},
  tooltip: {}
};

/**
 * Ulu Library Plugin
 * @param {Object} App Vue app instance passed to plugin
 * @param {UluPluginOptions} userOptions Options to change (see defaults)
 */
export default function install(app, userOptions) {
  const options = Object.assign({}, pluginDefaults, userOptions);

  // Register all components from the object
  for (const componentName in components) {
    app.component(componentName, components[componentName]);
  }

  // Install all plugins
  app
    .use(modalsPlugin, options.modals)
    .use(tooltipPlugin, options.tooltip);
}