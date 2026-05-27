<template>
  <component 
    class="badge" 
    :class="resolvedModifiers"
    :is="element"
    :to="to"
    :href="href"
    @click="click"
  >
    <span class="badge__inner" :class="{ 'skeleton__background-color' : skeleton }">
      <!-- If just text user should use prop -->
      <span v-if="text" :aria-hidden="alt ? 'true' : null">
        {{ text }}
      </span>
      
      <!-- Else display as is, slot should contain an HTML element / component
      cannot be just a text node, if text node use text prop or wrap text in html element -->
      <slot v-else />
      <!-- When using text (abbreviations, etc) --> 
      <span v-if="alt" class="hidden-visually">{{ alt }}</span>
    </span>
  </component>
</template>

<script setup>
  import { computed } from "vue";
  import { RouterLink } from "vue-router";
  import { useModifiers } from "../../composables/useModifiers.js";

  const props = defineProps({
    /**
     * Whether to display a skeleton loading state.
     */
    skeleton: Boolean,
    /**
     * The size of the badge (e.g., 'small', 'large').
     */
    size: String,
    /**
     * The text content of the badge.
     */
    text: String,
    /**
     * Alt text for the badge, for accessibility.
     */
    alt: String,
    /**
     * The type or style of the badge (e.g., 'primary', 'secondary').
     */
    type: String,
    /**
     * A function to call when the badge is clicked. Renders as a <button>.
     */
    click: Function,
    /**
     * A Vue Router link location. Renders as a <router-link>.
     */
    to: [Object, String],
    /**
     * A URL. Renders as a standard <a> tag.
     */
    href: String,
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: [String, Array]
  });

  const isInteractive = computed(() => {
    return Boolean(props.to || props.click);
  });

  const { resolvedModifiers } = useModifiers({ 
    props, 
    baseClass: "badge",
    internal: computed(() => ({
      [props.size] : props.size,
      [props.type] : props.type,
      "clickable" : isInteractive.value
    }))
  });

  const element = computed(() => {
    const { click, to, href } = props;
    /* eslint-disable */
    return  click ? "button" : 
            to ? RouterLink : 
            href ? "a" : 
            "span";
    /* eslint-enable */
  });
</script>