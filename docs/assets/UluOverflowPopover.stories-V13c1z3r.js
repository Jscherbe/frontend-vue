import{l as c,v as h,E as w,d as _,b as p,a as x,f as y,e as d,u as O,w as u,H as b,o as f,m as U}from"./fontawesome-DyrJdE5N.js";import{k as C,_ as k}from"./iframe-DFeB4tIX.js";import{u as P}from"./useWindowResize-FJffL7Hn.js";import"./preload-helper-BJwshlQW.js";const I={class:"layout-flex-baseline"},T={class:"type-word-break"},a={__name:"UluOverflowPopover",props:{triggerIcon:String},setup(s){const{resizing:g,onResizeEnd:m}=P(),n=c(null),l=c(!1),i=()=>{b(()=>{const e=n.value;l.value=e.offsetWidth<e.scrollWidth})},v=m(i);return h(i),w(v),(e,z)=>(f(),_("div",I,[p("div",{class:"type-truncate",ref_key:"text",ref:n},[d(e.$slots,"default")],512),l.value&&!O(g)?(f(),x(C,{key:0,triggerAlt:"Show Full Text",size:"large"},{trigger:u(()=>[U(k,{icon:s.triggerIcon||"type:ellipsis"},null,8,["icon"])]),default:u(()=>[p("div",T,[d(e.$slots,"default")])]),_:3})):y("",!0)]))}};a.__docgenInfo={exportName:"default",displayName:"UluOverflowPopover",description:"",tags:{},props:[{name:"triggerIcon",description:"Default icon for overflow popover trigger",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluOverflowPopover.vue"]};const $={title:"Components/Collapsible/UluOverflowPopover",component:a,decorators:[()=>({template:`
        <div style="max-width: 400px; border: 1px solid #ccc; padding: 1rem; resize: horizontal; overflow: auto;">
          <p style="margin-top: 0;"><i>This container is resizable. Drag the bottom-right handle to see the popover appear/disappear.</i></p>
          <hr>
          <story/>
        </div>
      `})],argTypes:{triggerIcon:{control:"text"},default:{control:"text",name:"slot: default",description:"The content that may be truncated."}},render:s=>({components:{UluOverflowPopover:a},setup(){return{args:s}},template:`
      <UluOverflowPopover v-bind="args">
        {{ args.default }}
      </UluOverflowPopover>
    `})},o={args:{default:"This is a very long line of text that will most likely overflow the container, which will cause the popover trigger to appear."}},r={args:{default:"Short text."}},t={args:{...o.args,triggerIcon:"fas fa-info-circle"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'This is a very long line of text that will most likely overflow the container, which will cause the popover trigger to appear.'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    default: 'Short text.'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...OverflowingContent.args,
    triggerIcon: 'fas fa-info-circle'
  }
}`,...t.parameters?.docs?.source}}};const R=["OverflowingContent","NonOverflowingContent","CustomTriggerIcon"];export{t as CustomTriggerIcon,r as NonOverflowingContent,o as OverflowingContent,R as __namedExportsOrder,$ as default};
