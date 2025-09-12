/**
 * A composable to manage and resolve BEM style modifiers for a component,
 * combining user-passed modifiers with internally derived conditional modifiers.
 *
 * @param {object} options - The options for the composable.
 * @param {object} options.props - The component's props object. (Must contain a 'modifiers' prop if user-passed modifiers are expected)
 * @param {string | import('vue').Ref<string>} options.baseClass - The base CSS class name for the component (e.g., 'modal').
 * Can be a string or a ref to a string.
 * @param {string | string[] | Object.<string, any> | import('vue').ComputedRef<string | string[] | Object.<string, any>>} [options.internal={}] -
 * A flexible input for component's internal modifiers. Can be a string, array of strings/objects, or an object mapping modifier names to conditions.
 * @returns {object} An object containing the computed property `resolvedModifiers`
 *
 * @example
 * // In MyComponent.vue:
 * <template>
 * <div :class="[resolvedModifiers, 'other-class']"></div>
 * </template>
 *
 * <script>
 * import { computed, ref } from 'vue';
 * import { useModifiers } from './composables/useModifiers.js'; // Adjust path
 *
 * export default {
 *   props: {
 *     variant: String, // e.g., 'primary', 'secondary'
 *     isActive: Boolean,
 *     modifiers: [String, Array, Object] // User-passed modifiers
 *   },
 *   setup(props) {
 *     const isHovered = ref(false);
 *
 *     // Define component-internal modifiers based on props or local state
 *     const internalModifiers = computed(() => ({
 *       [props.variant]: !!props.variant, // Add 'primary' or 'secondary' if prop exists
 *       'active': props.isActive, // Add 'active' if isActive prop is true
 *       'hovered': isHovered.value, // Add 'hovered' if local state is true
 *       'default': !props.variant && !props.isActive // Add 'default' if no variant/active
 *     }));
 *
 *     // Use the composable to get the combined modifier classes
 *     const { resolvedModifiers } = useModifiers({
 *       props: props, // Pass component props for 'modifiers' prop
 *       baseClass: 'button', // The BEM block name
 *       internal: internalModifiers // The computed internal modifiers
 *     });
 *
 *     return { resolvedModifiers, isHovered };
 *   }
 * };
 * </script>
 *
 * // Resulting class examples for 'my-component':
 * // <MyComponent />                       => class="my-component my-component--default"
 * // <MyComponent variant="primary" />     => class="my-component my-component--primary"
 * // <MyComponent isActive />              => class="my-component my-component--active"
 * // <MyComponent modifiers="condensed" /> => class="my-component my-component--default my-component--condensed"
 * // <MyComponent variant="secondary" :isActive="true" modifiers="round" />
 * //   => class="my-component my-component--secondary my-component--active my-component--round"
 */
export function useModifiers({ props, baseClass, internal }: {
    props: object;
    baseClass: string | import("vue").Ref<string>;
    internal?: string | string[] | {
        [x: string]: any;
    } | import("vue").ComputedRef<string | string[] | {
        [x: string]: any;
    }> | undefined;
}): object;
//# sourceMappingURL=useModifiers.d.ts.map