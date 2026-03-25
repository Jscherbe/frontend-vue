<template>
  <div class="accordion-group">
    <template v-if="items?.length">
      <UluAccordion
        v-for="(item, index) in items"
        :key="index"
        :start-open="item.isOpen"
        :trigger-text="item.title"
        :classes="item.classes"
        :trigger-text-element="triggerTextElement"
        :modifiers="modifiers"
        :animate="animate"
      >
        <template #trigger="{ isOpen }" v-if="$slots.trigger">
          <slot name="trigger" :item="item" :index="index" :isOpen="isOpen"></slot>
        </template>

        <template #icon="{ isOpen }" v-if="$slots.icon">
          <slot name="icon" :item="item" :index="index" :isOpen="isOpen"></slot>
        </template>

        <template #default="{ isOpen, toggle }">
          <slot name="item" :item="item" :index="index" :isOpen="isOpen" :toggle="toggle">
            {{ item.content }}
          </slot>
        </template>
      </UluAccordion>
    </template>
    <slot v-else></slot>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';
import UluAccordion from './UluAccordion.vue';

const props = defineProps({
  /**
   * Array of items to render as accordions.
   * Each item can have: title, content, isOpen, classes
   */
  items: {
    type: Array,
    default: () => []
  },
  /**
   * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
   */
  triggerTextElement: {
    type: String,
    default: "strong"
  },
  /**
   * Class modifiers (ie. 'transparent', 'secondary', etc)
   */
  modifiers: [String, Array],
  /**
   * Enable or configure animations.
   * - `false` (default) to disable all animations.
   * - `true` to enable animations with default settings.
   * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
   */
  animate: {
    type: [Boolean, Object],
    default: true
  },
});

const activeAccordionId = ref(null);

function toggle(id, isOpen) {
  if (isOpen) {
    activeAccordionId.value = id;
  } else if (activeAccordionId.value === id) {
    activeAccordionId.value = null;
  }
}

provide('uluAccordionGroup', {
  activeAccordionId,
  toggle
});
</script>