<template>
  <fieldset class="form-theme__fieldset">
    <legend v-if="legend">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<script setup>
defineProps({
  /**
   * The legend for the fieldset.
   */
  legend: String
});
</script>