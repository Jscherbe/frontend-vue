declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    /**
     * The reactive internal open/closed state of the popover
     */
    isOpen: import('vue').Ref<boolean, boolean>;
    /**
     * Method to toggle the popover open/closed
     */
    toggle: () => void;
    /**
     * Method to force the popover closed
     */
    close: () => void;
    /**
     * Method to explicitly set the open state
     * @param {Boolean} toOpen - The desired state
     */
    changeTo: (toOpen: any) => void;
    $emit: (event: "toggle", ...args: any[]) => void;
    clickOutsideCloses: boolean;
    config: Record<string, any>;
    disabled: boolean;
    noPadding: boolean;
    startOpen: boolean;
    activeClass: string;
    classes: Record<string, any>;
    directFocus?: Function | undefined;
    triggerText?: string | undefined;
    triggerAlt?: string | undefined;
    tooltip?: string | undefined;
    size?: string | undefined;
    $props: {
        readonly clickOutsideCloses?: boolean | undefined;
        readonly config?: Record<string, any> | undefined;
        readonly disabled?: boolean | undefined;
        readonly noPadding?: boolean | undefined;
        readonly startOpen?: boolean | undefined;
        readonly activeClass?: string | undefined;
        readonly classes?: Record<string, any> | undefined;
        readonly directFocus?: Function | undefined;
        readonly triggerText?: string | undefined;
        readonly triggerAlt?: string | undefined;
        readonly tooltip?: string | undefined;
        readonly size?: string | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    trigger: HTMLButtonElement;
    popoverBase: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        } & {
            contentEl: HTMLSpanElement;
            contentArrow: HTMLSpanElement;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: HTMLSpanElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            close: () => void;
            update: Function;
            content: import('vue').Ref<null, null>;
            $emit: (event: "close", ...args: any[]) => void;
            isOpen: boolean;
            clickOutsideCloses: boolean;
            escapeCloses: boolean;
            directFocus: Function;
            trigger: Record<string, any>;
            config: Record<string, any>;
            modifiers?: string | Record<string, any> | unknown[] | undefined;
            $props: {
                readonly isOpen?: boolean | undefined;
                readonly clickOutsideCloses?: boolean | undefined;
                readonly escapeCloses?: boolean | undefined;
                readonly directFocus?: Function | undefined;
                readonly trigger?: Record<string, any> | undefined;
                readonly config?: Record<string, any> | undefined;
                readonly modifiers?: string | Record<string, any> | unknown[] | undefined;
            };
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            renderTriggered?: ((e: import('vue').DebuggerEvent) => void) | ((e: import('vue').DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void) | ((err: unknown, instance: import('vue').ComponentPublicInstance | null, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import('vue').nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (...args: [R, R, import('@vue/reactivity').OnCleanup]) => any : (...args: [any, any, import('@vue/reactivity').OnCleanup]) => any, options?: import('vue').WatchOptions): import('vue').WatchStopHandle;
    } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "isOpen" | "clickOutsideCloses" | "escapeCloses" | "directFocus" | "trigger" | "config" | "modifiers" | "content" | "close" | "update"> & import('vue').ShallowUnwrapRef<{
        close: () => void;
        update: Function;
        content: import('vue').Ref<null, null>;
        $emit: (event: "close", ...args: any[]) => void;
        isOpen: boolean;
        clickOutsideCloses: boolean;
        escapeCloses: boolean;
        directFocus: Function;
        trigger: Record<string, any>;
        config: Record<string, any>;
        modifiers?: string | Record<string, any> | unknown[] | undefined;
        $props: {
            readonly isOpen?: boolean | undefined;
            readonly clickOutsideCloses?: boolean | undefined;
            readonly escapeCloses?: boolean | undefined;
            readonly directFocus?: Function | undefined;
            readonly trigger?: Record<string, any> | undefined;
            readonly config?: Record<string, any> | undefined;
            readonly modifiers?: string | Record<string, any> | unknown[] | undefined;
        };
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: {
            default?(_: {
                isOpen: boolean;
                close: () => void;
            }): any;
            footer?(_: {
                isOpen: boolean;
                close: () => void;
            }): any;
        };
    }) | null;
}, any>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: {
        trigger?(_: {
            isOpen: boolean;
            close: () => void;
        }): any;
        default?(_: {
            isOpen: boolean;
            toggle: () => void;
            close: () => void;
        }): any;
        footer?(_: {
            close: () => void;
        }): any;
    };
    refs: {
        trigger: HTMLButtonElement;
        popoverBase: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
            $attrs: Data;
            $refs: Data & {
                contentEl: HTMLSpanElement;
                contentArrow: HTMLSpanElement;
            };
            $slots: Readonly<InternalSlots>;
            $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLSpanElement;
            $options: ComponentOptionsBase<ToResolvedProps<{}, {}>, {
                close: () => void;
                update: Function;
                content: Ref<null, null>;
                $emit: (event: "close", ...args: any[]) => void;
                isOpen: boolean;
                clickOutsideCloses: boolean;
                escapeCloses: boolean;
                directFocus: Function;
                trigger: Record<string, any>;
                config: Record<string, any>;
                modifiers?: string | Record<string, any> | unknown[] | undefined;
                $props: {
                    readonly isOpen?: boolean | undefined;
                    readonly clickOutsideCloses?: boolean | undefined;
                    readonly escapeCloses?: boolean | undefined;
                    readonly directFocus?: Function | undefined;
                    readonly trigger?: Record<string, any> | undefined;
                    readonly config?: Record<string, any> | undefined;
                    readonly modifiers?: string | Record<string, any> | unknown[] | undefined;
                };
            }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & MergedComponentOptionsOverride;
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: OnCleanup) => any : (args_0: any, args_1: any, args_2: OnCleanup) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "isOpen" | "clickOutsideCloses" | "escapeCloses" | "directFocus" | "trigger" | "config" | "modifiers" | "content" | "close" | "update"> & ShallowUnwrapRef<{
            close: () => void;
            update: Function;
            content: Ref<null, null>;
            $emit: (event: "close", ...args: any[]) => void;
            isOpen: boolean;
            clickOutsideCloses: boolean;
            escapeCloses: boolean;
            directFocus: Function;
            trigger: Record<string, any>;
            config: Record<string, any>;
            modifiers?: string | Record<string, any> | unknown[] | undefined;
            $props: {
                readonly isOpen?: boolean | undefined;
                readonly clickOutsideCloses?: boolean | undefined;
                readonly escapeCloses?: boolean | undefined;
                readonly directFocus?: Function | undefined;
                readonly trigger?: Record<string, any> | undefined;
                readonly config?: Record<string, any> | undefined;
                readonly modifiers?: string | Record<string, any> | unknown[] | undefined;
            };
        }> & ExtractComputedReturns<{}> & ComponentCustomProperties & {} & {
            $slots: {
                default?(_: {
                    isOpen: boolean;
                    close: () => void;
                }): any;
                footer?(_: {
                    isOpen: boolean;
                    close: () => void;
                }): any;
            };
        }) | null;
    };
    rootEl: any;
};
//# sourceMappingURL=UluPopover.vue.d.ts.map