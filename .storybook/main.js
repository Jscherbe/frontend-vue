import { mergeConfig } from 'vite';

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../lib/FrontPage.story.mdx",
    "../lib/**/*.story.mdx", // Can't use .stories (old syntax that was used to create actual stories)
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../lib/**/*.doc.mdx"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-docs",
    // "@storybook/addon-essentials",
    "storybook-addon-vue-mdx",
    {
      name: 'storybook-addon-jsdoc-to-mdx',
      options: {
        folderPaths: ['./lib/'], // paths to folders with JS/TS code
        extensions: ['js'] // file extensions to include
      }
    }
  ],
  staticDirs: ["./preview-theme/static"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      base: "/frontend-vue/"
    });
  }
};
export default config;
