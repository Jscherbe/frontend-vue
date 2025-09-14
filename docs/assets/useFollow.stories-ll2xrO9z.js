import{z as u,aY as m,aZ as h,a_ as g,a7 as F,I as f,K as x}from"./iframe-B3IBbmqM.js";import"./preload-helper-BJwshlQW.js";const v={content:null};function T(o){o.content||console.warn("Missing content for 'useFollowPoint' tooltip",o);const i=Object.assign({},v,o);let n;const l=u(0),s=u(0),c=m({trigger:u({getBoundingClientRect(){const e=l.value,t=s.value;return{width:0,height:0,x:e,left:e,right:e,y:t,top:t,bottom:t}}}),content:i.content,inline:!1,onReady({update:e}){n=e}});return{x:l,y:s,show(){g(c)},hide(){h()},update(e){l.value=e.x,s.value=e.y,n&&n()}}}const p={__name:"TestTooltipFollow",setup(o){const{x:i,y:n,show:l,hide:s,update:c}=T({content:F(()=>`x: ${Math.round(i.value)}, y: ${Math.round(n.value)}`)}),e=a=>{t(a),l()},t=({clientX:a,clientY:d})=>{c({x:a,y:d})},w=()=>{s()};return(a,d)=>(x(),f("div",{onPointerenter:e,onPointermove:t,onPointerleave:w,style:{background:"lightblue",width:"500px",height:"500px",display:"flex","align-items":"center","justify-content":"center"}}," Cursor Test ",32))}};p.__docgenInfo={exportName:"default",displayName:"TestTooltipFollow",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/popovers/tests/TestTooltipFollow.vue"]};const P={component:{TestTooltipFollow:p},tags:["autodocs"],parameters:{docs:{source:{language:"html",code:`
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
  import useFollow from "../useFollow.js";

  const { 
    x, 
    y, 
    show, 
    hide, 
    update 
  } = useFollow({
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
        `}}}},y=o=>({components:{TestTooltipFollow:p},setup(){return{args:o}},template:`
    <TestTooltipFollow/>
  `}),r=y.bind({});r.args={};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...r.parameters?.docs?.source}}};const j=["Default"];export{r as Default,j as __namedExportsOrder,P as default};
