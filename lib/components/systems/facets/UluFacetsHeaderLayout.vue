<template>
  <div class="UluFacetsHeaderLayout">
    <div class="UluFacetsHeaderLayout__header">
      <slot name="header"></slot>
    </div>
    <div class="UluFacetsHeaderLayout__main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup>
// This component is purely for layout, no logic needed.
</script>

<style lang="scss">
.UluFacetsHeaderLayout__header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
</style>
