<template>
  <component
    :is="element"
    :class="[
      'scroll-anchors__section',
      { 'is-active': isActive }
    ]"
    :data-ulu-sa-section-state="sectionState"
    ref="sectionRef"
  >
    <slot :isActive="isActive" :titleId="titleId" :section="section" :inactiveFrom="inactiveFrom" :activeFrom="activeFrom" :sectionState="sectionState" />
  </component>
</template>

<script setup>
  import { computed } from "vue";
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

  const { sectionRef, titleId, isActive, inactiveFrom, activeFrom, section } = useScrollAnchorSection(props);

  const sectionState = computed(() => {
    if (isActive.value) {
      if (activeFrom.value) return `enter-${activeFrom.value}`;
    } else {
      if (inactiveFrom.value) return `exit-${inactiveFrom.value}`;
    }
    return null;
  });
</script>
