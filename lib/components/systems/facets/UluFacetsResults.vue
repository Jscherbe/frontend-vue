<template>
  <div class="facets-results">
    <transition-group
      v-if="items.length"
      :tag="tag"
      :name="transitionName"
      class="facets-results__list"
      :class="classes.list"
    >
      <li
        class="facets-results__item"
        :class="classes.item"
        v-for="(item, index) in items"
        :key="item.id || index"
      >
        <slot name="item" :item="item" :index="index"></slot>
      </li>
    </transition-group>
    <div v-else class="facets-results__empty">
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
      default: 'facets-fade'
    },
    classes: {
      type: Object,
      default: () => ({})
    }
  });
</script>

<style lang="scss">
  .facets-results__list {
    list-style: none;
    padding: 0;
  }

  .facets-fade-enter-active,
  .facets-fade-leave-active {
    transition: opacity 0.25s ease;
  }

  .facets-fade-enter-from,
  .facets-fade-leave-to {
    opacity: 0;
  }
</style>
