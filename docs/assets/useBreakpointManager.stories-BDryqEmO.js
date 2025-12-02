import{b as r}from"./iframe-VeyoJg8x.js";import"./preload-helper-BJwshlQW.js";import"vue";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const i={template:`
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <p>This component uses the composable to get reactive breakpoint data.</p>
      <p><small>Resize your browser window to see the values change.</small></p>
      <hr>
      <p>
        <strong>Active Breakpoint:</strong>
        <code>{{ breakpointActive || 'null (initializing...)' }}</code>
      </p>
      <p>
        <strong>Resize Direction:</strong>
        <code>{{ breakpointDirection || 'null (initializing...)' }}</code>
      </p>
    </div>
  `,setup(){const{breakpointActive:o,breakpointDirection:t}=r();return{breakpointActive:o,breakpointDirection:t}}},u={component:i},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,u as default};
