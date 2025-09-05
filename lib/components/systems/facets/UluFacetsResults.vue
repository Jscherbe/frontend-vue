<template>
  <div class="UluFacetsResults">
    <transition-group
      v-if="items.length"
      :tag="tag"
      :name="transitionName"
      class="UluFacetsResults__list"
      :class="classes.list"
    >
      <li
        class="UluFacetsResults__item"
        :class="classes.item"
        v-for="(item, index) in items"
        :key="item.id || index"
      >
        <slot name="item" :item="item" :index="index"></slot>
      </li>
    </transition-group>
    <div v-else class="UluFacetsResults__empty">
      <slot name="empty">
        <p>No matching items found.</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    items: {
      type: Array,
      required: true
    },
    tag: {
      type: String,
      default: 'ul'
    },
    transitionName: {
      type: String,
      default: 'UluFacetsFade'
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  });
</script>

<style lang="scss">
  .UluFacetsResults__list {
    list-style: none;
    padding: 0;
  }

  .UluFacetsFade-enter-active,
  .UluFacetsFade-leave-active {
    transition: opacity 0.25s ease;
  }

  .UluFacetsFade-enter-from,
  .UluFacetsFade-leave-to {
    opacity: 0;
  }
</style>
