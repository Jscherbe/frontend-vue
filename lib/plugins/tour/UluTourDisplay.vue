<template>
  <Teleport to="body">
    <template v-if="tourState.active">
      
      <!-- 1. FULL COMPONENT TAKEOVER -->
      <component 
        v-if="currentStep?.component" 
        :is="currentStep.component" 
        v-bind="currentStep.componentProps" 
      />

      <!-- 2. RENDER MODAL STEP -->
      <UluModal 
        v-else-if="!currentStep?.target" 
        :modelValue="true"
        v-bind="resolvedModalProps"
        @close="api.stop()"
      >
        <component 
          v-if="currentStep?.contentComponent" 
          :is="currentStep.contentComponent" 
          v-bind="currentStep.componentProps"
        />
        <UluTourContent v-else :step="currentStep" :is-modal="true" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <UluTourPager />
        </template>
      </UluModal>

      <!-- 3. RENDER POPOVER STEP -->
      <UluPopoverBase 
        v-else
        ref="popoverBase"
        :trigger="targetEl"
        :config="resolvedConfig"
        :style="{ zIndex: 9999 }"
        :isOpen="true"
        @close="api.stop()"
        v-bind="resolvedPopoverProps"
      >
        <component 
          v-if="currentStep?.contentComponent" 
          :is="currentStep.contentComponent" 
          v-bind="currentStep.componentProps"
        />
        <UluTourContent v-else :step="currentStep" :is-modal="false" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <UluTourPager />
        </template>
      </UluPopoverBase>

      <!-- OPTIONAL HIGHLIGHT BACKDROP -->
      <div 
        v-if="currentStep?.target && currentStep?.highlight && targetRect" 
        class="tour-highlight-backdrop"
        :style="highlightStyles"
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
