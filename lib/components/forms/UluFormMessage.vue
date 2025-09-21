<template>
  <p class="form-theme__description" :class="{
    'form-theme__error' : error,
    'form-theme__warning' : warning
  }">
    <UluIcon v-if="error || warning" :icon="`type:${ error ? 'error' : 'warning' }`" />
    <slot/>
  </p>
</template>

<script setup>
  import UluIcon from "../elements/UluIcon.vue";
  defineProps({
    /**
     * If true, the message will be styled as a warning.
     */
    warning: Boolean,
    /**
     * If true, the message will be styled as an error.
     */
    error: Boolean,
  });
</script>