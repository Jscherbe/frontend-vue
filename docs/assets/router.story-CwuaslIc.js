import{I as e}from"./jsx-runtime-2Fg5VtZt.js";import{useMDXComponents as d}from"./index-DIzwWG-n.js";import{M as i}from"./blocks-CAKsTq14.js";import{r as c}from"./index-vwjNkSeb.js";import"./iframe-C8y-FkMF.js";import"./preload-helper-BJwshlQW.js";function n(t){const r={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...t.components};return e(c.Fragment,{children:[e(i,{title:"API/JS/router"}),`
`,e(r.h1,{id:"router",children:"router"}),`
`,e("a",{name:"utils.module_router"}),`
`,e(r.h2,{id:"router-1",children:"router"}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router",children:"router"}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.em,{children:"static"}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.getRouteTitle",children:".getRouteTitle(route, [currentRoute])"})," ⇒ ",e(r.code,{children:"string"})," | ",e(r.code,{children:"undefined"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.createBaseMenu",children:".createBaseMenu(routes, options)"})," ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.flattenMenu",children:".flattenMenu(menu)"})," ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.createSectionMenu",children:".createSectionMenu(routes, sectionPath, options)"})," ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.getChildIndexRoute",children:".getChildIndexRoute(children)"})," ⇒ ",e(r.code,{children:"Object"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.createMenuItem",children:".createMenuItem(route, routePath, options)"})," ⇒ ",e(r.code,{children:"module:utils.router~RouteMenuItem"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.isStaticRoute",children:".isStaticRoute(route)"})," ⇒ ",e(r.code,{children:"Boolean"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.isStaticBaseRoute",children:".isStaticBaseRoute(route)"})," ⇒ ",e(r.code,{children:"Boolean"})]}),`
`,e(r.li,{children:e(r.a,{href:"#utils.module_router.nativeLinkRouter",children:".nativeLinkRouter(router, event)"})}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.$getRouteChildren",children:".$getRouteChildren(route)"})," ⇒ ",e(r.code,{children:"Array.<Object>"})," | ",e(r.code,{children:"undefined"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.$getParentRoute",children:".$getParentRoute(route, deepest)"})," ⇒ ",e(r.code,{children:"Object"})," | ",e(r.code,{children:"Null"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.$createSectionMenu",children:".$createSectionMenu(route, options)"})," ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router.$createBreadcrumb",children:".$createBreadcrumb(route)"})," ⇒ ",e(r.code,{children:"Array.<Object>"})]}),`
`]}),`
`]}),`
`,e(r.li,{children:[e(r.em,{children:"inner"}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:[e(r.a,{href:"#utils.module_router..RouteMenuItem",children:"~RouteMenuItem"})," : ",e(r.code,{children:"Object"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e("a",{name:"utils.module_router.getRouteTitle"}),`
`,e(r.h3,{id:"routergetroutetitleroute-currentroute--string--undefined",children:["router.getRouteTitle(route, [currentRoute]) ⇒ ",e(r.code,{children:"string"})," | ",e(r.code,{children:"undefined"})]}),`
`,e(r.p,{children:"This Module Creates Menus from route or router config"}),`
`,e(r.p,{children:`/**
Resolves a route's title from its meta.`}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:["If ",e(r.code,{children:"meta.title"})," is a function, it's called with the ",e(r.code,{children:"currentRoute"})," (or the route itself)."]}),`
`,e(r.li,{children:["Otherwise, ",e(r.code,{children:"meta.title"}),` is returned.
This function is the single source of truth for resolving titles from route configuration.`]}),`
`]}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"string"})," | ",e(r.code,{children:"undefined"})," - The resolved title, or undefined if not found."]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"object"})}),e(r.td,{children:"The route or route match object."})]}),e(r.tr,{children:[e(r.td,{children:"[currentRoute]"}),e(r.td,{children:e(r.code,{children:"object"})}),e(r.td,{children:["The current route from ",e(r.code,{children:"useRoute()"}),", passed to functional titles."]})]})]})]}),`
`,e("a",{name:"utils.module_router.createBaseMenu"}),`
`,e(r.h3,{id:"routercreatebasemenuroutes-options--arraymoduleutilsrouterroutemenuitem",children:["router.createBaseMenu(routes, options) ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.p,{children:"Get root/base static routes as menu items"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})," - Array of menu items"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"routes"}),e(r.td,{children:e(r.code,{children:"\\*"})}),e(r.td,{children:"Routes to build menu from (not router instance)"})]}),e(r.tr,{children:[e(r.td,{children:"options"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options"})]}),e(r.tr,{children:[e(r.td,{children:"options.qualifier"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Callback to qualify as a base route (defaults to isStaticBaseRoute)"})]}),e(r.tr,{children:[e(r.td,{children:"options.item"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options for createMenuItem"})]})]})]}),`
`,e("a",{name:"utils.module_router.flattenMenu"}),`
`,e(r.h3,{id:"routerflattenmenumenu--arraymoduleutilsrouterroutemenuitem",children:["router.flattenMenu(menu) ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.p,{children:"Returns menu flat (no parent children)"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})," - The flattened menu."]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"menu"}),e(r.td,{children:e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})}),e(r.td,{children:"The menu to flatten."})]})})]}),`
`,e("a",{name:"utils.module_router.createSectionMenu"}),`
`,e(r.h3,{id:"routercreatesectionmenuroutes-sectionpath-options--arraymoduleutilsrouterroutemenuitem",children:["router.createSectionMenu(routes, sectionPath, options) ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.p,{children:"Print out a section's menu based on path"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})," - Array of menu items"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"routes"}),e(r.td,{children:e(r.code,{children:"\\*"})}),e(r.td,{children:"All routes"})]}),e(r.tr,{children:[e(r.td,{children:"sectionPath"}),e(r.td,{children:e(r.code,{children:"\\*"})}),e(r.td,{children:"Path for section to create menu"})]}),e(r.tr,{children:[e(r.td,{children:"options"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options"})]}),e(r.tr,{children:[e(r.td,{children:"options.includeIndex"}),e(r.td,{children:e(r.code,{children:"Boolean"})}),e(r.td,{children:'Include the parent/index in the menu items ie path: ""'})]}),e(r.tr,{children:[e(r.td,{children:"options.item"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options to be passed to createMenuItem"})]})]})]}),`
`,e("a",{name:"utils.module_router.getChildIndexRoute"}),`
`,e(r.h3,{id:"routergetchildindexroutechildren--object",children:["router.getChildIndexRoute(children) ⇒ ",e(r.code,{children:"Object"})]}),`
`,e(r.p,{children:"For a given array of child routes return the index"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Object"})," - Route"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"children"}),e(r.td,{children:e(r.code,{children:"Array"})}),e(r.td,{children:"Children array of routes"})]})})]}),`
`,e("a",{name:"utils.module_router.createMenuItem"}),`
`,e(r.h3,{id:"routercreatemenuitemroute-routepath-options--moduleutilsrouterroutemenuitem",children:["router.createMenuItem(route, routePath, options) ⇒ ",e(r.code,{children:"module:utils.router~RouteMenuItem"})]}),`
`,e(r.p,{children:"Creates common menu item structure from route, pulls title and weight from meta (on route or index child)"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"module:utils.router~RouteMenuItem"})," - Menu item"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route"})]}),e(r.tr,{children:[e(r.td,{children:"routePath"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"The final path for the menu item"})]}),e(r.tr,{children:[e(r.td,{children:"options"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Function to allow alterering the menu item (adding meta, etc)"})]}),e(r.tr,{children:[e(r.td,{children:"options.modify"}),e(r.td,{children:e(r.code,{children:"function"})}),e(r.td,{children:"Function to allow alterering the menu item (adding meta, etc) (args: item, route)"})]}),e(r.tr,{children:[e(r.td,{children:"options.indexMeta"}),e(r.td,{children:e(r.code,{children:"function"})}),e(r.td,{children:"Include the routes index child's meta (merged on top of route meta)"})]})]})]}),`
`,e("a",{name:"utils.module_router.isStaticRoute"}),`
`,e(r.h3,{id:"routerisstaticrouteroute--boolean",children:["router.isStaticRoute(route) ⇒ ",e(r.code,{children:"Boolean"})]}),`
`,e(r.p,{children:"Test if route is static (doesn't include parameters)"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Boolean"})," - Whether or not this route is static (not dynamic)"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route object to test"})]})})]}),`
`,e("a",{name:"utils.module_router.isStaticBaseRoute"}),`
`,e(r.h3,{id:"routerisstaticbaserouteroute--boolean",children:["router.isStaticBaseRoute(route) ⇒ ",e(r.code,{children:"Boolean"})]}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Boolean"})," - Whether or not this route is a static base route"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route object to test"})]})})]}),`
`,e("a",{name:"utils.module_router.nativeLinkRouter"}),`
`,e(r.h3,{id:"routernativelinkrouterrouter-event",children:"router.nativeLinkRouter(router, event)"}),`
`,e(r.p,{children:["Function to make normal ",e(r.code,{children:"<a>"})," behave as router links instread of page reload"]}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})})]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"router"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Router instance (ie src/router) to push routes to"})]}),e(r.tr,{children:[e(r.td,{children:"event"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"The event object that triggered route change (ie. onclick) pass event object"})]})]})]}),`
`,e("a",{name:"utils.module_router.$getRouteChildren"}),`
`,e(r.h3,{id:"routergetroutechildrenroute--arrayobject--undefined",children:["router.$getRouteChildren(route) ⇒ ",e(r.code,{children:"Array.<Object>"})," | ",e(r.code,{children:"undefined"})]}),`
`,e(r.p,{children:"Returns the child routes for base route"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<Object>"})," | ",e(r.code,{children:"undefined"})," - The child routes."]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route Object"})]})})]}),`
`,e("a",{name:"utils.module_router.$getParentRoute"}),`
`,e(r.h3,{id:"routergetparentrouteroute-deepest--object--null",children:["router.$getParentRoute(route, deepest) ⇒ ",e(r.code,{children:"Object"})," | ",e(r.code,{children:"Null"})]}),`
`,e(r.p,{children:"Returns the route's parent"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Object"})," | ",e(r.code,{children:"Null"})," - Parent route, if there is no parent route for the given route this will return null"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route Object"})]}),e(r.tr,{children:[e(r.td,{children:"deepest"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"By default this returns the routes parent, if deepest it will return it's base route (top level parent)"})]})]})]}),`
`,e("a",{name:"utils.module_router.$createSectionMenu"}),`
`,e(r.h3,{id:"routercreatesectionmenuroute-options--arraymoduleutilsrouterroutemenuitem",children:["router.$createSectionMenu(route, options) ⇒ ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})]}),`
`,e(r.p,{children:`For a given $route will return all it's children as menu items,
using the route's meta.title property for the title. This is for sections only (routes with children)`}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:"Useful for dynamic menus (menus within some unknown section) where you don't want to write static paths"}),`
`]}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<module:utils.router~RouteMenuItem>"})," - Array of menu items"]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Actual $route object"})]}),e(r.tr,{children:[e(r.td,{children:"options"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options"})]}),e(r.tr,{children:[e(r.td,{children:"options.parent"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Route parent object, defaults to parent of route"})]}),e(r.tr,{children:[e(r.td,{children:"options.includeIndex"}),e(r.td,{children:e(r.code,{children:"Boolean"})}),e(r.td,{children:'Include the parent/index in the menu items ie path: ""'})]}),e(r.tr,{children:[e(r.td,{children:"options.item"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:"Options for createMenuItem"})]})]})]}),`
`,e("a",{name:"utils.module_router.$createBreadcrumb"}),`
`,e(r.h3,{id:"routercreatebreadcrumbroute--arrayobject",children:["router.$createBreadcrumb(route) ⇒ ",e(r.code,{children:"Array.<Object>"})]}),`
`,e(r.p,{children:[`For a given $route, this will generate a breadcrumb trail.
It iterates through `,e(r.code,{children:"route.matched"})," to build the trail."]}),`
`,e(r.ul,{children:[`
`,e(r.li,{children:["Falls back to ",e(r.code,{children:"meta.title"})," (string or function)."]}),`
`,e(r.li,{children:["Skips routes where ",e(r.code,{children:"meta.breadcrumb"})," is set to ",e(r.code,{children:"false"}),"."]}),`
`,e(r.li,{children:"Avoids duplicate crumbs for nested routes with empty paths."}),`
`]}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": static method of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Returns"}),": ",e(r.code,{children:"Array.<Object>"})," - An array of breadcrumb items with title, to, and current properties."]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Param"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:e(r.tr,{children:[e(r.td,{children:"route"}),e(r.td,{children:e(r.code,{children:"Object"})}),e(r.td,{children:["The Vue Router ",e(r.code,{children:"$route"})," object."]})]})})]}),`
`,e("a",{name:"utils.module_router..RouteMenuItem"}),`
`,e(r.h3,{id:"routerroutemenuitem--object",children:["router~RouteMenuItem : ",e(r.code,{children:"Object"})]}),`
`,e(r.p,{children:"Route Menu Item"}),`
`,e(r.p,{children:[e(r.strong,{children:"Kind"}),": inner typedef of ",e(r.a,{href:"#utils.module_router",children:e(r.code,{children:"router"})}),e(r.br,{}),`
`,e(r.strong,{children:"Properties"})]}),`
`,e(r.table,{children:[e(r.thead,{children:e(r.tr,{children:[e(r.th,{children:"Name"}),e(r.th,{children:"Type"}),e(r.th,{children:"Description"})]})}),e(r.tbody,{children:[e(r.tr,{children:[e(r.td,{children:"path"}),e(r.td,{children:e(r.code,{children:"String"})}),e(r.td,{children:"Menu item route path"})]}),e(r.tr,{children:[e(r.td,{children:"title"}),e(r.td,{children:e(r.code,{children:"String"})}),e(r.td,{children:"Menu item title"})]})]})]})]})}function m(t={}){const{wrapper:r}={...d(),...t.components};return r?e(r,{...t,children:e(n,{...t})}):n(t)}const p=[];export{p as __namedExportsOrder,m as default};
