<template>
  <div style="padding: 6rem;">
    <h2>Popover Tests</h2>
    <h2>Tooltip Tests</h2>
    <TestTooltipBasic/>
    <TestTooltipInline/>
    <TestTooltipFollow/>
    <TestPopoverBasic/>
    <TestPopoverWithFooter/>
  </div>
</template>

<script setup>
  import TestTooltipBasic from "./TestTooltipBasic.vue";
  import TestTooltipInline from "./TestTooltipInline.vue";
  import TestTooltipFollow from "./TestTooltipFollow.vue";
  import TestPopoverBasic from "./TestPopoverBasic.vue";
  import TestPopoverWithFooter from "./TestPopoverWithFooter.vue";
</script>