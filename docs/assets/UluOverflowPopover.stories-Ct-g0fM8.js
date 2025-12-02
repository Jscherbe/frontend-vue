import{ref as c,onMounted as h,onUnmounted as w,createElementBlock as _,openBlock as p,createElementVNode as d,createBlock as x,createCommentVNode as y,renderSlot as u,unref as O,withCtx as f,createVNode as U,nextTick as b}from"vue";import{f as C,_ as P}from"./iframe-VeyoJg8x.js";import{u as k}from"./useWindowResize-mUunhytm.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";import"@ulu/utils/performance.js";const I={class:"layout-flex-baseline"},T={class:"type-word-break"},n={__name:"UluOverflowPopover",props:{triggerIcon:String},setup(s){const{resizing:m,onResizeEnd:g}=k(),a=c(null),l=c(!1),i=()=>{b(()=>{const e=a.value;l.value=e.offsetWidth<e.scrollWidth})},v=g(i);return h(i),w(v),(e,z)=>(p(),_("div",I,[d("div",{class:"type-truncate",ref_key:"text",ref:a},[u(e.$slots,"default")],512),l.value&&!O(m)?(p(),x(C,{key:0,triggerAlt:"Show Full Text",size:"large"},{trigger:f(()=>[U(P,{icon:s.triggerIcon||"type:ellipsis"},null,8,["icon"])]),default:f(()=>[d("div",T,[u(e.$slots,"default")])]),_:3})):y("",!0)]))}};n.__docgenInfo={exportName:"default",displayName:"UluOverflowPopover",description:"",tags:{},props:[{name:"triggerIcon",description:"Default icon for overflow popover trigger",type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluOverflowPopover.vue"]};const F={title:"Components/Collapsible/UluOverflowPopover",component:n,decorators:[()=>({template:`
        <div style="max-width: 400px; border: 1px solid #ccc; padding: 1rem; resize: horizontal; overflow: auto;">
          <p style="margin-top: 0;"><i>This container is resizable. Drag the bottom-right handle to see the popover appear/disappear.</i></p>
          <hr>
          <story/>
        </div>
      `})],argTypes:{triggerIcon:{control:"text"},default:{control:"text",name:"slot: default",description:"The content that may be truncated."}},render:s=>({components:{UluOverflowPopover:n},setup(){return{args:s}},template:`
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
}`,...t.parameters?.docs?.source}}};const A=["OverflowingContent","NonOverflowingContent","CustomTriggerIcon"];export{t as CustomTriggerIcon,r as NonOverflowingContent,o as OverflowingContent,A as __namedExportsOrder,F as default};
