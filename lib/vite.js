/**
 * Vite/Vue plugin utility to automatically transform asset URLs for UluImage components.
 * 
 * Usage in vite.config.js:
 * import { uluTransformAssetUrls } from '@ulu/frontend-vue/vite.js';
 * import vue from '@vitejs/plugin-vue';
 * 
 * export default defineConfig({
 *   plugins: [
 *     vue({
 *       template: {
 *         transformAssetUrls: {
 *           // You can spread default tags if needed, or Vue handles merging objects depending on setup.
 *           ...uluTransformAssetUrls
 *         }
 *       }
 *     })
 *   ]
 * });
 */


const defaultTransformAssetUrls = {
  video: ['src', 'poster'],
  source: ['src'],
  img: ['src'],
  image: ['xlink:href', 'href'],
  use: ['xlink:href', 'href']
};

export const uluTransformAssetUrls = {
  ...defaultTransformAssetUrls,
  UluImage: ['src'],
  UluImageSource: ['srcset'],
  UluCard: ['imageSrc']
};
