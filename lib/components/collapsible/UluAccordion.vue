<template>
  <UluCollapsible
    v-model="model"
    :start-open="defaultOpen"
    :title="summaryText"
    :classes="mergedClasses"
    :transition-height="true"
  >
    <template #toggle="{ isOpen: open }">
      <slot name="toggle" :open="open">
        <component :is="summaryTextElement">
          {{ summaryText }}
        </component>
      </slot>
      <slot name="icon" :open="open">
        <span class="accordion__icon" :class="classes.icon">
          <UluIcon 
            :icon="open ? 'type:collapse' : 'type:expand'"
            style="display: inline;"
          />
        </span>
      </slot>
    </template>

    <template #default="{ isOpen: open }">
      <slot :open="open"/>
    </template>
  </UluCollapsible>
</template>

<script setup>
  import { computed } from 'vue';
  import UluIcon from "../elements/UluIcon.vue";
  import UluCollapsible from "./UluCollapsible.vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * v-model for controlling open state
     */
    modelValue: {
      type: Boolean,
      default: null
    },
    /**
     * Whether the accordion is open by default
     */
    defaultOpen: Boolean,
    /**
     * Text to use for accordion, alternatively use #toggle slot
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
     * Classes for elements. See UluCollapsible for all available class keys (toggle, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: 'accordion',
        toggle: 'accordion__summary',
        content: 'accordion__content',
        containerOpen: 'is-active',
        containerTransitioning: 'is-active'
      })
    },
    /**
     * Active class output on container and toggle elements
     */
    activeClass: {
      type: String,
      default: "is-active"
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  });

  const emit = defineEmits(['update:modelValue']);

  const model = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: "accordion" });

  const mergedClasses = computed(() => {
    const merged = { ...props.classes };
    merged.container = [merged.container, resolvedModifiers.value];
    return merged;
  });
</script>