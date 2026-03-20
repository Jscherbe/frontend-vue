import{l as w,H as D,c as P,u as N,T as _,d as i,b as o,f as V,t as U,p as z,e as k,n as $,h as A,o as c,j as B,_ as T}from"./iframe-B13WdpPx.js";import{_ as O}from"./UluButton-Dh9jaTWB.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-BC43p_WB.js";const I={class:"hidden-visually"},F={class:"progress-circle__chart"},W={class:"progress-circle__chart-svg",viewBox:"0 0 32 32"},j={key:0,class:"progress-circle__chart-value"},R={key:0,class:"progress-circle__value type-small-x"},t={__name:"UluProgressCircle",props:{label:{type:String,default:"Progress"},percentage:{type:Number,default:0},formatValue:{type:Function,default:a=>`${a}%`},noValue:Boolean,small:Boolean,outside:Boolean,outsideBelow:Boolean,danger:Boolean,warning:Boolean,success:Boolean,pieStyle:Boolean,noMask:Boolean,duration:{type:Number,default:1e3},easing:{type:String,default:"ease-in"},modifiers:[String,Array]},setup(a){const e=a,l=w(null),h=n=>n===100?101:n,C=(n=0)=>{if(!l.value||!l.value.animate)return;const s={strokeDasharray:[`${n} 100`,x.value]};l.value.animate(s,{duration:e.duration,easing:e.easing,fill:"forwards"})};D(()=>e.percentage,(n,s)=>{n!==s&&C(h(s))});const x=P(()=>`${h(e.percentage)} 100`),S=P(()=>e.outside||e.outsideBelow||e.small),{resolvedModifiers:M}=N({props:e,baseClass:"progress-circle",internal:P(()=>({small:e.small,pie:e.pieStyle,outside:S.value,"outside-below":e.outsideBelow,"no-mask":e.noMask,danger:e.danger,warning:e.warning,success:e.success}))});return _(()=>{C()}),(n,s)=>(c(),i("div",{class:$(["progress-circle",A(M)])},[o("strong",I,U(a.label),1),o("div",F,[(c(),i("svg",W,[s[0]||(s[0]=o("circle",{class:"progress-circle__chart-track",r:"16",cx:"16",cy:"16"},null,-1)),o("circle",{class:"progress-circle__chart-pie",ref_key:"pie",ref:l,r:"16",cx:"16",cy:"16",style:z({strokeDasharray:x.value})},null,4),s[1]||(s[1]=o("circle",{class:"progress-circle__chart-mask",cx:"16",cy:"16"},null,-1))])),!S.value&&!a.noValue?(c(),i("strong",j,[k(n.$slots,"value",{value:a.percentage},()=>[B(U(a.formatValue(a.percentage)),1)])])):V("",!0)]),S.value&&!a.noValue?(c(),i("strong",R,[k(n.$slots,"value",{value:a.percentage},()=>[B(U(a.formatValue(a.percentage)),1)])])):V("",!0)],2))}};t.__docgenInfo={exportName:"default",displayName:"UluProgressCircle",description:"",tags:{},props:[{name:"label",description:"The label for accessibility (visually hidden).",type:{name:"string"},defaultValue:{func:!1,value:'"Progress"'}},{name:"percentage",description:"The progress percentage (0-100).",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"formatValue",description:`A function to format the percentage value.
Takes the number as input and should return a string.`,type:{name:"func"},defaultValue:{func:!0,value:"(value) => `${ value }%`"}},{name:"noValue",description:"Hides the percentage value display.",type:{name:"boolean"}},{name:"small",description:"Renders a smaller version of the component.",type:{name:"boolean"}},{name:"outside",description:"Displays the percentage value outside (to the side) of the circle.",type:{name:"boolean"}},{name:"outsideBelow",description:"Displays the percentage value below the circle.",type:{name:"boolean"}},{name:"danger",description:"Applies the 'danger' style.",type:{name:"boolean"}},{name:"warning",description:"Applies the 'warning' style.",type:{name:"boolean"}},{name:"success",description:"Applies the 'success' style.",type:{name:"boolean"}},{name:"pieStyle",description:"Renders the component as a solid pie chart instead of a donut.",type:{name:"boolean"}},{name:"noMask",description:"Removes the center mask, filling the entire circle.",type:{name:"boolean"}},{name:"duration",description:"The duration of the animation in milliseconds.",type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"easing",description:"The easing function for the animation.",type:{name:"string"},defaultValue:{func:!1,value:'"ease-in"'}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class)",type:{name:"string|array"}}],slots:[{name:"value",scoped:!0,bindings:[{name:"value",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/visualizations/UluProgressCircle.vue"]};const G={component:t,tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1},description:"The progress percentage (0-100)."},danger:{control:"boolean"},warning:{control:"boolean"},success:{control:"boolean"},small:{control:"boolean"},outside:{control:"boolean"},outsideBelow:{control:"boolean"},pieStyle:{control:"boolean"},noMask:{control:"boolean"},noValue:{control:"boolean"},modifiers:{control:"text"},formatValue:{table:{disable:!0}}}},r={args:{label:"Progress",percentage:75}},u={args:{...r.args,label:"No Value",percentage:60,noValue:!0}},p={args:{...r.args,label:"Formatted Value",percentage:80,formatValue:a=>`${a}/100`}},g={render:a=>({components:{UluProgressCircle:t,UluIcon:T},setup(){return{args:a}},template:`
      <UluProgressCircle v-bind="args">
        <template #value="{ value }">
          <div style="text-align: center; line-height: 1;">
            <UluIcon icon="type:success" style="font-size: 1.2em;" />
            <div style="font-size: 0.7em; margin-top: 2px;">{{ value }}%</div>
          </div>
        </template>
      </UluProgressCircle>
    `}),args:{...r.args,label:"Custom Value via Slot",percentage:90}},d={args:{...r.args,outside:!0}},m={args:{...r.args,percentage:45,small:!0}},v={render:()=>({components:{UluProgressCircle:t},template:`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Danger Status" :percentage="25" danger />
          <p style="text-align: center; margin-top: 0.5rem;">Danger</p>
        </div>
        <div>
          <UluProgressCircle label="Warning Status" :percentage="75" warning />
          <p style="text-align: center; margin-top: 0.5rem;">Warning</p>
        </div>
        <div>
          <UluProgressCircle label="Success Status" :percentage="100" success />
          <p style="text-align: center; margin-top: 0.5rem;">Success</p>
        </div>
      </div>
    `})},y={args:{...r.args,percentage:60,pieStyle:!0}},f={render:()=>({components:{UluProgressCircle:t},template:`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Small, Outside Below" :percentage="50" :small="true" :outsideBelow="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Small, Outside Below</p>
        </div>
        <div>
          <UluProgressCircle label="No Mask" :percentage="80" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">No Mask</p>
        </div>
        <div>
          <UluProgressCircle label="Pie, No Mask" :percentage="30" :pieStyle="true" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Pie, No Mask</p>
        </div>
      </div>
    `})},b={render:a=>({components:{UluProgressCircle:t,UluButton:O},setup(){const e=w(10);return{args:a,percentage:e,increase:()=>{e.value=Math.min(100,e.value+10)},decrease:()=>{e.value=Math.max(0,e.value-10)}}},template:`
      <div style="padding: 1rem;">
        <UluProgressCircle v-bind="args" :percentage="percentage" />
        <div style="margin-top: 1rem;">
          <UluButton @click="increase" text="Increase" />
          <UluButton @click="decrease" text="Decrease" />
        </div>
      </div>
    `}),args:{label:"Animated Progress"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Progress',
    percentage: 75
  }
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'No Value',
    percentage: 60,
    noValue: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Formatted Value',
    percentage: 80,
    formatValue: value => \`\${value}/100\`
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressCircle,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluProgressCircle v-bind="args">
        <template #value="{ value }">
          <div style="text-align: center; line-height: 1;">
            <UluIcon icon="type:success" style="font-size: 1.2em;" />
            <div style="font-size: 0.7em; margin-top: 2px;">{{ value }}%</div>
          </div>
        </template>
      </UluProgressCircle>
    \`
  }),
  args: {
    ...Default.args,
    label: 'Custom Value via Slot',
    percentage: 90
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    outside: true
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 45,
    small: true
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluProgressCircle
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Danger Status" :percentage="25" danger />
          <p style="text-align: center; margin-top: 0.5rem;">Danger</p>
        </div>
        <div>
          <UluProgressCircle label="Warning Status" :percentage="75" warning />
          <p style="text-align: center; margin-top: 0.5rem;">Warning</p>
        </div>
        <div>
          <UluProgressCircle label="Success Status" :percentage="100" success />
          <p style="text-align: center; margin-top: 0.5rem;">Success</p>
        </div>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 60,
    pieStyle: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluProgressCircle
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Small, Outside Below" :percentage="50" :small="true" :outsideBelow="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Small, Outside Below</p>
        </div>
        <div>
          <UluProgressCircle label="No Mask" :percentage="80" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">No Mask</p>
        </div>
        <div>
          <UluProgressCircle label="Pie, No Mask" :percentage="30" :pieStyle="true" :noMask="true" />
          <p style="text-align: center; margin-top: 0.5rem;">Pie, No Mask</p>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressCircle,
      UluButton
    },
    setup() {
      const percentage = ref(10);
      const increase = () => {
        percentage.value = Math.min(100, percentage.value + 10);
      };
      const decrease = () => {
        percentage.value = Math.max(0, percentage.value - 10);
      };
      return {
        args,
        percentage,
        increase,
        decrease
      };
    },
    template: \`
      <div style="padding: 1rem;">
        <UluProgressCircle v-bind="args" :percentage="percentage" />
        <div style="margin-top: 1rem;">
          <UluButton @click="increase" text="Increase" />
          <UluButton @click="decrease" text="Decrease" />
        </div>
      </div>
    \`
  }),
  args: {
    label: 'Animated Progress'
  }
}`,...b.parameters?.docs?.source}}};const J=["Default","NoValue","FormattedValue","CustomValueSlot","WithValueOutside","Small","Statuses","PieStyle","Customizations","Animated"];export{b as Animated,g as CustomValueSlot,f as Customizations,r as Default,p as FormattedValue,u as NoValue,y as PieStyle,m as Small,v as Statuses,d as WithValueOutside,J as __namedExportsOrder,G as default};
