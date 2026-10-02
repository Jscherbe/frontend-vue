import { useRequiredInject } from '../../composables/useRequiredInject.js';
import { tourState } from './api.js';

export function useTour() {
  const api = useRequiredInject('uluTour');
  
  return {
    api,
    state: tourState
  };
}

