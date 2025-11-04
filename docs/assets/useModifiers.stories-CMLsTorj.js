import{ac as s,aC as a}from"./iframe-BcloTimr.js";import"./preload-helper-BJwshlQW.js";const d={props:{variant:{type:String,default:""},isActive:{type:Boolean,default:!1},modifiers:{type:[String,Array],default:""}},template:`
    <div style="padding: 1rem; font-family: monospace; line-height: 1.6; max-width: 600px;">
      <h2>useModifiers Demo</h2>
      <p>This composable combines internal and user-provided modifiers into a BEM class list.</p>
      
      <hr style="margin: 1rem 0;">
      
      <h4>Inputs:</h4>
      <div><strong>Base Class:</strong> <code>{{ baseClass }}</code></div>
      <div><strong>Props:</strong> <code>{{ JSON.stringify({ variant, isActive, modifiers }) }}</code></div>
      <div><strong>Internal Modifiers (Computed):</strong> <code>{{ JSON.stringify(internal) }}</code></div>
      
      <hr style="margin: 1rem 0;">

      <h4>Output:</h4>
      <div><strong>Result (resolvedModifiers):</strong></div>
      <pre><code>{{ JSON.stringify(resolvedModifiers, null, 2) }}</code></pre>
      
      <hr style="margin: 1rem 0;">

      <h4>Example:</h4>
      <div :class="[baseClass, resolvedModifiers]" style="padding: 1rem; border: 2px dashed #ccc; transition: all 0.2s;">
        This div has the classes applied.
      </div>
    </div>
  `,setup(e){const r="demo-component",t=s(()=>({[e.variant]:!!e.variant,active:e.isActive})),{resolvedModifiers:o}=a({props:e,baseClass:r,internal:t});return{baseClass:r,internal:t,resolvedModifiers:o,variant:s(()=>e.variant),isActive:s(()=>e.isActive),modifiers:s(()=>e.modifiers)}}},c={title:"Composables/useModifiers",component:d,args:{variant:"primary",isActive:!1,modifiers:"rounded"},argTypes:{variant:{control:"select",options:["","primary","secondary"]},isActive:{control:"boolean"},modifiers:{control:"text",description:"User-defined modifiers (string or comma-separated)"}}},i={};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};const m=["Default"];export{i as Default,m as __namedExportsOrder,c as default};
