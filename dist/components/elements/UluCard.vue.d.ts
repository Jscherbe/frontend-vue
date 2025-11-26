declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "proxy-click", ...args: any[]) => void;
    classes: Record<string, any>;
    titleElement: string;
    cardElement: string;
    proxyClick: boolean;
    proxyClickOptions: Record<string, any>;
    imageIcon: boolean;
    horizontal: boolean;
    horizontalCenter: boolean;
    overlay: boolean;
    title?: string | undefined;
    modifiers?: string | unknown[] | undefined;
    target?: string | undefined;
    href?: string | undefined;
    to?: string | Record<string, any> | undefined;
    titleTo?: string | Record<string, any> | undefined;
    titleHref?: string | undefined;
    titleTarget?: string | undefined;
    imageSrc?: string | undefined;
    imageAlt?: string | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly titleElement?: string | undefined;
        readonly cardElement?: string | undefined;
        readonly proxyClick?: boolean | undefined;
        readonly proxyClickOptions?: Record<string, any> | undefined;
        readonly imageIcon?: boolean | undefined;
        readonly horizontal?: boolean | undefined;
        readonly horizontalCenter?: boolean | undefined;
        readonly overlay?: boolean | undefined;
        readonly title?: string | undefined;
        readonly modifiers?: string | unknown[] | undefined;
        readonly target?: string | undefined;
        readonly href?: string | undefined;
        readonly to?: string | Record<string, any> | undefined;
        readonly titleTo?: string | Record<string, any> | undefined;
        readonly titleHref?: string | undefined;
        readonly titleTarget?: string | undefined;
        readonly imageSrc?: string | undefined;
        readonly imageAlt?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    cardRoot: unknown;
    link: HTMLAnchorElement;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        title?(_: {}): any;
        title?(_: {}): any;
        title?(_: {}): any;
        body?(_: {}): any;
        aside?(_: {}): any;
        image?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        cardRoot: unknown;
        link: HTMLAnchorElement;
    };
    rootEl: any;
};
//# sourceMappingURL=UluCard.vue.d.ts.map