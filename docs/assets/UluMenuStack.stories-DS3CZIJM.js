import{_ as e}from"./UluMenuStack-CvOAJ3hO.js";import"./iframe-Cct7deJN.js";import"./preload-helper-BJwshlQW.js";import"./UluMenu-Bvy0YaKx.js";import"./UluAction-DJKc6WO6.js";import"./UluTag-B2EihsKf.js";const m={component:e,tags:["autodocs"]},a=o=>({components:{UluMenuStack:e},setup(){return{args:o}},template:'<UluMenuStack v-bind="args"/>'}),t=a.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenuStack
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluMenuStack v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,m as default};
