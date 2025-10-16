import{aF as M,aG as f,aH as P,aI as C,aJ as v,aK as b,aL as B,aM as S,av as $,aN as L}from"./iframe-CpwZzjQD.js";import"./preload-helper-BJwshlQW.js";const n=[{path:"/",meta:{title:"Home",weight:-10},children:[{path:"",component:{}}]},{path:"/about",meta:{title:"About Us"},children:[{path:"",component:{}}]},{path:"/products",meta:{title:"Products",weight:10},children:[{path:"",meta:{title:"All Products"},component:{}},{path:"new",meta:{title:"New Product"},component:{}},{path:"featured",meta:{title:"Featured",weight:-5},component:{}}]},{path:"/products/:id",meta:{title:e=>`Product #${e.params.id}`},component:{}},{path:"/contact",meta:{title:"Contact",weight:20},component:{}},{path:"/admin",meta:{title:"Admin",breadcrumb:!1},component:{}}],r=e=>$("pre",{style:"font-size: 12px;"},JSON.stringify(e,null,2)),H={component:{template:"<div>See individual stories for router util demonstrations.</div>"}},a={name:"createBaseMenu",render:()=>{const e=M(n);return r(e)}},o={name:"createBaseMenu (with children)",render:()=>{const e=M(n,{includeChildren:!0});return r(e)}},c={name:"flattenMenu",render:()=>{const e=M(n,{includeChildren:!0}),t=f(e);return r({originalNestedMenu:e,flattenedMenu:t})}},s={name:"createSectionMenu",render:()=>{const e=P(n,"/products");return r(e)}},u={name:"isStaticRoute / isStaticBaseRoute",render:()=>{const e=n.map(t=>({path:t.path,isStatic:v(t),isStaticBase:C(t)}));return r(e)}},h={path:"/products/new",matched:[{path:"/products",meta:{title:"Products",weight:10},children:n.find(e=>e.path==="/products").children},{path:"/products/new",meta:{title:"New Product"},component:{}}]},i={name:"$getParentRoute",render:()=>{const e=b(h),t=b(h,!0);return r({"current route path":h.path,"immediateParent path":e.path,"deepestParent path":t.path})}},m={name:"$createSectionMenu",render:()=>{const e=B(h);return r(e)}},d={name:"$createBreadcrumb",render:()=>{const t=S({path:"/products/new",params:{},matched:[{path:"/",meta:{title:"Home"}},{path:"/products",meta:{title:"Products"}},{path:"/products/new",meta:{title:"New Product"}}]}),l={path:"/products/42",params:{id:"42"},matched:[{path:"/",meta:{title:"Home"}},{path:"/products",meta:{title:"Products"}},{path:"/products/:id",meta:n.find(k=>k.path==="/products/:id").meta}]},g=S(l),R={path:"/admin",params:{},matched:[{path:"/",meta:{title:"Home"}},{path:"/admin",meta:n.find(k=>k.path==="/admin").meta}]},w=S(R);return r({"Scenario 1: Simple Nested Route (/products/new)":t,"Scenario 2: Dynamic Title (/products/42)":g,"Scenario 3: Excluded Route (/admin)":w})}},p={name:"nativeLinkRouter",argTypes:{onRoute:{action:"route-pushed"}},render:e=>({template:`
            <div>
                <p>Clicking the link below will not navigate, but will trigger the nativeLinkRouter util.</p>
                <p>Check the <strong>Actions</strong> tab in the Storybook panel to see the mocked router.push() call.</p>
                <a href="/about" @click="handleClick">Go to About</a>
            </div>
        `,setup(){return{handleClick:l=>{L({push:R=>e.onRoute(R)},l)}}}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes);
    return renderJson(menu);
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu (with children)",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes, {
      includeChildren: true
    });
    return renderJson(menu);
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "flattenMenu",
  render: () => {
    const nestedMenu = router.createBaseMenu(mockRoutes, {
      includeChildren: true
    });
    const flatMenu = router.flattenMenu(nestedMenu);
    return renderJson({
      "originalNestedMenu": nestedMenu,
      "flattenedMenu": flatMenu
    });
  }
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "createSectionMenu",
  render: () => {
    const menu = router.createSectionMenu(mockRoutes, "/products");
    return renderJson(menu);
  }
}`,...s.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "isStaticRoute / isStaticBaseRoute",
  render: () => {
    const results = mockRoutes.map(r => ({
      path: r.path,
      isStatic: router.isStaticRoute(r),
      isStaticBase: router.isStaticBaseRoute(r)
    }));
    return renderJson(results);
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "$createSectionMenu",
  render: () => {
    const menu = router.$createSectionMenu(mockLiveRoute);
    return renderJson(menu);
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "$createBreadcrumb",
  render: () => {
    // We need to simulate the \`matched\` array that Vue Router provides.
    // It's an array of route records, from parent to child.
    // The \`path\` in each record is the full path that was matched.

    // Scenario 1: Simple nested route (/products/new)
    const mockRoute1 = {
      path: '/products/new',
      params: {},
      matched: [{
        path: '/',
        meta: {
          title: 'Home'
        }
      }, {
        path: '/products',
        meta: {
          title: 'Products'
        }
      }, {
        path: '/products/new',
        meta: {
          title: 'New Product'
        }
      }]
    };
    const crumbs1 = router.$createBreadcrumb(mockRoute1);

    // Scenario 2: Dynamic route with a function title (/products/42)
    const mockRoute2 = {
      path: '/products/42',
      params: {
        id: '42'
      },
      matched: [{
        path: '/',
        meta: {
          title: 'Home'
        }
      }, {
        path: '/products',
        meta: {
          title: 'Products'
        }
      },
      // The meta here should be the one from our mockRoutes definition
      {
        path: '/products/:id',
        meta: mockRoutes.find(r => r.path === '/products/:id').meta
      }]
    };
    const crumbs2 = router.$createBreadcrumb(mockRoute2);

    // Scenario 3: Route with a segment that should be excluded (/admin)
    const mockRoute3 = {
      path: '/admin',
      params: {},
      matched: [{
        path: '/',
        meta: {
          title: 'Home'
        }
      },
      // The meta here has breadcrumb: false
      {
        path: '/admin',
        meta: mockRoutes.find(r => r.path === '/admin').meta
      }]
    };
    const crumbs3 = router.$createBreadcrumb(mockRoute3);
    const results = {
      "Scenario 1: Simple Nested Route (/products/new)": crumbs1,
      "Scenario 2: Dynamic Title (/products/42)": crumbs2,
      "Scenario 3: Excluded Route (/admin)": crumbs3
    };
    return renderJson(results);
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "nativeLinkRouter",
  argTypes: {
    onRoute: {
      action: 'route-pushed'
    }
  },
  render: args => ({
    template: \`
            <div>
                <p>Clicking the link below will not navigate, but will trigger the nativeLinkRouter util.</p>
                <p>Check the <strong>Actions</strong> tab in the Storybook panel to see the mocked router.push() call.</p>
                <a href="/about" @click="handleClick">Go to About</a>
            </div>
        \`,
    setup() {
      const handleClick = event => {
        // Mock a router instance with a \`push\` method that calls the storybook action.
        const mockRouter = {
          push: path => args.onRoute(path)
        };
        router.nativeLinkRouter(mockRouter, event);
      };
      return {
        handleClick
      };
    }
  })
}`,...p.parameters?.docs?.source}}};const A=["CreateBaseMenu","CreateBaseMenuWithChildren","FlattenMenu","CreateSectionMenu","IsStaticRoute","GetParentRoute","CreateSectionMenuFromRoute","CreateBreadcrumb","NativeLinkRouter"];export{a as CreateBaseMenu,o as CreateBaseMenuWithChildren,d as CreateBreadcrumb,s as CreateSectionMenu,m as CreateSectionMenuFromRoute,c as FlattenMenu,i as GetParentRoute,u as IsStaticRoute,p as NativeLinkRouter,A as __namedExportsOrder,H as default};
