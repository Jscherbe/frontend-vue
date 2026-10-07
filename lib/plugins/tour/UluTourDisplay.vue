<template>
  <Teleport to="body">
    <template v-if="tourState.active">
      
      <!-- 1. FULL COMPONENT TAKEOVER -->
      <component 
        v-if="resolvedComponent" 
        :is="resolvedComponent" 
        data-ulu-tour-ui="true"
        :step="currentStep"
        :tourState="tourState"
        :api="api"
        v-bind="currentStep.componentProps" 
      />

      <!-- 2. RENDER MODAL STEP -->
      <component 
        v-else-if="!currentStep?.target" 
        :is="resolvedModalComponent"
        :modelValue="true"
        data-ulu-tour-ui="true"
        v-bind="resolvedModalProps"
        @close="api.stop()"
      >
        <component 
          v-if="resolvedContentComponent" 
          :is="resolvedContentComponent" 
          :step="currentStep"
          :tourState="tourState"
          :api="api"
          :is-modal="true"
          v-bind="currentStep.componentProps"
        />
        <UluTourContent v-else :step="currentStep" :is-modal="true" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <component :is="resolvedPagerComponent" />
        </template>
      </component>

      <!-- 3. RENDER POPOVER STEP -->
      <component 
        v-else
        :is="resolvedPopoverComponent"
        ref="popoverBase"
        :trigger="targetEl"
        :config="resolvedConfig"
        :style="{ zIndex: 9999 }"
        :isOpen="true"
        data-ulu-tour-ui="true"
        @close="api.stop()"
        v-bind="resolvedPopoverProps"
      >
        <component 
          v-if="resolvedContentComponent" 
          :is="resolvedContentComponent" 
          :step="currentStep"
          :tourState="tourState"
          :api="api"
          :is-modal="false"
          v-bind="currentStep.componentProps"
        />
        <UluTourContent v-else :step="currentStep" :is-modal="false" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <component :is="resolvedPagerComponent" />
        </template>
      </component>

      <!-- OPTIONAL HIGHLIGHT BACKDROP -->
      <div 
        v-if="currentStep?.target && currentStep?.highlight && targetRect" 
        class="tour-highlight-backdrop"
        :style="highlightStyles"
        data-ulu-tour-ui="true"
        @click="api.stop()"
      ></div>
    </template>
  </Teleport>
</template>

<script setup>
  import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
  import UluModal from '../../components/collapsible/UluModal.vue';
  import UluPopoverBase from '../popovers/UluPopoverBase.vue';
  import UluTourPager from './UluTourPager.vue';
  import UluTourContent from './UluTourContent.vue';
  import { useTour } from './useTour.js';
  
  const { api, state: tourState } = useTour();
  
  const currentStep = computed(() => tourState.active?.steps[tourState.stepIndex]);

  // Component Resolution
  const resolvedComponent = computed(() => currentStep.value?.component || tourState.active?.component);
  const resolvedContentComponent = computed(() => currentStep.value?.contentComponent || tourState.active?.contentComponent);
  const resolvedPagerComponent = computed(() => currentStep.value?.pagerComponent || tourState.active?.pagerComponent || UluTourPager);
  const resolvedModalComponent = computed(() => currentStep.value?.modalComponent || tourState.active?.modalComponent || UluModal);
  const resolvedPopoverComponent = computed(() => currentStep.value?.popoverComponent || tourState.active?.popoverComponent || UluPopoverBase);

  // Floating UI Setup for Popovers
  const targetEl = ref(null);
  const popoverBase = ref(null);

  const resolvedConfig = computed(() => ({
    placement: currentStep.value?.placement || 'bottom',
    arrow: true,
    offset: 8
  }));
  
  // Prop Resolution
  const resolvedModalProps = computed(() => {
    return {
      ...(tourState.active?.modalProps || {}),
      ...(currentStep.value?.modalProps || {})
    };
  });
  
  const resolvedPopoverProps = computed(() => {
    return {
      modifiers: 'large',
      ...(tourState.active?.popoverProps || {}),
      ...(currentStep.value?.popoverProps || {})
    };
  });

  // Highlight Backdrop Setup
  const targetRect = ref(null);
  
  const updateTargetRect = () => {
    if (targetEl.value) {
      const rect = targetEl.value.getBoundingClientRect();
      targetRect.value = {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height
      };
    } else {
      targetRect.value = null;
    }
  };

  const highlightStyles = computed(() => {
    if (!targetRect.value) return {};
    const t = targetRect.value;
    return {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'auto',
      zIndex: 9998,
      background: 'rgba(0,0,0,0.5)',
      clipPath: `polygon(
        0% 0%, 
        100% 0%, 
        100% 100%, 
        0% 100%, 
        0% ${ t.top }px, 
        ${ t.left }px ${ t.top }px, 
        ${ t.left }px ${ t.top +  t.height }px, 
        ${ t.left +  t.width }px ${ t.top +  t.height }px, 
        ${ t.left +  t.width }px ${ t.top }px, 
        ${ t.left }px ${ t.top }px, 
        0% ${ t.top }px
      )`
    };
  });

  // Watch for step changes to update floating UI target
  watch(currentStep, async (step) => {
    if (step?.target) {
      await nextTick();
      const el = document.querySelector(step.target);
      if (el) {
        targetEl.value = el;
        // UluPopoverBase's isOpen watcher automatically calls update(), 
        // but since isOpen stays strictly true here when switching between popover steps,
        // we might need to manually trigger an update if the target changed.
        if (popoverBase.value) {
          popoverBase.value.update();
        }
        if (step.highlight) {
          updateTargetRect();
        }
      } else {
        console.warn(`Tour target not found: ${step.target}`);
      }
    } else {
      targetEl.value = null;
      targetRect.value = null;
    }
  }, { immediate: true });

  onMounted(() => {
    window.addEventListener('resize', updateTargetRect);
    window.addEventListener('scroll', updateTargetRect);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateTargetRect);
    window.removeEventListener('scroll', updateTargetRect);
  });
</script>
