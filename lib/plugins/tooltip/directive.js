import { show, hide, createConfig } from "./manager.js";
/**
 * Using weak map for listener to element relationship
 * - As an extra fallback to remove listeners without affecting garabage collection
 * - The unmount should be called for every element the directive is bound to but
 */
const cache = new WeakMap();
/**
 * - We should consider allowing components to be passed for markup
 * - don't want to use a component as then everything that uses this will have complicated conditionals
 *   ie. menu component could just have an option to bind the directive but if component needs conditional when not being used
 */
/**
 * Directive Object
 */
export default {
  mounted(reference, binding) {
    setup(reference, binding);
  },
  beforeUpdate(reference) {
    removeListeners(reference);
  },
  updated(reference, binding) {
    setup(reference, binding);
  },
  umounted(reference) {
    removeListeners(reference);
  }
};
/**
 * Resolves the users local config and attaches handlers
 */
function setup(reference, binding) {
  const config = resolveConfig(reference, binding);
  if (!config) return;
  let tid = null;
  
  const onShow = () => { 
    if (tid) return;
    tid = setTimeout(() => {
      show(config);
      clearTimeout(tid);
    }, config.delay);
  };

  const onHide = () => { 
    if (tid) {
      clearTimeout(tid);
      tid = null;
    }
    hide(config);
  };

  config.showEvents.forEach(eventName => {
    reference.addEventListener(eventName, onShow);
  });
  config.hideEvents.forEach(eventName => {
    reference.addEventListener(eventName, onHide);
  });
  cache.set(reference, { onShow, onHide, config });
}
/**
 * Removes an elements listeners by checking agains local cache map
 */
function removeListeners(reference) {
  if (!cache.has(reference)) {
    return;
  }
  const { config, onShow, onHide } = cache.get(reference);
  config.showEvents.forEach(eventName => {
    reference.removeEventListener(eventName, onShow);
  });
  config.hideEvents.forEach(eventName => {
    reference.removeEventListener(eventName, onHide);
  });
  cache.delete(reference);
}
/**
 * Allow user to provide a simple string for the content of the toolkit
 * or the extended object syntax. This resolves to the object syntax
 */
function resolveConfig(reference, binding) {
  const { value } = binding;
  let config;
  if (value === false || value === null) {
    return; // Disabled
  } else if (typeof value === "object") {
    config = value;
  // String/Number, etc (displayed as is)
  } else {
    config = { content: value };
  }
  // Using assign so users can override reference if needed
  return createConfig(Object.assign({}, { reference }, config));
}