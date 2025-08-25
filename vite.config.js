import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.js"),
      formats: ["es"],
      fileName: "frontend-vue",
    },
    rollupOptions: {
      external: [
        "vue", 
        "vue-router",
        "@headlessui/vue",
        "@ulu/frontend",
        "@floating-ui/vue",
        "@ulu/utils",
        "gsap",
        "fuse.js",
        "vue3-dropzone"
      ],
    },
  },
});