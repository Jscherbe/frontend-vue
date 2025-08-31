import{an as t}from"./iframe-BbuohH2w.js";import"./preload-helper-BJwshlQW.js";const i={},e={render:()=>({setup(){return{injectedValue:t("uluIsMobile")}},template:"<div>Injected Value (uluIsMobile): {{ injectedValue }}</div>"}),args:{valueToProvide:"This is the injected value!"}},n={render:()=>({setup(){try{return{injectedValue:t("nonExistentKey")}}catch(r){return{error:r.message}}},template:"<div>Error: {{ error }}</div>"}),parameters:{chromatic:{disableSnapshot:!0}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const u=["BasicUsage","MissingInjection"];export{e as BasicUsage,n as MissingInjection,u as __namedExportsOrder,i as default};
