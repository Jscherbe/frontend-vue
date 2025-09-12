import{i as s,U as i}from"./iframe-QLzdo_GC.js";import"./preload-helper-BJwshlQW.js";const c={title:"Components/Elements/UluAlert",component:s,args:{title:"Alert Title",description:"This is the description of the alert. It provides more details about the message being conveyed."},argTypes:{title:{control:"text"},description:{control:"text"},icon:{control:"text"},type:{control:"select",options:["danger","warning","info","success"]},compact:{control:"boolean"}}},t={args:{type:"danger",title:"Danger Alert",description:"This is an example of a danger alert. The icon is automatically determined by the type."},render:a=>({components:{UluAlert:s},setup(){return{args:a}},template:'<UluAlert v-bind="args" />'})},e={render:()=>({components:{UluAlert:s},template:`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    `}),argTypes:{title:{table:{disable:!0}},description:{table:{disable:!0}},icon:{table:{disable:!0}},type:{table:{disable:!0}},compact:{table:{disable:!0}}}},n={...e,args:{compact:!0},argTypes:{...e.argTypes}},r={render:a=>({components:{UluAlert:s,UluButton:i},setup(){return{args:a}},template:`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    `}),args:{type:"info",title:"Action Required",description:"This alert has an action button provided via the action slot."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    title: 'Danger Alert',
    description: 'This is an example of a danger alert. The icon is automatically determined by the type.'
  },
  render: args => ({
    components: {
      UluAlert
    },
    setup() {
      return {
        args
      };
    },
    template: \`<UluAlert v-bind="args" />\`
  })
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluAlert
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UluAlert type="danger" title="Danger" description="This is a danger alert." />
        <UluAlert type="warning" title="Warning" description="This is a warning alert." />
        <UluAlert type="info" title="Info" description="This is an info alert." />
        <UluAlert type="success" title="Success" description="This is a success alert." />
      </div>
    \`
  }),
  // Disable controls for props that are manually set in this story
  argTypes: {
    title: {
      table: {
        disable: true
      }
    },
    description: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    },
    compact: {
      table: {
        disable: true
      }
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...AllTypes,
  // Reuse the render function from AllTypes
  args: {
    compact: true
  },
  argTypes: {
    ...AllTypes.argTypes
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluAlert,
      UluButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluAlert v-bind="args">
        <template #action>
          <UluButton size="small">Action</UluButton>
        </template>
      </UluAlert>
    \`
  }),
  args: {
    type: 'info',
    title: 'Action Required',
    description: 'This alert has an action button provided via the action slot.'
  }
}`,...r.parameters?.docs?.source}}};const p=["Default","AllTypes","Compact","WithAction"];export{e as AllTypes,n as Compact,t as Default,r as WithAction,p as __namedExportsOrder,c as default};
