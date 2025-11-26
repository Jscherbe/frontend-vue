import{createElementBlock as n,openBlock as s}from"vue";import{a as r}from"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const t={},p={style:{display:"none"}};function m(i,c){return s(),n("span",p)}const o=r(t,[["render",m]]);t.__docgenInfo={displayName:"UluEmpty",description:"",tags:{},sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluEmpty.vue"]};const E={component:o,tags:["autodocs"],parameters:{docs:{description:{component:"A utility component that renders nothing visible. Useful as a placeholder or for conditional rendering where an empty element is needed."}}}},e={render:()=>({components:{UluEmpty:o},template:`
      <div>
        <p>This is some content before the UluEmpty component.</p>
        <UluEmpty />
        <p>This is some content after the UluEmpty component. You should not see any visible output from UluEmpty itself.</p>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluEmpty
    },
    template: \`
      <div>
        <p>This is some content before the UluEmpty component.</p>
        <UluEmpty />
        <p>This is some content after the UluEmpty component. You should not see any visible output from UluEmpty itself.</p>
      </div>
    \`
  }),
  args: {}
}`,...e.parameters?.docs?.source}}};const _=["Default"];export{e as Default,_ as __namedExportsOrder,E as default};
