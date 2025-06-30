<template>
  <Disclosure v-slot="{ open }">
    <div 
      class="site-accordion__item" 
      :class="{ 'is-active' : open }"
    >
    <!-- remove h4 margins -->
      <DisclosureButton class="site-accordion__toggle h4">
        <div class="crop-margins">
          <slot name="summary">
            <component :is="summaryElement">{{ summary }}</component>
          </slot>
        </div>
        
        <FaIcon 
          class="site-accordion__toggle-icon"
          :icon="open ? 'fas fa-minus' : 'fas fa-plus'"
          style="display: inline;"
        />
      </DisclosureButton>
      <DisclosurePanel class="site-accordion__content">
        <slot/>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  defineProps({
    summary: String,
    summaryElement: {
      type: String,
      default: "h3"
    }
  });
</script>