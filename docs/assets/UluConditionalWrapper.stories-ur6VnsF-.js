import{_ as r}from"./UluConditionalWrapper-Be8aFcO7.js";import"./iframe-Dmbn_XAG.js";import"./preload-helper-BJwshlQW.js";const i={component:r,tags:["autodocs"],argTypes:{is:{control:"text",description:"The underlying component or HTML tag to render."},unwrapped:{control:"boolean",description:"If true, the wrapper will not be rendered."}}},n={args:{unwrapped:!1,is:"div"},render:e=>({components:{UluConditionalWrapper:r},setup(){return{args:e}},template:`
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content inside the wrapper. The wrapper has a dashed border.</p>
      </UluConditionalWrapper>
    `})},a={args:{unwrapped:!0,is:"div"},render:e=>({components:{UluConditionalWrapper:r},setup(){return{args:e}},template:`
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content. The wrapper (and its border) should be gone.</p>
      </UluConditionalWrapper>
    `}),parameters:{docs:{description:{story:"When `unwrapped` is true, the `style` attribute (and other non-prop attributes) are not rendered because the wrapper element is removed."}}}},t={args:{unwrapped:!1,is:"section"},render:e=>({components:{UluConditionalWrapper:r},setup(){return{args:e}},template:`
      <UluConditionalWrapper v-bind="args" style="background: #f0f0f0; padding: 1rem;">
        <h2>Section Wrapper</h2>
        <p>I am inside a <code>&lt;section&gt;</code> tag.</p>
      </UluConditionalWrapper>
    `})},p={args:{unwrapped:!1,is:"button"},render:e=>({components:{UluConditionalWrapper:r},setup(){return{args:e,handleClick:()=>alert("Wrapper clicked!")}},template:`
      <UluConditionalWrapper 
        v-bind="args" 
        @click="handleClick"
        class="example-class"
        style="padding: 1rem; cursor: pointer; background-color: #e6f7ff; border: 1px solid #1890ff;"
      >
        <strong>Click me!</strong>
        <p>I have a click listener and custom styles attached to the wrapper.</p>
      </UluConditionalWrapper>
    `}),parameters:{docs:{description:{story:"Attributes and event listeners are bound to the wrapper element. If you toggle `unwrapped` to true, the click listener and styles will disappear."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    unwrapped: false,
    is: 'div'
  },
  render: args => ({
    components: {
      UluConditionalWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content inside the wrapper. The wrapper has a dashed border.</p>
      </UluConditionalWrapper>
    \`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    unwrapped: true,
    is: 'div'
  },
  render: args => ({
    components: {
      UluConditionalWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluConditionalWrapper v-bind="args" style="border: 2px dashed #ccc; padding: 1rem;">
        <p>I am content. The wrapper (and its border) should be gone.</p>
      </UluConditionalWrapper>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'When \`unwrapped\` is true, the \`style\` attribute (and other non-prop attributes) are not rendered because the wrapper element is removed.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    unwrapped: false,
    is: 'section'
  },
  render: args => ({
    components: {
      UluConditionalWrapper
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluConditionalWrapper v-bind="args" style="background: #f0f0f0; padding: 1rem;">
        <h2>Section Wrapper</h2>
        <p>I am inside a <code>&lt;section&gt;</code> tag.</p>
      </UluConditionalWrapper>
    \`
  })
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    unwrapped: false,
    is: 'button'
  },
  render: args => ({
    components: {
      UluConditionalWrapper
    },
    setup() {
      return {
        args,
        handleClick: () => alert('Wrapper clicked!')
      };
    },
    template: \`
      <UluConditionalWrapper 
        v-bind="args" 
        @click="handleClick"
        class="example-class"
        style="padding: 1rem; cursor: pointer; background-color: #e6f7ff; border: 1px solid #1890ff;"
      >
        <strong>Click me!</strong>
        <p>I have a click listener and custom styles attached to the wrapper.</p>
      </UluConditionalWrapper>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Attributes and event listeners are bound to the wrapper element. If you toggle \`unwrapped\` to true, the click listener and styles will disappear.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const l=["Default","Unwrapped","CustomElement","WithEventsAndAttrs"];export{t as CustomElement,n as Default,a as Unwrapped,p as WithEventsAndAttrs,l as __namedExportsOrder,i as default};
