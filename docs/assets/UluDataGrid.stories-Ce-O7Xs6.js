import{l as d,P as m,Y as p,C as f,a as h,w as g,r as v,Z as D,o as E,e as U}from"./iframe-Dgie-L4l.js";import{d as _}from"./performance-DiEjb9uP.js";import"./preload-helper-BJwshlQW.js";const r={__name:"UluDataGrid",props:{element:{type:String,default:"div"},hidden:Boolean},setup(n){const c=n,o=d(null),i=d(null);let e=null,t=null;return m(async()=>{e=()=>{o.value&&D(o.value)},e(),i.value=!0,t=_(e,200,!1),window.addEventListener("resize",t)}),p(()=>{t&&(t.cancel(),window.removeEventListener("resize",t),t=null,e=null)}),f(()=>c.hidden,(s,l)=>{l&&!s&&e&&e()}),(s,l)=>(E(),h(v(n.element),{"data-grid-init":i.value,ref_key:"rootElement",ref:o},{default:g(()=>[U(s.$slots,"default")]),_:3},8,["data-grid-init"]))}};r.__docgenInfo={exportName:"default",displayName:"UluDataGrid",description:"",tags:{},props:[{name:"element",description:"The element to use on data-grid container",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"hidden",description:`Tell the component when this grid is actually in a hidden container 
- When value changes the component will properly update position classes`,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluDataGrid.vue"]};const u=`
<UluDataGrid data-grid="columns: 12">  
  <div data-grid-item="width: 6">Width of 6</div>
  <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
</UluDataGrid>
`,x={component:r,tags:["autodocs"]},w=n=>({components:{UluDataGrid:r},setup(){return{args:n}},template:u}),a=w.bind({});a.parameters={docs:{source:{code:u,language:"html",type:"code"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluDataGrid
  },
  setup() {
    return {
      args
    };
  },
  template: TEMPLATE_CODE
})`,...a.parameters?.docs?.source}}};const C=["DefaultExample"];export{a as DefaultExample,C as __namedExportsOrder,x as default};
