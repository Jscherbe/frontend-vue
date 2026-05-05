import{_ as n}from"./UluButton-zu_C2qC9.js";import{j as s}from"./fontawesome-DyrJdE5N.js";import"./UluAction-CSWkOuPE.js";import"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./props-DEaRQ31f.js";const t=()=>{const o=s("uluModals");if(!o)throw new Error("Modals plugin not installed");return o},c={},e={name:"useModals",render:()=>({components:{UluButton:n},setup(){const o=t();return{openDemo:()=>{console.log("This is opening via uluModals composable"),o.open("demo")}}},template:`
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
}`,...e.parameters?.docs?.source}}};const i=["useModalsStory"];export{i as __namedExportsOrder,c as default,e as useModalsStory};
