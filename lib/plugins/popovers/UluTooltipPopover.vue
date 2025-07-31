<!-- NOTE: Need to rename classes when moving this into the library -->
<template>
  <span 
    class="site-popover site-popover--tooltip is-active"
    ref="content"
    aria-hidden="true" 
    :data-placement="placement"
    :class="config.class"
    :style="floatingStyles"
  >
    <span 
      v-if="config.isHtml" 
      class="site-popover__inner" 
      v-html="config.content"
    >
    </span>
    <span v-else class="site-popover__inner">
      {{ config.content }}
    </span>
    <span 
      v-if="config.arrow"
      class="site-popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
    ></span>
  </span>
</template>

<script setup>
  import { ref, toRef, computed } from "vue";
  import { 
    useFloating,
    autoUpdate,
    offset,
    inline,
    flip,
    shift,
    arrow,
  } from "@floating-ui/vue";

  const { config } = defineProps({
    config: Object
  });
  const trigger = toRef(config.trigger);
  const content = ref(null);
  const contentArrow = ref(null);
  const middleware = [
    ...(config.inline ? [ inline() ] : []),
    ...(config.offset ? [ offset(config.offset) ] : []),
    flip(), 
    shift(),
    ...(config.arrow ? [ arrow({ element: contentArrow }) ] : []),
  ];
  
  const options = {
    placement: config.placement,
    whileElementsMounted: autoUpdate,
    middleware
  }; 

  const { 
    floatingStyles, 
    placement, 
    middlewareData,
    update,
    isPositioned,
  } = useFloating(trigger, content, options);

  const arrowStyles = computed(() => {
    const pos = middlewareData.value?.arrow;
    if (!pos) return null;
    return {
      position: "absolute",
      left: pos?.x != null ? `${ pos.x }px` : "",
      top: pos?.y != null ? `${ pos.y }px` : "",
    };
  });

  if (config.onReady) {
    config.onReady({ update, isPositioned });
  }

</script>