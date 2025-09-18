declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Items Array of Objects for each link
     * [{
     *   title: String (title of link)
     *   icon: Icon definition passed to UluIcon
     *   tag: Tag appearing after link text (count/etc), pass props you want bound to tag
     *   tooltip: Add tooltip to menu item (pass options for tooltip), unless iconOnly than the title is presented in the tooltip
     *   href: Will result in <a>
     *   click: Will be called on click and result in <button>
     *   to: Will result in <a> and use vue-router router-link component
     * }]
     */
    items: ArrayConstructor;
    /**
     * Classes object to add class bindings to the different elements
     * - { list, item, link, linkActive, linkExactActive, linkIcon, linkText }
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Use icon only version of menu
     */
    iconOnly: BooleanConstructor;
    /**
     * Do not print menu items children recursively
     */
    noChildren: BooleanConstructor;
}>, {}, {}, {}, {
    handleItemClick(event: any, item: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "item-click"[], "item-click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Items Array of Objects for each link
     * [{
     *   title: String (title of link)
     *   icon: Icon definition passed to UluIcon
     *   tag: Tag appearing after link text (count/etc), pass props you want bound to tag
     *   tooltip: Add tooltip to menu item (pass options for tooltip), unless iconOnly than the title is presented in the tooltip
     *   href: Will result in <a>
     *   click: Will be called on click and result in <button>
     *   to: Will result in <a> and use vue-router router-link component
     * }]
     */
    items: ArrayConstructor;
    /**
     * Classes object to add class bindings to the different elements
     * - { list, item, link, linkActive, linkExactActive, linkIcon, linkText }
     */
    classes: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * Use icon only version of menu
     */
    iconOnly: BooleanConstructor;
    /**
     * Do not print menu items children recursively
     */
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
            readonly icon?: string | boolean | Record<string, any> | unknown[] | undefined;
        }>;
        spaced: boolean;
        icon?: string | boolean | Record<string, any> | unknown[] | undefined;
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
export default _default;
//# sourceMappingURL=UluMenu.vue.d.ts.map