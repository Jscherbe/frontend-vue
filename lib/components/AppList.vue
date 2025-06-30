<template>
  <ul 
    :class="[{
      'list-ordered' : ordered,
      'list-unordered' : unordered,
      'list-lines' : lines,
      'list-compact' : compact,
    }, 
    classes.list]"
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
  </ul>
</template>

<script>
  export default {
    name: "AppList",
    props: {
      items: Array,
      classes: {
        type: Object,
        default: () => ({})
      },
      ordered: Boolean,
      unordered: Boolean,
      lines: Boolean,
      compact: Boolean,
    }
  };
</script>