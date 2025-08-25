/**
 * @module settings
 * @description Manages shared configuration for the library.
 */

import { reactive } from 'vue'; 

/**
 * Default settings
 * @typedef {object} Defaults
 * @property {string} fontAwesomeStatic - Whether the default UluIcon should use fontawesome vue or fontawesome CSS classes (static)
 */

/**
 * @type {Defaults}
 */
const defaults = {
  /**
   * If set UluIcon will use global css classes instead of Font Awesome vue component
   */
  fontAwesomeStatic: false,
  /**
   * Use a different icon component (if using a library other than Font Awesome)
   * - Need to have this component map (iconsByType) to it's implementation
   * - All components internally use type, so only user defined components change definitions
   *   - So you should only need to create definitions for the default types to replace this for the library
   */
  iconComponent: null,
  /**
   * Which prop in iconComponent should receive the resolved definition
   */
  iconPropResolver: (definition) => ({ icon: definition }),
  /**
   * Default icons by type
   */
  iconsByType: {
    danger: "fas fa-triangle-exclamation",
    warning: "fas fa-circle-exclamation",
    info: "fas fa-circle-info",
    success: "fas fa-circle-check",
    externalLink: "fas fa-arrow-up-right-from-square",
    close: "fas fa-xmark",
    expand: "fas fa-plus",
    collapse: "fas fa-minus",
    resizeHorizontal: "fas fa-grip-lines-vertical",
    resizeVertical: "fas fa-grip-lines",
    resizeBoth: "fas fa-grip",
    ellipsis: "fas fa-ellipsis",
    pathSeparator: "fas fa-chevron-right"
  }
};

// Current configuration, initialized with defaults and made reactive
// We wrap `defaults` in `reactive` so `currentSettings` becomes a reactive object.
let currentSettings = reactive({ ...defaults });

/**
 * Retrieves a copy of the default settings.
 * @returns {object} A copy of the default settings object.
 */
export function getDefaultSettings() {
  // Return a non-reactive copy of defaults
  return { ...defaults };
}

/**
 * Updates multiple configuration settings.
 * @param {object} changes An object containing the settings to update.
 */
export function updateSettings(changes) {
  Object.assign(currentSettings, changes);
}

/**
 * Retrieves a copy of the current configuration settings.
 * @returns {object} A copy of the current settings object (vue reactive object)
 */
export function getSettings() {
  return currentSettings; 
}

/**
 * Retrieves a specific configuration setting by key.
 * @param {string} key The key of the setting to retrieve.
 * @returns {*} The value of the setting, or undefined if not found.
 */
export function getSetting(key) {
  if (!currentSettings.hasOwnProperty(key)) {
    console.warn(`Attempted to access non-existent setting: ${key}`);
    return;
  }
  return currentSettings[key];
}

/**
 * Updates a specific configuration setting.
 * @param {string} key The key of the setting to update.
 * @param {*} value The new value for the setting.
 */
export function updateSetting(key, value) {
  if (typeof key !== "string") {
    throw new Error("Expected key to be string");
  }
  currentSettings[key] = value;
}

/**
 * Retrieves the icon definition by type
 * @param {string} type - The type of icon to retrieve (e.g., 'error', 'info').
 * @returns {string} The icon definition
 * @throws {Error} If the specified icon type is not found
 */
export function getIconByType(type) {
  const icons = currentSettings.iconsByType;
  if (!icons[type]) {
    throw new Error(`Icon type "${ type }" not found!`);
  }
  return icons[type];
}