<!-- 
  Using slots so that user can wrap component for custom displays within default template (ie. to render a badge, etc) 
-->
<template>
  <div 
    class="toast"
    :class="[
      {
        'toast--persistent' : !toast.duration
      },
      toast?.class
    ]"
  >
    <div v-if="toast.icon || $slots.icon" class="toast__icon">
      <slot name="icon" :toast="toast">
        <FaIcon v-if="toast.icon" :icon="toast.icon"/>
      </slot>
    </div>
    <div class="toast__content type-small">
      <slot name="content" :toast="toast">
        <div v-if="toast.title" class="toast__header">
          <strong class="toast__title">
            {{ toast.title }}
          </strong>
          <span v-if="toast.date" class="toast__date type-small-x">
            {{ toast.date }}
          </span>
        </div>
        <div v-if="toast.description" class="toast__body">
          {{ toast.description }}
        </div>
      </slot>
    </div>
    <div v-if="toast.actions?.length" class="toast__actions type-small-x">
      <button 
        v-for="(action, index) in toast.actions"
        :key="index"
        class="toast__action button button--small button--outline" 
        @click="handleAction($event, action)"
      >
        {{ action.label }}
      </button>
    </div>
    <button class="toast__close button button--icon button--transparent" @click="toast.close">
      <FaIcon icon="xmark"/>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'UluToast',
    props: {
      toast: Object
    },
    methods: {
      handleAction(event, action) {
        const { toast } = this;
        this.toast.close();
        this.$nextTick(() => {
          action(event, toast, action);
        });
      }
    }
  }
</script>