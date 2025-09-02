import { h } from "vue";
import { router } from "./index.js";

// A mock Vue Router configuration to be used by the stories.
const mockRoutes = [
  {
    path: "/",
    meta: { title: "Home", weight: -10 },
    children: [{ path: "", component: {} }], // Index child for layout
  },
  {
    path: "/about",
    meta: { title: "About Us" }, // weight defaults to 0
    children: [{ path: "", component: {} }],
  },
  {
    path: "/products",
    meta: { title: "Products", weight: 10 },
    children: [
      { path: "", meta: { title: "All Products" }, component: {} },
      { path: "new", meta: { title: "New Product" }, component: {} },
      { path: "featured", meta: { title: "Featured", weight: -5 }, component: {} },
    ],
  },
  {
    path: "/products/:id", // dynamic route
    meta: { title: (route) => `Product #${route.params.id}` }, // MODIFIED for dynamic title
    component: {},
  },
  {
    path: "/contact",
    meta: { title: "Contact", weight: 20 },
    component: {}, // No children
  },
  {
    path: "/admin",
    meta: { title: "Admin", breadcrumb: false }, // ADDED for exclusion test
    component: {},
  }
];

// Helper to render JSON data in a <pre> tag for story output.
const renderJson = (data) => {
  return h("pre", { style: "font-size: 12px;" }, JSON.stringify(data, null, 2));
};

export default {
  component: {
    template: '<div>See individual stories for router util demonstrations.</div>'
  }
};

// --- Stories for Static Functions ---

export const CreateBaseMenu = {
  name: "createBaseMenu",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes);
    return renderJson(menu);
  },
};

export const CreateBaseMenuWithChildren = {
  name: "createBaseMenu (with children)",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes, { includeChildren: true });
    return renderJson(menu);
  },
};

export const FlattenMenu = {
    name: "flattenMenu",
    render: () => {
        const nestedMenu = router.createBaseMenu(mockRoutes, { includeChildren: true });
        const flatMenu = router.flattenMenu(nestedMenu);
        return renderJson({
            "originalNestedMenu": nestedMenu,
            "flattenedMenu": flatMenu
        });
    }
};

export const CreateSectionMenu = {
  name: "createSectionMenu",
  render: () => {
    const menu = router.createSectionMenu(mockRoutes, "/products");
    return renderJson(menu);
  },
};

export const IsStaticRoute = {
    name: "isStaticRoute / isStaticBaseRoute",
    render: () => {
        const results = mockRoutes.map(r => ({
            path: r.path,
            isStatic: router.isStaticRoute(r),
            isStaticBase: router.isStaticBaseRoute(r)
        }));
        return renderJson(results);
    }
};

// --- Stories for Runtime ($) Functions ---

// Mock a live $route object that would be available in a running app.
const mockLiveRoute = {
    path: '/products/new',
    matched: [
        // The parent route record
        {
            path: '/products',
            meta: { title: 'Products', weight: 10 },
            children: mockRoutes.find(r => r.path === '/products').children
        },
        // The actual matched route record
        {
            path: '/products/new',
            meta: { title: 'New Product' },
            component: {}
        }
    ]
};

export const GetParentRoute = {
    name: "$getParentRoute",
    render: () => {
        const immediateParent = router.$getParentRoute(mockLiveRoute);
        const deepestParent = router.$getParentRoute(mockLiveRoute, true);
        return renderJson({
            "current route path": mockLiveRoute.path,
            "immediateParent path": immediateParent.path,
            "deepestParent path": deepestParent.path
        });
    }
};

export const CreateSectionMenuFromRoute = {
    name: "$createSectionMenu",
    render: () => {
        const menu = router.$createSectionMenu(mockLiveRoute);
        return renderJson(menu);
    }
};

export const CreateBreadcrumb = {
    name: "$createBreadcrumb",
    render: () => {
        // We need to simulate the `matched` array that Vue Router provides.
        // It's an array of route records, from parent to child.
        // The `path` in each record is the full path that was matched.

        // Scenario 1: Simple nested route (/products/new)
        const mockRoute1 = {
            path: '/products/new',
            params: {},
            matched: [
                { path: '/', meta: { title: 'Home' } },
                { path: '/products', meta: { title: 'Products' } },
                { path: '/products/new', meta: { title: 'New Product' } }
            ]
        };
        const crumbs1 = router.$createBreadcrumb(mockRoute1);

        // Scenario 2: Dynamic route with a function title (/products/42)
        const mockRoute2 = {
            path: '/products/42',
            params: { id: '42' },
            matched: [
                { path: '/', meta: { title: 'Home' } },
                { path: '/products', meta: { title: 'Products' } },
                // The meta here should be the one from our mockRoutes definition
                { path: '/products/:id', meta: mockRoutes.find(r => r.path === '/products/:id').meta }
            ]
        };
        const crumbs2 = router.$createBreadcrumb(mockRoute2);

        // Scenario 3: Route with a segment that should be excluded (/admin)
        const mockRoute3 = {
            path: '/admin',
            params: {},
            matched: [
                { path: '/', meta: { title: 'Home' } },
                // The meta here has breadcrumb: false
                { path: '/admin', meta: mockRoutes.find(r => r.path === '/admin').meta }
            ]
        };
        const crumbs3 = router.$createBreadcrumb(mockRoute3);

        const results = {
            "Scenario 1: Simple Nested Route (/products/new)": crumbs1,
            "Scenario 2: Dynamic Title (/products/42)": crumbs2,
            "Scenario 3: Excluded Route (/admin)": crumbs3,
        };

        return renderJson(results);
    }
};

export const NativeLinkRouter = {
    name: "nativeLinkRouter",
    argTypes: {
        onRoute: { action: 'route-pushed' }
    },
    render: (args) => ({
        template: `
            <div>
                <p>Clicking the link below will not navigate, but will trigger the nativeLinkRouter util.</p>
                <p>Check the <strong>Actions</strong> tab in the Storybook panel to see the mocked router.push() call.</p>
                <a href="/about" @click="handleClick">Go to About</a>
            </div>
        `,
        setup() {
            const handleClick = (event) => {
                // Mock a router instance with a `push` method that calls the storybook action.
                const mockRouter = {
                    push: (path) => args.onRoute(path)
                };
                router.nativeLinkRouter(mockRouter, event);
            }
            return { handleClick };
        }
    })
};
