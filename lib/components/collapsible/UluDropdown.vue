<template>
  <UluPopover
    :classes="popoverClasses"
    noPadding
  >
    <template #trigger="{ isOpen }">
      <slot :isOpen="isOpen"/>
    </template>
    <template #content>
      <UluMenuStack :items="items"/>
    </template>
  </UluPopover>
</template>

<script>
  import UluPopover from "../../plugins/popovers/UluPopover.vue";
  import UluMenuStack from "../navigation/UluMenuStack.vue";
  export default {
    name: "UluDropdown",
    components: {
      UluPopover,
      UluMenuStack
    },
    props: {
      /**
       * Dropdown menu items (to be passed to UluMenu)
       */
      items: Array,
      /**
       * Class to use on trigger
       */
      triggerClass: {
        type: [String, Object, Array],
        default: "button"
      },
    }
  };
</script>