<template>
  <TabGroup 
    v-slot="slotProps" 
    :defaultIndex="defaultIndex" 
    :vertical="vertical"
  >
    <div 
      v-bind="$attrs"
      class="tabs" 
      :class="resolvedModifiers"
    >
      <slot v-bind="slotProps"/>
    </div>
  </TabGroup>
</template>

<script setup>
  import { computed } from "vue";
  import { TabGroup } from "@headlessui/vue";
  import { useModifiers } from "../../composables/useModifiers.js";

  defineOptions({ 
    inheritAttrs: false 
  });

  const props = defineProps({ 
    /**
     * Active tab index by default
     */
    defaultIndex: Number,
    /**
     * Whether or not to use vertical layout
     */
    vertical: Boolean,
    /**
     * Whether or not to use sticky modifier (tablist)
     */
    sticky: Boolean,
    /**
     * Whether or not to use transparent modifier (tab panels)
     */
    transparent: Boolean,
    /**
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({ 
    props, 
    baseClass: "tabs",
    internal: computed(() => ({
      "vertical" : props.vertical,
      "sticky" : props.sticky,
      "transparent" : props.transparent
    }))
  });
</script>