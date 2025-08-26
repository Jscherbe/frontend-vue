import { inject } from 'vue';
import { injectRegistry } from "../meta.js";

// A unique sentinel object to detect if a value was provided.
// This is used to differentiate between a provider not existing vs.
// a provider explicitly giving a `null` value.
const NOT_FOUND = {};

/**
 * Injects a dependency from a plugin (or other required inject) and throws an error if it's not available.
 *
 * @param {string} key - The injection key (e.g., 'uluBreakpointManager').
 * @returns The injected value.
 */
export function useRequiredInject(key) {
  const dependency = inject(key, NOT_FOUND);

  if (dependency === NOT_FOUND) {
    const plugin = injectRegistry[key] || '';
    const pluginInfo = plugin ? ` from the '${ plugin }' plugin` : "";
    const action = plugin ? "Please install missing plugin." : ""; 
    throw new Error(`Required inject: '${ key }'${ pluginInfo } was not provided. ${ action }`);
  }

  return dependency;
}
