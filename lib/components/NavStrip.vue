<template>
  <nav class="nav-strip nav-strip--rule">
    <AppMenu :items="items" :classes="{
      link: 'nav-strip__link',
      linkExactActive: 'is-active'
    }"/>
  </nav>
</template>

<script>
  export default {
    name: "NavStrip",
    props: {
      items: Array,
      test: Boolean,
    },
  };
</script>