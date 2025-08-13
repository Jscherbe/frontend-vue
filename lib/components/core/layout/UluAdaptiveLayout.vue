<template>
  <slot v-if="!isMobile || !$slots.mobile"/>
  <slot v-else name="mobile" />
</template>

<script>
  export default {
    name: "AdaptiveLayout",
    inject: ["isMobile"],
  };
</script>