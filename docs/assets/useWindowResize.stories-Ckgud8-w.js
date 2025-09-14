import{z as s,ay as g,az as m,a7 as z}from"./iframe-BNGjnuds.js";import"./preload-helper-BJwshlQW.js";const R={template:`
    <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px;">
      <h2>useWindowResize Demo</h2>
      <p>Resize your browser window to see the state and events change.</p>
      <hr style="margin: 1rem 0;">
      <p :style="{ color: resizing ? 'blue' : 'green', fontWeight: 'bold', transition: 'color 0.2s' }">
        <strong>Is Resizing:</strong> <code>{{ resizing }}</code>
      </p>
      <p><strong>Status:</strong> <span :style="{ color: statusColor, fontWeight: 'bold' }">{{ status }}</span></p>
      <p><strong>Resize Start Count:</strong> <code>{{ startCount }}</code></p>
      <p><strong>Resize End Count:</strong> <code>{{ endCount }}</code></p>
    </div>
  `,setup(){const{resizing:r,onResizeStart:a,onResizeEnd:i}=g(),e=s("Ready"),o=s(0),n=s(0),d=()=>{e.value="Started resizing...",o.value++},u=()=>{e.value="Finished resizing (debounced 300ms)",n.value++},c=a(d),l=i(u);m(()=>{c(),l(),console.log("Resize listeners cleaned up.")});const p=z(()=>e.value.startsWith("Started")?"blue":e.value.startsWith("Finished")?"green":"black");return{resizing:r,status:e,statusColor:p,startCount:o,endCount:n}}},C={title:"Composables/useWindowResize",component:R},t={};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,C as default};
