import{ai as r,af as l,ae as d}from"./iframe-BFkjcG5o.js";import"./preload-helper-BJwshlQW.js";const S={component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Animated navigation for the Scroll Anchors system."}}},argTypes:{railWidth:{control:"number",description:"The width of the navigation rail in pixels."},indicatorWidth:{control:"number",description:"The width of the indicator. Defaults to railWidth."},indicatorHeight:{control:"number",description:"If set, creates a static height indicator."},indicatorAlignment:{control:"select",options:["center","top"],description:"Vertical alignment of the indicator."},indicatorAlignmentOffset:{control:"number",description:"Pixel offset for the indicator's vertical alignment."},debug:{control:"boolean",description:"Enable IntersectionObserver debugging to the console."}}},m="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",u=[{title:"Introduction"},{title:"A Much Longer Title That Will Definitely Wrap to a Second Line"},{title:"Short"},{title:"Another Section"},{title:"This Title is Also Quite Long to Ensure Wrapping and Alignment Testing"},{title:"Conclusion"}],g={height:"700px",overflow:"auto",backgroundColor:"teal",padding:"1rem"},p={display:"grid",gridTemplateColumns:"200px 1fr",gap:"2rem",alignItems:"start",backgroundColor:"white"},h={position:"sticky",top:"20px"},e=o=>({components:{UluScrollAnchors:d,UluScrollAnchorsSection:l,UluScrollAnchorsNavAnimated:r},setup(){const{firstItemActive:a,debug:c,...s}=o;return{firstItemActive:a,debug:c,navArgs:s,sections:u,lipsum:m,gridStyles:p,navStyle:h,containerStyles:g}},template:`
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
  `}),t={name:"Bar Indicator (Default)",args:{firstItemActive:!0,railWidth:3,indicatorWidth:3,indicatorHeight:null,indicatorAlignment:"top",indicatorAlignmentOffset:0},render:e},i={name:"Static Height Indicator",args:{...t.args,indicatorHeight:12,indicatorWidth:8,indicatorAlignment:"center"},render:e},n={name:"Static Indicator With Top Alignment",args:{...t.args,indicatorHeight:12,indicatorWidth:10,indicatorAlignment:"top",indicatorAlignmentOffset:4,debug:!0},render:e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Static Height Indicator",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 8,
    indicatorAlignment: 'center'
  },
  render
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const v=["BarIndicator","StaticIndicator","StaticIndicatorWithTopAlignment"];export{t as BarIndicator,i as StaticIndicator,n as StaticIndicatorWithTopAlignment,v as __namedExportsOrder,S as default};
