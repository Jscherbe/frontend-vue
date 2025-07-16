import { computed, toRefs, toValue } from 'vue';

/**
 * A composable to manage and resolve style modifiers for a component.
 * @param {object} props - The component's props object.
 * @param {string | import('vue').Ref<string>} baseClass - The base CSS class name for the component (e.g., 'callout').
 * Can be a string or a ref to a string.
 * @returns {object} An object containing the computed property `resolvedModifiers`.
 */
export function useModifiers(props, baseClass) {
  // Use toRefs to destructure props and maintain reactivity
  const { modifiers } = toRefs(props);

  const resolvedModifiers = computed(() => {
    const resolvedBase = toValue(baseClass);
    const resolvedModifiers = toValue(modifiers);

    if (!resolvedBase) {
      console.warn("useModifiers: Missing 'baseClass' argument, modifiers will not be applied.");
      return '';
    }

    if (!modifiers.value || modifiers.value.length === 0) {
      return '';
    }

    const modifierArray = Array.isArray(resolvedModifiers) ? resolvedModifiers : [ resolvedModifiers ];

    return modifierArray
      .map((modifier) => `${ resolvedBase }--${ modifier }`)
      .join(' ');
  });

  return {
    resolvedModifiers,
  };
}