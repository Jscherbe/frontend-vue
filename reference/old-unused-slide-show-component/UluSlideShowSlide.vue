<!-- 
  Notes: 
  - This component is used in parent to identify slides in default slot
-->
<template>
  <li class="slideshow__slide" :class="{ 'is-active' : active }">
    <slot/>
  </li>
</template>

<script setup>
  defineProps({
    /**
     * Provided by grandparent, not user
     */
    active: Boolean
  });
</script>