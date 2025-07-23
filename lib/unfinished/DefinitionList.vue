<template>
  <dl class="">
    <div v-for="(item, index) in items" :key="index">
      <dt>
        <slot name="term" :item="item" :index="index">
          {{ item.term }}
        </slot>
      </dt>
      <dd>
        <slot name="term" :item="item" :index="index">
          <OverflowPopover>{{ item.description }}</OverflowPopover>
        </slot>
      </dd>
    </div>
  </dl>
</template>

<script>
  export default {
    name: "DefinitionList",
    props: {
      /**
       * Array of term, and description (props in object)
       * - Can use slots also
       */
      items: Array
    }
  };
</script>