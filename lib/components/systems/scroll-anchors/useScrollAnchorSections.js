import { inject } from 'vue';
import { SECTIONS } from './symbols.js';

export function useScrollAnchorSections() {
  const sections = inject(SECTIONS);
  if (!sections) {
    console.warn('useScrollAnchorSections() must be used within an UluScrollAnchors component provider.');
  }
  return sections;
}
