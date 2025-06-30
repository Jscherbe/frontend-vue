<template>
  <div class="callout" :class="{ 'full-height' : !actualSize }">
    <h2 class="h2">
      <slot name="title">{{ title }}</slot>
    </h2>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "GridCallout",
    props: {
      title: String,
      actualSize: Boolean
    }
  };
</script>