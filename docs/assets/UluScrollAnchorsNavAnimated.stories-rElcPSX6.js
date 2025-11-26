import{_ as N}from"./UluScrollAnchors-DVTsWm9y.js";import{_ as k}from"./UluScrollAnchorsSection-BdlBYdht.js";import{ref as p,computed as w,watch as V,createBlock as O,createCommentVNode as B,unref as g,openBlock as v,resolveDynamicComponent as C,normalizeStyle as I,withCtx as L,createElementVNode as A,createElementBlock as W,Fragment as $,renderList as D,normalizeClass as S,renderSlot as E,createTextVNode as q,toDisplayString as P}from"vue";import{runAfterFramePaint as F}from"@ulu/utils/browser/performance.js";import{u as R}from"./useScrollAnchorSections-M0YNMp2d.js";import"@ulu/utils/string.js";import"@ulu/utils/browser/dom.js";const j={class:"scroll-anchors-nav-animated__rail"},z=["href"],y={__name:"UluScrollAnchorsNavAnimated",props:{element:{type:String,default:"nav"},railWidth:{type:Number,default:3},indicatorWidth:{type:Number,default:null},indicatorHeight:{type:Number,default:null},indicatorAlignment:{type:String,default:"center"},indicatorAlignmentOffset:{type:Number,default:0}},setup(c){const e=c,t=R(),s=p({}),m=p(!1),x=p(null),i=w(()=>{if(!t||!t.value||!t.value.length)return!1;const n=t.value.findIndex(H=>H.active);if(n===-1)return!1;const r=s.value[n];if(!r)return!1;const{offsetTop:a,offsetHeight:o}=r,f=e.indicatorHeight!=null,U=e.indicatorWidth??e.railWidth,_=f?e.indicatorHeight:o;let h=a;return e.indicatorAlignment==="center"&&(h=a+o/2-_/2),h+=e.indicatorAlignmentOffset,{y:h,height:_,width:U}});V(i,n=>{n&&!m.value&&F(()=>{m.value=!0})});function T(n,r){r&&(s.value[n]=r)}return(n,r)=>g(t)&&g(t).length?(v(),O(C(c.element),{key:0,class:"scroll-anchors__nav scroll-anchors__nav--animated scroll-anchors-nav-animated",style:I({"--ulu-sa-nav-rail-width":`${c.railWidth}px`})},{default:L(()=>[A("ul",j,[(v(!0),W($,null,D(g(t),(a,o)=>(v(),W("li",{key:o,class:S({"is-active":a.active})},[A("a",{class:S({"is-active":a.active}),ref_for:!0,ref:f=>T(o,f),href:`#${a.titleId}`},[E(n.$slots,"default",{item:a,index:o},()=>[q(P(a.title),1)])],10,z)],2))),128))]),A("div",{class:S(["scroll-anchors-nav-animated__indicator",{"scroll-anchors-nav-animated__indicator--can-transition":m.value}]),ref_key:"indicator",ref:x,style:I({opacity:i.value?"1":"0",transform:`translateY(${i.value?i.value.y:0}px)`,height:`${i.value?i.value.height:0}px`,width:`${i.value?i.value.width:0}px`})},null,6)]),_:3},8,["style"])):B("",!0)}};y.__docgenInfo={exportName:"default",displayName:"UluScrollAnchorsNavAnimated",description:"",tags:{},props:[{name:"element",description:"The HTML element to use for the navigation root",type:{name:"string"},defaultValue:{func:!1,value:'"nav"'}},{name:"railWidth",description:"The width of the navigation rail",type:{name:"number"},defaultValue:{func:!1,value:"3"}},{name:"indicatorWidth",description:"The width of the indicator, defaults to railWidth",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"indicatorHeight",description:"If set, creates a static height, centered indicator",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"indicatorAlignment",description:"Vertical alignment of the indicator relative to the link",type:{name:"string"},defaultValue:{func:!1,value:"'center'"}},{name:"indicatorAlignmentOffset",description:"Pixel offset for the indicator's vertical alignment",type:{name:"number"},defaultValue:{func:!1,value:"0"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/systems/scroll-anchors/UluScrollAnchorsNavAnimated.vue"]};const at={component:y,tags:["autodocs"],parameters:{docs:{description:{component:"Animated navigation for the Scroll Anchors system."}}},argTypes:{railWidth:{control:"number",description:"The width of the navigation rail in pixels."},indicatorWidth:{control:"number",description:"The width of the indicator. Defaults to railWidth."},indicatorHeight:{control:"number",description:"If set, creates a static height indicator."},indicatorAlignment:{control:"select",options:["center","top"],description:"Vertical alignment of the indicator."},indicatorAlignmentOffset:{control:"number",description:"Pixel offset for the indicator's vertical alignment."},debug:{control:"boolean",description:"Enable IntersectionObserver debugging to the console."}}},M="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",Q=[{title:"Introduction"},{title:"A Much Longer Title That Will Definitely Wrap to a Second Line"},{title:"Short"},{title:"Another Section"},{title:"This Title is Also Quite Long to Ensure Wrapping and Alignment Testing"},{title:"Conclusion"}],Y={height:"700px",overflow:"auto",backgroundColor:"teal",padding:"1rem"},G={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start",backgroundColor:"white"},J={position:"sticky",top:"20px"},b=c=>({components:{UluScrollAnchors:N,UluScrollAnchorsSection:k,UluScrollAnchorsNavAnimated:y},setup(){const{firstItemActive:e,debug:t,...s}=c;return{firstItemActive:e,debug:t,navArgs:s,sections:Q,lipsum:M,gridStyles:G,navStyle:J,containerStyles:Y}},template:`
    <UluScrollAnchors
      :firstItemActive="firstItemActive"
      :debug="debug"
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
        </div>
      </div>
    </UluScrollAnchors>
  `}),l={name:"Bar Indicator (Default)",args:{firstItemActive:!0,railWidth:3,indicatorWidth:3,indicatorHeight:null,indicatorAlignment:"top",indicatorAlignmentOffset:0},render:b},d={name:"Static Height Indicator",args:{...l.args,indicatorHeight:12,indicatorWidth:8,indicatorAlignment:"center"},render:b},u={name:"Static Indicator With Top Alignment",args:{...l.args,indicatorHeight:12,indicatorWidth:10,indicatorAlignment:"top",indicatorAlignmentOffset:4,debug:!0},render:b};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Static Height Indicator",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 8,
    indicatorAlignment: 'center'
  },
  render
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const rt=["BarIndicator","StaticIndicator","StaticIndicatorWithTopAlignment"];export{l as BarIndicator,d as StaticIndicator,u as StaticIndicatorWithTopAlignment,rt as __namedExportsOrder,at as default};
