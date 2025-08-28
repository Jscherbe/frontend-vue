<template>
  <div class="UluFacetsSidebarLayout">
    <div class="UluFacetsSidebarLayout__header">
      <slot name="header"></slot>
    </div>
    <div class="UluFacetsSidebarLayout__body">
      <div class="UluFacetsSidebarLayout__sidebar">
        <slot name="sidebar"></slot>
      </div>
      <div class="UluFacetsSidebarLayout__main">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component is purely for layout, no logic needed.
</script>

<style lang="scss">
.UluFacetsSidebarLayout__body {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
  }
}
</style>
