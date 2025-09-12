import{x as i}from"./iframe--wWzAahP.js";import"./preload-helper-BJwshlQW.js";const f={component:i,tags:["autodocs"]},n=new File([new ArrayBuffer(12345)],"example-document.pdf",{type:"application/pdf"}),e={args:{file:n}},m=new File([new ArrayBuffer(500)],"small-file.txt",{type:"text/plain"}),r={args:{file:m}},c=new File([new ArrayBuffer(5e6)],"large-video.mp4",{type:"video/mp4"}),a={args:{file:c}},s={args:{file:n,noFileSize:!0}},l={args:{file:n,icon:"star"}},o={render:t=>({components:{UluFileDisplay:i},setup(){return{args:t}},template:`
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    `}),args:{file:n}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileSmall
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFileLarge
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    noFileSize: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    file: mockFile,
    icon: "star"
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluFileDisplay
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluFileDisplay v-bind="args">
        <template #default="{ fileName, fileSize }">
          <em>{{ fileName }} ({{ fileSize }})</em>
        </template>
      </UluFileDisplay>
    \`
  }),
  args: {
    file: mockFile
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","SmallFile","LargeFile","NoFileSize","CustomIcon","CustomSlot"];export{l as CustomIcon,o as CustomSlot,e as Default,a as LargeFile,s as NoFileSize,r as SmallFile,d as __namedExportsOrder,f as default};
