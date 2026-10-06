export function createApi(state: Object): Object;
export type TourStep = {
    /**
     * - The CSS selector for the target element. If omitted, step renders as a modal.
     */
    target?: string | undefined;
    /**
     * - The title text for the step.
     */
    title?: string | undefined;
    /**
     * - Class to apply to the title.
     */
    titleClass?: string | Object | any[] | undefined;
    /**
     * - Class to apply to the pager footer.
     */
    pagerClass?: string | Object | any[] | undefined;
    /**
     * - The content text for the step.
     */
    content?: string | undefined;
    /**
     * - A Vue component to completely replace the modal/popover wrapper and layout.
     */
    component?: Object | undefined;
    /**
     * - A Vue component to replace the step text content, keeping the modal/popover wrappers and default footer.
     */
    contentComponent?: Object | undefined;
    /**
     * - Props to bind to the custom component.
     */
    componentProps?: Object | undefined;
    /**
     * - If true, hides the default tour footer (Next/Back buttons).
     */
    hideFooter?: boolean | undefined;
    /**
     * - Floating UI placement string (e.g. 'bottom', 'right').
     */
    placement?: string | undefined;
    /**
     * - If true, darkens the backdrop around the target element.
     */
    highlight?: boolean | undefined;
    /**
     * - Props to pass to the modal (if target is omitted).
     */
    modalProps?: Object | undefined;
    /**
     * - Props to pass to the popover (if target is present).
     */
    popoverProps?: Object | undefined;
    /**
     * - Async hook called before the step is rendered.
     */
    onEnter?: Function | undefined;
    /**
     * - Async hook called after the step is exited.
     */
    onLeave?: Function | undefined;
};
//# sourceMappingURL=api.d.ts.map