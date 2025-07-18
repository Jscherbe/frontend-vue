<template>
  <nav 
    class="nav-strip"
    :class="{
      'nav-strip--rule' : rule,
      'nav-strip--center' : center,
      'nav-strip--right' : right
    }"
  >
    <UluMenu 
      class="nav-strip__list"
      :items="items" 
      :classes="{
        item: 'nav-strip__item',
        link: 'nav-strip__link',
        linkExactActive: 'is-active'
      }"
    />
  </nav>
</template>

<script>
  export default {
    name: "UluNavStrip",
    props: {
      /**
       * Array of items for list (uses UluMenu, see structure there)
       */
      items: Array,
      /**
       * Center aligned
       */
      center: Boolean,
      /**
       * Right aligned
       */
      right: Boolean,
      /**
       * Rule nav strip style
       */
      rule: Boolean
    },
  };
</script>