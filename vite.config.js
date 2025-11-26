import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default defineConfig({
  plugins: [
    peerDepsExternal(),
    vue(),
  ],
  build: {
    emptyOutDir: true, // @todo - Change back to false
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.js'),
      formats: ["es"]
    },
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]'
      },
    },
  },
});