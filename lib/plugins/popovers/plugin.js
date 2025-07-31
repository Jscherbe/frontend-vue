import { init } from "./manager.js";
import directive from "./directive.js";
import UluPopover from "./UluPopover.vue";

/**
 * Install plugin
 * - Set user options
 * - Add the global directive for the user to trigger tooltips
 */
export default function install(app, userOptions = {}) {
  const options = init(userOptions);
  if (options.plugin.global) {
    app.directive(options.plugin.directiveName, directive);
    app.component("UluPopover", UluPopover);
  }
}
