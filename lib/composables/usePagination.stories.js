import { ref } from 'vue';
import { usePagination } from './usePagination.js';
import UluPager from '../components/navigation/UluPager.vue';

export default {
  parameters: {
    chromatic: { disableSnapshot: true },
    notes: 'This story demonstrates the `usePagination` composable. It requires a `vue-router` instance to be provided to the application, as it interacts with the route query to manage the page state. If the pager links do not work, it is because the router is not configured in Storybook.',
  },
};

const DemoComponent = {
  components: { UluPager },
  props: {
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  template: `
    <div>
      <p>Current Page: {{ currentPage }}</p>
      <p>Total Pages: {{ totalPages }}</p>
      <ul>
        <li v-for="(item, index) in paginatedItems" :key="index">{{ item.name }}</li>
      </ul>
      <UluPager
        v-if="totalPages > 1"
        :items="pagerItems"
        :current="currentPage"
        :ellipses="pagerEllipses"
        class="mt-4"
      />
    </div>
  `,
  setup(props) {
    const allItems = ref(Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` })));
    const {
      currentPage,
      totalPages,
      paginatedItems,
      pagerItems,
      pagerEllipses
    } = usePagination(allItems, props.itemsPerPage);

    return {
      currentPage,
      totalPages,
      paginatedItems,
      pagerItems,
      pagerEllipses
    };
  }
};

export const Default = (args) => ({
    components: { DemoComponent },
    setup() {
        return { args };
    },
    template: '<DemoComponent v-bind="args" />'
});

Default.args = {
  itemsPerPage: 5
};
