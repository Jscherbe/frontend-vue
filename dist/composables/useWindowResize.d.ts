/**
 * A composable for subscribing to debounced window resize events.
 * It provides a reactive state to track if resizing is active and methods
 * to register callbacks for the start and end of the resize event.
 *
 * @returns {{
 *   resizing: import('vue').Ref<boolean>,
 *   onResizeStart: (callback: Function) => Function,
 *   onResizeEnd: (callback: Function) => Function
 * }} An object containing:
 * - `resizing`: A reactive boolean that is `true` while the window is being resized.
 * - `onResizeStart`: A function to register a callback that fires when resizing starts. Returns a function to unregister the callback.
 * - `onResizeEnd`: A function to register a callback that fires after resizing has stopped (debounced). Returns a function to unregister the callback.
 */
export function useWindowResize(): {
    resizing: import('vue').Ref<boolean>;
    onResizeStart: (callback: Function) => Function;
    onResizeEnd: (callback: Function) => Function;
};
//# sourceMappingURL=useWindowResize.d.ts.map