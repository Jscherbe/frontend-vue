<template>
  <UluPopoverBase 
    class="popover--tooltip is-active"
    :id="TOOLTIP_ID"
    :trigger="trigger"
    :config="resolvedConfig"
    :class="resolvedConfig.class"
  >
    <span v-if="resolvedConfig.isHtml" v-html="resolvedConfig.content"></span>
    <template v-else>
      <component v-if="resolvedConfig.component" :is="resolvedConfig.component" v-bind="resolvedConfig.componentProps"/>
      <template v-else>
        {{ resolvedConfig.content }}
      </template>
    </template>
  </UluPopoverBase>
</template>

<script setup>
  import { computed } from "vue";
  import { TOOLTIP_ID } from "./index.js";
  import UluPopoverBase from "./UluPopoverBase.vue";

  const props = defineProps({
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  });

  const resolvedConfig = computed(() => props.config);
</script>