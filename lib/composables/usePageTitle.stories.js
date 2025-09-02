import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';
import { usePageTitle, getPageTitle } from './usePageTitle.js';

// A mock version of vue-router's useRoute() for our stories.
const mockUseRoute = () => ({
  path: '/our-story-route'
});

export default {
  title: 'Composables/usePageTitle',
  component: {
    template: '<div>See individual stories for demonstrations.</div>',
  },
};

export const StaticTitle = {
  name: "1. Setting a static title",
  render: () => ({
    setup() {
      usePageTitle("A Static Title", { useRoute: mockUseRoute });
      const observedTitle = ref('');
      onMounted(() => {
        observedTitle.value = getPageTitle('/our-story-route');
      });
      return { observedTitle };
    },
    template: `
      <div>
        <p>This component's setup calls <code>usePageTitle("A Static Title")</code>.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    `,
  }),
};

export const ReactiveTitle = {
  name: "2. Setting a reactive title",
  render: () => ({
    setup() {
      const count = ref(0);
      const reactiveTitle = computed(() => `Counter Value: ${count.value}`);
      usePageTitle(reactiveTitle, { useRoute: mockUseRoute });

      const observedTitle = ref(getPageTitle('/our-story-route'));
      const interval = setInterval(() => {
        count.value++;
        observedTitle.value = getPageTitle('/our-story-route');
      }, 1000);

      onUnmounted(() => clearInterval(interval));

      return { observedTitle };
    },
    template: `
      <div>
        <p>This component's setup calls <code>usePageTitle()</code> with a computed ref.</p>
        <p>A counter is automatically incrementing every second, updating the title.</p>
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle }}</pre>
      </div>
    `,
  }),
};

export const UnmountBehavior = {
  name: "3. Unmounting cleans up the title",
  render: () => ({
    setup() {
      const showChild = ref(true);
      const observedTitle = ref('');

      const ChildComponent = {
        name: 'ChildComponent',
        setup: () => usePageTitle("Child Component's Title", { useRoute: mockUseRoute }),
        template: '<div>I am the child component setting the title.</div>',
      };

      const checkTitle = () => {
        observedTitle.value = getPageTitle('/our-story-route');
      };
      
      onMounted(checkTitle);

      const toggleChild = async () => {
        showChild.value = !showChild.value;
        await nextTick();
        checkTitle();
      };

      return { showChild, toggleChild, observedTitle, ChildComponent };
    },
    template: `
      <div>
        <p>This story mounts a child component that sets a title. Unmounting it should clear the title.</p>
        <button @click="toggleChild">Toggle Child Component</button>
        <hr style="margin: 10px 0;" />
        <ChildComponent v-if="showChild" />
        <p v-else>Child component is unmounted.</p>
        <hr style="margin: 10px 0;" />
        <p><strong>Observed Title:</strong></p>
        <pre>{{ observedTitle === undefined ? 'undefined (Correct!)' : observedTitle }}</pre>
      </div>
    `,
  }),
};
