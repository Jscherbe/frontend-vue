import{U as r}from"./UluPlaceholderText-OA0E2nlf.js";import{_ as t}from"./UluScrollAnchors-osND2NPF.js";import{_ as n}from"./UluScrollAnchorsSection-Bhuq8_pH.js";import"./iframe-fc0isZdR.js";import"./preload-helper-BJwshlQW.js";const m={component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A system to automatically track scroll position of sections. This is the core component that provides the logic."}}},argTypes:{firstItemActive:{control:"boolean",description:"Make the first item active by default"},observerOptions:{control:"object",description:"IntersectionObserver options"}}},s=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],e={args:{firstItemActive:!0},render:o=>({components:{UluScrollAnchors:t,UluScrollAnchorsSection:n,UluPlaceholderText:r},setup(){return{args:o,sections:s}},template:`
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
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,m as default};
