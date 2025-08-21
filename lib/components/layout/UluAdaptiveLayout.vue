<template>
  <slot v-if="!uluIsMobile || !$slots.mobile"/>
  <slot v-else name="mobile" />
</template>

<script>
  export default {
    name: "AdaptiveLayout",
    inject: ["uluIsMobile"],
  };
</script>