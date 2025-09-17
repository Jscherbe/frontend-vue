<template>
  <Teleport v-if="tooltip?.state.visible" :to="tooltip.state.config.teleportTo || 'body'">
    <UluTooltipPopover :trigger="tooltip.state.trigger" :config="tooltip.state.config" />
  </Teleport>
</template>

<script setup>
import { inject } from 'vue';
import { TooltipStateKey } from './index.js';
import UluTooltipPopover from './UluTooltipPopover.vue';

// Inject the global tooltip state from the plugin
const tooltip = inject('uluTooltipState');
</script>
