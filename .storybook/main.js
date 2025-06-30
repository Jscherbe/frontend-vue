import { mergeConfig } from 'vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: ["@storybook/addon-links", "@storybook/addon-docs"],

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    console.log("This ran");
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      base: "/frontend-vue/"
    });
  }
};
export default config;
