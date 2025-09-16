/**
 * Modals Vue Plugin
 * @param {Object} App Vue app instance passed to plugin
 * @param {UluModalsPluginOptions} userOptions Options to change (see defaults)
 */
export default function install(app: any, userOptions: UluModalsPluginOptions): void;
/**
 * Default plugin options
 */
export type UluModalsPluginOptions = {
    /**
     * Modals configs [{ name, component, props }]
     */
    modals: any[];
    /**
     * Options to merge into individual modal options (to serve as defaults for each modal, see UluModalOptions)
     */
    modalOptions: UluModalOptions;
};
//# sourceMappingURL=index.d.ts.map