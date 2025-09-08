<template>
  <div class="facets-header-layout">
    <div class="facets-header-layout__header">
      <slot name="header"></slot>
    </div>
    <div class="facets-header-layout__main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script setup>
// This component is purely for layout, no logic needed.
</script>

<style lang="scss">
.facets-header-layout__header {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
</style>
