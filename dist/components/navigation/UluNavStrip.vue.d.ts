declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: ArrayConstructor;
    /**
     * Center aligned
     */
    center: BooleanConstructor;
    /**
     * Right aligned
     */
    right: BooleanConstructor;
    /**
     * Rule nav strip style
     */
    rule: BooleanConstructor;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    /**
     * Array of items for list (uses UluMenu, see structure there)
     */
    items: ArrayConstructor;
    /**
     * Center aligned
     */
    center: BooleanConstructor;
    /**
     * Right aligned
     */
    right: BooleanConstructor;
    /**
     * Rule nav strip style
     */
    rule: BooleanConstructor;
}>> & Readonly<{}>, {
    right: boolean;
    center: boolean;
    rule: boolean;
}, {}, {
    UluMenu: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
        items: ArrayConstructor;
        classes: {
            type: ObjectConstructor;
            default: () => {};
        };
        iconOnly: BooleanConstructor;
        noChildren: BooleanConstructor;
    }>, {}, {}, {}, {
        handleItemClick(event: any, item: any): void;
    }, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "item-click"[], "item-click", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
        items: ArrayConstructor;
        classes: {
            type: ObjectConstructor;
            default: () => {};
        };
        iconOnly: BooleanConstructor;
        noChildren: BooleanConstructor;
    }>> & Readonly<{
        "onItem-click"?: ((...args: any[]) => any) | undefined;
    }>, {
        classes: Record<string, any>;
        iconOnly: boolean;
        noChildren: boolean;
    }, {}, {
        UluIcon: import('vue').DefineComponent<{}, {
            spaced: boolean;
            icon?: string | boolean | Record<string, any> | unknown[] | undefined;
            $props: {
                readonly spaced?: boolean | undefined;
                readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
            };
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
        UluTag: {
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
                counter: boolean;
                type?: string | undefined;
                size?: string | undefined;
                icon?: string | unknown[] | undefined;
                modifiers?: string | unknown[] | undefined;
                text?: string | number | undefined;
                $props: {
                    readonly counter?: boolean | undefined;
                    readonly type?: string | undefined;
                    readonly size?: string | undefined;
                    readonly icon?: string | unknown[] | undefined;
                    readonly modifiers?: string | unknown[] | undefined;
                    readonly text?: string | number | undefined;
                };
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLSpanElement, import('vue').ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{}>, {
                counter: boolean;
                type?: string | undefined;
                size?: string | undefined;
                icon?: string | unknown[] | undefined;
                modifiers?: string | unknown[] | undefined;
                text?: string | number | undefined;
                $props: {
                    readonly counter?: boolean | undefined;
                    readonly type?: string | undefined;
                    readonly size?: string | undefined;
                    readonly icon?: string | unknown[] | undefined;
                    readonly modifiers?: string | unknown[] | undefined;
                    readonly text?: string | number | undefined;
                };
            }, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            counter: boolean;
            type?: string | undefined;
            size?: string | undefined;
            icon?: string | unknown[] | undefined;
            modifiers?: string | unknown[] | undefined;
            text?: string | number | undefined;
            $props: {
                readonly counter?: boolean | undefined;
                readonly type?: string | undefined;
                readonly size?: string | undefined;
                readonly icon?: string | unknown[] | undefined;
                readonly modifiers?: string | unknown[] | undefined;
                readonly text?: string | number | undefined;
            };
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
    }, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluNavStrip.vue.d.ts.map