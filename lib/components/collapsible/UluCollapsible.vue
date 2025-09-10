<template>
  <div 
    @keydown.esc="handleEscape"
    :class="[classes.container, containerStateClasses]"
  >
    <button 
      :class="[classes.toggle, toggleStateClasses]"
      :id="toggleId"
      :aria-controls="contentId" 
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <slot name="toggle" :isOpen="isOpen">
        {{ title }}
      </slot>
    </button>
    <div 
      :class="classes.content"
      tabindex="-1"
      ref="content"
      :id="contentId"
      :aria-hidden="!isOpen"
      :aria-labelledby="toggleId"
      :style="contentStyles"
      v-show="!isHidden"
    >
      <!-- 
      Using inner container to allow no styles on content container
      as they interfere with getting accurate measurements of the content
      when it's hidden (scrollHeight) 
      -->
      <div :class="classes.contentInner">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, nextTick, watch } from 'vue';

  defineOptions({ name: 'UluCollapsible' });

  const props = defineProps({
    /**
     * v-model for controlling open state
     */
    modelValue: {
      type: Boolean,
      default: null
    },
    /**
     * Set title for toggle (instead of using slot)
     */
    title: String,
    /**
     * Closes with escape key
     */
    closeOnEscape: Boolean,
    /**
     * When the component is shown it should start visible or hidden
     */
    startOpen: Boolean,
    /**
     * Whether or not to transition the show and hide
     */          
    transitionHeight: Boolean,
    /**
     * Transition should fade as it expands
     */         
    transitionFades: Boolean,
    /**
     * Transition Timing Function
     */
    transitionTiming: {
      type: String,
      default: "ease-out"
    },
    /**
     * Transition Duration (css duration string), use comma seperation if different for opacity (fade).
     * Note: This is used to calculate a fallback timer if transitions fail
     */      
    transitionDuration: {
      type: String,
      default: "400ms",
      validator(value) {
        // Make sure that it's a valid css duration (ms|s)
        return value.includes("s");
      }
    },
    /**
     * Classes for elements ({ container, toggle, content, contentInner })
     * - Any valid class binding value per element
     */
    classes: {
      type: Object,
      default: () => ({
        container: 'collapsible-region',
        toggle: 'collapsible-region__toggle',
        content: 'collapsible-region__content',
        contentInner: 'collapsible-region__content-inner',
        containerOpen: 'collapsible-region--open',
        containerClosed: 'collapsible-region--closed',
        containerTransitioning: 'collapsible-region--transitioning',
        toggleOpen: 'is-open',
        toggleClosed: 'is-closed'
      })
    },
  });

  const emit = defineEmits(['update:modelValue', 'collapsible-opened', 'collapsible-opening', 'collapsible-closed', 'collapsible-closing']);

  const content = ref(null);

  const isControlled = computed(() => props.modelValue !== null);
  const internalIsOpen = ref(props.startOpen);

  const isOpen = computed({
    get() {
      return isControlled.value ? props.modelValue : internalIsOpen.value;
    },
    set(newValue) {
      if (isControlled.value) {
        emit('update:modelValue', newValue);
      } else {
        internalIsOpen.value = newValue;
      }
    }
  });

  watch(() => props.modelValue, (newValue) => {
    if (!isControlled.value) return;

    if (newValue && !isOpen.value) {
      open();
    } else if (!newValue && isOpen.value) {
      close();
    }
  });

  // Note (isOpen vs isHidden): 'isOpen' is the actaul state of the content, 
  // and 'isHidden' is just used for display none
  const isHidden = ref(!isOpen.value);
  const isTransitioning = ref(false);
  const transitionsDisabled = ref(false);
  const contentHeight = ref(isOpen.value ? 'auto' : '0px');
  const contentOpacity = ref(props.transitionFades && !isOpen.value ? 0 : 1);

  let uid = 0;
  const getUid = () => {
    const id = `ulu-collapsible-${++uid}`;
    if (typeof document !== 'undefined' && document.getElementById(id)) {
      return getUid();
    }
    return id;
  };

  const toggleId = ref(getUid());
  const contentId = ref(getUid());

  // Transitions add function here used if needing to cancel
  let onCleanupTransition = null;

  const getUnitlessDuration = (value) => {
    const duration = parseFloat(value.split(',')[0]);
    return value.includes('ms') ? duration : duration * 1000;
  };

  const transitionTimeout = Math.ceil(getUnitlessDuration(props.transitionDuration) + 500);

  const contentStyles = computed(() => {
    if (props.transitionHeight) {
      return {
        overflow: 'hidden',
        height: contentHeight.value,
        transitionDuration: props.transitionDuration,
        transitionTiming: props.transitionTiming,
        opacity: contentOpacity.value,
        transitionProperty: transitionsDisabled.value ? 'none' : `height${props.transitionFades ? ',opacity' : ''}`
      };
    }
    return {};
  });

  const containerStateClasses = computed(() => {
    const c = props.classes;
    const stateClasses = {};
    if (c.containerOpen && isOpen.value && !isTransitioning.value) {
      stateClasses[c.containerOpen] = true;
    }
    if (c.containerClosed && !isOpen.value && !isTransitioning.value) {
      stateClasses[c.containerClosed] = true;
    }
    if (c.containerTransitioning && isTransitioning.value) {
      stateClasses[c.containerTransitioning] = true;
    }
    return stateClasses;
  });

  const toggleStateClasses = computed(() => {
    const c = props.classes;
    const stateClasses = {};
    if (c.toggleOpen && isOpen.value && !isTransitioning.value) {
      stateClasses[c.toggleOpen] = true;
    }
    if (c.toggleClosed && !isOpen.value && !isTransitioning.value) {
      stateClasses[c.toggleClosed] = true;
    }
    return stateClasses;
  });

  function removeTransition(_canceled) {
    if (onCleanupTransition) {
      onCleanupTransition();
    }
    isTransitioning.value = false;
    onCleanupTransition = null;
  }

  /**
   * Function that will handle setting the styles in a way that allows for
   * transitioning from display: none to height: auto. With optional fade.
   */
  function open() {
    // If there are no animations
    if (!props.transitionHeight) {
      isOpen.value = true;
      isHidden.value = false;
      return;
    }
    removeTransition(true);
    let tid;
    const element = content.value;
    // When finished clear the fallback and set the height to auto
    // incase something else on the page changes this elements layout/height,
    // remove the one time listener, and call the ending callback 
    // and user callbacks
    const complete = () => {
      contentHeight.value = 'auto';
      isOpen.value = true;
      removeTransition();
      emit('collapsible-opened');
    };
    onCleanupTransition = () => {
      clearTimeout(tid);
      element.removeEventListener('transitionend', complete);
    };
    // Listen for the end of the transition we are about to trigger on 
    element.addEventListener('transitionend', complete);
    isHidden.value = false;
    isTransitioning.value = true;
    emit('collapsible-opening');
    // Waiting for vue to update the elements style.display from none
    // so we can measure it's hidden height, set it statically,
    // to then trigger the transition to that static height
    nextTick(() => {
      contentHeight.value = element.scrollHeight + 'px';
      if (props.transitionFades) {
        contentOpacity.value = 1;
      }
      // Setting a fallback incase anything interupts the browsers 
      // ability to fire the 'transitionend' event, the element will 
      // still be functional
      tid = setTimeout(complete, transitionTimeout);
    });
  }

  /**
   * Function that will handle setting the styles in a way that allows for
   * transitioning from height: auto to display: none
   */
  function close() {
    // If there are no animations
    if (!props.transitionHeight) {
      isOpen.value = false;
      isHidden.value = true;
      return;
    }
    removeTransition(true);
    let tid;
    // Measure the elements height, to set it from auto  
    // to static so that we can transition it
    const element = content.value;
    const height = element.scrollHeight;
    // Set the elements height to a static value so we can transition it
    // then on next tick when that value is set, start the transition
    const setup = () => {
      element.addEventListener('transitionend', complete);
      contentHeight.value = height + 'px';
      nextTick(init);
    };
    // Enable transitions and then on next update start it
    // by setting the height to 0
    const init = () => {
      transitionsDisabled.value = false;
      nextTick(() => {
        requestAnimationFrame(transition);
      });
    };
    const transition = () => {
      contentHeight.value = '0px';
      if (props.transitionFades) {
        contentOpacity.value = 0;
      }
    };
    const complete = () => {
      isOpen.value = false;
      isHidden.value = true;
      removeTransition();
      emit('collapsible-closed');
    };
    const fallback = () => {
      transition();
      complete();
    };
    onCleanupTransition = () => {
      clearTimeout(tid);
      element.removeEventListener('transitionend', complete);
    };
    // Temporarily disable the transitions on the element,
    // on next tick when transistions are disabled (removing transiton-property) 
    // attach the fallback and setup the transition
    transitionsDisabled.value = true;
    isTransitioning.value = true;
    emit('collapsible-closing');
    nextTick(() => {
      requestAnimationFrame(setup);
      tid = setTimeout(fallback, transitionTimeout);
    });
  }

  /**
   * Function used to toggle the collapsible 
   */
  function toggle() {
    if (isOpen.value && !isTransitioning.value) {
      close();
    } else {
      open();
    }
  }

  function handleEscape() {
    if (props.closeOnEscape && isOpen.value) {
      close();
    }
  }
</script>