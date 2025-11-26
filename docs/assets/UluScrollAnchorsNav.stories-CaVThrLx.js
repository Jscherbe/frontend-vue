import{_ as d}from"./UluScrollAnchors-DVTsWm9y.js";import{_ as p}from"./UluScrollAnchorsSection-BdlBYdht.js";import{createBlock as S,createCommentVNode as v,unref as r,openBlock as l,resolveDynamicComponent as h,withCtx as f,createElementVNode as c,createElementBlock as a,Fragment as g,renderList as y,normalizeClass as u,renderSlot as A,createTextVNode as U,toDisplayString as _}from"vue";import{u as N}from"./useScrollAnchorSections-M0YNMp2d.js";import"@ulu/utils/string.js";import"@ulu/utils/browser/dom.js";const x=["href"],s={__name:"UluScrollAnchorsNav",props:{element:{type:String,default:"nav"}},setup(n){const o=N();return(m,q)=>r(o)&&r(o).length?(l(),S(h(n.element),{key:0,class:"scroll-anchors__nav"},{default:f(()=>[c("ul",null,[(l(!0),a(g,null,y(r(o),(e,i)=>(l(),a("li",{key:i,class:u({"is-active":e.active})},[c("a",{class:u({"is-active":e.active}),href:`#${e.titleId}`},[A(m.$slots,"default",{item:e,index:i},()=>[U(_(e.title),1)])],10,x)],2))),128))])]),_:3})):v("",!0)}};s.__docgenInfo={exportName:"default",displayName:"UluScrollAnchorsNav",description:"",tags:{},props:[{name:"element",description:"The HTML element to use for the navigation root",type:{name:"string"},defaultValue:{func:!1,value:'"nav"'}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/systems/scroll-anchors/UluScrollAnchorsNav.vue"]};const $={component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Standard navigation for the Scroll Anchors system."}}}},b="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",k=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],I={height:"700px",overflow:"auto",backgroundColor:"teal",padding:"1rem"},C={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start",backgroundColor:"white"},T={position:"sticky",top:"1rem"},t={args:{firstItemActive:!0},render:n=>({components:{UluScrollAnchors:d,UluScrollAnchorsSection:p,UluScrollAnchorsNav:s},setup(){return{args:n,sections:k,lipsum:b,gridStyles:C,navStyle:T,containerStyles:I}},template:`
      <UluScrollAnchors :firstItemActive="args.firstItemActive" :style="containerStyles">
        <div :style="gridStyles">
          <div :style="navStyle">
            <UluScrollAnchorsNav />
          </div>
          <div>
            <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
            </UluScrollAnchorsSection>
          </div>
        </div>
      </UluScrollAnchors>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    firstItemActive: true
  },
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsSection,
      UluScrollAnchorsNav
    },
    setup() {
      return {
        args,
        sections,
        lipsum,
        gridStyles,
        navStyle,
        containerStyles
      };
    },
    template: \`
      <UluScrollAnchors :firstItemActive="args.firstItemActive" :style="containerStyles">
        <div :style="gridStyles">
          <div :style="navStyle">
            <UluScrollAnchorsNav />
          </div>
          <div>
            <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
            </UluScrollAnchorsSection>
          </div>
        </div>
      </UluScrollAnchors>
    \`
  })
}`,...t.parameters?.docs?.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,$ as default};
