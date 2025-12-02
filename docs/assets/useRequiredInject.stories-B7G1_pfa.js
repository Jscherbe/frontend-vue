import"vue";import{d as t}from"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const p={},e={render:()=>({setup(){return{injectedValue:t("uluIsMobile")}},template:"<div>Injected Value (uluIsMobile): {{ injectedValue }}</div>"}),args:{valueToProvide:"This is the injected value!"}},r={render:()=>({setup(){try{return{injectedValue:t("nonExistentKey")}}catch(n){return{error:n.message}}},template:"<div>Error: {{ error }}</div>"}),parameters:{chromatic:{disableSnapshot:!0}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      const injectedValue = useRequiredInject('uluIsMobile');
      return {
        injectedValue
      };
    },
    template: \`<div>Injected Value (uluIsMobile): {{ injectedValue }}</div>\`
  }),
  args: {
    valueToProvide: 'This is the injected value!'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    setup() {
      try {
        const injectedValue = useRequiredInject('nonExistentKey');
        return {
          injectedValue
        };
      } catch (e) {
        return {
          error: e.message
        };
      }
    },
    template: \`<div>Error: {{ error }}</div>\`
  }),
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
}`,...r.parameters?.docs?.source}}};const m=["BasicUsage","MissingInjection"];export{e as BasicUsage,r as MissingInjection,m as __namedExportsOrder,p as default};
