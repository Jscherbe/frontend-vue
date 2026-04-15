import{_ as k}from"./UluScrollAnchors-Br3z1AmV.js";import{_ as R}from"./UluScrollAnchorsSection-CLLoTq1k.js";import{q as f,A as V,a1 as E,c as U,L as $,a as M,f as P,l as W,w as q,g as x,r as z,o as _,b as C,d as H,F as j,h as F,n as w,e as Q,j as Y,t as G}from"./iframe-Cd2AvOWl.js";import{r as J}from"./performance-BDJZxRVF.js";import{u as K}from"./useScrollAnchorSections-N_2sBF8c.js";import"./preload-helper-BJwshlQW.js";const X=["href"],O={__name:"UluScrollAnchorsNavAnimated",props:{element:{type:String,default:"nav"},railWidth:{type:Number,default:3},trimRailToCenters:{type:Boolean},railStartOffset:{type:Number,default:0},railEndOffset:{type:Number,default:0},indicatorWidth:{type:Number,default:null},indicatorHeight:{type:Number,default:null},indicatorAlignment:{type:String,default:"center"},indicatorAlignmentOffset:{type:Number,default:0}},setup(c){const a=c,e=K(),d=f(null),h=f({}),S=f(!1),b=f(0);let u=null;V(()=>{d.value&&(u=new ResizeObserver(()=>{b.value++}),u.observe(d.value))}),E(()=>{u&&(u.disconnect(),u=null)});function I(t){const n=h.value[t];if(!n)return null;const{offsetTop:i,offsetHeight:r}=n,m=a.indicatorHeight!=null,B=a.indicatorWidth??a.railWidth,L=m?a.indicatorHeight:r;let T=i;return a.indicatorAlignment==="center"&&(T=i+r/2-L/2),T+=a.indicatorAlignmentOffset,{y:T,height:L,width:B}}const s=U(()=>{if(b.value,!e||!e.value||!e.value.length)return!1;const t=e.value.findIndex(n=>n.active);return t===-1?!1:I(t)||!1}),N=U(()=>{if(b.value,!a.trimRailToCenters)return{};if(!e||!e.value||e.value.length<1)return{};const t=I(0),n=I(e.value.length-1);if(!t||!n)return{};let i=t.y+t.height/2,r=n.y+n.height/2;i+=a.railStartOffset,r+=a.railEndOffset;const m=Math.max(0,r-i);return{"--ulu-sa-nav-rail-top":`${i}px`,"--ulu-sa-nav-rail-height":`${m}px`}});$(s,t=>{t&&!S.value&&J(()=>{S.value=!0})});function D(t,n){n&&(h.value[t]=n)}return(t,n)=>W(e)&&W(e).length?(_(),M(z(c.element),{key:0,class:"scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated",style:x({"--ulu-sa-nav-rail-width":`${c.railWidth}px`})},{default:q(()=>[C("ul",{class:"scroll-anchors-nav-animated__rail",ref_key:"listRef",ref:d,style:x(N.value)},[(_(!0),H(j,null,F(W(e),(i,r)=>(_(),H("li",{key:r,class:w({"is-active":i.active})},[C("a",{class:w({"is-active":i.active}),ref_for:!0,ref:m=>D(r,m),href:`#${i.titleId}`},[Q(t.$slots,"default",{item:i,index:r},()=>[Y(G(i.title),1)])],10,X)],2))),128))],4),C("div",{class:w(["scroll-anchors-nav-animated__indicator",{"scroll-anchors-nav-animated__indicator--can-transition":S.value}]),style:x({opacity:s.value?"1":"0",transform:`translateY(${s.value?s.value.y:0}px)`,height:`${s.value?s.value.height:0}px`,width:`${s.value?s.value.width:0}px`})},null,6)]),_:3},8,["style"])):P("",!0)}};O.__docgenInfo={exportName:"default",displayName:"UluScrollAnchorsNavAnimated",description:"",tags:{},props:[{name:"element",description:"The HTML element to use for the navigation root",type:{name:"string"},defaultValue:{func:!1,value:'"nav"'}},{name:"railWidth",description:"The width of the navigation rail",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"trimRailToCenters",description:"Dynamically trims the rail to span exactly from the center of the first indicator to the center of the last indicator. Disabled by default",type:{name:"boolean"}},{name:"railStartOffset",description:"Pixel offset for the start (top) of the dynamic rail.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"railEndOffset",description:"Pixel offset for the end (bottom) of the dynamic rail.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"indicatorWidth",description:"The width of the indicator, defaults to railWidth",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"indicatorHeight",description:"If set, creates a static height, centered indicator",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"indicatorAlignment",description:"Vertical alignment of the indicator relative to the link",type:{name:"string"},defaultValue:{func:!1,value:'"center"'}},{name:"indicatorAlignmentOffset",description:"Pixel offset for the indicator's vertical alignment",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/systems/scroll-anchors/UluScrollAnchorsNavAnimated.vue"]};const dt={component:O,tags:["autodocs"],parameters:{docs:{description:{component:"Animated navigation for the Scroll Anchors system."}}},argTypes:{railWidth:{control:"number",description:"The width of the navigation rail in pixels."},indicatorWidth:{control:"number",description:"The width of the indicator. Defaults to railWidth."},indicatorHeight:{control:"number",description:"If set, creates a static height indicator."},indicatorAlignment:{control:"select",options:["center","top"],description:"Vertical alignment of the indicator."},indicatorAlignmentOffset:{control:"number",description:"Pixel offset for the indicator's vertical alignment."},debug:{control:"boolean",description:"Enable IntersectionObserver debugging to the console."},deactivateLastItem:{control:"boolean",description:"If true, the last section will deactivate when scrolling past its bounding box. Must be passed to UluScrollAnchors provider."}}},Z="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",tt=[{title:"Introduction is a long title for testing"},{title:"A Much Longer Title That Will Definitely Wrap to a Second Line"},{title:"Short"},{title:"Another Section"},{title:"This Title is Also Quite Long to Ensure Wrapping and Alignment Testing"},{title:"Conclusion is a long title for testing"}],et={height:"700px",overflow:"auto",backgroundColor:"teal",padding:"1rem"},nt={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start",backgroundColor:"white"},it={position:"sticky",top:"20px"},l=c=>({components:{UluScrollAnchors:k,UluScrollAnchorsSection:R,UluScrollAnchorsNavAnimated:O},setup(){const{firstItemActive:a,debug:e,deactivateLastItem:d,...h}=c;return{firstItemActive:a,debug:e,deactivateLastItem:d,navArgs:h,sections:tt,lipsum:Z,gridStyles:nt,navStyle:it,containerStyles:et}},template:`
    <UluScrollAnchors
      :firstItemActive="firstItemActive"
      :debug="debug"
      :deactivateLastItem="deactivateLastItem"
      :style="containerStyles"
    >
      <div :style="gridStyles">
        <div :style="navStyle">
          <UluScrollAnchorsNavAnimated v-bind="navArgs" />
        </div>
        <div>
          <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
            <p>{{ lipsum }}</p>
            <p>{{ lipsum }}</p>
          </UluScrollAnchorsSection>
          <div style="height: 1000px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.5);">
            Scroll space to test last item
          </div>
        </div>
      </div>
    </UluScrollAnchors>
  `}),o={name:"Bar Indicator (Default)",args:{firstItemActive:!0,railWidth:3,indicatorWidth:3,indicatorHeight:null,indicatorAlignment:"top",indicatorAlignmentOffset:0},render:l},p={name:"Static Height Indicator",args:{...o.args,indicatorHeight:12,indicatorWidth:8,indicatorAlignment:"center"},render:l},g={name:"Static Indicator With Top Alignment",args:{...o.args,indicatorHeight:12,indicatorWidth:10,indicatorAlignment:"top",indicatorAlignmentOffset:4,debug:!0},render:l},v={name:"Triangle Indicator (Center Aligned)",parameters:{docs:{description:{story:"This component has overriding CSS changes to demonstrate a custom shape indicator but this would normally be configured in the SCSS stylesheet via variables."}}},args:{...o.args,trimRailToCenters:!0,indicatorHeight:16,indicatorWidth:10,indicatorAlignment:"center",class:"ulu-demo-scroll-anchor-indicator-triangle"},render:l},y={name:"Triangle Indicator (Top Aligned)",parameters:{docs:{description:{story:"Demonstrates a custom shape indicator aligned to the top of the item. Notice how the rail trims correctly."}}},args:{...o.args,trimRailToCenters:!0,indicatorHeight:16,indicatorWidth:10,indicatorAlignment:"top",railStartOffset:-4,railEndOffset:8,class:"ulu-demo-scroll-anchor-indicator-triangle"},render:l},A={name:"Deactivate Last Item",parameters:{docs:{description:{story:"Demonstrates the `deactivateLastItem` prop on the `UluScrollAnchors` provider. When enabled, scrolling past the bottom of the last section into the spacer space will turn off the indicator."}}},args:{...o.args,deactivateLastItem:!0},render:l};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Bar Indicator (Default)",
  args: {
    firstItemActive: true,
    railWidth: 3,
    indicatorWidth: 3,
    indicatorHeight: null,
    indicatorAlignment: 'top',
    indicatorAlignmentOffset: 0
  },
  render
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Static Height Indicator",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 8,
    indicatorAlignment: 'center'
  },
  render
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Static Indicator With Top Alignment",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 10,
    indicatorAlignment: 'top',
    indicatorAlignmentOffset: 4,
    debug: true
  },
  render
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Triangle Indicator (Center Aligned)",
  parameters: {
    docs: {
      description: {
        story: 'This component has overriding CSS changes to demonstrate a custom shape indicator but this would normally be configured in the SCSS stylesheet via variables.'
      }
    }
  },
  args: {
    ...BarIndicator.args,
    trimRailToCenters: true,
    indicatorHeight: 16,
    indicatorWidth: 10,
    indicatorAlignment: 'center',
    class: 'ulu-demo-scroll-anchor-indicator-triangle'
  },
  render
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Triangle Indicator (Top Aligned)",
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a custom shape indicator aligned to the top of the item. Notice how the rail trims correctly.'
      }
    }
  },
  args: {
    ...BarIndicator.args,
    trimRailToCenters: true,
    indicatorHeight: 16,
    indicatorWidth: 10,
    indicatorAlignment: 'top',
    railStartOffset: -4,
    railEndOffset: 8,
    // debug: true,
    class: 'ulu-demo-scroll-anchor-indicator-triangle'
  },
  render
}`,...y.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Deactivate Last Item",
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the \`deactivateLastItem\` prop on the \`UluScrollAnchors\` provider. When enabled, scrolling past the bottom of the last section into the spacer space will turn off the indicator.'
      }
    }
  },
  args: {
    ...BarIndicator.args,
    deactivateLastItem: true
  },
  render
}`,...A.parameters?.docs?.source}}};const ut=["BarIndicator","StaticIndicator","StaticIndicatorWithTopAlignment","TriangleIndicatorCenter","TriangleIndicatorTop","DeactivateLastItem"];export{o as BarIndicator,A as DeactivateLastItem,p as StaticIndicator,g as StaticIndicatorWithTopAlignment,v as TriangleIndicatorCenter,y as TriangleIndicatorTop,ut as __namedExportsOrder,dt as default};
