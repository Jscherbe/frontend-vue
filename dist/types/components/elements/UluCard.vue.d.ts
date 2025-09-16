declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import("vue").DefineComponent<{}, {
    $emit: typeof emit;
    $props: Partial<typeof props>;
    classes: Record<string, any>;
    overlay: boolean;
    horizontal: boolean;
    titleElement: string;
    cardElement: string;
    proxyClick: boolean;
    proxyClickOptions: Record<string, any>;
    imageIcon: boolean;
    horizontalCenter: boolean;
    title?: string | undefined;
    to?: string | Record<string, any> | undefined;
    target?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    href?: string | undefined;
    titleTo?: string | Record<string, any> | undefined;
    titleHref?: string | undefined;
    titleTarget?: string | undefined;
    imageSrc?: string | undefined;
    imageAlt?: string | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
type __VLS_Slots = {
    title?: ((props: {}) => any) | undefined;
} & {
    title?: ((props: {}) => any) | undefined;
} & {
    title?: ((props: {}) => any) | undefined;
} & {
    body?: ((props: {}) => any) | undefined;
} & {
    aside?: ((props: {}) => any) | undefined;
} & {
    image?: ((props: {}) => any) | undefined;
} & {
    footer?: ((props: {}) => any) | undefined;
};
declare const emit: (event: "proxy-click", ...args: any[]) => void;
declare const props: {
    readonly classes: Record<string, any>;
    readonly overlay: boolean;
    readonly horizontal: boolean;
    readonly titleElement: string;
    readonly cardElement: string;
    readonly proxyClick: boolean;
    readonly proxyClickOptions: Record<string, any>;
    readonly imageIcon: boolean;
    readonly horizontalCenter: boolean;
    readonly title?: string | undefined;
    readonly to?: string | Record<string, any> | undefined;
    readonly target?: string | undefined;
    readonly modifiers?: string | unknown[] | undefined;
    readonly href?: string | undefined;
    readonly titleTo?: string | Record<string, any> | undefined;
    readonly titleHref?: string | undefined;
    readonly titleTarget?: string | undefined;
    readonly imageSrc?: string | undefined;
    readonly imageAlt?: string | undefined;
};
//# sourceMappingURL=UluCard.vue.d.ts.map