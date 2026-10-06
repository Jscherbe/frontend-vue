declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    /**
     * Emits the close event
     */
    close: () => void;
    /**
     * Manually trigger a floating UI position update
     */
    update: Function;
    /**
     * The internal root popover element reference
     */
    content: import('vue').Ref<null, null>;
    $emit: (event: "close" | "update:isOpen", ...args: any[]) => void;
    isOpen: boolean;
    clickOutsideCloses: boolean;
    escapeCloses: boolean;
    directFocus: Function;
    trigger: Record<string, any>;
    config: Record<string, any>;
    modifiers?: string | Record<string, any> | unknown[] | undefined;
    $props: {
        readonly isOpen?: boolean | undefined;
        readonly clickOutsideCloses?: boolean | undefined;
        readonly escapeCloses?: boolean | undefined;
        readonly directFocus?: Function | undefined;
        readonly trigger?: Record<string, any> | undefined;
        readonly config?: Record<string, any> | undefined;
        readonly modifiers?: string | Record<string, any> | unknown[] | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    contentEl: HTMLSpanElement;
    contentArrow: HTMLSpanElement;
}, HTMLSpanElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            isOpen: boolean;
            close: () => void;
        }): any;
        footer?(_: {
            isOpen: boolean;
            close: () => void;
        }): any;
    };
    refs: {
        contentEl: HTMLSpanElement;
        contentArrow: HTMLSpanElement;
    };
    rootEl: HTMLSpanElement;
};
//# sourceMappingURL=UluPopoverBase.vue.d.ts.map