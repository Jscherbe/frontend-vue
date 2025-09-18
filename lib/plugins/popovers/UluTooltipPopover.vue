<!-- NOTE: Need to rename classes when moving this into the library -->
<template>
  <span 
    class="popover popover--tooltip is-active"
    ref="content"
    aria-hidden="true" 
    :data-placement="placement"
    :class="resolvedConfig.class"
    :style="floatingStyles"
  >
    <span v-if="resolvedConfig.isHtml" class="popover__inner" v-html="resolvedConfig.content">
    </span>
    <span v-else class="popover__inner">
      <component v-if="resolvedConfig.component" :is="resolvedConfig.component" v-bind="resolvedConfig.componentProps"/>
      <template v-else>
        {{ resolvedConfig.content }}
      </template>
    </span>
    <span 
      v-if="resolvedConfig.arrow"
      class="popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
    ></span>
  </span>
</template>

<script setup>
  import { ref, toRef, computed } from "vue";
  import { useUluFloating } from "../../composables/useUluFloating.js";

  const props = defineProps({
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  });

  const content = ref(null);
  const resolvedConfig = computed(() => props.config);
  const { 
    floatingStyles, 
    placement,
    arrowStyles,
    contentArrow,
  } = useUluFloating(toRef(props, 'trigger'), content, resolvedConfig);
</script>