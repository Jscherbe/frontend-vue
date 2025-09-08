<template>
  <div 
    class="facets-sidebar-layout" 
    :class="{ 'facets-sidebar-layout--filters-hidden' : isMobile }"
  >
    <div class="facets-sidebar-layout__header">
      <slot name="header"></slot>
    </div>

    <div v-show="isMobile" class="facets-sidebar-layout__mobile-controls">
      <button class="button" @click="showMobileFilters = true">Filters & Sort</button>
    </div>

    <div class="facets-sidebar-layout__body">
      <!-- Desktop container for the sidebar -->
      <div v-show="!isMobile" class="facets-sidebar-layout__sidebar" ref="desktopTarget"></div>
      
      <div class="facets-sidebar-layout__main">
        <slot name="main"></slot>
      </div>
    </div>

    <UluModal
      v-if="isMobile"
      v-model="showMobileFilters"
      position="right"
      title="Filters & Sort"
      allowResize
    >
      <!-- Mobile container for the sidebar -->
      <div class="facets-sidebar-layout__sidebar" ref="mobileTarget"></div>
    </UluModal>

    <teleport :to="teleportTarget" v-if="teleportTarget">
      <slot name="sidebar"></slot>
    </teleport>
  </div>
</template>

<script setup>
  import { ref, inject, computed } from 'vue';
  import UluModal from '../../collapsible/UluModal.vue';

  const showMobileFilters = ref(false);
  const isMobile = inject("uluIsMobile");

  const desktopTarget = ref(null);
  const mobileTarget = ref(null);

  const teleportTarget = computed(() => {
    if (isMobile.value) {
      return mobileTarget.value;
    } else {
      return desktopTarget.value;
    }
  });
</script>

<style lang="scss">
  .facets-sidebar-layout__body {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
  }
  .facets-sidebar-layout--filters-hidden {
    .facets-sidebar-layout__body {
      grid-template-columns: 1fr;
    }
  }
</style>