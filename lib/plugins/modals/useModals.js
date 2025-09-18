import { inject } from 'vue';

/**
 * A composable to access the global modals API.
 * This is a simple wrapper around `inject('uluModals')` and throws an error if the plugin is not installed.
 *
 * @returns {object} The modals API with methods like `open`, `close`, `add`, `remove`, and `get`.
 * @throws {Error} If the modals plugin is not installed.
 */
export const useModals = () => {
  const modals = inject('uluModals');
  if (!modals) {
    throw new Error('Modals plugin not installed');
  }
  return modals;
};