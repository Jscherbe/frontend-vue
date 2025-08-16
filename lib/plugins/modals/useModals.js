import { inject } from 'vue';

export const useModals = () => {
  const modals = inject('uluModals');
  if (!modals) {
    throw new Error('Modals plugin not installed');
  }
  return modals;
};