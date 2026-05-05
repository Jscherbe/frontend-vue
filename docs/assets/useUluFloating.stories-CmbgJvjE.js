import{l as n,c as u}from"./fontawesome-DyrJdE5N.js";import{j as p}from"./iframe-DFeB4tIX.js";const f={title:"Composables/useUluFloating"},d=s=>({template:`
    <div>
      <button ref="trigger" @click="toggle">Toggle</button>
      <div v-if="isOpen" ref="content" :style="floatingStyles">
        <p>Floating content</p>
        <div ref="contentArrow" :style="arrowStyles"></div>
      </div>
    </div>
  `,setup(){const e=n(!1),o=n(null),r=n(null),l=u(()=>s),{floatingStyles:i,arrowStyles:a,contentArrow:c,update:g}=p(o,r,l);return{isOpen:e,trigger:o,content:r,floatingStyles:i,arrowStyles:a,contentArrow:c,toggle:()=>{e.value=!e.value,e.value&&g()}}}}),t=d.bind({});t.args={placement:"bottom",arrow:!0,offset:10};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
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
})`,...t.parameters?.docs?.source}}};const v=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{w as s};
