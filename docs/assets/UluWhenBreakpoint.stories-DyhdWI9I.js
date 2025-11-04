import{T as r,V as i}from"./iframe-2PTns7KC.js";import"./preload-helper-BJwshlQW.js";const l={component:r,tags:["autodocs"],argTypes:{min:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and above."},max:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and below."},only:{control:"select",options:["none","small","medium","large"],description:"Show only at this breakpoint."}},render:s=>({components:{UluWhenBreakpoint:r},setup(){const a=i("uluBreakpointActive");return{args:s,breakpointActive:a}},template:`
    <div>
      <p>Resize your browser or use the Storybook viewport addon to see the content below change.</p>
      <p>
        <strong>Active Breakpoint:</strong>
        <span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: #f0f0f0; border-radius: 4px;">
          {{ breakpointActive || 'loading...' }}
        </span>
      </p>
      <hr />
      <p>The component below will render its content when the conditions are met.</p>
      <UluWhenBreakpoint v-bind="args">
        <div style="background-color: #e6f7ff; border: 1px solid #91d5ff; color: #0050b3; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          ✅ Content is visible because the conditions are met.
          <br />
          <br />
          <code>{{ args }}</code>
        </div>
      </UluWhenBreakpoint>
    </div>
  `})},e={args:{only:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `only` prop. The content will only be visible when the active breakpoint is exactly "medium".'}}}},n={args:{min:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `min` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'}}}},t={args:{max:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `max` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'}}}},o={args:{min:"small",max:"medium"},parameters:{docs:{description:{story:'This story demonstrates combining `min` and `max` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    only: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`only\` prop. The content will only be visible when the active breakpoint is exactly "medium".'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    min: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`min\` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    max: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`max\` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    min: 'small',
    max: 'medium'
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates combining \`min\` and \`max\` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const c=["Only","Min","Max","Between"];export{o as Between,t as Max,n as Min,e as Only,c as __namedExportsOrder,l as default};
