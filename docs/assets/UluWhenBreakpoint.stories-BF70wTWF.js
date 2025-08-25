import{a6 as c,ac as h,ad as u,Y as b}from"./iframe-CL-JwaCw.js";import"./preload-helper-BJwshlQW.js";const m={name:"UluWhenBreakpoint",inject:["uluBreakpointManager"],props:{max:String,min:String,only:String},data(){return{conditions:{},handlers:[],handlersSetup:!1}},computed:{shouldShow(){return!this.handlersSetup||["max","min","only"].filter(e=>this[e]).length===0?!1:Object.values(this.conditions).every(e=>e)},propsIdentifier(){return`${this.max||""}-${this.min||""}-${this.only||""}`}},watch:{uluBreakpointManager:{handler(n){n&&!this.handlersSetup&&this.setupHandlers(n)},immediate:!0},propsIdentifier(){this.uluBreakpointManager&&this.handlersSetup&&(this.tearDownHandlers(),this.setupHandlers(this.uluBreakpointManager))}},methods:{setupHandlers(n){const e=t=>{const r=this[t];if(r){this.conditions[t]=!1;const l={on:()=>{this.conditions[t]=!0},off:()=>{this.conditions[t]=!1}};n.at(r)[t](l),this.handlers.push({name:r,direction:t,handler:l})}};e("max"),e("min"),e("only"),this.handlersSetup=!0},tearDownHandlers(){this.uluBreakpointManager&&this.handlers.forEach(({name:n,direction:e,handler:t})=>{this.uluBreakpointManager.at(n).remove(t,e)}),this.handlers=[],this.conditions={},this.handlersSetup=!1}},beforeUnmount(){this.tearDownHandlers()}};function g(n,e,t,r,l,d){return d.shouldShow?h(n.$slots,"default",{key:0}):u("",!0)}const p=c(m,[["render",g]]);m.__docgenInfo={displayName:"UluWhenBreakpoint",exportName:"default",description:"",tags:{},props:[{name:"max",type:{name:"string"}},{name:"min",type:{name:"string"}},{name:"only",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/components/layout/UluWhenBreakpoint.vue"]};const k={component:p,tags:["autodocs"],argTypes:{min:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and above."},max:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and below."},only:{control:"select",options:["none","small","medium","large"],description:"Show only at this breakpoint."}},render:n=>({components:{UluWhenBreakpoint:p},setup(){const e=b("uluBreakpointActive");return{args:n,breakpointActive:e}},template:`
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
  `})},s={args:{only:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `only` prop. The content will only be visible when the active breakpoint is exactly "medium".'}}}},o={args:{min:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `min` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'}}}},a={args:{max:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `max` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'}}}},i={args:{min:"small",max:"medium"},parameters:{docs:{description:{story:'This story demonstrates combining `min` and `max` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const w=["Only","Min","Max","Between"];export{i as Between,a as Max,o as Min,s as Only,w as __namedExportsOrder,k as default};
