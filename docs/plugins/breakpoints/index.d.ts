/**
 * Installs the breakpoints plugin, providing app-wide reactive breakpoint information.
 * It uses `useBreakpointManager` internally and provides `uluIsMobile`,
 * `uluBreakpointActive`, `uluBreakpointDirection`, and `uluBreakpointManager` to all components.
 *
 * @param {object} app The Vue app instance.
 * @param {object} userOptions - User-defined options.
 * @param {string} [userOptions.breakpointMobile="small"] - The breakpoint name to use for `isMobile` detection.
 * @param {object} [userOptions.managerOptions] - Options to pass to the underlying `useBreakpointManager`.
 */
export default function install(app: object, userOptions: {
    breakpointMobile?: string | undefined;
    managerOptions?: object | undefined;
}): void;
//# sourceMappingURL=index.d.ts.map