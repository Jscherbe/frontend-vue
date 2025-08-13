/**
 * @module plugins/index.js
 * Responsible for exporting all plugins
 * - Used in bundle exports
 */

export { default as installerPlugin } from './installer/index.js';
export { default as popoversPlugin } from './popovers/index.js';
export { default as modalsPlugin } from './modals/index.js';
export { default as toastPlugin } from './toast/index.js';