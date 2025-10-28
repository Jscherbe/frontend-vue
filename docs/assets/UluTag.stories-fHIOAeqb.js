import{y as i}from"./iframe-oI00zjvw.js";import"./preload-helper-BJwshlQW.js";const g={component:i,args:{text:"Tag Label",counter:!1},argTypes:{text:{control:"text"},icon:{control:"text"},size:{control:"text"},type:{control:"text"},modifiers:{control:"text"},counter:{control:"boolean"}}},r={},a={args:{text:"Icon Tag",icon:"type:file"}},s={args:{text:"Small Tag",size:"small"}},c=l=>({components:{UluTag:i},setup(){return{args:l,modifiers:["secondary","tertiary","success","danger","warning","info","light","dark"],capitalize:n=>n.charAt(0).toUpperCase()+n.slice(1)}},template:`
    <div style="display: flex; flex-wrap: wrap; align-items: flex-start; gap: 0.5rem;">
      <UluTag :size="args.size" text="Primary" />
      <UluTag
        v-for="mod in modifiers"
        :key="mod"
        :size="args.size"
        :text="capitalize(mod)"
        :modifiers="mod"
      />
    </div>
  `}),e={render:c,argTypes:{text:{table:{disable:!0}},modifiers:{table:{disable:!0}},size:{table:{disable:!0}},icon:{table:{disable:!0}}}},t={...e,args:{size:"small"}},o={args:{text:"3",counter:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Icon Tag",
    icon: "type:file"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Small Tag",
    size: "small"
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
    size: {
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
    size: "small"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "3",
    counter: true
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","WithIcon","Small","AllModifiers","SmallModifiers","WithCounter"];export{e as AllModifiers,r as Default,s as Small,t as SmallModifiers,o as WithCounter,a as WithIcon,f as __namedExportsOrder,g as default};
