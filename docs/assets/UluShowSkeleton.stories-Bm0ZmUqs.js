import{al as o,P as r}from"./iframe---2PRveq.js";import"./preload-helper-BJwshlQW.js";const c={component:o,tags:["autodocs"],argTypes:{when:{control:"boolean"}},parameters:{docs:{description:{component:"A wrapper component that shows its slot content or a skeleton state based on the `when` prop. `when=true` shows the skeleton, `when=false` shows the content. It relies on a globally available `SkeletonTextInline` component for the skeleton state."}}}},s={render:n=>({components:{UluShowSkeleton:o},setup(){const a=r(n.when);return{args:n,when:a}},template:`
      <div>
        <p class="margin-bottom-small">This component will show a skeleton when the 'when' prop is true, and the slotted content when it is false.</p>
        <button @click="when = !when" class="button button--primary margin-bottom-medium">Toggle Skeleton (current: {{ when }})</button>
        <hr class="margin-y-medium">
        <UluShowSkeleton :when="when">
          <div class="callout callout--info">
            <h3 class="h3">This is the real content</h3>
            <p>It is shown when the skeleton is not active.</p>
          </div>
        </UluShowSkeleton>
      </div>
    `})},e={...s,args:{when:!0}},t={...s,args:{when:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    when: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...Template,
  args: {
    when: false
  }
}`,...t.parameters?.docs?.source}}};const p=["SkeletonShown","ContentShown"];export{t as ContentShown,e as SkeletonShown,p as __namedExportsOrder,c as default};
