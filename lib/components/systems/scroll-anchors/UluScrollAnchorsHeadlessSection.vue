<script setup>
  import { useScrollAnchorSection } from "./useScrollAnchorSection";

  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    customTitleId: String,
  });

  const { element, titleId, isActive, section } = useScrollAnchorSection(props);
</script>

<template>
  <div ref="element" :class="['scroll-anchors__section', { 'is-active': isActive }]">
    <slot :isActive="isActive" :titleId="titleId" :section="section" />
  </div>
</template>