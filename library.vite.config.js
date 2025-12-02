// Library Build Vite Config
// - Note: this file is named "library.vite.config.js" as not to interfere 
//   with Storybook loading this for docs site which is not what it's used for
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    peerDepsExternal(),
    dts(),
    vue(),
  ],
  build: {
    emptyOutDir: true, 
    cssCodeSplit: false,
    lib: {
      entry: [
        resolve(__dirname, 'lib/index.js'),
        resolve(__dirname, 'lib/resolver.js'),
      ],
      formats: ["es"]
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      },
    },
  },
});