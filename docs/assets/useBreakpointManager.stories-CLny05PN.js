import{f as r}from"./iframe-DFeB4tIX.js";import"./preload-helper-BJwshlQW.js";import"./fontawesome-DyrJdE5N.js";const i={template:`
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
  `,setup(){const{breakpointActive:o,breakpointDirection:t}=r();return{breakpointActive:o,breakpointDirection:t}}},p={component:i},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,p as default};
