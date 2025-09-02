import{a1 as t,av as g,as as m,a4 as z}from"./iframe-Nq88G_pO.js";import"./preload-helper-BJwshlQW.js";const R={template:`
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
  `,setup(){const{resizing:r,onResizeStart:a,onResizeEnd:i}=g(),e=t("Ready"),o=t(0),n=t(0),d=()=>{e.value="Started resizing...",o.value++},u=()=>{e.value="Finished resizing (debounced 300ms)",n.value++},c=a(d),l=i(u);m(()=>{c(),l(),console.log("Resize listeners cleaned up.")});const p=z(()=>e.value.startsWith("Started")?"blue":e.value.startsWith("Finished")?"green":"black");return{resizing:r,status:e,statusColor:p,startCount:o,endCount:n}}},v={title:"Composables/useWindowResize",component:R},s={};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,v as default};
