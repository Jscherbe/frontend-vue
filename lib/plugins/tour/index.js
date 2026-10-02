/**
 * @module tourPlugin
 */
import UluTourDisplay from './UluTourDisplay.vue';
import { createApi, tourState } from './api.js';
import { useTour } from './useTour.js';

export default function install(app) {
  const api = createApi();
  
  app.component("UluTourDisplay", UluTourDisplay);
  
  app.config.globalProperties.$uluTour = api;
  app.provide('uluTour', api);
  app.config.globalProperties.$uluTourState = tourState;
}

export { useTour };

