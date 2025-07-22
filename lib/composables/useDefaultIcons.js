import { ref, defineAsyncComponent, markRaw } from 'vue';

/**
 * A composable to dynamically load the necessary default icon components
 * based on the component's configuration. This helps manage conditional
 * bundling of specific icon libraries (e.g., Font Awesome).
 * 
 * - For now, it's implicitly Font Awesome
 *
 * @param {object} props - The component's props object. Expected to have a
 * 'disableDefaultIcons' boolean prop.
 * @returns {object} An object containing references to default icon components,
 * e.g., 'FaIconComponent'. These will be null if loading is disabled.
 */
export function useDefaultIcons(props) {
  const { defaultIcons } = props;
  const UluDefaultIcon = ref(null);

  if (defaultIcons) {
    const componentPromise = defineAsyncComponent(async () => {
      const module = await import('@fortawesome/vue-fontawesome');
      return module.FontAwesomeIcon;
    });
    UluDefaultIcon.value = markRaw(componentPromise);
  }

  return { 
    UluDefaultIcon, 
    /**
     * Function used to retrieve
     */
    getDefaultIconProps: key => {
      if (!defaultIcons) return null; // If defaults are disabled globally
      const iconDefinition = defaultIcons[key];

      if (!iconDefinition) {
        console.warn(`Unable locate '${ key }'`);
        return null;
      }

      // If the iconDefinition is already an object, assume it contains full props
      if (typeof iconDefinition === 'object' && !Array.isArray(iconDefinition)) {
        return iconDefinition; // User provided { icon: "...", spin: true }
      }

      // If it's a string or array, assume it's just the 'icon' prop value
      return { icon: iconDefinition }; // Example "fas fa-plus", ["fas", "fa-plus"]
    }
  };
}