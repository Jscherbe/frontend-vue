import { defineAsyncComponent } from "vue";
export default [
  {
    name: "demo",
    component: defineAsyncComponent(() => import('./TestModal.vue')),
  }
]