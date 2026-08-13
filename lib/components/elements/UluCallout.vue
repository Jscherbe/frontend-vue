<template>
  <div 
    class="callout"
    :class="[resolvedModifiers, { 'full-height' : fullHeight }]"
  >
    <slot/>
  </div>
</template>

<script setup>
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Add full height utility class
     */
    fullHeight: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     * - Can be String, Array, or Object
     */
    modifiers: [String, Array, Object]
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: "callout" });
</script>