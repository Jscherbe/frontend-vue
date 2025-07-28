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
  fontAwesomeStatic: false,
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
    return undefined;
  }
  return currentSettings[key];
}

/**
 * Updates a specific configuration setting.
 * @param {string} key The key of the setting to update.
 * @param {*} value The new value for the setting.
 */
export function updateSetting(key, value) {
  currentSettings[key] = value;
}