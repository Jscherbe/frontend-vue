import{au as w,z as h,a6 as x,a7 as f,aN as T,aO as B,J as S,ax as _}from"./iframe-CN1oRFkw.js";import"./preload-helper-BJwshlQW.js";const b={__name:"UluWhenBreakpoint",props:{max:String,min:String,only:String},setup(c){const o=c,a=w("uluBreakpointManager"),r=h({}),d=h([]),s=h(!1),k=x(()=>!s.value||["max","min","only"].filter(e=>o[e]).length===0?!1:Object.values(r.value).every(e=>e)),g=n=>{const e=t=>{const u=o[t];if(u){r.value[t]=!1;const v={on:()=>{r.value[t]=!0},off:()=>{r.value[t]=!1}};n.at(u)[t](v),d.value.push({name:u,direction:t,handler:v})}};e("max"),e("min"),e("only"),s.value=!0},y=()=>{a&&d.value.forEach(({name:n,direction:e,handler:t})=>{a.at(n).remove(t,e)}),d.value=[],r.value={},s.value=!1};return f(a,n=>{n&&!s.value&&g(n)},{immediate:!0}),f([()=>o.max,()=>o.min,()=>o.only],()=>{a&&s.value&&(y(),g(a))}),T(()=>{y()}),(n,e)=>k.value?B(n.$slots,"default",{key:0}):S("",!0)}};b.__docgenInfo={exportName:"default",displayName:"UluWhenBreakpoint",description:"",tags:{},props:[{name:"max",type:{name:"string"}},{name:"min",type:{name:"string"}},{name:"only",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joe/Projects/Personal/Github/frontend-vue/lib/components/layout/UluWhenBreakpoint.vue"]};const M={component:b,tags:["autodocs"],argTypes:{min:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and above."},max:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and below."},only:{control:"select",options:["none","small","medium","large"],description:"Show only at this breakpoint."}},render:c=>({components:{UluWhenBreakpoint:b},setup(){const o=_("uluBreakpointActive");return{args:c,breakpointActive:o}},template:`
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
  `})},i={args:{only:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `only` prop. The content will only be visible when the active breakpoint is exactly "medium".'}}}},l={args:{min:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `min` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'}}}},m={args:{max:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `max` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'}}}},p={args:{min:"small",max:"medium"},parameters:{docs:{description:{story:'This story demonstrates combining `min` and `max` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const j=["Only","Min","Max","Between"];export{p as Between,m as Max,l as Min,i as Only,j as __namedExportsOrder,M as default};
