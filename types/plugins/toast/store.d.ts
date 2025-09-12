/**
 * Reactive State Object (used inside global components, and as API globally)
 */
export const store: {
    toasts: never[];
    pluginOptions: {
        componentName: string;
        componentNameDisplay: string;
        teleportTo: string;
        position: string[];
    };
    toastOptions: {
        component: import("vue").Raw<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            toast: ObjectConstructor;
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
            toast: ObjectConstructor;
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
                    readonly icon?: string | boolean | unknown[] | Record<string, any> | undefined;
                }>;
                spaced: boolean;
                icon?: string | boolean | unknown[] | Record<string, any> | undefined;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
        duration: number;
        actions: never[];
    };
    setToastOptions: (options: any) => {
        componentName: string;
        componentNameDisplay: string;
        teleportTo: string;
        position: string[];
    };
    setPluginOptions: (options: any) => {
        componentName: string;
        componentNameDisplay: string;
        teleportTo: string;
        position: string[];
    };
    createToast: (options: any) => any;
};
export namespace api {
    /**
     *
     * @param {Object} options Toast options
     * @returns Toast object (to be used to remove)
     */
    function add(options: Object): any;
    /**
     *
     * @param {Object} toast Toast uid
     */
    function remove(uid: any): void;
    /**
     * Remove all toasts
     */
    function removeAll(): void;
}
//# sourceMappingURL=store.d.ts.map