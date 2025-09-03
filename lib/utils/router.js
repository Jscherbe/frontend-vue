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
export function getRouteTitle(route, currentRoute) {
  const meta = route?.meta || {};
  let title = meta.title;

  if (typeof title === "function") {
    title = title(currentRoute || route);
  }

  return title;
}

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
export function createBaseMenu(routes, options) {
  const defaults = {
    qualifier(route, parentPath) {
      if (!parentPath) {
        return isStaticBaseRoute(route);
      } else {
        return isStaticRoute(route);
      }
    },
    sort: sortByWeight,
    item: {},
    includeChildren: false
  };
  const opts = Object.assign({}, defaults, options);
  const getItemPath = (r, parentPath) => parentPath ? `${ parentPath }/${ r.path }` : r.path;
  const toMenuItems = (currentRoutes, parentPath = null) => {
    return currentRoutes
      .filter(r => opts.qualifier(r, parentPath))
      .map(r => {
        const menuRoute = r.children ? getChildIndexRoute(r.children) : r;
        const children = r.children ? r.children.filter(child => child.path !== "") : false;
        const item = createMenuItem(menuRoute, getItemPath(r, parentPath), opts.item);
        if (opts.includeChildren && children.length) {
          item.children = toMenuItems(children, item.path);
        }
        return item;
      })
      .sort(opts.sort);
  };
  return toMenuItems(routes);
}

/**
 * Returns menu flat (no parent children)
 */
export function flattenMenu(menu) {
  function flatten(items) {
    const result = [];
    for (const item of items) {
      const newItem = { ...item };
      delete newItem.children;
      result.push(newItem);
      if (item.children) {
        result.push(...flatten(item.children));
      }
    }
    return result;
  }
  return flatten(menu);
} 

/**
 * Print out a section's menu based on path
 * @param {*} routes All routes 
 * @param {*} sectionPath Path for section to create menu
 * @param {Object} options Options
 * @param {Boolean} options.includeIndex Include the parent/index in the menu items ie ({ path: "" })
 * @param {Object} options.item Options to be passed to createMenuItem
 * @returns {Array.<RouteMenuItem>} Array of menu items
 */
export function createSectionMenu(routes, sectionPath, options) {
  const defaults = {
    includeIndex: false,
    item: {},
    sort: sortByWeight
  };
  const opts = Object.assign({}, defaults, options);
  const base = routes.find(r => r.path !== "/" && sectionPath.includes(r.path));
  const getSection = (current, previous, path) => {
    if (current.children) {
      const child = current.children.find(c => c.path.includes(sectionPath));
      if (child) {
        return getSection(child, current, path + child.path);
      }
    }
    return { route: previous, path };
  };
  const { route, path } = getSection(base, base, base.path);
  if (!route.children) {
    console.warn("Unable to build menu for:", sectionPath);
    return [];
  }
  return route.children
    .filter(includeIndex(opts.includeIndex))
    .map(r => createMenuItem(r, `${ path }/${ r.path }`, opts.item))
    .sort(opts.sort);
}

/**
 * For a given array of child routes return the index
 * @param {Array} children Children array of routes
 * @returns {Object} Route
 */
export function getChildIndexRoute(children) {
  return children.find(r => r.path === "");
}

/**
 * Creates common menu item structure from route, pulls title and weight from meta (on route or index child)
 * @param {Object} route Route
 * @param {Object} routePath The final path for the menu item
 * @param {Object} options Function to allow alterering the menu item (adding meta, etc)
 * @param {Function} options.modify Function to allow alterering the menu item (adding meta, etc) (args: item, route)
 * @param {Function} options.indexMeta Include the routes index child's meta (merged on top of route meta)
 * @returns {RouteMenuItem} Menu item
 */
