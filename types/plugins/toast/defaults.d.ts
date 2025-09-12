declare namespace _default {
    namespace toastOptions {
        let component: import("vue").Raw<import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        let duration: number;
        let actions: never[];
    }
    namespace pluginOptions {
        let componentName: string;
        let componentNameDisplay: string;
        let teleportTo: string;
        let position: string[];
    }
}
export default _default;
//# sourceMappingURL=defaults.d.ts.map