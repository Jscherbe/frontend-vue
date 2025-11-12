/**
 * A composable that provides a reactive interface to the `@ulu/frontend/js/ui/breakpoints.js` library.
 * It manages breakpoint state and provides reactive variables for the active breakpoint and resize direction.
 * This is intended for standalone use; for app-wide integration, use the `breakpointsPlugin`.
 *
 * @param {object} options - Configuration options.
 * @param {string} [options.initialValue=null] - Initial value for the active breakpoint, useful for SSR.
 * @param {Function} [options.onReady] - A callback function that receives the `BreakpointManager` instance once it's initialized.
 * @param {object} [options.plugin] - Options to pass directly to the underlying `BreakpointManager` library.
 * @returns {{
 *   breakpointManager: import('vue').Ref<import('@ulu/frontend').BreakpointManager | null>,
 *   breakpointActive: import('vue').Ref<string | null>,
 *   breakpointDirection: import('vue').Ref<string | null>
 * }} An object containing reactive refs for:
 * - `breakpointManager`: The `BreakpointManager` instance.
 * - `breakpointActive`: The name of the currently active breakpoint.
 * - `breakpointDirection`: The direction of the last resize (`'up'` or `'down'`).
 */
export function useBreakpointManager(options: {
    initialValue?: string | undefined;
    onReady?: Function | undefined;
    plugin?: object | undefined;
}): {
    breakpointManager: import("vue").Ref<import("@ulu/frontend").BreakpointManager | null>;
    breakpointActive: import("vue").Ref<string | null>;
    breakpointDirection: import("vue").Ref<string | null>;
};
//# sourceMappingURL=useBreakpointManager.d.ts.map