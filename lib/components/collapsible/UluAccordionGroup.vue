<template>
  <div class="accordion-group">
    <UluAccordion
      v-for="(item, index) in internalItems"
      :key="item.id || index"
      v-model="item.isOpen"
      @update:modelValue="() => handleToggle(index)"
      :summary-text="item.title"
      :classes="item.classes"
      :default-open="item.isOpen"
    >
      <slot name="item" :item="item" :index="index">
        {{ item.content }}
      </slot>
    </UluAccordion>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import UluAccordion from './UluAccordion.vue';

const props = defineProps({
  /**
   * Array of items to render as accordions.
   * Each item can have: title, content, isOpen, classes, id
   */
  items: {
    type: Array,
    default: () => []
  }
});

const internalItems = ref([]);

watch(() => props.items, (newItems) => {
  internalItems.value = JSON.parse(JSON.stringify(newItems));
}, { immediate: true, deep: true });

function handleToggle(selectedIndex) {
  // console.log("handle", selectedIndex);
  
  internalItems.value.forEach((item, index) => {
    if (index !== selectedIndex) {
      item.isOpen = false;
    }
  });
}
</script>
