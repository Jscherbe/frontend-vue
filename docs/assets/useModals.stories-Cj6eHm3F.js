import{_ as n}from"./UluButton-Bhgw7Zn-.js";import{J as s}from"./iframe-n9Uk3WRX.js";import"./UluAction-sVaqHon7.js";import"./preload-helper-BJwshlQW.js";const t=()=>{const o=s("uluModals");if(!o)throw new Error("Modals plugin not installed");return o},u={},e={name:"useModals",render:()=>({components:{UluButton:n},setup(){const o=t();return{openDemo:()=>{console.log("This is opening via uluModals composable"),o.open("demo")}}},template:`
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
}`,...e.parameters?.docs?.source}}};const d=["useModalsStory"];export{d as __namedExportsOrder,u as default,e as useModalsStory};
