<template>
  <slot v-if="!when"/>
  <SkeletonTextInline class="skeleton" v-else/>
</template>

<script>
  export default {
    name: "ShowSkeleton",
    props: {
      when: Boolean,
    },
  };
</script>