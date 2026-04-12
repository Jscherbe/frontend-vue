import{_ as o}from"./UluPlaceholderText-BJEIrk3D.js";import{_ as r}from"./UluScrollAnchors-B57cN1-w.js";import{_ as s}from"./UluScrollAnchorsSection-BVrwiHqA.js";import"./iframe-C4h-IfcP.js";import"./preload-helper-BJwshlQW.js";const h={component:r,tags:["autodocs"],parameters:{docs:{description:{component:"A system to automatically track scroll position of sections. This is the core component that provides the logic."}}},argTypes:{firstItemActive:{control:"boolean",description:"Make the first item active by default"},observerOptions:{control:"object",description:"IntersectionObserver options"},snapOffset:{control:"number",description:"Creates a strict 1% horizontal observation line. Accepts a percentage (number) or true (defaults to 20)."}}},l=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],e={args:{firstItemActive:!0},render:n=>({components:{UluScrollAnchors:r,UluScrollAnchorsSection:s,UluPlaceholderText:o},setup(){return{args:n,sections:l}},template:`
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
    `}),parameters:{docs:{description:{story:"This is a basic example of the scroll anchors system using the standard `UluScrollAnchorsSection`. The container has a fixed height and is scrollable."}}}},t={args:{firstItemActive:!0,snapOffset:20},render:n=>({components:{UluScrollAnchors:r,UluScrollAnchorsSection:s,UluPlaceholderText:o},setup(){return{args:n,sections:l}},template:`
      <div style="position: relative;">
        <div :style="\`position: absolute; top: \${args.snapOffset === true ? 20 : args.snapOffset}%; left: 0; right: 0; border-top: 1px dashed red; z-index: 10; pointer-events: none;\`"></div>
        <UluScrollAnchors v-bind="args" style="height: 400px; overflow-y: auto; padding: 1rem;">
          <UluScrollAnchorsSection 
            v-for="item in sections" 
            :key="item.title" 
            :title="item.title"
          >
            <h2 :style="{ margin: '0 0 1rem 0' }">{{ item.title }}</h2>
            <UluPlaceholderText/>
            <UluPlaceholderText/>
          </UluScrollAnchorsSection>
        </UluScrollAnchors>
      </div>
    `}),parameters:{docs:{description:{story:"Demonstrates the `snapOffset` prop, creating a precise 1% intersection area. A red dashed line represents the intersection offset."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    firstItemActive: true,
    snapOffset: 20
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
      <div style="position: relative;">
        <div :style="\\\`position: absolute; top: \\\${args.snapOffset === true ? 20 : args.snapOffset}%; left: 0; right: 0; border-top: 1px dashed red; z-index: 10; pointer-events: none;\\\`"></div>
        <UluScrollAnchors v-bind="args" style="height: 400px; overflow-y: auto; padding: 1rem;">
          <UluScrollAnchorsSection 
            v-for="item in sections" 
            :key="item.title" 
            :title="item.title"
          >
            <h2 :style="{ margin: '0 0 1rem 0' }">{{ item.title }}</h2>
            <UluPlaceholderText/>
            <UluPlaceholderText/>
          </UluScrollAnchorsSection>
        </UluScrollAnchors>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the \`snapOffset\` prop, creating a precise 1% intersection area. A red dashed line represents the intersection offset.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","SnapOffset"];export{e as Default,t as SnapOffset,u as __namedExportsOrder,h as default};
