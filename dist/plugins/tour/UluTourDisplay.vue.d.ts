import { nextTick } from 'vue';
declare const _default: import('vue').DefineComponent<{}, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
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
        $nextTick: typeof nextTick;
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
export default _default;
//# sourceMappingURL=UluTourDisplay.vue.d.ts.map