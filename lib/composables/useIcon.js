import { toRaw } from "vue";

/**
 * Utility composable for handling and formatting icon props for UluIcon.
 * @param {Object} defaultIcons - An optional object of key-value pairs for default icons (this enables the getIconDefinition to grab icons)
 * @returns {Object} An object with utility functions { getIconDefinition, getIconProps, getClassesFromDefinition }
 */
export function useIcon(defaultIcons = {}) {
  const getIconDefinition = key => {
    // Corrected type check
    const icons = toRaw(defaultIcons);
    if (typeof icons !== "object" || icons === null) {
      console.warn("Default icons lookup expects object");
      return null;
    }
    const definition = icons[key];
    if (definition) {
      // Correctly calls the other function to format props
      return definition;
    } else {
      console.warn(`Unable to locate ${ key } in defaultIcons`);
      return null;
    }
  };

  const getIconProps = (definition) => {
    if (!definition) return null;
    if (typeof definition === 'object' && !Array.isArray(definition)) {
      // If it's already an object (and not an array), assume it's directly props
      return definition;
    }
    // Otherwise, treat it as the 'icon' prop
    return { icon: definition };
  };

  /**
   * Converts an icon definition (string, array, or object) into a string of FontAwesome classes.
   * @param {String|Array|Object} definition - The icon definition.
   * @returns {String|null} A string of FontAwesome classes, or null if unable to parse.
   */
  const getClassesFromDefinition = (definition) => {
    if (!definition) {
      return null;
    }

    // If definition is already a string (e.g., "fas fa-home")
    if (typeof definition === "string") {
      return definition;
    }

    // If definition is an array (e.g., ["fas", "home"])
    if (Array.isArray(definition)) {
      // FontAwesome's component expects ['fas', 'home'], but for classes,
      // we need to join them. Assuming the first element is the style prefix.
      if (definition.length >= 2) {
        // Common case: ['fas', 'home'] -> 'fas fa-home'
        return `${definition[0]} fa-${definition[1]}`;
      }
      // Handle edge cases or just return the first if it's the only one
      // e.g., ['fas'] might result in just 'fas' which isn't a full icon, but handles the edge
      return definition.join(' ');
    }

    // If definition is an object (e.g., { icon: ['fas', 'home'] } or { icon: 'fas fa-home' })
    if (typeof definition === 'object' && definition.icon) {
      if (typeof definition.icon === 'string') {
        return definition.icon;
      }
      if (Array.isArray(definition.icon)) {
        if (definition.icon.length >= 2) {
          return `${definition.icon[0]} fa-${definition.icon[1]}`;
        }
        return definition.icon.join(' ');
      }
    }

    console.warn("useIcon: Unable to parse definition for static FontAwesome classes:", definition);
    return null;
  };

  return { getIconDefinition, getIconProps, getClassesFromDefinition };
}