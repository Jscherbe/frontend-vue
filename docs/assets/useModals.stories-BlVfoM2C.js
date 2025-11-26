import{U as n}from"./UluButton-MAbFtt4O.js";import{inject as s}from"vue";import"vue-router";import"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const t=()=>{const o=s("uluModals");if(!o)throw new Error("Modals plugin not installed");return o},g={},e={name:"useModals",render:()=>({components:{UluButton:n},setup(){const o=t();return{openDemo:()=>{console.log("This is opening via uluModals composable"),o.open("demo")}}},template:`
      <UluButton @click="openDemo" text="Open Modal"/>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'useModals',
  render: () => ({
    components: {
      UluButton
    },
    setup() {
      const modals = useModals();
      const openDemo = () => {
        console.log("This is opening via uluModals composable");
        modals.open("demo");
      };
      return {
        openDemo
      };
    },
    "template": \`
      <UluButton @click="openDemo" text="Open Modal"/>
    \`
  }),
  args: {}
}`,...e.parameters?.docs?.source}}};const D=["useModalsStory"];export{D as __namedExportsOrder,g as default,e as useModalsStory};
