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
      :items="items" 
      :classes="{
        list: 'nav-strip__list',
        item: 'nav-strip__item',
        link: 'nav-strip__link',
        linkExactActive: 'is-active'
      }"
    />
  </nav>
</template>

<script>
  import UluMenu from "./UluMenu.vue";
  export default {
    name: "UluNavStrip",
    components: {
      UluMenu
    },
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