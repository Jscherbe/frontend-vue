
<template>
  <dialog 
    :class="classes" 
    :aria-labelledby="labelledby" 
    :aria-describedby="describedby"
  >
    <header v-if="title" class="modal__header">
      <h2 class="modal__title" :class="titleClasses">
        <FaIcon v-if="icon && !iconBefore" class="modal__title-icon" :icon="titleIcon" />
        <span class="modal__title-text">{{ title }}</span>
      </h2>
      <button class="modal__close" aria-label="Close modal" @click="close" autofocus>
        <slot name="closeIcon">
          <FaIcon v-if="icon && !iconBefore" class="modal__close-icon" :icon="closeIcon" />
        </slot>
      </button>
    </header>
    <div class="modal__body">
      <slot/>
    </div>
    <div class="modal__resizer">
      <slot name="resizerIcon">
        <FaIcon v-if="icon && !iconBefore" class="modal__resizer-icon" :icon="resizerIcon" />
      </slot>
    </div>
  </dialog>
</template>

<script>
  // import { throttle } from "@/utils/time.js";
  export default {
    name: "UluModal",
    props: {
      labelledby: String,
      describedby: String,
    },
    computed: {
      classes() {
        
      }
    },
    methods: {
      close() {

      }
    }
  };
</script>