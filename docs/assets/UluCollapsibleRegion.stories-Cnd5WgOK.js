import{U as a}from"./iframe-DpYtvPQB.js";import"./preload-helper-BJwshlQW.js";const i={title:"Components/Collapsible/UluCollapsibleRegion",component:a,tags:["autodocs"],args:{title:"Toggle Collapsible Region",transitionHeight:!0,transitionFades:!0},argTypes:{title:{control:"text"},closeOnEscape:{control:"boolean"},startOpen:{control:"boolean"},transitionHeight:{control:"boolean"},transitionFades:{control:"boolean"},transitionTiming:{control:"text"},transitionDuration:{control:"text"},default:{control:"text",name:"slot: default",description:"The content inside the collapsible region."}},render:o=>({components:{UluCollapsibleRegion:a},setup(){return{args:o}},template:`
      <UluCollapsibleRegion v-bind="args">
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This is the collapsible content area. You can put any HTML or components here.' }}</p>
        </div>
      </UluCollapsibleRegion>
    `})},e={args:{default:"This is a standard collapsible region with transitions enabled by default in these stories."}},t={args:{...e.args,transitionHeight:!1,transitionFades:!1,title:"Region Without Transitions",default:"This collapsible region has transitions disabled."}},s={args:{...e.args,startOpen:!0,title:"Region That Starts Open",default:"This collapsible region was open when the component was first rendered."}},n={render:o=>({components:{UluCollapsibleRegion:a},setup(){return{args:o}},template:`
      <UluCollapsibleRegion v-bind="args">
        <template #toggle="{ isOpen }">
          <span style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; color: #333;">
            <span :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">➡️</span>
            <span>{{ args.title }}</span>
            <span style="margin-left: auto; font-size: 0.8em; color: #666;">{{ isOpen ? '(open)' : '(closed)' }}</span>
          </span>
        </template>
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This collapsible region has a custom toggle button.' }}</p>
        </div>
      </UluCollapsibleRegion>
    `}),args:{...e.args,title:"Custom Toggle Slot",default:"This content is controlled by a toggle button that was customized using the `toggle` named slot."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'This is a standard collapsible region with transitions enabled by default in these stories.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    transitionHeight: false,
    transitionFades: false,
    title: 'Region Without Transitions',
    default: 'This collapsible region has transitions disabled.'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    startOpen: true,
    title: 'Region That Starts Open',
    default: 'This collapsible region was open when the component was first rendered.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluCollapsibleRegion
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluCollapsibleRegion v-bind="args">
        <template #toggle="{ isOpen }">
          <span style="display: flex; align-items: center; gap: 0.5rem; font-weight: bold; color: #333;">
            <span :style="{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }">➡️</span>
            <span>{{ args.title }}</span>
            <span style="margin-left: auto; font-size: 0.8em; color: #666;">{{ isOpen ? '(open)' : '(closed)' }}</span>
          </span>
        </template>
        <div style="padding: 1rem; border-top: 1px solid #eee;">
          <p style="margin: 0;">{{ args.default || 'This collapsible region has a custom toggle button.' }}</p>
        </div>
      </UluCollapsibleRegion>
    \`
  }),
  args: {
    ...Default.args,
    title: 'Custom Toggle Slot',
    default: 'This content is controlled by a toggle button that was customized using the \`toggle\` named slot.'
  }
}`,...n.parameters?.docs?.source}}};const p=["Default","NoTransitions","StartsOpen","CustomToggle"];export{n as CustomToggle,e as Default,t as NoTransitions,s as StartsOpen,p as __namedExportsOrder,i as default};
