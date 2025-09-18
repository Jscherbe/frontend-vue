import{al as w,z as h,V as g,a$ as T,aZ as v,aY as f,aK as F,aH as x}from"./iframe-Bn69oEbi.js";import"./preload-helper-BJwshlQW.js";function y(t){const n=w(f),l=w(v);t.content||console.warn("Missing content for 'useTooltipFollow' tooltip",t);let s;const o=h(0),e=h(0),i=g(()=>({getBoundingClientRect(){return{width:0,height:0,x:o.value,y:e.value,top:e.value,left:o.value,right:o.value,bottom:e.value}}})),p=l?l.popover:T.popover,d=l?l.tooltip:T.tooltip,u={...{...p,...d},content:t.content,inline:!1,onReady({update:c}){s=c}};return{x:o,y:e,show(){n.show(i.value,u)},hide(){n.state.trigger===i.value&&n.hide()},update(c){o.value=c.x,e.value=c.y,s&&s()}}}const m={__name:"TestTooltipFollow",setup(t){const{x:n,y:l,show:s,hide:o,update:e}=y({content:g(()=>`x: ${Math.round(n.value)}, y: ${Math.round(l.value)}`)}),i=a=>{p(a),s()},p=({clientX:a,clientY:u})=>{e({x:a,y:u})},d=()=>{o()};return(a,u)=>(x(),F("div",{onPointerenter:i,onPointermove:p,onPointerleave:d,style:{background:"lightblue",width:"500px",height:"500px",display:"flex","align-items":"center","justify-content":"center"}}," Cursor Test ",32))}};m.__docgenInfo={exportName:"default",displayName:"TestTooltipFollow",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/popovers/tests/TestTooltipFollow.vue"]};const j={component:{TestTooltipFollow:m},tags:["autodocs"],parameters:{docs:{source:{language:"html",code:`
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
  `}),r=_.bind({});r.args={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...r.parameters?.docs?.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,j as default};
