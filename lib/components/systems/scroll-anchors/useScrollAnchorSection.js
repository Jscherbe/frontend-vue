import { ref, onMounted, onUnmounted, inject, computed, reactive, watch } from 'vue';
import { urlize } from '@ulu/utils/string.js';

/**
 * Composable for a component that acts as a section within the Scroll Anchors system.
 * It handles registering the section with the parent `UluScrollAnchors` component,
 * manages its active state, and provides reactive properties for use in the template.
 * @param {object} props The component props, requires `title` and optional `customTitleId`.
 * @returns {object} An object with reactive properties for the section: `element` (the ref to bind), `titleId`, `isActive`, and the raw `section` object.
 */
export function useScrollAnchorSection(props) {
  const element = ref(null); // for the user to bind to their root element

  const register = inject('uluScrollAnchorsRegister');
  const unregister = inject('uluScrollAnchorsUnregister');

  const titleId = computed(() => props.customTitleId || `sas-title-${urlize(props.title)}`);
  
  const section = reactive({
    id: Symbol('section-id'),
    title: props.title,
    titleId: titleId.value,
    element: null, // will be set on mount
    active: false
  });
  
  // Keep title and titleId in sync with props
  watch(() => props.title, (newTitle) => {
    section.title = newTitle;
    section.titleId = props.customTitleId || `sas-title-${urlize(newTitle)}`;
  });
  watch(() => props.customTitleId, (newTitleId) => {
    section.titleId = newTitleId || `sas-title-${urlize(props.title)}`;
  });

  onMounted(() => {
    if (register && element.value) {
      section.element = element.value;
      register(section);
    }
  });

  onUnmounted(() => {
    if (unregister) {
      unregister(section.id);
    }
  });

  return {
    element, // the ref for the user to attach
    titleId,
    isActive: computed(() => section.active),
    section
  };
}