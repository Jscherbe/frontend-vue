declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "toggle", ...args: any[]) => void;
    config: Record<string, any>;
    disabled: boolean;
    noPadding: boolean;
    startOpen: boolean;
    activeClass: string;
    classes: Record<string, any>;
    clickOutsideCloses: boolean;
    directFocus: Function;
    triggerText?: string | undefined;
    triggerAlt?: string | undefined;
    tooltip?: string | undefined;
    size?: string | undefined;
    $props: {
        readonly config?: Record<string, any> | undefined;
        readonly disabled?: boolean | undefined;
        readonly noPadding?: boolean | undefined;
        readonly startOpen?: boolean | undefined;
        readonly activeClass?: string | undefined;
        readonly classes?: Record<string, any> | undefined;
        readonly clickOutsideCloses?: boolean | undefined;
        readonly directFocus?: Function | undefined;
        readonly triggerText?: string | undefined;
        readonly triggerAlt?: string | undefined;
        readonly tooltip?: string | undefined;
        readonly size?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    trigger: HTMLButtonElement;
    content: HTMLSpanElement;
    contentArrow: HTMLSpanElement;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            isOpen: boolean;
            close: () => void;
        }): any;
        default?(_: {
            isOpen: boolean;
            toggle: () => void;
            close: () => void;
        }): any;
        footer?(_: {
            close: () => void;
        }): any;
    };
    refs: {
        trigger: HTMLButtonElement;
        content: HTMLSpanElement;
        contentArrow: HTMLSpanElement;
    };
    rootEl: any;
};
//# sourceMappingURL=UluPopover.vue.d.ts.map