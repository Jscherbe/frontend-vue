import { setup } from "@storybook/vue3"; 
import { createMemoryHistory, createRouter } from "vue-router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import UluModals from "../lib/plugins/modals/plugin.js";

import "./scss/styles.scss";
import "./preview-icons.js";

/** @type { import('@storybook/vue3-vite').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
    // .use(UluModals)
    .component("FaIcon", FontAwesomeIcon);
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
    template: '<router-view><div class="in-ulu"><story /></div></router-view>',
  }),
];

