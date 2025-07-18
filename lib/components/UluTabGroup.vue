<template>
  <TabGroup v-slot="slotProps" :defaultIndex="defaultIndex" :vertical="vertical">
    <div 
      class="tabs" 
      :class="{
       'tabs--vertical' : vertical 
      }"
    >
      <slot v-bind="slotProps"/>
    </div>
  </TabGroup>
</template>

<script setup>
  import { TabGroup } from "@headlessui/vue";

  defineOptions({ 
    inheritAttrs: false 
  });

  defineProps({ 
    /**
     * Active tab index by default
     */
    defaultIndex: Number,
    /**
     * Whether or not to use vertical layout
     */
    vertical: Boolean
  });
</script>