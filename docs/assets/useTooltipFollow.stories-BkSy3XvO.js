import{ref as w,computed as f,createElementBlock as g,openBlock as v}from"vue";import{d as h,h as T,P as F,T as x}from"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";function y(t){const n=h(x),l=h(F);t.content||console.warn("Missing content for 'useTooltipFollow' tooltip",t);let s;const o=w(0),e=w(0),p=f(()=>({getBoundingClientRect(){return{width:0,height:0,x:o.value,y:e.value,top:e.value,left:o.value,right:o.value,bottom:e.value}}})),a=l?l.popover:T.popover,d=l?l.tooltip:T.tooltip,u={...{...a,...d},content:t.content,inline:!1,onReady({update:c}){s=c}};return{x:o,y:e,show(){n.show(p.value,u)},hide(){n.state.trigger===p.value&&n.hide()},update(c){o.value=c.x,e.value=c.y,s&&s()}}}const m={__name:"TestTooltipFollow",setup(t){const{x:n,y:l,show:s,hide:o,update:e}=y({content:f(()=>`x: ${Math.round(n.value)}, y: ${Math.round(l.value)}`)}),p=r=>{a(r),s()},a=({clientX:r,clientY:u})=>{e({x:r,y:u})},d=()=>{o()};return(r,u)=>(v(),g("div",{onPointerenter:p,onPointermove:a,onPointerleave:d,style:{background:"lightblue",width:"500px",height:"500px",display:"flex","align-items":"center","justify-content":"center"}}," Cursor Test ",32))}};m.__docgenInfo={exportName:"default",displayName:"TestTooltipFollow",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/popovers/tests/TestTooltipFollow.vue"]};const I={component:{TestTooltipFollow:m},tags:["autodocs"],parameters:{docs:{source:{language:"html",code:`
<template>
  <div 
    @pointerenter="showFollow"
    @pointermove="updateFollow"
    @pointerleave="hideFollow"
    style="
      background: lightblue; 
      width: 500px; 
      height: 500px; 
      display: flex; 
      align-items: center;
      justify-content: center
    "
  >
    Cursor Test
  </div>
</template>

<script setup>
  import { computed } from "vue";
  import useTooltipFollow from "../useTooltipFollow.js";

  const { 
    x, 
    y, 
    show, 
    hide, 
    update 
  } = useTooltipFollow({
    content: computed(() => \`x: \${ Math.round(x) }, y: \${ Math.round(y) }\`)
  });

  const showFollow = (event) => {
    updateFollow(event);
    show();
  };

  const updateFollow = ({ clientX, clientY }) => {
    update({
      x: clientX,
      y: clientY
    });
  };

  const hideFollow = () => {
    hide();
  };
<\/script>
        `}}}},_=t=>({components:{TestTooltipFollow:m},setup(){return{args:t}},template:`
    <TestTooltipFollow/>
  `}),i=_.bind({});i.args={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    TestTooltipFollow
  },
  setup() {
    return {
      args
    };
  },
  "template": \`
    <TestTooltipFollow/>
  \`
})`,...i.parameters?.docs?.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,I as default};
