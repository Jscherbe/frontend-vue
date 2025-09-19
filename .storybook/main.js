import { mergeConfig } from 'vite';

const basePath = "/frontend-vue/";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../lib/FrontPage.story.mdx",
    "../lib/**/*.story.mdx", // Can't use .stories (old syntax that was used to create actual stories)
    "../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "CHANGELOG.md"
  ],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-docs",
    // "@storybook/addon-essentials",
    "storybook-addon-vue-mdx",
  ],
  staticDirs: ["./preview-theme/static"],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  managerHead: (head, { configType }) => {
    const base = configType === 'PRODUCTION' ? basePath : '/'; 
    return `
      ${ head }
      <link rel="apple-touch-icon" sizes="180x180" href="${ base }assets/favicons/apple-touch-icon.png">
      <link rel="icon" type="image/png" sizes="32x32" href="${ base }assets/favicons/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="16x16" href="${ base }assets/favicons/favicon-16x16.png">
      <link rel="manifest" href="${ base }assets/favicons/site.webmanifest">
      <link rel="mask-icon" href="${ base }assets/favicons/safari-pinned-tab.svg" color="#8455bd">
      <link rel="shortcut icon" href="${ base }assets/favicons/favicon.ico">
      <meta name="msapplication-TileColor" content="#603cba">
      <meta name="msapplication-config" content="${ base }assets/favicons/browserconfig.xml">
    `;
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      base: basePath
    });
  }
};
export default config;
