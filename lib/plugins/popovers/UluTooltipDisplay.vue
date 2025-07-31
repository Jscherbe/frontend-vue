<!-- 
  Note: 
  Using the name TooltipDisplay incase we want to create abstract 
  component (wrapper, renderless, etc) in the future 
-->
<template>
  <Teleport :to="options.plugin.tooltipTeleportTo">
    <TooltipPopover v-if="active" :config="activeConfig"/>
  </Teleport>
</template>

<script setup>
  import { active, activeConfig, options } from "./manager.js";
  import TooltipPopover from "./UluTooltipPopover.vue";
</script>