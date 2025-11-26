import{renderSlot as a,unref as l}from"vue";import{d as s}from"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const o={__name:"UluAdaptiveLayout",setup(n){const r=s("uluIsMobile");return(t,u)=>!l(r)||!t.$slots.mobile?a(t.$slots,"default",{key:0}):a(t.$slots,"mobile",{key:1})}};o.__docgenInfo={exportName:"default",displayName:"UluAdaptiveLayout",description:"",tags:{},slots:[{name:"default"},{name:"mobile"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/layout/UluAdaptiveLayout.vue"]};const b={component:o,tags:["autodocs"]},e={layout:"fullscreen",render:()=>({components:{UluAdaptiveLayout:o},template:`
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
}`,...e.parameters?.docs?.source}}};const U=["Default"];export{e as Default,U as __namedExportsOrder,b as default};
