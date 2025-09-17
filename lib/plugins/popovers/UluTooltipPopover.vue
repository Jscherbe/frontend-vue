<!-- NOTE: Need to rename classes when moving this into the library -->
<template>
  <span 
    class="popover popover--tooltip is-active"
    ref="content"
    aria-hidden="true" 
    :data-placement="placement"
    :class="config.class"
    :style="floatingStyles"
  >
    <span v-if="config.isHtml" class="popover__inner" v-html="config.content">
    </span>
    <span v-else class="popover__inner">
      <component v-if="config.component" :is="config.component" v-bind="config.componentProps"/>
      <template v-else>
        {{ config.content }}
      </template>
    </span>
    <span 
      v-if="config.arrow"
      class="popover__arrow" 
      ref="contentArrow"
      :style="arrowStyles"
    ></span>
  </span>
</template>

<script setup>
  import { ref, toRef, computed, watch } from "vue";
  import { 
    useFloating,
    autoUpdate,
    offset,
    inline,
    flip,
    shift,
    arrow,
  } from "@floating-ui/vue";

  const props = defineProps({
    config: Object,
    trigger: {
      type: Object,
      default: null
    }
  });

  const content = ref(null);
  const contentArrow = ref(null);

  const middleware = ref([]);
  const placementConfig = computed(() => props.config?.placement);

  const { 
    floatingStyles, 
    placement,
    middlewareData,
    update,
    isPositioned,
  } = useFloating(toRef(props, 'trigger'), content, {
    placement: placementConfig,
    whileElementsMounted: autoUpdate,
    middleware: middleware,
  });

  watch(
    [() => props.config, contentArrow],
    ([config, arrowEl]) => {
      const mw = [];
      if (!config) return;
      if (config.inline) mw.push(inline());
      if (config.offset) mw.push(offset(config.offset));
      mw.push(flip());
      mw.push(shift());
      if (config.arrow && arrowEl) {
        mw.push(arrow({ element: arrowEl }));
      }
      middleware.value = mw;
    },
    { immediate: true, deep: true }
  );

  const arrowStyles = computed(() => {
    const pos = middlewareData.value?.arrow;
    if (!pos) return null;
    return {
      position: "absolute",
      left: pos?.x != null ? `${ pos.x }px` : "",
      top: pos?.y != null ? `${ pos.y }px` : "",
    };
  });

  watch(() => props.config, (config) => {
    if (config && config.onReady) {
      config.onReady({ update, isPositioned });
    }
  });
</script>