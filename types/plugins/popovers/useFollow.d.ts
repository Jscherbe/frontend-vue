export default function useFollowPoint(userOptions: any): {
    /**
     * Reactive X value
     * @type {Object}
     */
    x: any;
    /**
     * Reactive Y value
     * @type {Object}
     */
    y: any;
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
        x: any;
        y: any;
    }): void;
};
//# sourceMappingURL=useFollow.d.ts.map