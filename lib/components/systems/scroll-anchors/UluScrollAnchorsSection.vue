<template>
  <div :class="[props.wrapperClass, { [props.activeClass] : props.activeClass && isActive }]" ref="element">
    <component :is="props.titleElement" :class="props.titleClass" :id="titleId">
      <slot name="title">
        {{ props.title }}
      </slot>
    </component>
    <slot :section="section"></slot>
  </div>
</template>

<script setup>
  import { useScrollAnchorSection } from "./useScrollAnchorSection";

  const props = defineProps({
    /**
     * The title of the section, used for navigation and generating a default ID
     */
    title: String,
    /**
     * The HTML element to use for the title
     */
    titleElement: {
      type: String,
      default: "h2"
    },
    /**
     * The class to apply to the title element
     */
    titleClass: {
      type: String,
      default: "h2"
    },
    /**
     * A custom ID to use for the section anchor, overriding the auto-generated one
     */
    customTitleId: String,
    /**
     * The class to apply to the section's wrapper div
     */
    wrapperClass: {
      type: String,
      default: "scroll-anchors__section"
    },
    /**
     * The class to apply to the wrapper div when the section is active
     */
    activeClass: {
      type: String,
      default: 'is-active'
    }
  });

  const { element, titleId, isActive, section } = useScrollAnchorSection(props);
</script>
