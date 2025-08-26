/**
 * Reactive State Object (used inside global components, and as API globally)
 */
export const store: any;
export namespace api {
    /**
     *
     * @param {Object} options Toast options
     * @returns Toast object (to be used to remove)
     */
    function add(options: any): any;
    /**
     *
     * @param {Object} toast Toast uid
     */
    function remove(uid: any): void;
    /**
     * Remove all toasts
     */
    function removeAll(): void;
}
//# sourceMappingURL=store.d.ts.map