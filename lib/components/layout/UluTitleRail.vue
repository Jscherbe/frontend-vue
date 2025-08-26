<template>
  <div class="rail rail--title-rail">
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
      icon: String,
      iconAlign: {
        type: String,
        default: "baseline"
      },
      classes: {
        type: Object,
        default: () => ({
          title: "h2",
          icon: "margin-right-small"
        })
      },
      title: String,
      titleElement: {
        type: String,
        default: "h2"
      },
    }
  }
</script>
