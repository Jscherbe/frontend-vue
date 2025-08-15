import { defineAsyncComponent } from "vue";
export default [
  {
    name: "test",
    component: defineAsyncComponent(() => import('./components/TestModal.vue')),
  }
]