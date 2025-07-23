/**
 * @module index.js
 * - Main library entrypoint
 * - Exports everything
 * - Default export is the main plugin that install everything
 */

import { installerPlugin, modalsPlugin, tooltipPlugin } from './plugins/index.js';
export * from './components/index.js';
export * from './composables/index.js';
export { modalsPlugin, tooltipPlugin };
export default installerPlugin;