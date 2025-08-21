<template>
  <component
    v-if="!useStaticFa && iconComponent && resolvedDefinition"
    :is="iconComponent"
    v-bind="iconProps"
  />
  <span
    v-else-if="useStaticFa && resolvedDefinition"
    :class="staticIconClasses"
    aria-hidden="true"
  ></span>
</template>

<script setup>
  import { ref, defineAsyncComponent, markRaw, watchEffect, computed } from "vue";
  import { useIcon } from "../../composables/useIcon.js";
  import { getSetting, getIconByType } from "../../settings.js"; 

  const iconComponent = ref(null);
  const { getIconProps, getClassesFromDefinition } = useIcon();

  let FaModule;

  const props = defineProps({
    /**
     * Semantic type of icon to use, will be resolved from settings
     */
    type: String,
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    definition: [String, Array, Object, Boolean],
  });

  const useStaticFa = computed(() => {
    return getSetting("fontAwesomeStatic");
  });

  // Resolve the final icon definition, giving precedence to the `definition` prop
  const resolvedDefinition = computed(() => {
    if (props.definition) {
      return props.definition;
    }
    if (props.type) {
      try {
        return getIconByType(props.type);
      } catch (e) {
        console.warn(e);
        return null;
      }
    }
    return null;
  });

  // This is now a computed property for component props
  const iconProps = computed(() => {
    return getIconProps(resolvedDefinition.value);
  });

  // Computed property for static icon classes, using the utility method
  const staticIconClasses = computed(() => {
    return getClassesFromDefinition(resolvedDefinition.value);
  });

  // Watch for changes to prop
  // - Use watchEffect because we are watching reactive object property access (props)
  // - Load FA if needed (so it's not included if it's unneeded)
  // - Replace the empty component after load or if value changes
  watchEffect(async () => {
    // Only attempt to load the component if we are NOT using the static version
    if (!useStaticFa.value && resolvedDefinition.value) {
      if (iconComponent.value === null) {
        if (FaModule) {
          iconComponent.value = markRaw(FaModule.FontAwesomeIcon);
        } else {
          const componentPromise = defineAsyncComponent(async () => {
            const module = await import("@fortawesome/vue-fontawesome");
            FaModule = module;
            return module.FontAwesomeIcon;
          });
          iconComponent.value = markRaw(componentPromise);
        }
      }
    } else {
      // If using static FA or no definition, ensure component is null
      iconComponent.value = null;
    }
  });
</script>