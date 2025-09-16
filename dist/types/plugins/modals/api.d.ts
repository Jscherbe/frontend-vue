export namespace modalsState {
    export { data };
    export { modals };
}
export function createApi(resolveModalOptions: any): {
    open(name: any, props?: null): void;
    /**
     * Close the active modal
     * @param {String|Node} focusTo The element or selector for an element to programmatically focus after modal close
     * @see https://www.deque.com/blog/accessible-routing-in-javascript-frameworks/
     */
    close(): void;
    /**
     * Get a modal's config object by name
     * @return {Object} Modal config object
     */
    get(name: any): Object;
    /**
     * Add a modal config
     */
    add(config: any): void;
    /**
     * Removes a modal config by name
     * @return {Object} Modal that was removed
     */
    remove(name: any): Object;
};
/**
 * Reactive data from state
 */
declare const data: {
    active: null;
    activeProps: null;
};
declare const modals: any[];
export {};
//# sourceMappingURL=api.d.ts.map