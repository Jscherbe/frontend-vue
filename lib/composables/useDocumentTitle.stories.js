import { ref, computed, watch, onUnmounted } from 'vue';
import { useDocumentTitle } from './useDocumentTitle.js';
import * as VueRouter from 'vue-router';
import * as Unhead from '@unhead/vue';
import { usePageTitle, pageTitles } from './usePageTitle.js';

// --- Mock Dependencies ---
const mockRoute = ref({ path: '/story-route', meta: { title: 'Default Meta Title' } });
VueRouter.useRoute = () => mockRoute.value;

const headTitle = ref('');
Unhead.useHead = (payload) => {
  // The payload from useHead is { title: ComputedRef<string> }. We watch it.
  watch(payload.title, (newTitle) => {
    headTitle.value = newTitle;
  }, { immediate: true });
};
// --- End Mocks ---

export default {
  title: 'Composables/useDocumentTitle',
};

export const InteractiveDemo = {
  name: "Interactive Demo",
  render: () => ({
    setup() {
      // Call the composable under test
      useDocumentTitle({ titleTemplate: 'Test Title: %s' });

      // --- Story Controls ---
      const pageTitleFromComponent = ref('');
      const routeMetaTitle = ref('Default Meta Title');

      // This simulates a component calling usePageTitle
      const componentUnderTest = {
        setup: () => usePageTitle(pageTitleFromComponent),
        template: '<div style="font-size: 12px; color: #666; margin-top: 10px;">(This component is actively setting a page title via usePageTitle)</div>',
      };

      // This simulates the route changing
      watch(routeMetaTitle, (newMeta) => {
        mockRoute.value = { path: '/story-route', meta: { title: newMeta } };
      });

      // Cleanup pageTitles state between story re-renders
      onUnmounted(() => {
        delete pageTitles['/story-route'];
      });

      return {
        pageTitleFromComponent,
        routeMetaTitle,
        headTitle,
        componentUnderTest
      };
    },
    template: `
      <div>
        <p>This story demonstrates the behavior of <code>useDocumentTitle</code>.</p>
        <div style="border: 1px solid #ccc; padding: 10px; border-radius: 4px; margin-bottom: 20px;">
          <p><strong>Resulting Document Title (from mock <code>useHead</code>):</strong></p>
          <pre style="font-weight: bold; color: #1e88e5;">{{ headTitle }}</pre>
        </div>

        <p><strong>Controls:</strong></p>
        <div style="margin-bottom: 15px;">
          <label for="meta-title">Route Meta Title:</label><br/>
          <input v-model="routeMetaTitle" id="meta-title" style="width: 250px;" />
        </div>
        <div>
          <label for="component-title">Title from Component (via usePageTitle):</label><br/>
          <input v-model="pageTitleFromComponent" id="component-title" style="width: 250px;" />
          <p style="font-size: 12px; color: #666;">(This will override the meta title)</p>
        </div>
        
        <!-- This component calls usePageTitle -->
        <component :is="componentUnderTest" v-if="pageTitleFromComponent" />
      </div>
    `
  })
};