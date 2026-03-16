<template>
  <component 
    :is="resolvedElement" 
    v-bind="resolvedAttrs"
  >
    <slot></slot>
  </component>
</template>

<script setup>
  import { computed } from 'vue';
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    /**
     * Router link target.
     */
    to: [String, Object],
    /**
     * Alternative to 'to' (used in some legacy or specific data structures like UluMenu items).
     */
    path: String,
    /**
     * Standard URL for native anchor tags.
     */
    href: String,
    /**
     * Target attribute for anchor tags (e.g. '_blank').
     */
    target: String,
    /**
     * Download attribute for anchor tags.
     */
    download: [Boolean, String],
    /**
     * Optional explicit element to use (e.g., if you need 'div' or 'span' instead of a button).
     */
    element: String,
    /**
     * Vue Router active class override.
     */
    activeClass: String,
    /**
     * Vue Router exact active class override.
     */
    exactActiveClass: String,
    /**
     * Allows passing 'click' as a prop to signify this is an action (used in UluMenu data objects).
     * Note: The actual @click listener should be attached via fallthrough attrs, this is just for logic routing.
     */
    click: Function
  });

  const resolvedElement = computed(() => {
    if (props.element) return props.element;
    if (props.to || props.path) return RouterLink;
    if (props.href) return "a";
    return "button";
  });

  const resolvedAttrs = computed(() => {
    const attrs = {};
    
    if (props.to || props.path) {
      attrs.to = props.to || props.path;
      if (props.activeClass) attrs.activeClass = props.activeClass;
      if (props.exactActiveClass) attrs.exactActiveClass = props.exactActiveClass;
    } else if (props.href) {
      attrs.href = props.href;
      if (props.target) attrs.target = props.target;
      if (props.download) {
        attrs.download = typeof props.download === "string" ? props.download : true;
      }
    } else if (!props.element || props.element === "button") {
      // It's a button, ensure it doesn't accidentally submit forms unless requested
      attrs.type = "button";
    }
    
    return attrs;
  });
</script>
