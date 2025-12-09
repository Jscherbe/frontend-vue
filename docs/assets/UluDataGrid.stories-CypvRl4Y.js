import{l as u,Q as p,A as f,Z as h,D as g,a as v,w as E,r as w,o as D,e as L}from"./iframe-ClpBgbxC.js";import"./preload-helper-BJwshlQW.js";function y(i,o={columnFirst:"position-column-first",columnLast:"position-column-last",rowFirst:"position-row-first",rowLast:"position-row-last"}){const l=[...i.children],s=[];let t;l.forEach(e=>{const a=e.getBoundingClientRect().y;t!==a&&s.push([]),s[s.length-1].push(e),t=a,e.classList.remove(...Object.values(o))}),s.forEach((e,a)=>{a===0&&e.forEach(n=>n.classList.add(o.rowFirst)),a==s.length-1&&e.forEach(n=>n.classList.add(o.rowLast)),e.forEach((n,c)=>{c===0&&n.classList.add(o.columnFirst),c==e.length-1&&n.classList.add(o.columnLast)})})}const d={__name:"UluDataGrid",props:{element:{type:String,default:"div"},hidden:Boolean},setup(i){const o=i,l=u(null),s=u(null);let t=null,e=null;return p(async()=>{t=()=>{l.value&&y(l.value)},t(),s.value=!0,e=f(t,200,!1),window.addEventListener("resize",e)}),h(()=>{e&&(e.cancel(),window.removeEventListener("resize",e),e=null,t=null)}),g(()=>o.hidden,(a,n)=>{n&&!a&&t&&t()}),(a,n)=>(D(),v(w(i.element),{"data-grid-init":s.value,ref_key:"rootElement",ref:l},{default:E(()=>[L(a.$slots,"default")]),_:3},8,["data-grid-init"]))}};d.__docgenInfo={exportName:"default",displayName:"UluDataGrid",description:"",tags:{},props:[{name:"element",description:"The element to use on data-grid container",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}},{name:"hidden",description:`Tell the component when this grid is actually in a hidden container 
- When value changes the component will properly update position classes`,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluDataGrid.vue"]};const m=`
<UluDataGrid data-grid="columns: 12">  
  <div data-grid-item="width: 6">Width of 6</div>
  <div data-grid-item="width: 4, offset: 2">Width of 4, offset 2</div>
</UluDataGrid>
`,T={component:d,tags:["autodocs"]},U=i=>({components:{UluDataGrid:d},setup(){return{args:i}},template:m}),r=U.bind({});r.parameters={docs:{source:{code:m,language:"html",type:"code"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluDataGrid
  },
  setup() {
    return {
      args
    };
  },
  template: TEMPLATE_CODE
})`,...r.parameters?.docs?.source}}};const b=["DefaultExample"];export{r as DefaultExample,b as __namedExportsOrder,T as default};
