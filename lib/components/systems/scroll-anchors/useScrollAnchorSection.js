import { ref, onMounted, onUnmounted, inject, computed, reactive, watch } from 'vue';
import { urlize } from '@ulu/utils/string.js';
import { REGISTER, UNREGISTER } from './symbols.js';

export function useScrollAnchorSection(props) {
  const element = ref(null); // for the user to bind to their root element

  const register = inject(REGISTER);
  const unregister = inject(UNREGISTER);

  const titleId = computed(() => props.anchorId || `sas-title-${urlize(props.title)}`);
  
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
    section.titleId = props.anchorId || `sas-title-${urlize(newTitle)}`;
  });
  watch(() => props.anchorId, (newAnchorId) => {
    section.titleId = newAnchorId || `sas-title-${urlize(props.title)}`;
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