import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    peerDepsExternal(),
    dts(),
    vue(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
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