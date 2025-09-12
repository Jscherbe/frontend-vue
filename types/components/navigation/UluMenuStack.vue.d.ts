declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Menu item (see UluMenu)
     */
    items: ArrayConstructor;
    /**
     * Hanging style menu
     */
    hanging: BooleanConstructor;
    /**
     * Compact style menu
     */
    compact: BooleanConstructor;
    /**
     * Don't include children of menu
     */
    noChildren: BooleanConstructor;
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Menu item (see UluMenu)
     */
    items: ArrayConstructor;
    /**
     * Hanging style menu
     */
    hanging: BooleanConstructor;
    /**
     * Compact style menu
     */
    compact: BooleanConstructor;
    /**
     * Don't include children of menu
     */
    noChildren: BooleanConstructor;
}>> & Readonly<{}>, {
    noChildren: boolean;
    hanging: boolean;
    compact: boolean;
}, {}, {
    UluMenu: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        items: ArrayConstructor;
        classes: {
            type: ObjectConstructor;
            default: () => {};
        };
        iconOnly: BooleanConstructor;
        noChildren: BooleanConstructor;
    }>, {}, {}, {}, {
        handleItemClick(event: any, item: any): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "item-click"[], "item-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        UluIcon: import("vue").DefineComponent<{}, {
            $props: Partial<{
                readonly spaced: boolean;
                readonly icon?: string | boolean | unknown[] | Record<string, any> | undefined;
            }>;
            spaced: boolean;
            icon?: string | boolean | unknown[] | Record<string, any> | undefined;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        UluTag: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
                $props: Partial<{
                    readonly counter: boolean;
                    readonly size?: string | undefined;
                    readonly type?: string | undefined;
                    readonly text?: string | number | undefined;
                    readonly icon?: string | unknown[] | undefined;
                    readonly modifiers?: string | unknown[] | undefined;
                }>;
                counter: boolean;
                size?: string | undefined;
                type?: string | undefined;
                text?: string | number | undefined;
                icon?: string | unknown[] | undefined;
                modifiers?: string | unknown[] | undefined;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{}>, {
                $props: Partial<{
                    readonly counter: boolean;
                    readonly size?: string | undefined;
                    readonly type?: string | undefined;
                    readonly text?: string | number | undefined;
                    readonly icon?: string | unknown[] | undefined;
                    readonly modifiers?: string | unknown[] | undefined;
                }>;
                counter: boolean;
                size?: string | undefined;
                type?: string | undefined;
                text?: string | number | undefined;
                icon?: string | unknown[] | undefined;
                modifiers?: string | unknown[] | undefined;
            }, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            $props: Partial<{
                readonly counter: boolean;
                readonly size?: string | undefined;
                readonly type?: string | undefined;
                readonly text?: string | number | undefined;
                readonly icon?: string | unknown[] | undefined;
                readonly modifiers?: string | unknown[] | undefined;
            }>;
            counter: boolean;
            size?: string | undefined;
            type?: string | undefined;
            text?: string | number | undefined;
            icon?: string | unknown[] | undefined;
            modifiers?: string | unknown[] | undefined;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default?: (props: {}) => any;
            };
        });
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
//# sourceMappingURL=UluMenuStack.vue.d.ts.map