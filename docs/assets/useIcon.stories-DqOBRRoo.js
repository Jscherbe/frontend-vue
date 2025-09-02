import{am as d,an as l}from"./iframe-B7NcqnH3.js";import"./preload-helper-BJwshlQW.js";const m={template:`
    <div style="padding: 1rem; font-family: monospace; line-height: 1.6;">
      <h2>useIcon Demo</h2>
      <p>This composable provides helper functions for handling FontAwesome icon definitions.</p>
      
      <hr style="margin: 1.5rem 0;">

      <h3>1. getIconDefinition(key)</h3>
      <p>Looks up a definition from a predefined 'defaultIcons' object.</p>
      <p><strong>Default Icons:</strong> <br/><code>{{ JSON.stringify(defaultIcons, null, 2) }}</code></p>
      <p><strong>Result for 'success':</strong> <br/><code>{{ JSON.stringify(successIconDef) }}</code></p>
      <p><strong>Result for 'failure':</strong> <br/><code>{{ JSON.stringify(failureIconDef) }}</code></p>

      <hr style="margin: 1.5rem 0;">

      <h3>2. getIconProps(definition)</h3>
      <p>Converts a definition into a props object for an icon component.</p>
      <p><strong>Input (String):</strong> <code>'fas fa-home'</code></p>
      <p><strong>Result:</strong> <code>{{ JSON.stringify(propsFromString) }}</code></p>
      <p><strong>Input (Array):</strong> <code>['fas', 'user']</code></p>
      <p><strong>Result:</strong> <code>{{ JSON.stringify(propsFromArray) }}</code></p>

      <hr style="margin: 1.5rem 0;">

      <h3>3. getClassesFromDefinition(definition)</h3>
      <p>Converts a definition into a CSS class string.</p>
      <p><strong>Input (String):</strong> <code>'fas fa-cog'</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromString }}'</code></p>
      <p><strong>Input (Array):</strong> <code>['fas', 'heart']</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromArray }}'</code></p>
      <p><strong>Input (Object):</strong> <code>{ icon: ['fas', 'star'] }</code></p>
      <p><strong>Result:</strong> <code>'{{ classesFromObject }}'</code></p>
    </div>
  `,setup(){const t=d({success:"fas fa-check-circle",failure:["fas","times-circle"]}),{getIconDefinition:e,getIconProps:r,getClassesFromDefinition:s}=l(),n=e("success"),c=e("failure"),i=r("fas fa-home"),a=r(["fas","user"]),p=s("fas fa-cog"),f=s(["fas","heart"]),g=s({icon:["fas","star"]});return{defaultIcons:t,successIconDef:n,failureIconDef:c,propsFromString:i,propsFromArray:a,classesFromString:p,classesFromArray:f,classesFromObject:g}}},I={title:"Composables/useIcon",component:m},o={};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const y=["Default"];export{o as Default,y as __namedExportsOrder,I as default};
