<template>
  <TabGroup 
    v-slot="slotProps" 
    :defaultIndex="defaultIndex" 
    :selectedIndex="selectedIndex"
    :vertical="vertical"
    @change="$emit('change', $event)"
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
     * Active tab index by default (uncontrolled)
     */
    defaultIndex: Number,
    /**
     * Actively selected tab index (controlled)
     */
    selectedIndex: Number,
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

  // Explicitly declare the emit so Vue knows to capture the @change listener 
  // from the parent and NOT bundle it into $attrs
  defineEmits(['change']);

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