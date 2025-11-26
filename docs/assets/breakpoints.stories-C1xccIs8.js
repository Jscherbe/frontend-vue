import{inject as o}from"vue";const n={template:`
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <p>This story demonstrates the Breakpoints plugin.</p>
      <p>The plugin provides reactive values that you can inject into any component.</p>
      <p><small>Resize your browser window to see the values change.</small></p>
      <hr>
      <p>
        <strong>Is Mobile:</strong>
        <code>{{ isMobile }}</code> (True when breakpoint is 'small' or less)
      </p>
      <p>
        <strong>Active Breakpoint:</strong>
        <code>{{ breakpointActive || 'null (initializing...)' }}</code>
      </p>
      <p>
        <strong>Resize Direction:</strong>
        <code>{{ breakpointDirection || 'null (initializing...)' }}</code>
      </p>
    </div>
  `,setup(){const t=o("uluIsMobile"),i=o("uluBreakpointActive"),r=o("uluBreakpointDirection");return{isMobile:t,breakpointActive:i,breakpointDirection:r}}},a={component:n},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,a as default};
