import{h as c,v as h,T as w,e as _,k as p,a as x,d as y,r as d,b as O,w as u,U,a0 as b,o as g,l as C,_ as k}from"./iframe-C8y-FkMF.js";import{u as P}from"./useWindowResize-D9P6N3hS.js";import"./preload-helper-BJwshlQW.js";const T={class:"layout-flex-baseline"},I={class:"type-word-break"},a={__name:"UluOverflowPopover",props:{triggerIcon:String},setup(s){const{resizing:f,onResizeEnd:m}=P(),n=c(null),l=c(!1),i=()=>{b(()=>{const e=n.value;l.value=e.offsetWidth<e.scrollWidth})},v=m(i);return h(i),w(v),(e,z)=>(g(),_("div",T,[p("div",{class:"type-truncate",ref_key:"text",ref:n},[d(e.$slots,"default")],512),l.value&&!O(f)?(g(),x(U,{key:0,triggerAlt:"Show Full Text",size:"large"},{trigger:u(()=>[C(k,{icon:s.triggerIcon||"type:ellipsis"},null,8,["icon"])]),default:u(()=>[p("div",I,[d(e.$slots,"default")])]),_:3})):y("",!0)]))}};a.__docgenInfo={exportName:"default",displayName:"UluOverflowPopover",description:"",tags:{},props:[{name:"triggerIcon",description:"Default icon for overflow popover trigger",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluOverflowPopover.vue"]};const $={title:"Components/Collapsible/UluOverflowPopover",component:a,decorators:[()=>({template:`
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
}`,...t.parameters?.docs?.source}}};const E=["OverflowingContent","NonOverflowingContent","CustomTriggerIcon"];export{t as CustomTriggerIcon,r as NonOverflowingContent,o as OverflowingContent,E as __namedExportsOrder,$ as default};
