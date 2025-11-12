import{c as r}from"./iframe-CZEnXdIU.js";import"./preload-helper-BJwshlQW.js";const i={component:r,tags:["autodocs"],args:{triggerText:"Toggle Collapsible Region",animate:!0},argTypes:{triggerText:{control:"text"},closeOnEscape:{control:"boolean"},startOpen:{control:"boolean"},animate:{control:"boolean"},default:{control:"text",name:"slot: default",description:"The content inside the collapsible region."}},render:n=>({components:{UluCollapsible:r},setup(){return{args:n}},template:`
      <UluCollapsible v-bind="args">
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This is the collapsible content area. You can put any HTML or components here.' }}</p>
        </div>
      </UluCollapsible>
    `})},e={args:{default:"This is a standard collapsible region with animations enabled by default in these stories."}},t={args:{...e.args,animate:!1,triggerText:"Region Without Animation",default:"This collapsible region has animation disabled."}},a={args:{...e.args,startOpen:!0,triggerText:"Region That Starts Open",default:"This collapsible region was open when the component was first rendered."}},s={render:n=>({components:{UluCollapsible:r},setup(){return{args:n}},template:`
      <UluCollapsible v-bind="args">
        <template #trigger="{ isOpen }">
          <span style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; color: #333;">
            <span :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">➡️</span>
            <span>{{ args.triggerText }}</span>
            <span style="margin-left: auto; font-size: 0.8em; color: #666;">{{ isOpen ? '(open)' : '(closed)' }}</span>
          </span>
        </template>
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This collapsible region has a custom toggle button.' }}</p>
        </div>
      </UluCollapsible>
    `}),args:{...e.args,triggerText:"Custom Trigger Slot",default:"This content is controlled by a toggle button that was customized using the `trigger` named slot."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'This is a standard collapsible region with animations enabled by default in these stories.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    animate: false,
    triggerText: 'Region Without Animation',
    default: 'This collapsible region has animation disabled.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    startOpen: true,
    triggerText: 'Region That Starts Open',
    default: 'This collapsible region was open when the component was first rendered.'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluCollapsible
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluCollapsible v-bind="args">
        <template #trigger="{ isOpen }">
          <span style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; color: #333;">
            <span :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">➡️</span>
            <span>{{ args.triggerText }}</span>
            <span style="margin-left: auto; font-size: 0.8em; color: #666;">{{ isOpen ? '(open)' : '(closed)' }}</span>
          </span>
        </template>
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This collapsible region has a custom toggle button.' }}</p>
        </div>
      </UluCollapsible>
    \`
  }),
  args: {
    ...Default.args,
    triggerText: 'Custom Trigger Slot',
    default: 'This content is controlled by a toggle button that was customized using the \`trigger\` named slot.'
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","NoAnimation","StartsOpen","CustomToggle"];export{s as CustomToggle,e as Default,t as NoAnimation,a as StartsOpen,p as __namedExportsOrder,i as default};
