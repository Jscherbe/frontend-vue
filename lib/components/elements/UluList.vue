<template>
  <component 
    :is="listElement"
    :class="[
      {
        'list-ordered' : ordered,
        'list-unordered' : unordered,
        'list-lines' : lines,
        'list-compact' : compact,
      }, 
      classes.list
    ]"
    :style="{ 
      listStyleType: listStyleType
    }"
    :reversed="reversed"
    :start="start"
  >
    <li 
      v-for="(item, index) in items" 
      :key="index"
      :class="classes.listItem"
    >
      <slot :item="item" :index="index">
        {{ item }}
      </slot>
    </li>
  </component>
</template>

<script>
  export default {
    name: "UluList",
    props: {
      /**
       * Array of list items, output as is or use slot to template the item
       */
      items: Array,
      /**
       * Classes object (keys are list and listItem to be applied to <ul> and <li>)
       * - Any valid class binding for each
       */
      classes: {
        type: Object,
        default: () => ({})
      },
      /**
       * Use list-ordered class, and sets element to <ol>
       */
      ordered: Boolean,
      /**
       * Use list-unordered class
       */
      unordered: Boolean,
      /**
       * Use list-lines class
       */
      lines: Boolean,
      /**
       * Use list-compact class
       */
      compact: Boolean,
      /**
       * If setting up custom ordered list this will ensure the correct element type
       * - Note: 'ordered' prop sets the ordered list class, this does not
       */
      forceOrdered: Boolean,
      /**
       * Define the start value for <ol>
       */
      start: String,
      /**
       * Reverse ordered list
       */
      reversed: Boolean,
      /**
       * Define list style type (ie. disc, decimal, etc)
       */
      listStyleType: String,
    },
    computed: {
      listElement() {
        return this.ordered || this.forceOrdered ? "ol" : "ul";
      }
    }
  };
</script>