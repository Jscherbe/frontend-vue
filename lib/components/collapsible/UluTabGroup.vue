<template>
  <TabGroup 
    v-slot="slotProps" 
    :defaultIndex="defaultIndex" 
    :vertical="vertical"
  >
    <div 
      v-bind="$attrs"
      class="tabs" 
      :class="[
        resolvedModifiers,
        {
         'tabs--vertical' : vertical 
        }
      ]"
    >
      <slot v-bind="slotProps"/>
    </div>
  </TabGroup>
</template>

<script setup>
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
     * Class modifiers (ie. 'transparent', 'secondary', etc)
     */
    modifiers: [String, Array]
  });

  const { resolvedModifiers } = useModifiers({ props, baseClass: "tabs" });
</script>