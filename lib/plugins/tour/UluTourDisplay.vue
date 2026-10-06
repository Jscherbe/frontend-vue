<template>
  <Teleport to="body">
    <template v-if="tourState.active">
      
      <!-- FULL COMPONENT TAKEOVER -->
      <component 
        v-if="currentStep?.component" 
        :is="currentStep.component" 
        v-bind="currentStep.componentProps" 
      />

      <!-- RENDER MODAL STEP -->
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

      <!-- RENDER POPOVER STEP -->
      <UluPopoverContent 
        v-else
        class="is-active"
        element="div"
        ref="popoverBase"
        :trigger="targetEl"
        :config="resolvedConfig"
        :style="{ zIndex: 9999 }"
        v-bind="resolvedPopoverProps"
        @click.stop
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
  import UluModal from '../../components/collapsible/UluModal.vue';
  import UluPopoverContent from '../popovers/UluPopoverContent.vue';
  import UluTourPager from './UluTourPager.vue';
  import UluTourContent from './UluTourContent.vue';
  import { useTour } from './useTour.js';
  import { wasClickOutside } from '@ulu/utils/browser/dom.js';
  
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

  // --- Click Outside Logic ---
  let clickOutsideListener = null;

  const removeClickOutside = () => {
    if (clickOutsideListener) {
      document.removeEventListener('click', clickOutsideListener);
      clickOutsideListener = null;
    }
  };

  const attachClickOutside = () => {
    removeClickOutside(); // Clean up any existing listener
    
    clickOutsideListener = (event) => {
      if (!tourState.active || !popoverBase.value?.content) return;
      
      // CRITICAL FIX: If the element that was clicked is no longer in the DOM,
      // it means the click caused a state change that unmounted the element 
      // (like clicking 'Next' on a modal, or 'Next' inside a custom component).
      // We must ignore these "ghost" clicks, otherwise they evaluate as "outside".
      if (!document.body.contains(event.target)) return;

      if (wasClickOutside(popoverBase.value.content, event)) {
        api.stop();
      }
    };

    // Defer attaching so the click that opened this step doesn't instantly close it
    setTimeout(() => {
      if (clickOutsideListener) {
        document.addEventListener('click', clickOutsideListener);
      }
    }, 0);
  };

  // Watch for step changes to update targets and listeners
  watch(currentStep, async (step) => {
    if (step?.target) {
      // Step is a Popover -> Set up targets and listeners
      attachClickOutside();
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
      // Step is a Modal -> Clean up popover logic
      removeClickOutside();
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
    removeClickOutside();
  });
</script>
