import{an as r}from"./iframe-CxylQUOp.js";import"./preload-helper-BJwshlQW.js";const i={template:`
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
  `,setup(){const{breakpointActive:o,breakpointDirection:t}=r();return{breakpointActive:o,breakpointDirection:t}}},s={component:i},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,s as default};
