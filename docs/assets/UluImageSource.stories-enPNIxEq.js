import{a as s,_ as r}from"./UluImage-XEwi9Lcx.js";import"./iframe-Db2mi-K0.js";import"./preload-helper-BJwshlQW.js";const c={component:s,tags:["autodocs"],argTypes:{srcset:{control:"text"},media:{control:"text"}}},a=t=>({components:{UluImageSource:s,UluImage:r},setup(){return{args:t}},template:`
    <UluImage 
      src="https://picsum.photos/id/1015/400/300" 
      alt="A responsive river valley"
    >
      <UluImageSource v-bind="args" />
    </UluImage>
  `}),e=a.bind({});e.args={media:"(min-width: 600px)",srcset:"https://picsum.photos/id/1016/800/600"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImageSource,
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluImage 
      src="https://picsum.photos/id/1015/400/300" 
      alt="A responsive river valley"
    >
      <UluImageSource v-bind="args" />
    </UluImage>
  \`
})`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,c as default};
