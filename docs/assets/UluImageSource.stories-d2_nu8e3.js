import{a as s,_ as a}from"./UluImage-82esh8i6.js";import"./fontawesome-DyrJdE5N.js";const m={component:s,tags:["autodocs"],argTypes:{srcset:{control:"text"},media:{control:"text"}}},r=t=>({components:{UluImageSource:s,UluImage:a},setup(){return{args:t}},template:`
    <UluImage 
      src="https://picsum.photos/id/1015/400/300" 
      alt="A responsive river valley"
    >
      <UluImageSource v-bind="args" />
    </UluImage>
  `}),e=r.bind({});e.args={media:"(min-width: 600px)",srcset:"https://picsum.photos/id/1016/800/600"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
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
})`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
