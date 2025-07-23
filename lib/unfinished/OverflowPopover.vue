<template>
  <div class="layout-flex-baseline">
    <div class="type-truncate" ref="text">
      <slot/>
    </div>
    <AppPopover 
      v-if="isOverflown && !resizing"
      toggleAlt="Show Full Text"
      size="large"
      :classes="{ toggle: 'ui-icon type-base' }"
    >
      <template #toggle>
        <FaIcon :icon="$site.getIcon('detail')"/>
      </template>
      <template #content>
        <div class="type-word-break">
          <slot/>
        </div>
      </template>
    </AppPopover>
  </div>
</template>

<script setup>
  import { ref, nextTick, onMounted, onUnmounted } from "vue";
  import useResize from "@/composables/window-resize.js";
  const { resizing, onResizeEnd } = useResize();
  const text = ref(null);
  const isOverflown = ref(false);
  /**
   * Function checks if text elemenet is overflown
   */
  const update = () => {
    nextTick(() => {
      const element = text.value;
      isOverflown.value = element.offsetWidth < element.scrollWidth;
    });
  };
  const removeResize = onResizeEnd(update);
  onMounted(update);
  onUnmounted(removeResize);
</script>