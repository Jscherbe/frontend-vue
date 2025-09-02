import{ar as A,aC as O}from"./iframe-P3J_82zc.js";import"./preload-helper-BJwshlQW.js";function $(e,t){const n=Object.assign({},{qualifier(o,u){return u?x(o):N(o)},sort:I,item:{},includeChildren:!1},t),r=(o,u)=>u?`${u}/${o.path}`:o.path,a=(o,u=null)=>o.filter(i=>n.qualifier(i,u)).map(i=>{const s=i.children?L(i.children):i,d=i.children?i.children.filter(h=>h.path!==""):!1,p=y(s,r(i,u),n.item);return n.includeChildren&&d.length&&(p.children=a(d,p.path)),p}).sort(n.sort);return a(e)}function H(e){function t(c){const n=[];for(const r of c){const a={...r};delete a.children,n.push(a),r.children&&n.push(...t(r.children))}return n}return t(e)}function j(e,t,c){const r=Object.assign({},{includeIndex:!1,item:{},sort:I},c),a=e.find(s=>s.path!=="/"&&t.includes(s.path)),o=(s,d,p)=>{if(s.children){const h=s.children.find(J=>J.path.includes(t));if(h)return o(h,s,p+h.path)}return{route:d,path:p}},{route:u,path:i}=o(a,a,a.path);return u.children?u.children.filter(T(r.includeIndex)).map(s=>y(s,`${i}/${s.path}`,r.item)).sort(r.sort):(console.warn("Unable to build menu for:",t),[])}function L(e){return e.find(t=>t.path==="")}function y(e,t=e.path,c){const r=Object.assign({},{indexMeta:!0,modify:null},c);let a=Object.assign({},e.meta);r.indexMeta&&e.children&&(a=Object.assign({},a,L(e.children)?.meta));const o={path:t,title:a?.title||"Missing Title",weight:a?.weight||0,meta:a};return r.modify&&r.modify(o,e),o}function x(e){return!e.path.includes("/:")}function N(e){const t=e.path.match(/\//)||[];return x(e)&&t.length===1}function F(e,t){const{target:c}=t,n=c.closest("a");if(n){let r=n.getAttribute("href");r.startsWith("/")&&(e.push(r),t.preventDefault())}}function W(e,t=B(e)){return t?.children}function B(e,t){const c=e.matched.length,n=c-2;return t?c>1?e.matched[0]:null:n<0?null:e.matched[n]}function T(e){return t=>e||t.path!==""}function I(e,t){return e?.weight-t?.weight}function D(e,t){const n=Object.assign({},{parent:null,includeIndex:!1,item:{},sort:I},t),r=n.parent||B(e);return(W(e,r)||[]).filter(T(n.includeIndex)).map(o=>y(o,`${r.path}/${o.path}`,n.item)).sort(n.sort)}function v(e){const{matched:t,path:c}=e;let n;return t.reduce((a,o,u)=>{if(o.meta?.breadcrumb===!1||o.path===n)return a;const i=u===t.length-1;let s;if(i&&(s=A(c)),!s){const d=o.meta?.title;typeof d=="function"?s=d(e):s=d}return s=s||"Missing Title",a.push({title:s,to:{path:i?c:o.path},current:i}),n=o.path,a},[])}const m=[{path:"/",meta:{title:"Home",weight:-10},children:[{path:"",component:{}}]},{path:"/about",meta:{title:"About Us"},children:[{path:"",component:{}}]},{path:"/products",meta:{title:"Products",weight:10},children:[{path:"",meta:{title:"All Products"},component:{}},{path:"new",meta:{title:"New Product"},component:{}},{path:"featured",meta:{title:"Featured",weight:-5},component:{}}]},{path:"/products/:id",meta:{title:e=>`Product #${e.params.id}`},component:{}},{path:"/contact",meta:{title:"Contact",weight:20},component:{}},{path:"/admin",meta:{title:"Admin",breadcrumb:!1},component:{}}],l=e=>O("pre",{style:"font-size: 12px;"},JSON.stringify(e,null,2)),_={component:{template:"<div>See individual stories for router util demonstrations.</div>"}},f={name:"createBaseMenu",render:()=>{const e=$(m);return l(e)}},R={name:"createBaseMenu (with children)",render:()=>{const e=$(m,{includeChildren:!0});return l(e)}},g={name:"flattenMenu",render:()=>{const e=$(m,{includeChildren:!0}),t=H(e);return l({originalNestedMenu:e,flattenedMenu:t})}},k={name:"createSectionMenu",render:()=>{const e=j(m,"/products");return l(e)}},b={name:"isStaticRoute / isStaticBaseRoute",render:()=>{const e=m.map(t=>({path:t.path,isStatic:x(t),isStaticBase:N(t)}));return l(e)}},P={path:"/products/new",matched:[{path:"/products",meta:{title:"Products",weight:10},children:m.find(e=>e.path==="/products").children},{path:"/products/new",meta:{title:"New Product"},component:{}}]},S={name:"$getParentRoute",render:()=>{const e=B(P),t=B(P,!0);return l({"current route path":P.path,"immediateParent path":e.path,"deepestParent path":t.path})}},M={name:"$createSectionMenu",render:()=>{const e=D(P);return l(e)}},w={name:"$createBreadcrumb",render:()=>{const t=v({path:"/products/new",params:{},matched:[{path:"/",meta:{title:"Home"}},{path:"/products",meta:{title:"Products"}},{path:"/products/new",meta:{title:"New Product"}}]}),c={path:"/products/42",params:{id:"42"},matched:[{path:"/",meta:{title:"Home"}},{path:"/products",meta:{title:"Products"}},{path:"/products/:id",meta:m.find(u=>u.path==="/products/:id").meta}]},n=v(c),r={path:"/admin",params:{},matched:[{path:"/",meta:{title:"Home"}},{path:"/admin",meta:m.find(u=>u.path==="/admin").meta}]},a=v(r);return l({"Scenario 1: Simple Nested Route (/products/new)":t,"Scenario 2: Dynamic Title (/products/42)":n,"Scenario 3: Excluded Route (/admin)":a})}},C={name:"nativeLinkRouter",argTypes:{onRoute:{action:"route-pushed"}},render:e=>({template:`
            <div>
                <p>Clicking the link below will not navigate, but will trigger the nativeLinkRouter util.</p>
                <p>Check the <strong>Actions</strong> tab in the Storybook panel to see the mocked router.push() call.</p>
                <a href="/about" @click="handleClick">Go to About</a>
            </div>
        `,setup(){return{handleClick:c=>{F({push:r=>e.onRoute(r)},c)}}}})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes);
    return renderJson(menu);
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu (with children)",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes, {
      includeChildren: true
    });
    return renderJson(menu);
  }
}`,...R.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "createSectionMenu",
  render: () => {
    const menu = router.createSectionMenu(mockRoutes, "/products");
    return renderJson(menu);
  }
}`,...k.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "isStaticRoute / isStaticBaseRoute",
  render: () => {
    const results = mockRoutes.map(r => ({
      path: r.path,
      isStatic: router.isStaticRoute(r),
      isStaticBase: router.isStaticBaseRoute(r)
    }));
    return renderJson(results);
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "$createSectionMenu",
  render: () => {
    const menu = router.$createSectionMenu(mockLiveRoute);
    return renderJson(menu);
  }
}`,...M.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};const q=["CreateBaseMenu","CreateBaseMenuWithChildren","FlattenMenu","CreateSectionMenu","IsStaticRoute","GetParentRoute","CreateSectionMenuFromRoute","CreateBreadcrumb","NativeLinkRouter"];export{f as CreateBaseMenu,R as CreateBaseMenuWithChildren,w as CreateBreadcrumb,k as CreateSectionMenu,M as CreateSectionMenuFromRoute,g as FlattenMenu,S as GetParentRoute,b as IsStaticRoute,C as NativeLinkRouter,q as __namedExportsOrder,_ as default};
