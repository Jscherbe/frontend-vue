<template>
  <label 
    :for="id" 
    :class="{ 'hidden-visually': labelHidden }"
  >
    <slot></slot><UluFormRequiredChar v-if="required" />
  </label>
</template>

<script setup>
  import UluFormRequiredChar from "./UluFormRequiredChar.vue";

  defineProps({
    /**
     * The ID of the input this label is associated with.
     */
    id: {
      type: String,
      required: true
    },
    /**
     * If true, the label will be visually hidden.
     */
    labelHidden: Boolean,
    /**
     * If true, appends the required character.
     */
    required: Boolean
  });
</script>