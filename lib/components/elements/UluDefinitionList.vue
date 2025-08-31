<template>
  <dl :class="classes.list">
    <div 
      v-for="(item, index) in items" 
      :key="index"
      :class="classes.item"
    >
      <dt :class="classes.term">
        <slot name="term" :item="item" :index="index">
          {{ item.term }}
        </slot>
      </dt>
      <dd :class="classes.description">
        <slot name="description" :item="item" :index="index">
          {{ item.description }}
        </slot>
      </dd>
    </div>
  </dl>
</template>

<script setup>
  defineProps({
    /**
     * Array of term, and description (props in object)
     * - Can use slots also
     */
    items: Array,
    /**
     * Classes object for different elements { list, item, term, description }
     */
    classes: {
      type: Object,
      default: () => ({})
    }
  });
</script>