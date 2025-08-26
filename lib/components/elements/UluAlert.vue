<template>
  <div class="callout" :class="resolvedModifiers">
    <div class="layout-flex">
      <UluIcon 
        class="type-large margin-right-small" 
        :class="`color-${ type }`"
        :icon="icon || `type:${type}`"
      />
      <div class="type-small">
        <div>
          <slot name="title"><strong>{{ title }}</strong></slot>
        </div>
        <div>
          <slot name="description">{{ description }}</slot>
        </div>
      </div>
      <div v-if="$slots.action" class="margin-left-auto align-self-center">
        <slot name="action"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from "vue";
  import UluButton from "./UluButton.vue";
  import UluIcon from "./UluIcon.vue";
  import { useModifiers } from "../../composables/useModifiers.js";
  /**
   * Callout with alert layout
   */
  export default {
    name: "UluAlert",
    components: {
      UluButton,
      UluIcon
    },
    props: {
      /**
       * Alert Title
       */
      title: String,
      /**
       * Alert description
       */
      description: String,
      /**
       * Pass specific icon definition, else it will resolve based on common types
       */
      icon: String,
      /**
       * Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])
       */
      type: {
        type: String,
        default: "danger"
      },
      /**
       * Compact callout style
       */
      compact: Boolean,
      /**
       * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
       */
      modifiers: [String, Array]
    },
    setup(props) {
      const { resolvedModifiers } = useModifiers({ 
        props, 
        baseClass: "callout",
        internal: computed(() => ({
          [props.type] : props.type, 
          "compact": props.compact,
        }))
      });

      return { resolvedModifiers };
    }
  };
</script>