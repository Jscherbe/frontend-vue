<template>
  <div 
    class="facets-sidebar" 
    :class="{ 'facets-sidebar--filters-hidden' : isMobile }"
  >
    <div class="facets-sidebar__header">
      <slot name="header"></slot>
    </div>

    <div v-show="isMobile" class="facets-sidebar__mobile-controls">
      <button :class="classes.mobileButton" @click="showMobileFilters = true">
        {{ mobileButtonText }}
      </button>
    </div>

    <div class="facets-sidebar__body">
      <!-- Desktop container for the sidebar -->
      <div v-show="!isMobile" class="facets-sidebar__sidebar" ref="desktopTarget"></div>
      
      <div class="facets-sidebar__main">
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
      <div class="facets-sidebar__sidebar" ref="mobileTarget"></div>
    </UluModal>

    <teleport :to="teleportTarget" v-if="teleportTarget">
      <slot name="sidebar"></slot>
    </teleport>
  </div>
</template>

<script setup>
  import { ref, inject, computed } from 'vue';
  import UluModal from '../../collapsible/UluModal.vue';

  defineProps({
    mobileButtonText: {
      type: String,
      default: "Filters & Sort"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        mobileButton: 'button'
      })
    }
  })

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