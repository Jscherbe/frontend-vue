<script setup>
  import { computed } from "vue";
  import { urlize } from "@ulu/utils/string.js";
  import { useScrollAnchorSection } from "./useScrollAnchorSection";

  const props = defineProps({
    title: String,
    titleElement: {
      type: String,
      default: "h2"
    },
    titleClass: {
      type: String,
      default: "h2"
    },
    customTitleId: String,
    wrapperClass: {
      type: String,
      default: "scroll-anchors__section"
    },
    activeClass: {
      type: String,
      default: 'is-active'
    }
  });

  const { element, titleId, isActive, section } = useScrollAnchorSection(props);
</script>

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