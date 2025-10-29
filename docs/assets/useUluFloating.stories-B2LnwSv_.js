import{I as n,ac as u,aD as p}from"./iframe-CX9S7sQv.js";const f={title:"Composables/useUluFloating"},d=s=>({template:`
    <div>
      <button ref="trigger" @click="toggle">Toggle</button>
      <div v-if="isOpen" ref="content" :style="floatingStyles">
        <p>Floating content</p>
        <div ref="contentArrow" :style="arrowStyles"></div>
      </div>
    </div>
  `,setup(){const e=n(!1),o=n(null),r=n(null),l=u(()=>s),{floatingStyles:a,arrowStyles:i,contentArrow:c,update:g}=p(o,r,l);return{isOpen:e,trigger:o,content:r,floatingStyles:a,arrowStyles:i,contentArrow:c,toggle:()=>{e.value=!e.value,e.value&&g()}}}}),t=d.bind({});t.args={placement:"bottom",arrow:!0,offset:10};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  template: \`
    <div>
      <button ref="trigger" @click="toggle">Toggle</button>
      <div v-if="isOpen" ref="content" :style="floatingStyles">
        <p>Floating content</p>
        <div ref="contentArrow" :style="arrowStyles"></div>
      </div>
    </div>
  \`,
  setup() {
    const isOpen = ref(false);
    const trigger = ref(null);
    const content = ref(null);
    const config = computed(() => args);
    const {
      floatingStyles,
      arrowStyles,
      contentArrow,
      update
    } = useUluFloating(trigger, content, config);
    const toggle = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value) {
        update();
      }
    };
    return {
      isOpen,
      trigger,
      content,
      floatingStyles,
      arrowStyles,
      contentArrow,
      toggle
    };
  }
})`,...t.parameters?.docs?.source}}};const v=["Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{S as s};
