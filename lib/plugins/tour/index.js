/**
 * @module tourPlugin
 */
import { reactive } from 'vue';
import UluTourDisplay from './UluTourDisplay.vue';
import { createApi } from './api.js';
import { useTour } from './useTour.js';

export default function install(app) {
  const state = reactive({
    active: null,
    stepIndex: 0
  });
  
  const api = createApi(state);
  
  app.component("UluTourDisplay", UluTourDisplay);
  
  app.config.globalProperties.$uluTour = api;
  app.config.globalProperties.$uluTourState = state;
  
  app.provide('uluTour', api);
  app.provide('uluTourState', state);
}

export { useTour };
export { default as UluTourDisplay } from './UluTourDisplay.vue';
export { default as UluTourPager } from './UluTourPager.vue';
export { default as UluTourContent } from './UluTourContent.vue';
