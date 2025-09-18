/**
 * Installs the core plugin, which provides a centralized, reactive configuration for the entire library.
 * It is essential for managing global settings, particularly for the icon system.
 *
 * @param {object} app The Vue app instance.
 * @param {object} [userSettings] - User-defined settings to override defaults.
 * @param {boolean} [userSettings.fontAwesomeStatic] - If true, uses static FontAwesome CSS classes instead of the Vue component.
 * @param {object} [userSettings.iconComponent] - A custom component to use for rendering icons.
 * @param {Function} [userSettings.iconPropResolver] - A function to resolve props for the custom icon component.
 * @param {object} [userSettings.iconsByType] - An object to override default icon definitions by type (e.g., `{ danger: 'my-icon' }`).
 */
export default function install(app: object, userSettings?: {
    fontAwesomeStatic?: boolean | undefined;
    iconComponent?: object | undefined;
    iconPropResolver?: Function | undefined;
    iconsByType?: object | undefined;
}): void;
export const iconKeys: string[];
//# sourceMappingURL=index.d.ts.map