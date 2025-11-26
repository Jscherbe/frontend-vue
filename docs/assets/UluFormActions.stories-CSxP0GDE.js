import{_ as r}from"./UluFormActions-N1FReG-U.js";import{U as e}from"./UluButton-MAbFtt4O.js";import"vue";import"vue-router";import"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const A={component:r,tags:["autodocs"]},t={render:o=>({components:{UluFormActions:r,UluButton:e},setup(){return{args:o}},template:`
      <div class="form-theme">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    `})},n={render:o=>({components:{UluFormActions:r,UluButton:e},setup(){return{args:o}},template:`
      <div class="form-theme form-theme--actions-right">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormActions,
      UluButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFormActions,
      UluButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div class="form-theme form-theme--actions-right">
        <UluFormActions>
          <UluButton primary text="Submit" />
          <UluButton text="Cancel" />
        </UluFormActions>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const g=["Default","RightAligned"];export{t as Default,n as RightAligned,g as __namedExportsOrder,A as default};
