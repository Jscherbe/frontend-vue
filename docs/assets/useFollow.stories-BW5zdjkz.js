import{P as u,al as w,am as h,an as g,T as F,ao as f,a9 as x}from"./iframe-K1us1t7F.js";import"./preload-helper-BJwshlQW.js";const T={content:null};function v(e){e.content||console.warn("Missing content for 'useFollowPoint' tooltip",e);const i=Object.assign({},T,e);let n;const l=u(0),s=u(0),c=w({trigger:u({getBoundingClientRect(){const o=l.value,t=s.value;return{width:0,height:0,x:o,left:o,right:o,y:t,top:t,bottom:t}}}),content:i.content,inline:!1,onReady({update:o}){n=o}});return{x:l,y:s,show(){g(c)},hide(){h()},update(o){l.value=o.x,s.value=o.y,n&&n()}}}const p={__name:"TestTooltipFollow",setup(e){const{x:i,y:n,show:l,hide:s,update:c}=v({content:F(()=>`x: ${Math.round(i.value)}, y: ${Math.round(n.value)}`)}),o=a=>{t(a),l()},t=({clientX:a,clientY:d})=>{c({x:a,y:d})},m=()=>{s()};return(a,d)=>(x(),f("div",{onPointerenter:o,onPointermove:t,onPointerleave:m,style:{background:"lightblue",width:"500px",height:"500px",display:"flex","align-items":"center","justify-content":"center"}}," Cursor Test ",32))}};p.__docgenInfo={exportName:"default",displayName:"TestTooltipFollow",description:"",tags:{},sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/plugins/popovers/tests/TestTooltipFollow.vue"]};const P={title:"composables/useFollow",component:{TestTooltipFollow:p},tags:["autodocs"],parameters:{docs:{source:{language:"html",code:`
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
        `}}}},y=e=>({components:{TestTooltipFollow:p},setup(){return{args:e}},template:`
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
