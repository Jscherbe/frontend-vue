<template>
  <UluPopover :classes="popoverClasses">
    <template #trigger="{ isOpen }">
      <slot name="trigger" :isOpen="isOpen">
        <span>{{ triggerText }}</span>
        <UluIcon 
          class="button__icon" 
          icon="type:dropdownExpand" 
          :style="{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }"
        />
      </slot>
    </template>
    <template #default>
      <UluMenuStack :items="items"/>
    </template>
  </UluPopover>
</template>

<script setup>
  import UluPopover from "../../plugins/popovers/UluPopover.vue";
  import UluMenuStack from "../navigation/UluMenuStack.vue";
  import UluIcon from "../elements/UluIcon.vue";
  defineProps({
    /**
     * Dropdown menu items (to be passed to UluMenu)
     */
    items: Array,
    /**
     * Optional text if not using slot
     */
    triggerText: String,
    /**
     * Pass classes object to UluPopover classes prop
     */
    popoverClasses: {
      type: Object,
      default: () => ({
        trigger: "button"
      })
    }
  });
</script>