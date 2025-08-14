<template>
  <ul class="badge-stack">
    <li
      class="badge-stack__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <UluBadge v-bind="item" />
    </li>
  </ul>
</template>

<script>
  import UluBadge from "./UluBadge.vue";
  export default {
    name: 'UluBadgeStack',
    components: {
      UluBadge
    },
    props: {
      /**
       * Array of props for each badge
       */
      items: Array
    }
  }
</script>