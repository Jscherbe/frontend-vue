<template>
  <p class="site-form__description" :class="{
    'site-form__error' : error,
    'site-form__warning' : warning
  }">
    <UluIcon v-if="error || warning" :icon="`type:${ error ? 'error' : 'warning' }`" />
    <slot/>
  </p>
</template>

<script setup>
  import UluIcon from "../elements/UluIcon.vue";
  defineProps({
    warning: Boolean,
    error: Boolean,
  });
</script>