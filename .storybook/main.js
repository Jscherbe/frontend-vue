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
      <meta name="msapplication-TileColor" content="#c3bfcfff">
      <meta name="msapplication-config" content="${ base }assets/favicons/browserconfig.xml">
    `;
  },

  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      base: basePath,
      plugins: [
        fixStorybookMockerEntryPlugin()
      ]
    });
  }
};
export default config;

// Fixes path for vite-inject-mocker-entry.js which assumes it would be the base/root 
// which messes things up for deploying to github pages (subdir)
// See: https://github.com/storybookjs/storybook/issues/32428
function fixStorybookMockerEntryPlugin() {
  return {
    name: 'fix-storybook-mocker-entry',
    enforce: 'post',
    transformIndexHtml(html) {
      // https://github.com/storybookjs/storybook/blob/2657cc33826d1abf76334f94fef4b82b10f1e1c0/code/core/src/core-server/presets/vitePlugins/vite-inject-mocker/plugin.ts#L11
      const entryPath = '/vite-inject-mocker-entry.js';
      return html.replace(`"${ entryPath }"`, `".${ entryPath }"`);
    },
  };
}
