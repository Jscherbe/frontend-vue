<template>
  <div 
    class="rail rail--title-rail"
    :class="{
      'rail--rule' : rule
    }"
  >
    <div class="rail__item rail__item--title" :class="classes.itemTitle">
      <component 
        class="layout-flex type-max-width-small no-margin" 
        :is="titleElement"
        :class="classes.title"
        :style="{ alignItems: iconAlign }"
      >
        <UluIcon 
          v-if="icon"
          :class="classes.icon"
          :icon="icon"
        />
        <slot>
          {{ title }}
        </slot>
      </component>
    </div>
    <div v-if="$slots.end" class="rail__item rail__item--pull">
      <slot name="end"/>
    </div>
  </div>
</template>

<script>
  import UluIcon from "../elements/UluIcon.vue";

  export default {
    name: "UluTitleRail",
    components: {
      UluIcon
    },
    props: {
      /**
       * Icon to display next to the title.
       */
      icon: String,
      /**
       * The alignment of the icon with the title.
       */
      iconAlign: {
        type: String,
        default: "baseline"
      },
      /**
       * Classes for the different elements in the component.
       */
      classes: {
        type: Object,
        default: () => ({
          title: "h2",
          icon: "margin-right-small"
        })
      },
      /**
       * The title to display.
       */
      title: String,
      /**
       * The HTML element to use for the title.
       */
      titleElement: {
        type: String,
        default: "h2"
      },
      /**
       * If true, a rule will be displayed under the title.
       */
      rule: Boolean
    }
  }
</script>
