/**
 * Setup the store options
 * @param {Object} userOptions
 * @param {Object} options Resolved options
 */
export function init(userOptions?: any): {
    plugin: any;
    popover: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
    };
    tooltip: any;
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
    let plugin: any;
    let popover: {
        inline: boolean;
        delay: number;
        placement: string;
        strategy: string;
        offset: number;
        arrow: boolean;
    };
    let tooltip: any;
}
/**
 * Whether or not the tooltip is active
 */
export const active: import("vue").Ref<boolean, boolean>;
/**
 * Current tooltip config
 */
export const activeConfig: import("vue").Ref<any, any>;
//# sourceMappingURL=manager.d.ts.map