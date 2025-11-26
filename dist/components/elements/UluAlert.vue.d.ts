declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Alert Title
     */
    title: StringConstructor;
    /**
     * Alert description
     */
    description: StringConstructor;
    /**
     * Pass specific icon definition, else it will resolve based on common types
     */
    icon: StringConstructor;
    /**
     * Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Compact callout style
     */
    compact: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>, {
    resolvedModifiers: any;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Alert Title
     */
    title: StringConstructor;
    /**
     * Alert description
     */
    description: StringConstructor;
    /**
     * Pass specific icon definition, else it will resolve based on common types
     */
    icon: StringConstructor;
    /**
     * Error, warning, info, success etc (must have these callout modifiers setup and this is used for type color [ie. color-error])
     */
    type: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Compact callout style
     */
    compact: BooleanConstructor;
    /**
     * Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])
     */
    modifiers: (StringConstructor | ArrayConstructor)[];
}>> & Readonly<{}>, {
    type: string;
    compact: boolean;
}, {}, {
    UluButton: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        icon: (StringConstructor | ArrayConstructor)[];
        iconBefore: BooleanConstructor;
        iconOnly: BooleanConstructor;
        to: (ObjectConstructor | StringConstructor)[];
        href: StringConstructor;
        target: StringConstructor;
        download: (BooleanConstructor | StringConstructor)[];
        alt: StringConstructor;
        text: StringConstructor;
        size: StringConstructor;
        primary: BooleanConstructor;
        secondary: BooleanConstructor;
        small: BooleanConstructor;
        large: BooleanConstructor;
        outline: BooleanConstructor;
        transparent: BooleanConstructor;
        noMargin: BooleanConstructor;
        modifiers: (StringConstructor | ArrayConstructor)[];
    }>, {
        resolvedModifiers: any;
    }, {}, {
        resolvedAriaLabel(): string | null;
        classes(): string[];
        element(): "button" | import('vue-router')._RouterLinkI | "a";
        attrs(): {
            to: string | Record<string, any>;
            href?: undefined;
        } | {
            href: string;
            to?: undefined;
        } | {
            to?: undefined;
            href?: undefined;
        };
    }, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        icon: (StringConstructor | ArrayConstructor)[];
        iconBefore: BooleanConstructor;
        iconOnly: BooleanConstructor;
        to: (ObjectConstructor | StringConstructor)[];
        href: StringConstructor;
        target: StringConstructor;
        download: (BooleanConstructor | StringConstructor)[];
        alt: StringConstructor;
        text: StringConstructor;
        size: StringConstructor;
        primary: BooleanConstructor;
        secondary: BooleanConstructor;
        small: BooleanConstructor;
        large: BooleanConstructor;
        outline: BooleanConstructor;
        transparent: BooleanConstructor;
        noMargin: BooleanConstructor;
        modifiers: (StringConstructor | ArrayConstructor)[];
    }>> & Readonly<{}>, {
        small: boolean;
        iconOnly: boolean;
        iconBefore: boolean;
        primary: boolean;
        secondary: boolean;
        large: boolean;
        outline: boolean;
        transparent: boolean;
        noMargin: boolean;
    }, {}, {
        UluIcon: import('vue').DefineComponent<{}, {
            spaced: boolean;
            icon?: string | boolean | Record<string, any> | unknown[] | undefined;
            $props: {
                readonly spaced?: boolean | undefined;
                readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
            };
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
    UluIcon: import('vue').DefineComponent<{}, {
        spaced: boolean;
        icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        $props: {
            readonly spaced?: boolean | undefined;
            readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        };
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluAlert.vue.d.ts.map