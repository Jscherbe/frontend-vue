import { ref, onMounted, onUnmounted, inject, computed, reactive, watch } from 'vue';
import { urlize } from '@ulu/utils/string.js';

/**
 * Composable for a component that acts as a section within the Scroll Anchors system.
 * It handles registering the section with the parent `UluScrollAnchors` component,
 * manages its active state, and provides reactive properties for use in the template.
 * @param {object} props The component props, requires `title` and optional `customTitleId`.
 * @returns {object} An object with reactive properties for the section: `sectionRef` (the ref to bind), `titleId`, `isActive`, and the raw `section` object.
 */
export function useScrollAnchorSection(props) {
  const sectionRef = ref(null); // for the user to bind to their root element

  const register = inject('uluScrollAnchorsRegister');
  const unregister = inject('uluScrollAnchorsUnregister');
  const newId = title => `ulu-sa-${ urlize(title) }`;

  const titleId = computed(() => props.customTitleId || newId(props.title));
  
  const section = reactive({
    id: Symbol('section-id'),
    title: props.title,
    titleId: titleId.value,
    element: null, // will be set on mount
    active: false,
    inactiveFrom: null,
    activeFrom: null
  });
  
  // Keep title and titleId in sync with props
  watch(() => props.title, (newTitle) => {
    section.title = newTitle;
    section.titleId = props.customTitleId || newId(newTitle);
  });
  watch(() => props.customTitleId, (newTitleId) => {
    section.titleId = newTitleId || newId(props.title);
  });

  onMounted(() => {
    if (register && sectionRef.value) {
      section.element = sectionRef.value;
      register(section);
    }
  });

  onUnmounted(() => {
    if (unregister) {
      unregister(section.id);
    }
  });

  return {
    sectionRef, // the ref for the user to attach
    titleId,
    isActive: computed(() => section.active),
    inactiveFrom: computed(() => section.inactiveFrom),
    activeFrom: computed(() => section.activeFrom),
    section
  };
}