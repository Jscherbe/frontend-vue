<template>
  <Disclosure :defaultOpen="defaultOpen" v-slot="{ open }">
    <div 
      class="accordion" 
      :class="[
        { [activeClass]: open }, 
        classes.container, 
        resolvedModifiers
      ]"
    >
      <DisclosureButton 
        class="accordion__summary" 
        :class="[
          { [activeClass]: open }, 
          classes.summary
        ]"
      >
        <slot name="summary" :open="open">
          <component :is="summaryTextElement">
            {{ summaryText }}
          </component>
        </slot>
        <slot name="icon" :open="open">
          <span class="accordion__icon" :class="classes.icon">
            <FaIcon :icon="open ? closeIconClass : openIconClass" style="display: inline;"/>
          </span>
        </slot>
      </DisclosureButton>
      <DisclosurePanel class="accordion__content" :class="classes.content">
        <slot/>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script setup>
  import { useModifiers } from "../composables/useModifiers.js";
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
  const props = defineProps({
    /**
     * Whether the accordion is open by default
     */
    defaultOpen: Boolean,
    /**
     * Test to use for accordion, alternatively use #toggle slot
     */
    summaryText: String,
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    summaryTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes for elements ({ container, summary, icon, content })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({})
    },
    /**
     * Active class output on container and toggle elements
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * Icon class for opening
     */
    openIconClass: {
      type: String,
      default: "fas fa-plus"
    },
    /**
     * Icon class for closing
     */
    closeIconClass: {
      type: String,
      default: "fas fa-minus"
    },
    /**
     * Modifiers for tag class
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers(props, "button");
</script>