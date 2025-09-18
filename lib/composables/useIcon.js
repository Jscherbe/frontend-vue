/**
 * A utility composable for handling and formatting icon props for `UluIcon`.
 * It provides helpers to convert various icon definition formats into either
 * a props object for the `FontAwesomeIcon` component or a string of CSS classes.
 *
 * @returns {{
 *   getIconProps: (definition: string | string[] | object) => object | null,
 *   getClassesFromDefinition: (definition: string | string[] | object) => string | null
 * }} An object with utility functions:
 * - `getIconProps`: Takes an icon definition and returns a props object suitable for a component like `FontAwesomeIcon`.
 * - `getClassesFromDefinition`: Takes an icon definition and returns a string of CSS classes for use with the static FontAwesome library.
 */
export function useIcon() {
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

  return { getIconProps, getClassesFromDefinition };
}