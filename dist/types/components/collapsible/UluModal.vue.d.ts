declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Controls the visibility of the modal (for v-model).
     */
    modelValue: BooleanConstructor;
    /**
     * Target for Vue's Teleport. Defaults to 'body'.
     * Set to `false` to disable teleporting (modal renders inline).
     * Set to `null` or `undefined` for `body` fallback with disabled as false.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * When open and not non-modal, the body is prevented from scrolling (defaults to true).
     */
    preventScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Compensate for layout shift when preventing scroll. Which adds padding equal to scrollbars
     * width while dialog is open
     */
    preventScrollShift: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Use non-modal interface for dialog
     */
    nonModal: BooleanConstructor;
    /**
     * Close modal on click outside
     */
    clickOutsideCloses: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enable resizer
     */
    allowResize: BooleanConstructor;
    /**
     * Position (any position that modal.scss supports)
     */
    position: {
        type: StringConstructor;
        default: string;
    };
    /**
     * If `true`, the modal body will fill the available space.
     */
    bodyFills: BooleanConstructor;
    /**
     * If `true`, no backdrop will be displayed behind the modal
     */
    noBackdrop: BooleanConstructor;
    /**
     * If `true`, the modal will not have a minimum height
     */
    noMinHeight: BooleanConstructor;
    /**
     * Set aria-labelledby by element id (to add accessible label)
     * - Use this if you are not using the default modal title (custom titles)
     */
    labelledby: StringConstructor;
    /**
     * Set aria-describedby by element id (to add accessible description)
     * - This is usually content you passed into the modal body (paragraph/etc)
     */
    describedby: StringConstructor;
    /**
     * Text for modal title in header (can use title slot as well for complex markup), if not passed the header will be omitted
     */
    title: StringConstructor;
    /**
     * Optional icon for before title (uses UluIcon interface)
     */
    titleIcon: StringConstructor;
    /**
     * Default icon for resizer
     */
    resizerIcon: StringConstructor;
    /**
     * Default icon for close button (uses UluIcon interface)
     */
    closeIcon: StringConstructor;
    /**
     * Classes for elements ({ container, header, title, body, footer })
     * - Any valid class binding value per element
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>, {
    resolvedModifiers: any;
    hasHeader: import("vue").ComputedRef<string | import("vue").Slot<any> | undefined>;
    resizerEnabled: import("vue").ComputedRef<boolean | undefined>;
    resizerIconType: import("vue").ComputedRef<"type:resizeBoth" | "type:resizeHorizontal">;
}, {
    containerWidth: null;
    titleId: string;
    bodyOverflowValue: null;
    bodyPaddingRightValue: null;
    isResizing: boolean;
}, {
    resolvedLabelledby(): string;
}, {
    close(): void;
    handleDialogCloseEvent(): void;
    handleClick(event: any): void;
    setupPreventScroll(): void;
    destroyPreventScroll(): void;
    handleToggle(event: any): void;
    setupResizer(): void;
    destroyResizer(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "open" | "update:modelValue")[], "close" | "open" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Controls the visibility of the modal (for v-model).
     */
    modelValue: BooleanConstructor;
    /**
     * Target for Vue's Teleport. Defaults to 'body'.
     * Set to `false` to disable teleporting (modal renders inline).
     * Set to `null` or `undefined` for `body` fallback with disabled as false.
     */
    teleport: {
        type: (ObjectConstructor | BooleanConstructor | StringConstructor)[];
        default: string;
    };
    /**
     * When open and not non-modal, the body is prevented from scrolling (defaults to true).
     */
    preventScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Compensate for layout shift when preventing scroll. Which adds padding equal to scrollbars
     * width while dialog is open
     */
    preventScrollShift: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Use non-modal interface for dialog
     */
    nonModal: BooleanConstructor;
    /**
     * Close modal on click outside
     */
    clickOutsideCloses: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enable resizer
     */
    allowResize: BooleanConstructor;
    /**
     * Position (any position that modal.scss supports)
     */
    position: {
        type: StringConstructor;
        default: string;
    };
    /**
     * If `true`, the modal body will fill the available space.
     */
    bodyFills: BooleanConstructor;
    /**
     * If `true`, no backdrop will be displayed behind the modal
     */
    noBackdrop: BooleanConstructor;
    /**
     * If `true`, the modal will not have a minimum height
     */
    noMinHeight: BooleanConstructor;
    /**
     * Set aria-labelledby by element id (to add accessible label)
     * - Use this if you are not using the default modal title (custom titles)
     */
    labelledby: StringConstructor;
    /**
     * Set aria-describedby by element id (to add accessible description)
     * - This is usually content you passed into the modal body (paragraph/etc)
     */
    describedby: StringConstructor;
    /**
     * Text for modal title in header (can use title slot as well for complex markup), if not passed the header will be omitted
     */
    title: StringConstructor;
    /**
     * Optional icon for before title (uses UluIcon interface)
     */
    titleIcon: StringConstructor;
    /**
     * Default icon for resizer
     */
    resizerIcon: StringConstructor;
    /**
     * Default icon for close button (uses UluIcon interface)
     */
    closeIcon: StringConstructor;
    /**
     * Classes for elements ({ container, header, title, body, footer })
     * - Any valid class binding value per element
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    position: string;
    classes: Record<string, any>;
    clickOutsideCloses: boolean;
    modelValue: boolean;
    nonModal: boolean;
    allowResize: boolean;
    bodyFills: boolean;
    noBackdrop: boolean;
    noMinHeight: boolean;
    teleport: string | boolean | Record<string, any>;
    preventScroll: boolean;
    preventScrollShift: boolean;
}, {}, {
    UluIcon: import("vue").DefineComponent<{}, {
        $props: Partial<{
            readonly spaced: boolean;
            readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        }>;
        spaced: boolean;
        icon?: string | boolean | Record<string, any> | unknown[] | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluModal.vue.d.ts.map