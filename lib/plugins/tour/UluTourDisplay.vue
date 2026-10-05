<template>
  <Teleport to="body">
    <template v-if="tourState.active">
      <!-- RENDER MODAL STEP -->
      <UluModal 
        v-if="!currentStep?.target" 
        :modelValue="true"
        v-bind="currentStep?.modalOptions"
        @close="api.stop()"
      >
        <component 
          v-if="currentStep?.component" 
          :is="currentStep.component" 
          v-bind="currentStep.componentProps"
        />
        <UluTourStep v-else :step="currentStep" :is-modal="true" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <UluTourPager />
        </template>
      </UluModal>

      <!-- RENDER POPOVER STEP -->
      <UluPopoverContent 
        v-else
        class="is-active"
        element="div"
        ref="popoverBase"
        :trigger="targetEl"
        :config="resolvedConfig"
        :style="{ zIndex: 9999 }"
        @click.stop
      >
        <component 
          v-if="currentStep?.component" 
          :is="currentStep.component" 
          v-bind="currentStep.componentProps"
        />
        <UluTourStep v-else :step="currentStep" :is-modal="false" />
        
        <template #footer v-if="!currentStep?.hideFooter">
          <UluTourPager :showClose="true" />
        </template>
      </UluPopoverContent>

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
  import { useRequiredInject } from '../../composables/useRequiredInject.js';
  import UluModal from '../../components/collapsible/UluModal.vue';
  import UluPopoverContent from '../popovers/UluPopoverContent.vue';
  import UluTourPager from './UluTourPager.vue';
  import UluTourStep from './UluTourStep.vue';
  import { tourState as globalTourState } from './api.js';
  
  const api = useRequiredInject('uluTour');
  const tourState = globalTourState;
  
  const currentStep = computed(() => tourState.active?.steps[tourState.stepIndex]);
  const isLastStep = computed(() => tourState.active && tourState.stepIndex === tourState.active.steps.length - 1);

  // Floating UI Setup for Popovers
  const targetEl = ref(null);
  const popoverBase = ref(null);

  const resolvedConfig = computed(() => ({
    placement: currentStep.value?.placement || 'bottom',
    arrow: true,
    offset: 8
  }));

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
