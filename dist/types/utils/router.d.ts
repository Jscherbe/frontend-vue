/**
 * This Module Creates Menus from route or router config
 * - Note: Functions prefixed with "$" work with $route objects (running application, provided by vue-router ie $router, useRoute, etc),
 * @module router-utils
 */
/**
 * Resolves a route's title from its meta.
 * - If `meta.title` is a function, it's called with the `currentRoute` (or the route itself).
 * - Otherwise, `meta.title` is returned.
 * This function is the single source of truth for resolving titles from route configuration.
 * @param {object} route The route or route match object.
 * @param {object} [currentRoute] The current route from `useRoute()`, passed to functional titles.
 * @returns {string|undefined} The resolved title, or undefined if not found.
 */
export function getRouteTitle(route: object, currentRoute?: object): string | undefined;
/**
 * Route Menu Item
 * @typedef {Object} RouteMenuItem
 * @property {String} path - Menu item route path
 * @property {String} title - Menu item title
 */
/**
 * Get root/base static routes as menu items
 * @param {*} routes Routes to build menu from (not router instance)
 * @param {Object} options Options
 * @param {Object} options.qualifier Callback to qualify as a base route (defaults to isStaticBaseRoute)
 * @param {Object} options.item Options for createMenuItem
 * @returns {Array.<RouteMenuItem>} Array of menu items
 */
export function createBaseMenu(routes: any, options: {
    qualifier: Object;
    item: Object;
}): Array<RouteMenuItem>;
/**
 * Returns menu flat (no parent children)
 * @param {Array<RouteMenuItem>} menu The menu to flatten.
 * @returns {Array<RouteMenuItem>} The flattened menu.
 */
export function flattenMenu(menu: Array<RouteMenuItem>): Array<RouteMenuItem>;
/**
 * Print out a section's menu based on path
 * @param {*} routes All routes
 * @param {*} sectionPath Path for section to create menu
 * @param {Object} options Options
 * @param {Boolean} options.includeIndex Include the parent/index in the menu items ie ({ path: "" })
 * @param {Object} options.item Options to be passed to createMenuItem
 * @returns {Array.<RouteMenuItem>} Array of menu items
 */
export function createSectionMenu(routes: any, sectionPath: any, options: {
    includeIndex: boolean;
    item: Object;
}): Array<RouteMenuItem>;
/**
 * For a given array of child routes return the index
 * @param {Array} children Children array of routes
 * @returns {Object} Route
 */
export function getChildIndexRoute(children: any[]): Object;
/**
 * Creates common menu item structure from route, pulls title and weight from meta (on route or index child)
 * @param {Object} route Route
 * @param {Object} routePath The final path for the menu item
 * @param {Object} options Function to allow alterering the menu item (adding meta, etc)
 * @param {Function} options.modify Function to allow alterering the menu item (adding meta, etc) (args: item, route)
 * @param {Function} options.indexMeta Include the routes index child's meta (merged on top of route meta)
 * @returns {RouteMenuItem} Menu item
 */
export function createMenuItem(route: Object, routePath: Object | undefined, options: {
    modify: Function;
    indexMeta: Function;
}): RouteMenuItem;
/**
 * Test if route is static (doesn't include parameters)
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is static (not dynamic)
 */
export function isStaticRoute(route: Object): boolean;
/**
 *
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is a static base route
 */
export function isStaticBaseRoute(route: Object): boolean;
/**
 * Function to make normal <a> behave as router links instread of page reload
 * @param {Object} router Router instance (ie src/router) to push routes to
 * @param {Object} event The event object that triggered route change (ie. onclick) pass event object
 */
export function nativeLinkRouter(router: Object, event: Object): void;
/**
 * Returns the child routes for base route
 * @param {Object} route Route Object
 * @returns {Array<Object>|undefined} The child routes.
 */
export function $getRouteChildren(route: Object, parent?: Object | null): Array<Object> | undefined;
/**
 * Returns the route's parent
 * @param {Object} route Route Object
 * @param {Object} deepest By default this returns the routes parent, if deepest it will return it's base route (top level parent)
 * @return {Object|Null} Parent route, if there is no parent route for the given route this will return null
 */
export function $getParentRoute(route: Object, deepest: Object): Object | null;
/**
 * For a given $route will return all it's children as menu items,
 * using the route's meta.title property for the title. This is for sections only (routes with children)
 * - Useful for dynamic menus (menus within some unknown section) where you don't want to write static paths
 * @param {Object} route Actual $route object
 * @param {Object} options Options
 * @param {Object} options.parent Route parent object, defaults to parent of route
 * @param {Boolean} options.includeIndex Include the parent/index in the menu items ie ({ path: "" })
 * @param {Object} options.item Options for createMenuItem
 * @returns {Array.<RouteMenuItem>} Array of menu items
 */
export function $createSectionMenu(route: Object, options: {
    parent: Object;
    includeIndex: boolean;
    item: Object;
}): Array<RouteMenuItem>;
/**
 * For a given $route, this will generate a breadcrumb trail.
 * It iterates through `route.matched` to build the trail.
 * - Falls back to `meta.title` (string or function).
 * - Skips routes where `meta.breadcrumb` is set to `false`.
 * - Avoids duplicate crumbs for nested routes with empty paths.
 * @param {Object} route The Vue Router `$route` object.
 * @returns {Array.<{title: String, to: Object, current: Boolean}>} An array of breadcrumb items.
 */
export function $createBreadcrumb(route: Object): Array<{
    title: string;
    to: Object;
    current: boolean;
}>;
/**
 * Route Menu Item
 */
export type RouteMenuItem = {
    /**
     * - Menu item route path
     */
    path: string;
    /**
     * - Menu item title
     */
    title: string;
};
//# sourceMappingURL=router.d.ts.map