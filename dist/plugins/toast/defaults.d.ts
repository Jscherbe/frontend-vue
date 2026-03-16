declare namespace _default {
    namespace toastOptions {
        let component: import("vue").Raw<{
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
                classes: Record<string, any>;
                toast?: Record<string, any> | undefined;
                $props: {
                    readonly classes?: Record<string, any> | undefined;
                    readonly toast?: Record<string, any> | undefined;
                };
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, HTMLDivElement, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<{}> & Readonly<{}>, {
                classes: Record<string, any>;
                toast?: Record<string, any> | undefined;
                $props: {
                    readonly classes?: Record<string, any> | undefined;
                    readonly toast?: Record<string, any> | undefined;
                };
            }, {}, {}, {}, {}>;
            __isFragment?: never;
            __isTeleport?: never;
            __isSuspense?: never;
        } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            classes: Record<string, any>;
            toast?: Record<string, any> | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly toast?: Record<string, any> | undefined;
            };
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                icon?(_: {
                    toast: Record<string, any> | undefined;
                }): any;
                content?(_: {
                    toast: Record<string, any> | undefined;
                }): any;
            };
        })>;
        let duration: number;
        let actions: never[];
    }
    namespace pluginOptions {
        let teleportTo: string;
        let position: string[];
    }
}
export default _default;
//# sourceMappingURL=defaults.d.ts.map