<template>
  <slot v-if="shouldShow" />
</template>

<script setup>
  import { ref, computed, watch, onBeforeUnmount } from 'vue';
  import { useRequiredInject } from '../../composables/useRequiredInject.js';

  const props = defineProps({
    /**
     * The maximum breakpoint to show the content at.
     */
    max: String,
    /**
     * The minimum breakpoint to show the content at.
     */
    min: String,
    /**
     * Only show the content at this breakpoint.
     */
    only: String,
  });

  const uluBreakpointManager = useRequiredInject('uluBreakpointManager');

  const conditions = ref({});
  const handlers = ref([]);
  const handlersSetup = ref(false);

  const shouldShow = computed(() => {
    if (!handlersSetup.value) return false;
    const activeProps = ['max', 'min', 'only'].filter(p => props[p]);
    if (activeProps.length === 0) {
      return false;
    }
    return Object.values(conditions.value).every(c => c);
  });

  const setupHandlers = (manager) => {
    const setupCondition = (direction) => {
      const breakpointName = props[direction];
      if (breakpointName) {
        conditions.value[direction] = false;
        const handler = {
          on: () => { conditions.value[direction] = true; },
          off: () => { conditions.value[direction] = false; },
        };
        manager.at(breakpointName)[direction](handler);
        handlers.value.push({ name: breakpointName, direction, handler });
      }
    };

    setupCondition('max');
    setupCondition('min');
    setupCondition('only');

    handlersSetup.value = true;
  };

  const tearDownHandlers = () => {
    if (uluBreakpointManager.value) {
      handlers.value.forEach(({ name, direction, handler }) => {
        uluBreakpointManager.value.at(name).remove(handler, direction);
      });
    }
    handlers.value = [];
    conditions.value = {};
    handlersSetup.value = false;
  };

  watch(uluBreakpointManager, (manager) => {
    if (manager && !handlersSetup.value) {
      setupHandlers(manager);
    }
  }, { immediate: true });

  // Watch all the props and update if they change
  // - Using array syntax to avoid "deep" flag
  watch([() => props.max, () => props.min, () => props.only], () => {
    if (uluBreakpointManager.value && handlersSetup.value) {
      tearDownHandlers();
      setupHandlers(uluBreakpointManager.value);
    }
  });

  onBeforeUnmount(() => {
    tearDownHandlers();
  });
</script>
