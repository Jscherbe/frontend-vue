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
    <div v-if="toast.icon || $slots.icon" class="toast__icon" :class="resolvedClasses.icon">
      <slot name="icon" :toast="toast">
        <UluIcon v-if="toast.icon" :icon="toast.icon"/>
      </slot>
    </div>
    <div class="toast__content" :class="resolvedClasses.content">
      <slot name="content" :toast="toast">
        <div v-if="toast.title" class="toast__header" :class="resolvedClasses.header">
          <strong class="toast__title" :class="resolvedClasses.title">
            {{ toast.title }}
          </strong>
          <span v-if="toast.date" class="toast__date" :class="resolvedClasses.date">
            {{ toast.date }}
          </span>
        </div>
        <div v-if="toast.description" class="toast__body" :class="resolvedClasses.body">
          {{ toast.description }}
        </div>
      </slot>
    </div>
    <div v-if="toast.actions?.length" class="toast__actions" :class="resolvedClasses.actions">
      <button 
        v-for="(action, index) in toast.actions"
        :key="index"
        class="toast__action" 
        :class="resolveClassOverride(resolvedClasses.action, action.class)"
        @click="handleAction($event, action)"
      >
        {{ action.label }}
      </button>
    </div>
    <button class="toast__close" :class="resolvedClasses.closeButton" @click="toast.close">
      <UluIcon icon="type:close" />
    </button>
  </div>
</template>

<script setup>
  import { nextTick, computed } from "vue";
  import UluIcon from "../../components/elements/UluIcon.vue";
  import { mergeClassLookups, resolveClassOverride } from "../../utils/props.js";
  
  const DEFAULT_CLASSES = {
    content: "type-small",
    date: "type-small-x",
    actions: "type-small-x",
    action: "button button--small button--outline",
    closeButton: "button button--icon button--transparent"
  };

  const props = defineProps({
    /**
     * Toast configuration
     */
    toast: Object,
    /**
     * Icons for each element { icon, header, content, date, actions, action, closeButton, title, body, closeButton }
     */
    classes: {
      type: [Object, Boolean, Function],
      default: () => ({})
    }
  });

  const resolvedClasses = computed(() => mergeClassLookups(
    DEFAULT_CLASSES,
    props.classes,
    props.toast?.classes
  ));

  const handleAction = (event, action) => {
    props.toast.close();
    const callback = typeof action === "function" ? action : action.click;
    if (callback) {
      nextTick(() => {
        callback(event, props.toast, action);
      });
    }
  };
</script>