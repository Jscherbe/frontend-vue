import{ref as d,onMounted as m,onBeforeUnmount as p,watch as f,createBlock as h,openBlock as g,resolveDynamicComponent as v,withCtx as D,renderSlot as E}from"vue";import{debounce as U}from"@ulu/utils/performance.js";import{setPositionClasses as _}from"@ulu/frontend";const s={__name:"UluDataGrid",props:{element:{type:String,default:"div"},hidden:Boolean},setup(a){const c=a,o=d(null),i=d(null);let e=null,t=null;return m(async()=>{e=()=>{o.value&&_(o.value)},e(),i.value=!0,t=U(e,200,!1),window.addEventListener("resize",t)}),p(()=>{t&&(t.cancel(),window.removeEventListener("resize",t),t=null,e=null)}),f(()=>c.hidden,(r,l)=>{l&&!r&&e&&e()}),(r,l)=>(g(),h(v(a.element),{"data-grid-init":i.value,ref_key:"rootElement",ref:o},{default:D(()=>[E(r.$slots,"default")]),_:3},8,["data-grid-init"]))}};s.__docgenInfo={exportName:"default",displayName:"UluDataGrid",description:"",tags:{},props:[{name:"element",description:"The element to use on data-grid container",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"hidden",description:`Tell the component when this grid is actually in a hidden container 
- When value changes the component will properly update position classes`,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluDataGrid.vue"]};const u=`
<UluDataGrid data-grid="columns: 12">  
  <div data-grid-item="width: 6">Width of 6</div>
  <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
</UluDataGrid>
`,x={component:s,tags:["autodocs"]},y=a=>({components:{UluDataGrid:s},setup(){return{args:a}},template:u}),n=y.bind({});n.parameters={docs:{source:{code:u,language:"html",type:"code"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluDataGrid
  },
  setup() {
    return {
      args
    };
  },
  template: TEMPLATE_CODE
})`,...n.parameters?.docs?.source}}};const C=["DefaultExample"];export{n as DefaultExample,C as __namedExportsOrder,x as default};
