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
    <div v-if="toast.icon || $slots.icon" class="toast__icon" :class="classes.icon">
      <slot name="icon" :toast="toast">
        <FaIcon v-if="toast.icon" :icon="toast.icon"/>
      </slot>
    </div>
    <div class="toast__content" :class="classes.content">
      <slot name="content" :toast="toast">
        <div v-if="toast.title" class="toast__header" :class="classes.header">
          <strong class="toast__title" :class="classes.title">
            {{ toast.title }}
          </strong>
          <span v-if="toast.date" class="toast__date" :class="classes.date">
            {{ toast.date }}
          </span>
        </div>
        <div v-if="toast.description" class="toast__body" :class="classes.body">
          {{ toast.description }}
        </div>
      </slot>
    </div>
    <div v-if="toast.actions?.length" class="toast__actions" :class="classes.actions">
      <button 
        v-for="(action, index) in toast.actions"
        :key="index"
        class="toast__action" 
        :class="classes.action"
        @click="handleAction($event, action)"
      >
        {{ action.label }}
      </button>
    </div>
    <button class="toast__close" :class="classes.closeButton" @click="toast.close">
      <UluIcon type="close"/>
    </button>
  </div>
</template>

<script>
  import UluIcon from "../../components/elements/UluIcon.vue";
  export default {
    name: 'UluToast',
    components: {
      UluIcon
    },
    props: {
      /**
       * Toast configuration
       */
      toast: Object,
      /**
       * Icons for each element { icon, header, content, date, actions, action, closeButton, title, body, closeButton }
       */
      classes: {
        type: Object,
        default: () => ({
          content: "type-small",
          date: "type-small-x",
          actions: "type-small-x",
          action: "button button--small button--outline",
          closeButton: "button button--icon button--transparent"
        })
      }
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