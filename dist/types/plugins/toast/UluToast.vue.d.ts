declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    /**
     * Toast configuration
     */
    toast: ObjectConstructor;
    /**
     * Icons for each element { icon, header, content, date, actions, action, closeButton, title, body, closeButton }
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            content: string;
            date: string;
            actions: string;
            action: string;
            closeButton: string;
        };
    };
}>, {}, {}, {}, {
    handleAction(event: any, action: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Toast configuration
     */
    toast: ObjectConstructor;
    /**
     * Icons for each element { icon, header, content, date, actions, action, closeButton, title, body, closeButton }
     */
    classes: {
        type: ObjectConstructor;
        default: () => {
            content: string;
            date: string;
            actions: string;
            action: string;
            closeButton: string;
        };
    };
}>> & Readonly<{}>, {
    classes: Record<string, any>;
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
//# sourceMappingURL=UluToast.vue.d.ts.map