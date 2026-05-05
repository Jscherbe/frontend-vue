import{e as a,u as r}from"./fontawesome-DyrJdE5N.js";import{h as s}from"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";const o={__name:"UluAdaptiveLayout",setup(n){const l=s("uluIsMobile");return(t,u)=>!r(l)||!t.$slots.mobile?a(t.$slots,"default",{key:0}):a(t.$slots,"mobile",{key:1})}};o.__docgenInfo={exportName:"default",displayName:"UluAdaptiveLayout",description:"",tags:{},slots:[{name:"default"},{name:"mobile"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluAdaptiveLayout.vue"]};const m={component:o,tags:["autodocs"]},e={layout:"fullscreen",render:()=>({components:{UluAdaptiveLayout:o},template:`
      <div style="border: 1px dashed #ccc; padding: 1rem;">
        <p>Try resizing your browser window!</p>
        <UluAdaptiveLayout>
          <template #default>Default Slot</template>
          <template #mobile>Mobile Slot</template>
        </UluAdaptiveLayout>
      </div>
    `}),args:{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  layout: "fullscreen",
  render: () => ({
    components: {
      UluAdaptiveLayout
    },
    template: \`
      <div style="border: 1px dashed #ccc; padding: 1rem;">
        <p>Try resizing your browser window!</p>
        <UluAdaptiveLayout>
          <template #default>Default Slot</template>
          <template #mobile>Mobile Slot</template>
        </UluAdaptiveLayout>
      </div>
    \`
  }),
  args: {}
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,m as default};
