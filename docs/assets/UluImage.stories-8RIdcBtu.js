import{_ as r,a as c}from"./UluImage-BhD6-YTx.js";import"./iframe-Cd2AvOWl.js";import"./preload-helper-BJwshlQW.js";const i={component:r,tags:["autodocs"],argTypes:{src:{control:"text"},alt:{control:"text"},sources:{control:"object"},classes:{control:"object"}}},o=a=>({components:{UluImage:r},setup(){return{args:a}},template:'<UluImage v-bind="args" />'}),e=o.bind({});e.args={src:"https://picsum.photos/id/1018/800/600",alt:"A beautiful landscape",loading:"lazy",width:800,height:600,classes:{img:"my-custom-img-class"}};const t=o.bind({});t.args={src:"https://picsum.photos/id/1015/800/600",alt:"A responsive river valley",sources:[{media:"(max-width: 600px)",srcset:"https://picsum.photos/id/1015/400/300"},{media:"(max-width: 1000px)",srcset:"https://picsum.photos/id/1015/600/450"}],classes:{picture:"my-responsive-picture-class",img:"my-responsive-img-class"}};const s=a=>({components:{UluImage:r,UluImageSource:c},setup(){return{args:a}},template:`
    <UluImage v-bind="args">
      <UluImageSource 
        media="(max-width: 600px)"
        srcset="https://picsum.photos/id/1016/400/300"
      />
      <UluImageSource 
        media="(max-width: 1000px)"
        srcset="https://picsum.photos/id/1017/600/450"
      />
    </UluImage>
  `});s.args={src:"https://picsum.photos/id/1015/800/600",alt:"A responsive river valley (Composed)",classes:{picture:"my-responsive-picture-class",img:"my-responsive-img-class"}};s.parameters={docs:{source:{code:`
<UluImage src="https://picsum.photos/id/1018/800/600" alt="A beautiful landscape">
  <UluImageSource 
    media="(max-width: 600px)"
    srcset="https://picsum.photos/id/1016/400/300"
  />
  <UluImageSource 
    media="(max-width: 1000px)"
    srcset="https://picsum.photos/id/1017/600/450"
  />
</UluImage>
      `}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluImage v-bind="args" />'
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: '<UluImage v-bind="args" />'
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluImage,
    UluImageSource
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluImage v-bind="args">
      <UluImageSource 
        media="(max-width: 600px)"
        srcset="https://picsum.photos/id/1016/400/300"
      />
      <UluImageSource 
        media="(max-width: 1000px)"
        srcset="https://picsum.photos/id/1017/600/450"
      />
    </UluImage>
  \`
})`,...s.parameters?.docs?.source}}};const u=["Default","WithPictureSources","WithComposedSources"];export{e as Default,s as WithComposedSources,t as WithPictureSources,u as __namedExportsOrder,i as default};
