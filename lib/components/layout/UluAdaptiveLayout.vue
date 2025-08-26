<template>
  <slot v-if="!uluIsMobile || !$slots.mobile"/>
  <slot v-else name="mobile" />
</template>

<script setup>
  import { useRequiredInject } from '../../composables/useRequiredInject.js';
  const uluIsMobile = useRequiredInject('uluIsMobile');
</script>