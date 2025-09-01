/**
 * @module plugins/core/index.js
 * @description Core plugin for managing shared configuration for the library.
 */
import { reactive } from 'vue';

const defaults = {
  fontAwesomeStatic: false,
  iconComponent: null,
  iconPropResolver: (definition) => ({ icon: definition }),
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
    pathSeparator: "fas fa-chevron-right",
    image: "fas fa-image",
    file: "fas fa-file"
  }
};

export const iconKeys = Object.keys(defaults.iconsByType);

export default function install(app, userSettings = {}) {
  // A single reactive object for all settings
  const settings = reactive({ ...defaults });

  // Separate icon overrides from other options to handle them safely
  const { iconsByType: iconOverrides, ...otherOptions } = userSettings || {};

  // Merge any user-provided options during installation
  if (otherOptions) {
    Object.assign(settings, otherOptions);
  }

  const api = {
    // Methods to interact with settings
    getSettings() {
      return settings;
    },
    getDefaultSettings() {
      return { ...defaults };
    },
    updateSettings(changes) {
      return Object.assign(settings, changes);
    },
    getSetting(key) {
      if (!settings.hasOwnProperty(key)) {
        console.warn(`Attempted to access non-existent setting: ${key}`);
        return;
      }
      return settings[key];
    },
    updateSetting(key, value) {
      if (typeof key !== "string") {
        throw new Error("Expected key to be string");
      }
      settings[key] = value;
    },
    getIcon(type) {
      const icons = settings.iconsByType;
      if (!icons[type]) {
        throw new Error(`Icon type "${type}" not found!`);
      }
      return icons[type];
    },
    setIcon(type, definition) {
      settings.iconsByType[type] = definition;
    }
  };

  // Apply any individual icon overrides passed during installation
  if (iconOverrides) {
    for (const [type, definition] of Object.entries(iconOverrides)) {
      api.setIcon(type, definition);
    }
  }

  app.provide('uluCore', api);
  app.config.globalProperties.$uluCore = api;
}
