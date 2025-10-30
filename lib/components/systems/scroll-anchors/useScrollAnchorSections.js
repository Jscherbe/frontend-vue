import { inject } from 'vue';
import { SECTIONS } from './symbols.js';

/**
 * Composable that provides a reactive list of all registered scroll anchor sections.
 * This is the recommended way to access section data for building custom navigation.
 * Must be used within a component that is a descendant of `UluScrollAnchors`.
 * @returns {object} A reactive ref containing an array of section objects.
 */
export function useScrollAnchorSections() {
  const sections = inject(SECTIONS);
  if (!sections) {
    console.warn('useScrollAnchorSections() must be used within an UluScrollAnchors component provider.');
  }
  return sections;
}
