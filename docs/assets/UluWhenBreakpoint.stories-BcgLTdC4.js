import{ref as s,computed as x,watch as k,onBeforeUnmount as B,renderSlot as A,createCommentVNode as U,inject as w}from"vue";import{d as S}from"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const v={__name:"UluWhenBreakpoint",props:{max:String,min:String,only:String},setup(l){const e=l,t=S("uluBreakpointManager"),r=s({}),p=s([]),m=s(!1),T=x(()=>!m.value||["max","min","only"].filter(n=>e[n]).length===0?!1:Object.values(r.value).every(n=>n)),y=o=>{const n=i=>{const a=e[i];if(a){r.value[i]=!1;const d={on:()=>{r.value[i]=!0},off:()=>{r.value[i]=!1}};o.at(a)[i](d),p.value.push({name:a,direction:i,handler:d})}};n("max"),n("min"),n("only"),m.value=!0},f=()=>{t.value&&p.value.forEach(({name:o,direction:n,handler:i})=>{const a=t.value.at(o);if(a)try{a.remove(i,n)}catch(d){console.error(d)}}),p.value=[],r.value={},m.value=!1};return k(t,o=>{o&&!m.value&&y(o)},{immediate:!0}),k([()=>e.max,()=>e.min,()=>e.only],()=>{t.value&&m.value&&(f(),y(t.value))}),B(()=>{f()}),(o,n)=>T.value?A(o.$slots,"default",{key:0}):U("",!0)}};v.__docgenInfo={exportName:"default",displayName:"UluWhenBreakpoint",description:"",tags:{},props:[{name:"max",description:"The maximum breakpoint to show the content at.",type:{name:"string"}},{name:"min",description:"The minimum breakpoint to show the content at.",type:{name:"string"}},{name:"only",description:"Only show the content at this breakpoint.",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluWhenBreakpoint.vue"]};const D={component:v,tags:["autodocs"],argTypes:{min:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and above."},max:{control:"select",options:["none","small","medium","large"],description:"Show at this breakpoint and below."},only:{control:"select",options:["none","small","medium","large"],description:"Show only at this breakpoint."}},render:l=>({components:{UluWhenBreakpoint:v},setup(){const e=w("uluBreakpointActive");return{args:l,breakpointActive:e}},template:`
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
  `})},c={args:{only:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `only` prop. The content will only be visible when the active breakpoint is exactly "medium".'}}}},u={args:{min:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `min` prop. The content will be visible at the "medium" breakpoint and any breakpoint larger than it (e.g., large, xlarge).'}}}},b={args:{max:"medium"},parameters:{docs:{description:{story:'This story demonstrates the `max` prop. The content will be visible at the "medium" breakpoint and any breakpoint smaller than it (e.g., small, none).'}}}},h={args:{min:"small",max:"medium"},parameters:{docs:{description:{story:'This story demonstrates combining `min` and `max` props to show content within a specific range. The content will be visible from "small" to "large" breakpoints, inclusive.'}}}},g={render:()=>({components:{UluWhenBreakpoint:v},setup(){const l=w("uluBreakpointActive"),e=s("small"),t=s("medium"),r=s(null),p=x(()=>({min:e.value,max:t.value,only:r.value}));return{breakpointActive:l,min:e,max:t,only:r,dynamicArgs:p}},template:`
    <div>
      <p>This story tests the component's reactivity. Changing the props below will trigger the <code>tearDownHandlers</code> and <code>setupHandlers</code> logic.</p>
      
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; background: #f0f0f0; padding: 1rem; border-radius: 4px;">
        <div>
          <label for="min-prop">Min:</label>
          <select id="min-prop" v-model="min">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="max-prop">Max:</label>
          <select id="max-prop" v-model="max">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="only-prop">Only:</label>
          <select id="only-prop" v-model="only">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
      </div>

      <p>
        <strong>Active Breakpoint:</strong>
        <span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: #f0f0f0; border-radius: 4px;">
          {{ breakpointActive || 'loading...' }}
        </span>
      </p>
      <hr />
      <p>The component below will render its content when the conditions are met.</p>
      <UluWhenBreakpoint v-bind="dynamicArgs">
        <div style="background-color: #e6f7ff; border: 1px solid #91d5ff; color: #0050b3; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          ✅ Content is visible because the conditions are met.
          <br />
          <br />
          <code>{{ dynamicArgs }}</code>
        </div>
      </UluWhenBreakpoint>
    </div>
    `}),parameters:{docs:{description:{story:"This story demonstrates that the component correctly tears down old listeners and sets up new ones when its props change dynamically."}}},argTypes:{min:{table:{disable:!0}},max:{table:{disable:!0}},only:{table:{disable:!0}}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluWhenBreakpoint
    },
    setup() {
      const breakpointActive = inject('uluBreakpointActive');
      const min = ref('small');
      const max = ref('medium');
      const only = ref(null);
      const dynamicArgs = computed(() => ({
        min: min.value,
        max: max.value,
        only: only.value
      }));
      return {
        breakpointActive,
        min,
        max,
        only,
        dynamicArgs
      };
    },
    template: \`
    <div>
      <p>This story tests the component's reactivity. Changing the props below will trigger the <code>tearDownHandlers</code> and <code>setupHandlers</code> logic.</p>
      
      <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem; background: #f0f0f0; padding: 1rem; border-radius: 4px;">
        <div>
          <label for="min-prop">Min:</label>
          <select id="min-prop" v-model="min">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="max-prop">Max:</label>
          <select id="max-prop" v-model="max">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
        <div>
          <label for="only-prop">Only:</label>
          <select id="only-prop" v-model="only">
            <option :value="null">--</option>
            <option>none</option>
            <option>small</option>
            <option>medium</option>
            <option>large</option>
          </select>
        </div>
      </div>

      <p>
        <strong>Active Breakpoint:</strong>
        <span style="display: inline-block; padding: 0.25rem 0.5rem; background-color: #f0f0f0; border-radius: 4px;">
          {{ breakpointActive || 'loading...' }}
        </span>
      </p>
      <hr />
      <p>The component below will render its content when the conditions are met.</p>
      <UluWhenBreakpoint v-bind="dynamicArgs">
        <div style="background-color: #e6f7ff; border: 1px solid #91d5ff; color: #0050b3; padding: 1rem; margin-top: 1rem; border-radius: 4px;">
          ✅ Content is visible because the conditions are met.
          <br />
          <br />
          <code>{{ dynamicArgs }}</code>
        </div>
      </UluWhenBreakpoint>
    </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates that the component correctly tears down old listeners and sets up new ones when its props change dynamically.'
      }
    }
  },
  argTypes: {
    min: {
      table: {
        disable: true
      }
    },
    max: {
      table: {
        disable: true
      }
    },
    only: {
      table: {
        disable: true
      }
    }
  }
}`,...g.parameters?.docs?.source}}};const N=["Only","Min","Max","Between","DynamicProps"];export{h as Between,g as DynamicProps,b as Max,u as Min,c as Only,N as __namedExportsOrder,D as default};
