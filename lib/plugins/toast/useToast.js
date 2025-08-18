import { inject } from 'vue';

/**
 * Composable for accessing the toast API.
 * @returns {object} The toast API.
 * @throws {Error} If the toast plugin is not installed.
 * @example
 * import { useToast } from './useToast';
 * const toast = useToast();
 * toast.add({ title: 'Hello World' });
 */
export const useToast = () => {
  const toast = inject('uluToast');
  if (!toast) {
    throw new Error('Toast plugin not installed');
  }
  return toast;
};