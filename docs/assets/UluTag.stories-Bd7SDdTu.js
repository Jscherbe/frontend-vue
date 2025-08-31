import{w as l}from"./iframe-DuX-PKOB.js";import"./preload-helper-BJwshlQW.js";const u={component:l,args:{text:"Tag Label"},argTypes:{text:{control:"text"},icon:{control:"text"},small:{control:"boolean"},modifiers:{control:"text"}}},r={},a={args:{text:"Icon Tag",icon:"fas fa-tag"}},s={args:{text:"Small Tag",small:!0}},i=n=>({components:{UluTag:l},setup(){return{args:n,modifiers:["secondary","tertiary","success","danger","warning","info","light","dark"],capitalize:o=>o.charAt(0).toUpperCase()+o.slice(1)}},template:`
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 0.5rem;">
      <UluTag :small="args.small" text="Primary" />
      <UluTag
        v-for="mod in modifiers"
        :key="mod"
        :small="args.small"
        :text="capitalize(mod)"
        :modifiers="mod"
      />
    </div>
  `}),e={render:i,argTypes:{text:{table:{disable:!0}},modifiers:{table:{disable:!0}},small:{table:{disable:!0}},icon:{table:{disable:!0}}}},t={...e,args:{small:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Icon Tag',
    icon: 'fas fa-tag'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Small Tag',
    small: true
  }
}`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: renderModifiers,
  argTypes: {
    text: {
      table: {
        disable: true
      }
    },
    modifiers: {
      table: {
        disable: true
      }
    },
    small: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...AllModifiers,
  args: {
    small: true
  }
}`,...t.parameters?.docs?.source}}};const g=["Default","WithIcon","Small","AllModifiers","SmallModifiers"];export{e as AllModifiers,r as Default,s as Small,t as SmallModifiers,a as WithIcon,g as __namedExportsOrder,u as default};
