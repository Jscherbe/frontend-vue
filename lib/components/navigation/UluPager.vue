<template>
  <nav v-if="items" class="pager" role="navigation" :aria-labelledby="headingId">
    <component :is="titleElement" :id="headingId" class="hidden-visually">Pagination</component>
    <ul class="pager__items js-pager__items">
      <!-- First page link -->
      <li v-if="items.first" class="pager__item pager__item--first">
        <router-link :to="items.first.href" title="Go to first page" v-bind="items.first.attributes">
          <span class="hidden-visually">First page</span>
          <UluIcon icon="fas fa-angle-double-left" aria-hidden="true" />
        </router-link>
      </li>

      <!-- Previous page link -->
      <li v-if="items.previous" class="pager__item pager__item--previous">
        <router-link :to="items.previous.href" title="Go to previous page" rel="prev" v-bind="items.previous.attributes">
          <span class="hidden-visually">Previous page</span>
          <UluIcon icon="fas fa-angle-left" aria-hidden="true" />
        </router-link>
      </li>

      <!-- Ellipsis for previous pages -->
      <li v-if="ellipses.previous" class="pager__item pager__item--ellipsis" role="presentation">&hellip;</li>

      <!-- Page number links -->
      <li v-for="(item, key) in items.pages" :key="key" :class="['pager__item', { 'is-active': current == key }]">
        <router-link :to="item.href" :title="getPageTitle(key)" v-bind="item.attributes">
          <span class="hidden-visually">
            {{ current == key ? 'Current page' : 'Page' }}
          </span>
          {{ key }}
        </router-link>
      </li>

      <!-- Ellipsis for next pages -->
      <li v-if="ellipses.next" class="pager__item pager__item--ellipsis" role="presentation">&hellip;</li>

      <!-- Next page link -->
      <li v-if="items.next" class="pager__item pager__item--next">
        <router-link :to="items.next.href" title="Go to next page" rel="next" v-bind="items.next.attributes">
          <span class="hidden-visually">Next page</span>
          <UluIcon icon="fas fa-angle-right" aria-hidden="true" />
        </router-link>
      </li>

      <!-- Last page link -->
      <li v-if="items.last" class="pager__item pager__item--last">
        <router-link :to="items.last.href" title="Go to last page" v-bind="items.last.attributes">
          <span class="hidden-visually">Last page</span>
          <UluIcon icon="fas fa-angle-double-right" aria-hidden="true" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import UluIcon from '../elements/UluIcon.vue';
import { newId } from '../../utils/dom.js';

const props = defineProps({
  /**
   * The HTML element to use for the visually hidden title.
   */
  titleElement: {
    type: String,
    default: 'h4'
  },
  /**
   * List of pager items.
   */
  items: {
    type: Object,
    default: () => ({})
  },
  /**
   * The page number of the current page.
   */
  current: {
    type: Number,
    default: 1
  },
  /**
   * Ellipses configuration.
   */
  ellipses: {
    type: Object,
    default: () => ({})
  }
});

const headingId = newId('ulu-pager');

/**
 * Generates the title for a page link.
 * @param {string|number} key - The page number.
 * @returns {string} The title for the page link.
 */
function getPageTitle(key) {
  return props.current == key ? 'Current page' : `Go to page ${key}`;
}
</script>
