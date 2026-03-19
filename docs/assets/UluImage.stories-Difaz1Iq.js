import{_ as t}from"./UluImage-BEOmFZA7.js";import"./iframe-DXNgQF3n.js";import"./preload-helper-BJwshlQW.js";const m={component:t,tags:["autodocs"],argTypes:{src:{control:"text"},alt:{control:"text"},sources:{control:"object"},classes:{control:"object"}}},r=a=>({components:{UluImage:t},setup(){return{args:a}},template:'<UluImage v-bind="args" />'}),s=r.bind({});s.args={src:"https://picsum.photos/id/1018/800/600",alt:"A beautiful landscape",loading:"lazy",width:800,height:600,classes:{img:"my-custom-img-class"}};const e=r.bind({});e.args={src:"https://picsum.photos/id/1015/800/600",alt:"A responsive river valley",sources:[{media:"(max-width: 600px)",srcset:"https://picsum.photos/id/1015/400/300"},{media:"(max-width: 1000px)",srcset:"https://picsum.photos/id/1015/600/450"}],classes:{picture:"my-responsive-picture-class",img:"my-responsive-img-class"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluImage v-bind="args" />'
})`,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluImage v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const p=["Default","WithPictureSources"];export{s as Default,e as WithPictureSources,p as __namedExportsOrder,m as default};
