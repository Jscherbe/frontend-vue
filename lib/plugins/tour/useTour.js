import { useRequiredInject } from '../../composables/useRequiredInject.js';

/**
 * Composable for accessing the Tour API and state
 */
export function useTour() {
  const api = useRequiredInject('uluTour');
  const state = useRequiredInject('uluTourState');
  return { api, state };
}
