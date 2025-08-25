<template>
  <component
    v-if="customIconComponent"
    :is="customIconComponent"
    v-bind="customIconProps"
  />
  <component
    v-else-if="!useStaticFa && faIconComponent && resolvedDefinition"
    :is="faIconComponent"
    v-bind="iconProps"
  />
  <span
    v-else-if="useStaticFa && resolvedDefinition"
    :class="staticIconClasses"
    aria-hidden="true"
  ></span>
</template>

<script setup>
  import { ref, defineAsyncComponent, markRaw, watchEffect, computed, inject } from "vue";
  import { useIcon } from "../../composables/useIcon.js";

  const uluCore = inject('uluCore');
  const faIconComponent = ref(null);
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
    return uluCore.getSetting("fontAwesomeStatic");
  });

  const customIconComponent = computed(() => {
    return uluCore.getSetting("iconComponent");
  });

  const iconPropResolver = computed(() => {
    return uluCore.getSetting("iconPropResolver");
  });

  // Resolve the final icon definition, giving precedence to the `definition` prop
  const resolvedDefinition = computed(() => {
    if (props.definition) {
      return props.definition;
    }
    if (props.type) {
      try {
        return uluCore.getIcon(props.type);
      } catch (e) {
        console.warn(e);
        return null;
      }
    }
    return null;
  });

  const customIconProps = computed(() => {
    if (!customIconComponent.value || !resolvedDefinition.value) return null;
    return iconPropResolver.value(resolvedDefinition.value);
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
      if (faIconComponent.value === null) {
        if (FaModule) {
          faIconComponent.value = markRaw(FaModule.FontAwesomeIcon);
        } else {
          const componentPromise = defineAsyncComponent(async () => {
            const module = await import("@fortawesome/vue-fontawesome");
            FaModule = module;
            return module.FontAwesomeIcon;
          });
          faIconComponent.value = markRaw(componentPromise);
        }
      }
    } else {
      // If using static FA or no definition, ensure component is null
      faIconComponent.value = null;
    }
  });
</script>