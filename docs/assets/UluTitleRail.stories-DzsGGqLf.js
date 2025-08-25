import{y as a}from"./iframe-CL-JwaCw.js";import"./preload-helper-BJwshlQW.js";const i={component:a,tags:["autodocs"]},e={args:{title:"My Title",iconType:"info"}},t={args:{title:"This has a user set icon",icon:"fas fa-circle-check"}},n={args:{...e.args,iconType:"info"}},r={render:s=>({components:{UluTitleRail:a},setup(){return{args:s}},template:`
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    `}),args:{...n.args}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "My Title",
    iconType: "info"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This has a user set icon",
    icon: "fas fa-circle-check"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconType: "info"
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluTitleRail
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluTitleRail v-bind="args">
        <template #end>
          <p>Some content on the end</p>
        </template>
      </UluTitleRail>
    \`
  }),
  args: {
    ...WithIconType.args
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","WithIcon","WithIconType","WithEndSlot"];export{e as Default,r as WithEndSlot,t as WithIcon,n as WithIconType,l as __namedExportsOrder,i as default};
