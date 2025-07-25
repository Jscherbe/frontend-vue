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
          <span v-if="defaultIcons" class="accordion__icon" :class="classes.icon">
            <UluIcon 
              :definition="getIconDefinition(open ? 'close' : 'open')" 
              debug
              style="display: inline;"
            />
          </span>
        </slot>
      </DisclosureButton>
      <DisclosurePanel class="accordion__content" :class="classes.content">
        <slot :open="open"/>
      </DisclosurePanel>
    </div>
  </Disclosure>
</template>

<script setup>
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../composables/useModifiers.js";
  import { useIcon } from "../composables/useIcon.js";
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
     * Modifiers for tag class
     */
    modifiers: [String, Array],
    /**
     * Icons to use by default
     */
    defaultIcons: {
      type: Object,
      default: () => ({
        open: "fas fa-plus",
        close: "fas fa-minus"
      })
    }
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: "button" });
  const { getIconDefinition } = useIcon(props.defaultIcons);
  
</script>