export function createMenuItem(route, routePath = route.path, options) {
  const defaults = {
    indexMeta: true,
    modify: null,
  };
  const opts = Object.assign({}, defaults, options);
  let meta = Object.assign({}, route.meta);
  if (opts.indexMeta && route.children) {
    meta = Object.assign({}, meta, getChildIndexRoute(route.children)?.meta);
  }
  const routeWithMergedMeta = { ...route, meta };
  const item = { 
    path: routePath, 
    title: getRouteTitle(routeWithMergedMeta, route) || "Missing Title",
    weight: meta?.weight || 0,
    meta
  };
  if (opts.modify) {
    opts.modify(item, route);
  }
  return item;
}

/**
 * Test if route is static (doesn't include parameters)
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is static (not dynamic)
 */
export function isStaticRoute(route) {
  return !route.path.includes("/:");
}

/**
 * 
 * @param {Object} route Route object to test
 * @returns {Boolean} Whether or not this route is a static base route
 */
export function isStaticBaseRoute(route) {
  const matches = route.path.match(/\//g) || [];
  return isStaticRoute(route) && matches.length === 1;
}

/**
 * Function to make normal <a> behave as router links instread of page reload
 * @param {Object} router Router instance (ie src/router) to push routes to
 * @param {Object} event The event object that triggered route change (ie. onclick) pass event object
 */
export function nativeLinkRouter(router, event) {
  const { target } = event;
  const link = target.closest("a");
  if (link) {
    let href = link.getAttribute("href");
    if (href.startsWith("/")) {
      router.push(href);
      event.preventDefault();
    }
  }
}

/**
 * Returns the child routes for base route
 * @param {Object} route Route Object
 * @returns 
 */
export function $getRouteChildren(route, parent = $getParentRoute(route)) {
  return parent?.children;
}

/**
 * Returns the route's parent
 * @param {Object} route Route Object
 * @param {Object} deepest By default this returns the routes parent, if deepest it will return it's base route (top level parent)
 * @return {Object|Null} Parent route, if there is no parent route for the given route this will return null
 */
export function $getParentRoute(route, deepest)  {
  const length = route.matched.length;
  const parentIndex = length - 2;
  if (deepest) {
    return length > 1 ? route.matched[0] : null;
  } else {
    return parentIndex < 0 ? null : route.matched[parentIndex];
  }
}

function includeIndex(include) {
  return r => include || r.path !== "";
}

function sortByWeight(a, b) {
  return a?.weight - b?.weight;
}

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
export function $createSectionMenu(route, options) {
  const defaults = {
    parent: null,
    includeIndex: false,
    item: {},
    sort: sortByWeight
  };
  const opts = Object.assign({}, defaults, options);
  const parent = opts.parent || $getParentRoute(route);
  const children = ($getRouteChildren(route, parent) || []);
  return children
    .filter(includeIndex(opts.includeIndex))
    .map(r => createMenuItem(r, `${ parent.path }/${ r.path }`, opts.item))
    .sort(opts.sort);
}

/**
 * For a given $route, this will generate a breadcrumb trail.
 * It iterates through `route.matched` to build the trail.
 * - Falls back to `meta.title` (string or function).
 * - Skips routes where `meta.breadcrumb` is set to `false`.
 * - Avoids duplicate crumbs for nested routes with empty paths.
 * @param {Object} route The Vue Router `$route` object.
 * @returns {Array.<{title: String, to: Object, current: Boolean}>} An array of breadcrumb items.
 */
export function $createBreadcrumb(route) {
  const { matched, path: currentPath } = route;
  let prevPath;

  const crumbs = matched.reduce((arr, match, index) => {
    if (match.meta?.breadcrumb === false) {
      return arr;
    }

    if (match.path === prevPath) {
      return arr;
    }
    
    const isLast = index === matched.length - 1;
    const title = getRouteTitle(match, route) || "Missing Title";

    arr.push({
      title,
      to: { path: isLast ? currentPath : match.path },
      current: isLast,
    });

    prevPath = match.path;
    return arr;
  }, []);
  
  return crumbs;
}
