/**
 * @module plugins/index.js
 * Responsible for exporting all plugins
 * - Used in bundle exports
 */

export { default as installerPlugin } from './installer/index.js';
export { default as tooltipPlugin } from './tooltip/index.js';
export { default as modalsPlugin } from './modals/index.js';