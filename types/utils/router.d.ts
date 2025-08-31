/**
 * This Module Creates Menus from route or router config
 * - Note: Functions prefixed with "$" work with $route objects (running application, provided by vue-router ie $router, useRoute, etc),
 * @module router-utils
 */
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
    qualifier: any;
    item: any;
}): Array<RouteMenuItem>;
/**
 * Returns menu flat (no parent children)
 */
export function flattenMenu(menu: any): any;
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
    item: any;
}): Array<RouteMenuItem>;
/**
 * For a given route this will return the route that renders. For routes without
 * children this is the route itself for those with children (first child with empty path)
 * @param {Object} route Route object to resolve
 * @returns {Object} Resolved route
 */
/**
 * For a given array of child routes return the index
 * @param {Array} children Children array of routes
 * @returns {Object} Route
 */
export function getChildIndexRoute(children: any[]): any;
/**
 * Creates common menu item structure from route, pulls title and weight from meta (on route or index child)
 * @param {Object} route Route
 * @param {Object} routePath The final path for the menu item
 * @param {Object} options Function to allow alterering the menu item (adding meta, etc)
 * @param {Function} options.modify Function to allow alterering the menu item (adding meta, etc) (args: item, route)
 * @param {Function} options.indexMeta Include the routes index child's meta (merged on top of route meta)
 * @returns {RouteMenuItem} Menu item
 */
export function createMenuItem(route: any, routePath: any, options: {
    modify: Function;
    indexMeta: Function;
}): RouteMenuItem;
/**
 * Test if route is static (doesn't incude parameters)
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is static (not dynamic)
 */
export function isStaticRoute(route: any): boolean;
/**
 *
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is a static base route
 */
export function isStaticBaseRoute(route: any): boolean;
/**
 * Function to make normal <a> behave as router links instread of page reload
 * @param {Object} router Router instance (ie src/router) to push routes to
 * @param {Object} event The event object that triggered route change (ie. onclick) pass event object
 */
export function nativeLinkRouter(router: any, event: any): void;
/**
 * Returns the child routes for base route
 * @param {Object} route Route Object
 * @returns
 */
export function $getRouteChildren(route: any, parent?: any): any;
/**
 * Returns the route's parent
 * @param {Object} route Route Object
 * @param {Object} deepest By default this returns the routes parent, if deepest it will return it's base route (top level parent)
 * @return {Object|Null} Parent route, if there is no parent route for the given route this will return null
 */
export function $getParentRoute(route: any, deepest: any): any | null;
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
export function $createSectionMenu(route: any, options: {
    parent: any;
    includeIndex: boolean;
    item: any;
}): Array<RouteMenuItem>;
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