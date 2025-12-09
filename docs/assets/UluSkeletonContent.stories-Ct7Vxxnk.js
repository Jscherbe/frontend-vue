import{c as b,d as o,F as p,x as d,o as s,p as C,n as U}from"./iframe-CSRVEcn3.js";import{r as k}from"./random-CXJqBAdg.js";import{a as _}from"./array-CBO3zkTJ.js";import"./preload-helper-BJwshlQW.js";const m={__name:"UluSkeletonContent",props:{lines:{type:Number,default:6}},setup(c){const f=c,g=b(()=>_(f.lines,()=>{const a=k(70,100);let t=0;const u=()=>{const n=a-t,l=k(15,n);return t+=l,l},e=[];for(;t<a-15;)e.push(u());const S=()=>e.reduce((n,l)=>n+l,0);for(;S()>=a&&e.pop(););return e.map(n=>({width:n,alt:Math.random()<.5}))}));return(h,a)=>(s(),o("div",null,[(s(!0),o(p,null,d(g.value,(t,u)=>(s(),o("div",{key:u},[(s(!0),o(p,null,d(t,e=>(s(),o("span",{key:e,class:U(["skeleton skeleton--text skeleton--inline",{"skeleton--background-alt":e.alt}]),style:C({width:`${e.width}%`})},null,6))),128))]))),128))]))}};m.__docgenInfo={exportName:"default",displayName:"UluSkeletonContent",description:"",tags:{},props:[{name:"lines",description:"Amount of lines to generate",type:{name:"number"},defaultValue:{func:!1,value:"6"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/systems/skeleton/UluSkeletonContent.vue"]};const L={component:m,tags:["autodocs"],argTypes:{lines:{control:"number"}},parameters:{docs:{description:{component:"A component to render a block of skeleton content with a random number of lines and widths."}}}},r={render:c=>({components:{UluSkeletonContent:m},setup(){return{args:c}},template:'<UluSkeletonContent v-bind="args" />'}),args:{lines:6}},i={...r,args:{lines:3},name:"3 Lines"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSkeletonContent
    },
    setup() {
      return {
        args
      };
    },
    template: '<UluSkeletonContent v-bind="args" />'
  }),
  args: {
    lines: 6
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    lines: 3
  },
  name: "3 Lines"
}`,...i.parameters?.docs?.source}}};const W=["Default","ThreeLines"];export{r as Default,i as ThreeLines,W as __namedExportsOrder,L as default};
