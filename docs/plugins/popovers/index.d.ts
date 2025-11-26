import { useTooltip } from './useTooltip.js';
/**
 * Install the UluPopovers plugin.
 * @param {object} app - The Vue app instance.
 * @param {object} userOptions - User-defined options to override defaults.
 */
export default function install(app: object, userOptions?: object): void;
/**
 * Injection key for popover options (merged/resolved with users defaults)
 */
export const POPOVER_OPTIONS_KEY: "uluPopoverOptions";
/**
 * Injection key for tooltip state object (used in tooltip composable, display, etc)
 */
export const TOOLTIP_STATE_KEY: "uluTooltipState";
/**
 * The id for the global tooltip (which is on the tooltip and put on the element aria-describedby)
 */
export const TOOLTIP_ID: "ulu-global-tooltip";
export { useTooltip };
export { default as useTooltipFollow } from './useTooltipFollow.js';
export function resolveTooltipConfig(rawConfig: any, tooltipDefaults: object): object | null;
//# sourceMappingURL=index.d.ts.map