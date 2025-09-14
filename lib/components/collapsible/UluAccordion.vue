<template>
  <UluCollapsible
    :model-value="modelValue"
    :start-open="startOpen"
    :trigger-text="triggerText"
    :classes="mergedClasses"
    :animate="animate"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <template #trigger="{ isOpen }">
      <slot name="trigger" :isOpen="isOpen">
        <component :is="triggerTextElement">
          {{ triggerText }}
        </component>
      </slot>
      <slot name="icon" :isOpen="isOpen">
        <span class="accordion__icon" :class="classes.icon">
          <UluIcon 
            :icon="isOpen ? 'type:collapse' : 'type:expand'"
            style="display: inline;"
          />
        </span>
      </slot>
    </template>

    <template #default="{ isOpen, toggle }">
      <slot :isOpen="isOpen" :toggle="toggle"/>
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
      default: true
    },
    /**
     * Text to use for accordion, alternatively use #trigger slot
     */
    triggerText: String,
    /**
     * If using summary text sets the inner element the text is wrapped in, usually a headline or strong
     */
    triggerTextElement: {
      type: String,
      default: "strong"
    },
    /**
     * Classes for elements. See UluCollapsible for all available class keys (trigger, content, etc).
     * The 'icon' key is also available for the icon span.
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: 'accordion',
        trigger: 'accordion__summary',
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
