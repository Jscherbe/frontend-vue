<template>
  <span 
    class="tag"
    :class="[
      {
        'tag--counter' : counter,
        [`tag--${ size }`] : size,
        [`tag--${ type }`] : type
      }, 
      resolvedModifiers
    ]"
  >
    <UluIcon v-if="icon" :icon="icon" spaced />
    <slot>
      <span>{{ text }}</span>
    </slot>
  </span>
</template>

<script setup>
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Type (corresponds with styles setup for tag in scss module)
     */
    type: [String],
    /**
     * Size (corresponds with sizes setup for tag in scss module)
     */
    size: String,
    /**
     * Use counter style (for numbers, etc)
     */
    counter: Boolean,
    /**
     * Text for tag, or use slot
     */
    text: [String, Number],
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     * - If using custom icons use slot instead
     */
    icon: [String, Array],
    /**
     * Modifiers for tag class
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: "tag" });
</script>