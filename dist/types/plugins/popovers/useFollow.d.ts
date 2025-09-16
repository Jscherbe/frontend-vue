export default function useFollowPoint(userOptions: any): {
    /**
     * Reactive X value
     * @type {Object}
     */
    x: Object;
    /**
     * Reactive Y value
     * @type {Object}
     */
    y: Object;
    /**
     * Show follow tooltip
     */
    show(): void;
    /**
     * Hide follow tooltip
     */
    hide(): void;
    /**
     *
     * @param {Object} changes Updates for virtual element
     * @param {Object} changes.x New 'x' value
     * @param {Object} changes.y New 'y' value
     */
    update(changes: {
        x: Object;
        y: Object;
    }): void;
};
//# sourceMappingURL=useFollow.d.ts.map