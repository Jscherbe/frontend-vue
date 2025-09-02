import { ref, computed, watch, onUnmounted } from 'vue';
import { useDocumentTitle } from './useDocumentTitle.js';
import { usePageTitle, pageTitles } from './usePageTitle.js';

export default {
  title: 'Composables/useDocumentTitle',
};

export const InteractiveDemo = {
  name: "Interactive Demo",
  render: () => ({
    setup() {
      // --- Mocks for this story ---
      const headTitle = ref('');
      const mockUseHead = (payload) => {
        watch(payload.title, (newTitle) => {
          headTitle.value = newTitle;
        }, { immediate: true });
      };

      const mockRoute = ref({ path: '/story-route', meta: { title: 'Default Meta Title' } });
      const mockUseRoute = () => mockRoute.value;
      // --- End Mocks ---

      // Call the composable under test with dependencies injected
      useDocumentTitle({
        titleTemplate: 'Test Title: %s',
        useRoute: mockUseRoute,
        useHead: mockUseHead
      });

      // --- Story Controls ---
      const pageTitleFromComponent = ref('');
      const routeMetaTitle = ref('Default Meta Title');

      // This simulates a component calling usePageTitle
      const componentUnderTest = {
        setup: () => usePageTitle(pageTitleFromComponent, { useRoute: mockUseRoute }),
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