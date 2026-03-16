<template>
  <UluAction
    :to="to"
    :href="href"
    :target="target"
    :download="download"
    class="button-verbose"
    :class="resolvedModifiers"
  >
    <component 
      v-if="$slots.title || title" 
      :is="titleElement"
      class="button-verbose__title"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </component>
    <span v-if="$slots.default || body" class="button-verbose__body">
      <slot>
        {{ body }}
      </slot>
    </span>
    <UluIcon
      v-if="icon"
      :icon="icon"
      class="button-verbose__icon"
      aria-hidden="true"
    />
  </UluAction>
</template>

<script setup>
  import { computed } from "vue";
  import UluAction from "../utils/UluAction.vue";
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * The title of the button. Can also be passed via slot.
     */
    title: String,
    /**
     * Optional element to use for title
     */
    titleElement: {
      type: String,
      default: "strong"
    },
    /**
     * The body text of the button. Can also be passed via slot.
     */
    body: String,
    /**
     * Icon prop, if used will set the icon for the button, will use UluIcon (which uses font-awesome icons conditionally)
     */
    icon: [String, Array],
    /**
     * If set will use router-link for button component and pass to prop
     */
    to: [String, Object],
    /**
     * Sets the button to a link with this href
     */
    href: String,
    /**
     * Set a value for target attribute when button is a link
     */
    target: String,
    /**
     * Sets the download attribute on the link (passing string [filename] will populate the download attribute, true will just include it as boolean attribute)
     */
    download: [Boolean, String],
    /**
     * Preset to set inline style
     */
    inline: Boolean,
    /**
     * Preset to set full-width style
     */
    fullWidth: Boolean,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({ 
    props, 
    baseClass: "button-verbose",
    internal: computed(() => ({
      "inline": props.inline,
      "full-width": props.fullWidth,
    }))
  });
</script>