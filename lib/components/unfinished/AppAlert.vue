<template>
  <div class="callout background-context" :class="classes">
    <div class="layout-flex">
      <FaIcon 
        class="type-large margin-right-small" 
        :class="`color-${ type }`"
        :icon="$site.getIcon(type)"
      />
      <div class="type-small">
        <div>
          <strong>
            <slot name="title">{{ title }}</slot>
          </strong>
        </div>
        <div>
          <slot name="description">{{ description }}</slot>
        </div>
      </div>
      <AppButton 
        v-if="buttonText"
        class="margin-left-auto align-self-center" 
        @click="buttonClick"
        :href="!buttonClick ? '#' : false"
        :type="type" 
        small
      >
        {{ buttonText }}
      </AppButton>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppAlert",
    props: {
      /**
       * warning, etc
       */
      type: {
        type: String,
        default: "danger"
      },
      buttonText: String,
      buttonClick: Function,
      title: String,
      description: String,
      compact: Boolean,
    },
    computed: {
      classes() {
        const classes = [`is-${ this.type }`];
        if (this.compact) {
          classes.unshift("callout--compact");
        }
        return classes;
      }
    }
  };
</script>