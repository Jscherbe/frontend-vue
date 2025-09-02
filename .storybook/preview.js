import { setup } from "@storybook/vue3"; 
import { createMemoryHistory, createRouter } from "vue-router";
import { 
  corePlugin, 
  modalsPlugin, 
  popoversPlugin, 
  toastPlugin, 
  breakpointsPlugin 
} from "../lib/index.js";

import modals from "../lib/plugins/modals/tests/test-modals.js";

import "./preview-theme/scss/styles.scss";
import "./preview-theme/icons.js";

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    actions: { 
      argTypesRegex: "^on[A-Z].*" 
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      // Sort alphabetical based on filenames (except frontpage)
      storySort: (a, b) => {
        const isIntro = p => p.title.endsWith("Introduction");
        // Move intros to top
        if (isIntro(a)) return -1;
        if (isIntro(b)) return 1;

        // Else alphabetical by paths
        return a.importPath === b.importPath ? 
          0 : 
          a.importPath.localeCompare(b.importPath, undefined, { numeric: true });
      }
    }
  },
};

export default preview;

// Create a single mock router instance
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home View</div>' } },
    { path: '/about', component: { template: '<div>About View</div>' } },
  ],
});

// Register it in the application like normal app
setup((app) => { 
  app
    .use(router)
    .use(corePlugin)
    .use(popoversPlugin)
    .use(toastPlugin)
    .use(modalsPlugin, { modals })
    .use(breakpointsPlugin)
});

// Export a global decorator to wrap all stories with a router-view
// IMPORTANT: Also the selector added below is to scope our CSS
export const decorators = [
  (story, _context) => ({
    components: { story },
    // Ensure the router is ready before rendering the story
    beforeCreate() {
      router.isReady(); // This is good practice for async router setups
    },
    "template": `
      <router-view>
        <div class="in-ulu"><story /></div>
      </router-view>
      <UluModalsDisplay/>
      <UluTooltipDisplay/>
      <UluToastDisplay/>
    `,
  }),
];

