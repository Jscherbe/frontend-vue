<template>
  <div 
    class="menu-stack"
    :class="{
      'menu-stack--hanging' : hanging,
      'menu-stack--compact' : compact
    }"
  >
    <UluMenu 
      :items="items" 
      :classes="{
        list: 'menu-stack__list',
        item: 'menu-stack__item',
        link: 'menu-stack__link',
        linkText: 'menu-stack__link-text',
        linkIcon: 'menu-stack__link-icon'
      }" 
      :noChildren="noChildren"
    />
  </div>
</template>

<script>
  import UluMenu from "./UluMenu.vue";
  export default {
    name: "UluMenuStack",
    components: {
      UluMenu
    },
    props: {
      /**
       * Hanging style menu
       */
      hanging: Boolean,
      /**
       * Compact style menu
       */
      compact: Boolean,
      /**
       * Don't include children of menu
       */
      noChildren: Boolean
    }
  };
</script>