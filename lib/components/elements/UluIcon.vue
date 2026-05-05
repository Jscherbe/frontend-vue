<template>
  <component
    v-if="customIconComponent"
    :is="customIconComponent"
    v-bind="customIconProps"
    :class="commonClasses"
  />
  <component
    v-else-if="!useStaticFa && faIconComponent"
    :is="faIconComponent"
    v-bind="iconProps"
    :class="commonClasses"
  />
  <span
    v-else-if="useStaticFa && resolvedDefinition"
    :class="[staticIconClasses, commonClasses]"
    aria-hidden="true"
  ></span>
</template>

<script setup>
  import { defineAsyncComponent, computed, inject } from "vue";
  import { useIcon } from "../../composables/useIcon.js";

  const uluCore = inject('uluCore');
  const { getIconProps, getClassesFromDefinition } = useIcon();

  const AsyncFontAwesomeIcon = defineAsyncComponent(() => 
    import("@fortawesome/vue-fontawesome").then(m => m.FontAwesomeIcon)
  );

  const props = defineProps({
    /**
     * Icon definition can be string (fa classes), or array or object (any prop format FaIcon accepts)
     * - This will override the 'type' prop if both are provided
     */
    icon: [String, Array, Object, Boolean],
    /**
     * Whether the icon should use flow inline
     */
    spaced: Boolean
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
    const { icon } = props;
    if (typeof icon === 'string' && icon.startsWith('type:')) {
      try {
        const type = icon.substring(5);
        return uluCore.getIcon(type);
      } catch (e) {
        console.warn(e);
        return null;
      }
    }
    return icon;
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

  const commonClasses = computed(() => ({
    'flow-inline': props.spaced
  }));

  const faIconComponent = computed(() => {
    if (!useStaticFa.value && resolvedDefinition.value) {
      return AsyncFontAwesomeIcon;
    }
    return null;
  });
</script>