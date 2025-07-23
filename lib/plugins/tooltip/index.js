import { init, options } from "./manager.js";
import directive from "./directive.js";

/**
 * Install plugin
 * - Set user options
 * - Add the global directive for the user to trigger tooltips
 */
export default function install(app, userOptions = {}) {
  init(userOptions);
  app.directive(options.plugin.directiveName, directive);
}
