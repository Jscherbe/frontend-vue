import{ae as t,H as n,af as r}from"./iframe-CBR87ZgS.js";import"./preload-helper-BJwshlQW.js";const i={component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A system to automatically track scroll position of sections. This is the core component that provides the logic."}}},argTypes:{firstItemActive:{control:"boolean",description:"Make the first item active by default"},observerOptions:{control:"object",description:"IntersectionObserver options"}}},s=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],e={args:{firstItemActive:!0},render:o=>({components:{UluScrollAnchors:t,UluScrollAnchorsSection:r,UluPlaceholderText:n},setup(){return{args:o,sections:s}},template:`
      <UluScrollAnchors v-bind="args" style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
        >
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    `}),parameters:{docs:{description:{story:"This is a basic example of the scroll anchors system using the standard `UluScrollAnchorsSection`. The container has a fixed height and is scrollable."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    firstItemActive: true
  },
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsSection,
      UluPlaceholderText
    },
    setup() {
      return {
        args,
        sections
      };
    },
    template: \`
      <UluScrollAnchors v-bind="args" style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
        >
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This is a basic example of the scroll anchors system using the standard \`UluScrollAnchorsSection\`. The container has a fixed height and is scrollable.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const a=["Default"];export{e as Default,a as __namedExportsOrder,i as default};
