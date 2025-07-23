<template>
  <component 
    v-if="iconComponent && definition" 
    :is="iconComponent" 
    v-bind="iconProps" 
  />
</template>

<script setup>
  import { ref, defineAsyncComponent, markRaw, watchEffect, computed } from "vue";
  import { useIcon } from "../composables/useIcon.js";

  const iconComponent = ref(null);
  const { getIconProps } = useIcon();

  let FaModule;

  const props = defineProps({
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     */
    definition: [String, Array, Object, Boolean]
  });

  // This is now a computed property
  const iconProps = computed(() => {
    return getIconProps(props.definition);
  });

  // Watch for changes to prop
  // - Use watchEffect because we are watching reactive object property access (props)
  // - Load FA if needed (so it's not included if it's unneeded)
  // - Replace the empty component after load or if value changes
  watchEffect(async () => {
    if (props.definition) {
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
      iconComponent.value = null;
    }
  });
</script>