import { toRaw } from "vue";

/**
 * Utility composable for handling and formatting icon props for UluIcon.
 * @param {Object} defaultIcons - An optional object of key-value pairs for default icons (this enables the getIconDefinition to grab icons)
 * @returns {Object} An object with utility functions { getIconDefinition, getIconProps }
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
      return definition;
    }
    return { icon: definition };
  };

  return { getIconDefinition, getIconProps };
}