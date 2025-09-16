import{aa as t,w as n,ab as c,ac as s}from"./iframe-cmUWbRwO.js";import"./preload-helper-BJwshlQW.js";const a={component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A system to automatically track scroll position of sections. This is the core component that provides the logic."}}},argTypes:{firstItemActive:{control:"boolean",description:"Make the first item active by default"},observerOptions:{control:"object",description:"IntersectionObserver options"}}},i=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],e={args:{firstItemActive:!0},render:o=>({components:{UluScrollAnchors:t,UluScrollAnchorsSection:s,UluPlaceholderText:c,UluTag:n},setup(){return{args:o,sections:i}},template:`
      <UluScrollAnchors v-bind="args">
        <UluScrollAnchorsSection 
          v-for="section in sections" 
          :key="section.title" 
          :title="section.title"
          v-slot="{ section }"
        >
          <p>
            <UluTag 
              :text="section?.active ? 'Active' : 'Inactive'"
              :type="section?.active ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    `}),parameters:{docs:{description:{story:"Basic example of scroll anchors without navigation. The sections will become active as you scroll, but there is no visual indicator in this example (you can check the Vue devtools to see the `active` property change on the section instances)."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    firstItemActive: true
  },
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsSection,
      UluPlaceholderText,
      UluTag
    },
    setup() {
      return {
        args,
        sections
      };
    },
    template: \`
      <UluScrollAnchors v-bind="args">
        <UluScrollAnchorsSection 
          v-for="section in sections" 
          :key="section.title" 
          :title="section.title"
          v-slot="{ section }"
        >
          <p>
            <UluTag 
              :text="section?.active ? 'Active' : 'Inactive'"
              :type="section?.active ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic example of scroll anchors without navigation. The sections will become active as you scroll, but there is no visual indicator in this example (you can check the Vue devtools to see the \`active\` property change on the section instances).'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,a as default};
