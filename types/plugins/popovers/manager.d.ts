/**
 * Setup the store options
 * @param {Object} userOptions
 * @param {Object} options Resolved options
 */
export function init(userOptions?: Object): {
    plugin: {
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
    popover: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
    };
    tooltip: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
};
/**
   * Config for a single tooltip instance
   */
export function createConfig(userConfig: any): any;
/**
 * Show a tooltip
 * - Set by directive
 */
export function show(config: any): void;
/**
 * Hide a tooltip
 * - Set by directive
 */
export function hide(): void;
export namespace options {
    let plugin: {
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
    let popover: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
    };
    let tooltip: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
        constructor: Function;
        toString(): string;
        toLocaleString(): string;
        valueOf(): Object;
        hasOwnProperty(v: PropertyKey): boolean;
        isPrototypeOf(v: Object): boolean;
        propertyIsEnumerable(v: PropertyKey): boolean;
    };
}
/**
 * Whether or not the tooltip is active
 */
export const active: import("vue").Ref<boolean, boolean>;
/**
 * Current tooltip config
 */
export const activeConfig: import("vue").Ref<null, null>;
//# sourceMappingURL=manager.d.ts.map