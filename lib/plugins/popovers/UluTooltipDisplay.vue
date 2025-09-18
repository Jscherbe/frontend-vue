<template>
  <Teleport v-if="tooltip?.state.visible" :to="tooltip.state.config.teleportTo || 'body'">
    <UluTooltipPopover :trigger="tooltip.state.trigger" :config="tooltip.state.config" />
  </Teleport>
</template>

<script setup>
  import { useRequiredInject } from "../../composables/useRequiredInject.js";
  import { TOOLTIP_STATE_KEY } from './index.js';
  import UluTooltipPopover from './UluTooltipPopover.vue';

  // Inject the global tooltip state from the plugin
  const tooltip = useRequiredInject(TOOLTIP_STATE_KEY);
</script>
