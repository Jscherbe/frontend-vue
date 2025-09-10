<template>
  <UluCollapsible
    :model-value="modelValue"
    :start-open="startOpen"
    :title="summaryText"
    :classes="mergedClasses"
    :animate="animate"
    @update:model-value="$emit('update:modelValue', $event)"
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
     * v-model for controlling open state  (optional)
     */
    modelValue: {
      type: Boolean,
      default: undefined
    },
    /**
     * Whether the accordion is open by default
     */
    startOpen: Boolean,
    /**
     * Enable or configure animations.
     * - `false` (default) to disable all animations.
     * - `true` to enable animations with default settings.
     * - An object to provide custom options to auto-animate (e.g., { duration: 100, easing: 'linear' }).
     */
    animate: {
      type: [Boolean, Object],
      default: false
    },
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
        containerOpen: 'is-active'
      })
    },
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  });

  const emit = defineEmits(['update:modelValue']);

  const { resolvedModifiers } = useModifiers({ props, baseClass: "accordion" });

  const mergedClasses = computed(() => {
    const merged = { ...props.classes };
    merged.container = [merged.container, resolvedModifiers.value];
    return merged;
  });
</script>
