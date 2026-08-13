import{h as d,v as p,H as m,a1 as f,J as h,a as g,w as v,j as w,o as E,r as L}from"./iframe-D0eEfClq.js";import"./preload-helper-BJwshlQW.js";function D(s){const o=[...s.children].map(e=>({child:e,rect:e.getBoundingClientRect()})).filter(e=>e.rect.width!==0||e.rect.height!==0);if(o.length===0)return[];o.sort((e,n)=>Math.abs(e.rect.top-n.rect.top)>1?e.rect.top-n.rect.top:e.rect.left-n.rect.left);const a=[];let t=null;return o.forEach(({child:e,rect:n})=>{(t===null||Math.abs(n.top-t)>1)&&(a.push([]),t=n.top),a[a.length-1].push(e)}),a}function U(s,o={columnFirst:"position-column-first",columnLast:"position-column-last",rowFirst:"position-row-first",rowLast:"position-row-last"}){[...s.children].forEach(t=>t.classList.remove(...Object.values(o)));const a=D(s);a.length!==0&&(a[0].forEach(t=>t.classList.add(o.rowFirst)),a[a.length-1].forEach(t=>t.classList.add(o.rowLast)),a.forEach(t=>{t[0].classList.add(o.columnFirst),t[t.length-1].classList.add(o.columnLast)}))}const i={__name:"UluDataGrid",props:{element:{type:String,default:"div"},hidden:Boolean},setup(s){const o=s,a=d(null),t=d(null);let e=null,n=null;return p(async()=>{e=()=>{a.value&&U(a.value)},e(),t.value=!0,n=m(e,200,!1),window.addEventListener("resize",n)}),f(()=>{n&&(n.cancel(),window.removeEventListener("resize",n),n=null,e=null)}),h(()=>o.hidden,(l,c)=>{c&&!l&&e&&e()}),(l,c)=>(E(),g(w(s.element),{"data-grid-init":t.value,ref_key:"rootElement",ref:a},{default:v(()=>[L(l.$slots,"default")]),_:3},8,["data-grid-init"]))}};i.__docgenInfo={exportName:"default",displayName:"UluDataGrid",description:"",tags:{},props:[{name:"element",description:"The element to use on data-grid container",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"hidden",description:`Tell the component when this grid is actually in a hidden container 
- When value changes the component will properly update position classes`,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluDataGrid.vue"]};const u=`
<UluDataGrid data-grid="columns: 12">  
  <div data-grid-item="width: 6">Width of 6</div>
  <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
</UluDataGrid>
`,G={component:i,tags:["autodocs"]},_=s=>({components:{UluDataGrid:i},setup(){return{args:s}},template:u}),r=_.bind({});r.parameters={docs:{source:{code:u,language:"html",type:"code"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluDataGrid
  },
  setup() {
    return {
      args
    };
  },
  template: TEMPLATE_CODE
})`,...r.parameters?.docs?.source}}};const T=["DefaultExample"];export{r as DefaultExample,T as __namedExportsOrder,G as default};
