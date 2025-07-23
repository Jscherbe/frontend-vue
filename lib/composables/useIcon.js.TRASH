import { ref, defineAsyncComponent, markRaw, watchEffect } from "vue";
import UluEmpty from "../components/UluEmpty.vue";

let FaModule;
/**
 * A composable to manage a configurable, lazy-loaded icon component.
 * It reactively bundles and loads the icon library and provides a helper
 * function to format icon props.
 *
 * @param {Ref<string | string[] | object | boolean>} iconProp - The prop value that defines the icon.
 * @returns {object} An object containing:
 * - UluIcon: A ref to the asynchronously loaded component.
 * - getIconProps: A utility function to format icon props for v-bind.
 */
export function useIcon(iconProp) {
  // Uses empty by default so we don't need v-if everywhere it's used
  const UluIcon = ref(markRaw(UluEmpty));

  // Use watchEffect to reactively load the component.
  // It will run immediately and then again whenever `iconProp.value` changes.
  watchEffect(() => {
    // Only attempt to load the component if `iconProp.value` is truthy.
    // If the component is not already loaded, define and load it.
    // This prevents re-defining the component on every prop change.
    if (iconProp.value) {
      if (UluIcon.value === UluEmpty) {
        if (FaModule) {
          UluIcon.value = markRaw(FaModule.FontAwesomeIcon); 
        } else {
          const componentPromise = defineAsyncComponent(async () => {
            const module = await import("@fortawesome/vue-fontawesome");
            FaModule = module;
            return module.FontAwesomeIcon;
          });
          UluIcon.value = markRaw(componentPromise);
        }
      }
    } else {
      UluIcon.value = markRaw(UluEmpty);
    }
  });

  // Utility function for prop formatting (no changes needed here).
  const getIconProps = (definition) => {
    if (!definition) return null;
    if (typeof definition === 'object' && !Array.isArray(definition)) {
      return definition;
    }
    return { icon: definition };
  };

  // If passing a defaultIcons object this will pull specific props by key
  const getDefaultIconProps = key => {
    if (!iconProp || typeof iconProp !== "object") return null;
    const lookup = iconProp.value;
    if (typeof iconProp?.value !== "object") {
      console.warn("Default icons lookup expects object");
      return;
    }
    const definition = lookup[key];
    if (definition) {
      return getIconProps(definition);
    } else {
      console.warn(`Unable to locate ${ key }`);
      return null;
    }
  };

  return { 
    UluIcon, 
    getIconProps, 
    getDefaultIconProps 
  };
}