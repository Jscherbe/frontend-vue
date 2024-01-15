/// <reference types="histoire" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDocgenPlugin from 'vite-plugin-vue-docgen';

export default defineConfig({
  plugins: [
    vue(),
    vueDocgenPlugin()
  ]
});