<template>
  <Disclosure v-slot="{ open }">
    <div class="accordion" :class="{ [activeClass]: open }">
      <DisclosureButton 
        class="accordion__toggle" 
        :class="[
          { [activeClass]: open }, 
          toggleClasses
        ]"
      >
        <slot name="toggle" :open="open">
          <component :is="toggleElement">
            {{ toggleText }}
          </component>
        </slot>
        <slot name="toggleIcon" :open="open">
          <FaIcon 
            class="accordion__toggle-icon"
            :icon="open ? 'fas fa-minus' : 'fas fa-plus'"
            style="display: inline;"
          />
        </slot>
      </DisclosureButton>
      <DisclosurePanel class="accordion__content">
        <slot/>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  defineProps({
    /**
     * Test to use for accordion, alternatively use #toggle slot
     */
    toggleText: String,
    /**
     * If using toggle text sets the inner element the text is wrapped in, usually a headline or strong
     */
    toggleElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes to bind for the toggle button
     */
    toggleClasses: [String, Object, Array],
    /**
     * Active class output on container and toggle elements
     */
    activeClass: {
      type: String,
      default: "is-active"
    }
  });
</script>