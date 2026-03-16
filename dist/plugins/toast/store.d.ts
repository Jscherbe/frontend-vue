/**
 * Reactive State Object (used inside global components, and as API globally)
 */
export const store: {
    toasts: never[];
    pluginOptions: {
        teleportTo: string;
        position: string[];
    };
    toastOptions: {
        component: import('vue').Raw<{
            new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {
                classes: Record<string, any>;
                toast?: Record<string, any> | undefined;
                $props: {
                    readonly classes?: Record<string, any> | undefined;
                    readonly toast?: Record<string, any> | undefined;
                };
            }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
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
        } & import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            classes: Record<string, any>;
            toast?: Record<string, any> | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly toast?: Record<string, any> | undefined;
            };
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
            $slots: {
                icon?(_: {
                    toast: Record<string, any> | undefined;
                }): any;
                content?(_: {
                    toast: Record<string, any> | undefined;
                }): any;
            };
        })>;
        duration: number;
        actions: never[];
    };
    setToastOptions: (options: any) => {
        teleportTo: string;
        position: string[];
    };
    setPluginOptions: (options: any) => {
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