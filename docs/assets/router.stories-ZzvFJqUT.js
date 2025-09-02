import{ay as O}from"./iframe-DSsytvcb.js";import"./preload-helper-BJwshlQW.js";function P(e,t){const n=Object.assign({},{qualifier(a,i){return i?$(a):x(a)},sort:I,item:{},includeChildren:!1},t),r=(a,i)=>i?`${i}/${a.path}`:a.path,o=(a,i=null)=>a.filter(u=>n.qualifier(u,i)).map(u=>{const c=u.children?L(u.children):u,h=u.children?u.children.filter(p=>p.path!==""):!1,l=B(c,r(u,i),n.item);return n.includeChildren&&h.length&&(l.children=o(h,l.path)),l}).sort(n.sort);return o(e)}function A(e){function t(s){const n=[];for(const r of s){const o={...r};delete o.children,n.push(o),r.children&&n.push(...t(r.children))}return n}return t(e)}function N(e,t,s){const r=Object.assign({},{includeIndex:!1,item:{},sort:I},s),o=e.find(c=>c.path!=="/"&&t.includes(c.path)),a=(c,h,l)=>{if(c.children){const p=c.children.find(J=>J.path.includes(t));if(p)return a(p,c,l+p.path)}return{route:h,path:l}},{route:i,path:u}=a(o,o,o.path);return i.children?i.children.filter(y(r.includeIndex)).map(c=>B(c,`${u}/${c.path}`,r.item)).sort(r.sort):(console.warn("Unable to build menu for:",t),[])}function L(e){return e.find(t=>t.path==="")}function B(e,t=e.path,s){const r=Object.assign({},{indexMeta:!0,modify:null},s);let o=Object.assign({},e.meta);r.indexMeta&&e.children&&(o=Object.assign({},o,L(e.children)?.meta));const a={path:t,title:o?.title||"Missing Title",weight:o?.weight||0,meta:o};return r.modify&&r.modify(a,e),a}function $(e){return!e.path.includes("/:")}function x(e){const t=e.path.match(/\//)||[];return $(e)&&t.length===1}function j(e,t){const{target:s}=t,n=s.closest("a");if(n){let r=n.getAttribute("href");r.startsWith("/")&&(e.push(r),t.preventDefault())}}function F(e,t=v(e)){return t?.children}function v(e,t){const s=e.matched.length,n=s-2;return t?s>1?e.matched[0]:null:n<0?null:e.matched[n]}function y(e){return t=>e||t.path!==""}function I(e,t){return e?.weight-t?.weight}function G(e,t){const n=Object.assign({},{parent:null,includeIndex:!1,item:{},sort:I},t),r=n.parent||v(e);return(F(e,r)||[]).filter(y(n.includeIndex)).map(a=>B(a,`${r.path}/${a.path}`,n.item)).sort(n.sort)}const m=[{path:"/",meta:{title:"Home",weight:-10},children:[{path:"",component:{}}]},{path:"/about",meta:{title:"About Us"},children:[{path:"",component:{}}]},{path:"/products",meta:{title:"Products",weight:10},children:[{path:"",meta:{title:"All Products"},component:{}},{path:"new",meta:{title:"New Product"},component:{}},{path:"featured",meta:{title:"Featured",weight:-5},component:{}}]},{path:"/products/:id",meta:{title:"Product Details"},component:{}},{path:"/contact",meta:{title:"Contact",weight:20},component:{}}],d=e=>O("pre",{style:"font-size: 12px;"},JSON.stringify(e,null,2)),_={component:{template:"<div>See individual stories for router util demonstrations.</div>"}},f={name:"createBaseMenu",render:()=>{const e=P(m);return d(e)}},g={name:"createBaseMenu (with children)",render:()=>{const e=P(m,{includeChildren:!0});return d(e)}},R={name:"flattenMenu",render:()=>{const e=P(m,{includeChildren:!0}),t=A(e);return d({originalNestedMenu:e,flattenedMenu:t})}},M={name:"createSectionMenu",render:()=>{const e=N(m,"/products");return d(e)}},k={name:"isStaticRoute / isStaticBaseRoute",render:()=>{const e=m.map(t=>({path:t.path,isStatic:$(t),isStaticBase:x(t)}));return d(e)}},w={path:"/products/new",matched:[{path:"/products",meta:{title:"Products",weight:10},children:m.find(e=>e.path==="/products").children},{path:"/products/new",meta:{title:"New Product"},component:{}}]},S={name:"$getParentRoute",render:()=>{const e=v(w),t=v(w,!0);return d({"current route path":w.path,"immediateParent path":e.path,"deepestParent path":t.path})}},C={name:"$createSectionMenu",render:()=>{const e=G(w);return d(e)}},b={name:"nativeLinkRouter",argTypes:{onRoute:{action:"route-pushed"}},render:e=>({template:`
            <div>
                <p>Clicking the link below will not navigate, but will trigger the nativeLinkRouter util.</p>
                <p>Check the <strong>Actions</strong> tab in the Storybook panel to see the mocked router.push() call.</p>
                <a href="/about" @click="handleClick">Go to About</a>
            </div>
        `,setup(){return{handleClick:s=>{j({push:r=>e.onRoute(r)},s)}}}})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes);
    return renderJson(menu);
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "createBaseMenu (with children)",
  render: () => {
    const menu = router.createBaseMenu(mockRoutes, {
      includeChildren: true
    });
    return renderJson(menu);
  }
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "createSectionMenu",
  render: () => {
    const menu = router.createSectionMenu(mockRoutes, "/products");
    return renderJson(menu);
  }
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "isStaticRoute / isStaticBaseRoute",
  render: () => {
    const results = mockRoutes.map(r => ({
      path: r.path,
      isStatic: router.isStaticRoute(r),
      isStaticBase: router.isStaticBaseRoute(r)
    }));
    return renderJson(results);
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "$createSectionMenu",
  render: () => {
    const menu = router.$createSectionMenu(mockLiveRoute);
    return renderJson(menu);
  }
}`,...C.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const q=["CreateBaseMenu","CreateBaseMenuWithChildren","FlattenMenu","CreateSectionMenu","IsStaticRoute","GetParentRoute","CreateSectionMenuFromRoute","NativeLinkRouter"];export{f as CreateBaseMenu,g as CreateBaseMenuWithChildren,M as CreateSectionMenu,C as CreateSectionMenuFromRoute,R as FlattenMenu,S as GetParentRoute,k as IsStaticRoute,b as NativeLinkRouter,q as __namedExportsOrder,_ as default};
