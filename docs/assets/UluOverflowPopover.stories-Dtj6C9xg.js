import{c as t}from"./iframe-CfzwUndu.js";import"./preload-helper-BJwshlQW.js";const i={title:"Components/Collapsible/UluOverflowPopover",component:t,decorators:[()=>({template:`
        <div style="max-width: 400px; border: 1px solid #ccc; padding: 1rem; resize: horizontal; overflow: auto;">
          <p style="margin-top: 0;"><i>This container is resizable. Drag the bottom-right handle to see the popover appear/disappear.</i></p>
          <hr>
          <story/>
        </div>
      `})],argTypes:{triggerIcon:{control:"text"},default:{control:"text",name:"slot: default",description:"The content that may be truncated."}},render:a=>({components:{UluOverflowPopover:t},setup(){return{args:a}},template:`
      <UluOverflowPopover v-bind="args">
        {{ args.default }}
      </UluOverflowPopover>
    `})},e={args:{default:"This is a very long line of text that will most likely overflow the container, which will cause the popover trigger to appear."}},r={args:{default:"Short text."}},o={args:{...e.args,triggerIcon:"fas fa-info-circle"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'This is a very long line of text that will most likely overflow the container, which will cause the popover trigger to appear.'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'Short text.'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...OverflowingContent.args,
    triggerIcon: 'fas fa-info-circle'
  }
}`,...o.parameters?.docs?.source}}};const l=["OverflowingContent","NonOverflowingContent","CustomTriggerIcon"];export{o as CustomTriggerIcon,r as NonOverflowingContent,e as OverflowingContent,l as __namedExportsOrder,i as default};
