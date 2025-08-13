<template>
  <ul class="badge-stack">
    <li
      class="badge-stack__item"
      v-for="(item, index) in items"
      :key="index"
    >
      <AppBadge v-bind="item" />
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'BadgeStack',
    props: {
      /**
       * Array of props for each badge
       */
      items: Array
    }
  }
</script>