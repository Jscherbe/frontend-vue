<template>
  <component 
    :is="element" 
    :class="['scroll-anchors__section', { 'is-active': isActive }]"
    ref="sectionRef" 
  >
    <slot :isActive="isActive" :titleId="titleId" :section="section" />
  </component>
</template>

<script setup>
  import { useScrollAnchorSection } from "./useScrollAnchorSection";

  const props = defineProps({
    /**
     * The title of the section, used for navigation and generating a default ID
     */
    title: {
      type: String,
      required: true
    },
    /**
     * A custom ID to use for the section anchor, overriding the auto-generated one
     */
    customTitleId: String,
    /**
     * Element to use 
     */
    element: {
      type: String,
      default: "div"
    }
  });

  const { sectionRef, titleId, isActive, section } = useScrollAnchorSection(props);
</script>
