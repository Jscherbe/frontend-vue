declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    config: Record<string, any>;
    disabled: boolean;
    noPadding: boolean;
    startOpen: boolean;
    activeClass: string;
    classes: Record<string, any>;
    clickOutsideCloses: boolean;
    directFocus: Function;
    size?: string | undefined;
    tooltip?: string | undefined;
    triggerText?: string | undefined;
    triggerAlt?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    trigger?: ((props: {
        isOpen: boolean;
        close: () => void;
    }) => any) | undefined;
} & {
    default?: ((props: {
        isOpen: boolean;
        toggle: () => void;
        close: () => void;
    }) => any) | undefined;
} & {
    footer?: ((props: {
        close: () => void;
    }) => any) | undefined;
};
declare const emit: (event: "toggle", ...args: any[]) => void;
declare const props: {
    readonly config: Record<string, any>;
    readonly disabled: boolean;
    readonly noPadding: boolean;
    readonly startOpen: boolean;
    readonly activeClass: string;
    readonly classes: Record<string, any>;
    readonly clickOutsideCloses: boolean;
    readonly directFocus: Function;
    readonly size?: string | undefined;
    readonly tooltip?: string | undefined;
    readonly triggerText?: string | undefined;
    readonly triggerAlt?: string | undefined;
};
//# sourceMappingURL=UluPopover.vue.d.ts.map