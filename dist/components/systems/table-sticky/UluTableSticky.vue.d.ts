import { nextTick } from 'vue';
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & (new () => {
    $slots: S;
});
declare const __VLS_component: import('vue').DefineComponent<{}, {
    $emit: (event: "column-sort", ...args: any[]) => void;
    classes: Record<string, any>;
    columns: unknown[];
    idPrefix: string;
    caption: string;
    allowClickClones: boolean;
    firstColumnSticky: boolean;
    scrollControls: boolean;
    scrollContext: Window & typeof globalThis;
    scrollControlAmount: number;
    rows?: unknown[] | undefined;
    footerRows?: unknown[] | undefined;
    getRowValue?: Function | undefined;
    getColumnTitle?: Function | undefined;
    controlsComponent?: Record<string, any> | undefined;
    $props: {
        readonly classes?: Record<string, any> | undefined;
        readonly columns?: unknown[] | undefined;
        readonly idPrefix?: string | undefined;
        readonly caption?: string | undefined;
        readonly allowClickClones?: boolean | undefined;
        readonly firstColumnSticky?: boolean | undefined;
        readonly scrollControls?: boolean | undefined;
        readonly scrollContext?: (Window & typeof globalThis) | undefined;
        readonly scrollControlAmount?: number | undefined;
        readonly rows?: unknown[] | undefined;
        readonly footerRows?: unknown[] | undefined;
        readonly getRowValue?: Function | undefined;
        readonly getColumnTitle?: Function | undefined;
        readonly controlsComponent?: Record<string, any> | undefined;
    };
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {
    header: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: HTMLTableElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
            classes: Record<string, any>;
            headerRows: unknown[];
            isActual: boolean;
            rows?: unknown[] | undefined;
            footerRows?: unknown[] | undefined;
            idPrefix?: string | undefined;
            caption?: string | undefined;
            getRowValue?: Function | undefined;
            getColumnTitle?: Function | undefined;
            rowColumns?: unknown[] | undefined;
            resolveClasses?: Function | undefined;
            columnWidth?: string | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly headerRows?: unknown[] | undefined;
                readonly isActual?: boolean | undefined;
                readonly rows?: unknown[] | undefined;
                readonly footerRows?: unknown[] | undefined;
                readonly idPrefix?: string | undefined;
                readonly caption?: string | undefined;
                readonly getRowValue?: Function | undefined;
                readonly getColumnTitle?: Function | undefined;
                readonly rowColumns?: unknown[] | undefined;
                readonly resolveClasses?: Function | undefined;
                readonly columnWidth?: string | undefined;
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
    } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "classes" | "rows" | "footerRows" | "idPrefix" | "caption" | "getRowValue" | "getColumnTitle" | "headerRows" | "rowColumns" | "resolveClasses" | "columnWidth" | "isActual"> & import('vue').ShallowUnwrapRef<{
        $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
        classes: Record<string, any>;
        headerRows: unknown[];
        isActual: boolean;
        rows?: unknown[] | undefined;
        footerRows?: unknown[] | undefined;
        idPrefix?: string | undefined;
        caption?: string | undefined;
        getRowValue?: Function | undefined;
        getColumnTitle?: Function | undefined;
        rowColumns?: unknown[] | undefined;
        resolveClasses?: Function | undefined;
        columnWidth?: string | undefined;
        $props: {
            readonly classes?: Record<string, any> | undefined;
            readonly headerRows?: unknown[] | undefined;
            readonly isActual?: boolean | undefined;
            readonly rows?: unknown[] | undefined;
            readonly footerRows?: unknown[] | undefined;
            readonly idPrefix?: string | undefined;
            readonly caption?: string | undefined;
            readonly getRowValue?: Function | undefined;
            readonly getColumnTitle?: Function | undefined;
            readonly rowColumns?: unknown[] | undefined;
            readonly resolveClasses?: Function | undefined;
            readonly columnWidth?: string | undefined;
        };
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: Partial<Record<any, (_: {
            isActual: boolean;
            column: any;
            index: number;
        }) => any>> & Partial<Record<any, (_: {
            isActual: boolean;
            column: any;
            index: number;
        }) => any>> & Partial<Record<number, (_: {
            row: any;
            column: unknown;
            rowIndex: number;
            index: number;
            foot: boolean;
            isActual: boolean;
        }) => any>> & Partial<Record<number, (_: {
            row: any;
            column: unknown;
            rowIndex: number;
            index: number;
            foot: boolean;
            isActual: boolean;
        }) => any>> & {
            sortIcon?(_: {}): any;
        };
    }) | null;
    display: HTMLDivElement;
    table: ({
        $: import('vue').ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<{} & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import('vue').Slot<any> | undefined;
        }>;
        $root: import('vue').ComponentPublicInstance | null;
        $parent: import('vue').ComponentPublicInstance | null;
        $host: Element | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: HTMLTableElement;
        $options: import('vue').ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {
            $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
            classes: Record<string, any>;
            headerRows: unknown[];
            isActual: boolean;
            rows?: unknown[] | undefined;
            footerRows?: unknown[] | undefined;
            idPrefix?: string | undefined;
            caption?: string | undefined;
            getRowValue?: Function | undefined;
            getColumnTitle?: Function | undefined;
            rowColumns?: unknown[] | undefined;
            resolveClasses?: Function | undefined;
            columnWidth?: string | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly headerRows?: unknown[] | undefined;
                readonly isActual?: boolean | undefined;
                readonly rows?: unknown[] | undefined;
                readonly footerRows?: unknown[] | undefined;
                readonly idPrefix?: string | undefined;
                readonly caption?: string | undefined;
                readonly getRowValue?: Function | undefined;
                readonly getColumnTitle?: Function | undefined;
                readonly rowColumns?: unknown[] | undefined;
                readonly resolveClasses?: Function | undefined;
                readonly columnWidth?: string | undefined;
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
    } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "classes" | "rows" | "footerRows" | "idPrefix" | "caption" | "getRowValue" | "getColumnTitle" | "headerRows" | "rowColumns" | "resolveClasses" | "columnWidth" | "isActual"> & import('vue').ShallowUnwrapRef<{
        $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
        classes: Record<string, any>;
        headerRows: unknown[];
        isActual: boolean;
        rows?: unknown[] | undefined;
        footerRows?: unknown[] | undefined;
        idPrefix?: string | undefined;
        caption?: string | undefined;
        getRowValue?: Function | undefined;
        getColumnTitle?: Function | undefined;
        rowColumns?: unknown[] | undefined;
        resolveClasses?: Function | undefined;
        columnWidth?: string | undefined;
        $props: {
            readonly classes?: Record<string, any> | undefined;
            readonly headerRows?: unknown[] | undefined;
            readonly isActual?: boolean | undefined;
            readonly rows?: unknown[] | undefined;
            readonly footerRows?: unknown[] | undefined;
            readonly idPrefix?: string | undefined;
            readonly caption?: string | undefined;
            readonly getRowValue?: Function | undefined;
            readonly getColumnTitle?: Function | undefined;
            readonly rowColumns?: unknown[] | undefined;
            readonly resolveClasses?: Function | undefined;
            readonly columnWidth?: string | undefined;
        };
    }> & {} & import('vue').ComponentCustomProperties & {} & {
        $slots: Partial<Record<any, (_: {
            isActual: boolean;
            column: any;
            index: number;
        }) => any>> & Partial<Record<any, (_: {
            isActual: boolean;
            column: any;
            index: number;
        }) => any>> & Partial<Record<number, (_: {
            row: any;
            column: unknown;
            rowIndex: number;
            index: number;
            foot: boolean;
            isActual: boolean;
        }) => any>> & Partial<Record<number, (_: {
            row: any;
            column: unknown;
            rowIndex: number;
            index: number;
            foot: boolean;
            isActual: boolean;
        }) => any>> & {
            sortIcon?(_: {}): any;
        };
    }) | null;
}, HTMLDivElement>;
type __VLS_TemplateResult = {
    attrs: Partial<{}>;
    slots: Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & Partial<Record<number, (_: {
        row: any;
        column: unknown;
        rowIndex: number;
        index: number;
        foot: boolean;
        isActual: boolean;
    }) => any>> & {
        controls?(_: {
            scrollLeft: () => void;
            scrollRight: () => void;
            canScrollLeft: boolean;
            canScrollRight: boolean;
        }): any;
        controlLeft?(_: {}): any;
        controlRight?(_: {}): any;
    };
    refs: {
        header: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
            $attrs: Data;
            $refs: Data;
            $slots: Readonly<InternalSlots>;
            $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLTableElement;
            $options: ComponentOptionsBase<ToResolvedProps<{}, {}>, {
                $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
                classes: Record<string, any>;
                headerRows: unknown[];
                isActual: boolean;
                rows?: unknown[] | undefined;
                footerRows?: unknown[] | undefined;
                idPrefix?: string | undefined;
                caption?: string | undefined;
                getRowValue?: Function | undefined;
                getColumnTitle?: Function | undefined;
                rowColumns?: unknown[] | undefined;
                resolveClasses?: Function | undefined;
                columnWidth?: string | undefined;
                $props: {
                    readonly classes?: Record<string, any> | undefined;
                    readonly headerRows?: unknown[] | undefined;
                    readonly isActual?: boolean | undefined;
                    readonly rows?: unknown[] | undefined;
                    readonly footerRows?: unknown[] | undefined;
                    readonly idPrefix?: string | undefined;
                    readonly caption?: string | undefined;
                    readonly getRowValue?: Function | undefined;
                    readonly getColumnTitle?: Function | undefined;
                    readonly rowColumns?: unknown[] | undefined;
                    readonly resolveClasses?: Function | undefined;
                    readonly columnWidth?: string | undefined;
                };
            }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & MergedComponentOptionsOverride;
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: OnCleanup) => any : (args_0: any, args_1: any, args_2: OnCleanup) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "classes" | "rows" | "footerRows" | "idPrefix" | "caption" | "getRowValue" | "getColumnTitle" | "headerRows" | "rowColumns" | "resolveClasses" | "columnWidth" | "isActual"> & ShallowUnwrapRef<{
            $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
            classes: Record<string, any>;
            headerRows: unknown[];
            isActual: boolean;
            rows?: unknown[] | undefined;
            footerRows?: unknown[] | undefined;
            idPrefix?: string | undefined;
            caption?: string | undefined;
            getRowValue?: Function | undefined;
            getColumnTitle?: Function | undefined;
            rowColumns?: unknown[] | undefined;
            resolveClasses?: Function | undefined;
            columnWidth?: string | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly headerRows?: unknown[] | undefined;
                readonly isActual?: boolean | undefined;
                readonly rows?: unknown[] | undefined;
                readonly footerRows?: unknown[] | undefined;
                readonly idPrefix?: string | undefined;
                readonly caption?: string | undefined;
                readonly getRowValue?: Function | undefined;
                readonly getColumnTitle?: Function | undefined;
                readonly rowColumns?: unknown[] | undefined;
                readonly resolveClasses?: Function | undefined;
                readonly columnWidth?: string | undefined;
            };
        }> & ExtractComputedReturns<{}> & ComponentCustomProperties & {} & {
            $slots: Partial<Record<any, (_: {
                isActual: boolean;
                column: any;
                index: number;
            }) => any>> & Partial<Record<any, (_: {
                isActual: boolean;
                column: any;
                index: number;
            }) => any>> & Partial<Record<number, (_: {
                row: any;
                column: unknown;
                rowIndex: number;
                index: number;
                foot: boolean;
                isActual: boolean;
            }) => any>> & Partial<Record<number, (_: {
                row: any;
                column: unknown;
                rowIndex: number;
                index: number;
                foot: boolean;
                isActual: boolean;
            }) => any>> & {
                sortIcon?(_: {}): any;
            };
        }) | null;
        display: HTMLDivElement;
        table: ({
            $: ComponentInternalInstance;
            $data: {};
            $props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>;
            $attrs: Data;
            $refs: Data;
            $slots: Readonly<InternalSlots>;
            $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, {}, {}, "", {}, any> | null;
            $host: Element | null;
            $emit: (event: string, ...args: any[]) => void;
            $el: HTMLTableElement;
            $options: ComponentOptionsBase<ToResolvedProps<{}, {}>, {
                $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
                classes: Record<string, any>;
                headerRows: unknown[];
                isActual: boolean;
                rows?: unknown[] | undefined;
                footerRows?: unknown[] | undefined;
                idPrefix?: string | undefined;
                caption?: string | undefined;
                getRowValue?: Function | undefined;
                getColumnTitle?: Function | undefined;
                rowColumns?: unknown[] | undefined;
                resolveClasses?: Function | undefined;
                columnWidth?: string | undefined;
                $props: {
                    readonly classes?: Record<string, any> | undefined;
                    readonly headerRows?: unknown[] | undefined;
                    readonly isActual?: boolean | undefined;
                    readonly rows?: unknown[] | undefined;
                    readonly footerRows?: unknown[] | undefined;
                    readonly idPrefix?: string | undefined;
                    readonly caption?: string | undefined;
                    readonly getRowValue?: Function | undefined;
                    readonly getColumnTitle?: Function | undefined;
                    readonly rowColumns?: unknown[] | undefined;
                    readonly resolveClasses?: Function | undefined;
                    readonly columnWidth?: string | undefined;
                };
            }, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & MergedComponentOptionsOverride;
            $forceUpdate: () => void;
            $nextTick: typeof nextTick;
            $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R, args_2: OnCleanup) => any : (args_0: any, args_1: any, args_2: OnCleanup) => any, options?: WatchOptions<boolean> | undefined): WatchStopHandle;
        } & Readonly<{}> & Omit<Readonly<{}> & Readonly<{}>, "$props" | "$emit" | "classes" | "rows" | "footerRows" | "idPrefix" | "caption" | "getRowValue" | "getColumnTitle" | "headerRows" | "rowColumns" | "resolveClasses" | "columnWidth" | "isActual"> & ShallowUnwrapRef<{
            $emit: (event: "column-sorted" | "actual-header-removed" | "actual-header-added", ...args: any[]) => void;
            classes: Record<string, any>;
            headerRows: unknown[];
            isActual: boolean;
            rows?: unknown[] | undefined;
            footerRows?: unknown[] | undefined;
            idPrefix?: string | undefined;
            caption?: string | undefined;
            getRowValue?: Function | undefined;
            getColumnTitle?: Function | undefined;
            rowColumns?: unknown[] | undefined;
            resolveClasses?: Function | undefined;
            columnWidth?: string | undefined;
            $props: {
                readonly classes?: Record<string, any> | undefined;
                readonly headerRows?: unknown[] | undefined;
                readonly isActual?: boolean | undefined;
                readonly rows?: unknown[] | undefined;
                readonly footerRows?: unknown[] | undefined;
                readonly idPrefix?: string | undefined;
                readonly caption?: string | undefined;
                readonly getRowValue?: Function | undefined;
                readonly getColumnTitle?: Function | undefined;
                readonly rowColumns?: unknown[] | undefined;
                readonly resolveClasses?: Function | undefined;
                readonly columnWidth?: string | undefined;
            };
        }> & ExtractComputedReturns<{}> & ComponentCustomProperties & {} & {
            $slots: Partial<Record<any, (_: {
                isActual: boolean;
                column: any;
                index: number;
            }) => any>> & Partial<Record<any, (_: {
                isActual: boolean;
                column: any;
                index: number;
            }) => any>> & Partial<Record<number, (_: {
                row: any;
                column: unknown;
                rowIndex: number;
                index: number;
                foot: boolean;
                isActual: boolean;
            }) => any>> & Partial<Record<number, (_: {
                row: any;
                column: unknown;
                rowIndex: number;
                index: number;
                foot: boolean;
                isActual: boolean;
            }) => any>> & {
                sortIcon?(_: {}): any;
            };
        }) | null;
    };
    rootEl: HTMLDivElement;
};
//# sourceMappingURL=UluTableSticky.vue.d.ts.map