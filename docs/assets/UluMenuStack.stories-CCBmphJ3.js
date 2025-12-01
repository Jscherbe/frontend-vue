import{_ as o}from"./UluMenuStack-CX_JFyer.js";import"vue";import"./UluMenu-Cd5EVNpy.js";import"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"./UluTag-BouMMBBI.js";const f={component:o,tags:["autodocs"]},r=e=>({components:{UluMenuStack:o},setup(){return{args:e}},template:'<UluMenuStack v-bind="args"/>'}),t=r.bind({});t.args={items:[{title:"Example Link (tag)",href:"http://www.google.com",tag:{text:"3"}},{title:"Router (icon)",to:"/",icon:"fas fa-plus"},{title:"Example Link (tooltip)",href:"http://www.google.com",tooltip:"Hello World!"}]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluMenuStack
  },
  setup() {
    return {
      args
    };
  },
  template: \`<UluMenuStack v-bind="args"/>\`
})`,...t.parameters?.docs?.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,f as default};
