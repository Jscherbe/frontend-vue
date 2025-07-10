<template>
  <div class="callout" :class="{ 'full-height' : fullHeight }">
    <IconHeader 
      v-if="title || $slots.title"
      class="AppCallout__header"
      :class="{ 'AppCallout__header--rule' : !noRule }"
      :icon="icon" 
      :iconOutline="iconOutline"
      :titleElement="titleElement"
      :titleClass="titleClass"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </IconHeader>
    <div class="AppCallout__body">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppCallout",
    props: {
      title: String,
      icon: String,
      iconOutline: Boolean,
      noRule: Boolean,
      titleElement: {
        type: String,
        default: "h2"
      },
      titleClass: {
        type: String,
        default: "h3"
      },
      fullHeight: Boolean
    }
  };
</script>

<style lang="scss">
  @use "vars";
  @use "ulu";
  .AppCallout__header--rule {
    padding-bottom: 1rem;
    border-bottom: ulu.element-get-rule-style("light");
  }
  // .AppCallout__header-title {
  //   // font-weight: bold;
  //   margin: 0;
  //   color: vars.$color-blue-dark;
  // }
  // .AppCallout__header-icon {
  //   color: vars.$color-yellow;
  //   margin-right: 0.5em;
  //   font-size: 1.5rem;
  // }
</style>