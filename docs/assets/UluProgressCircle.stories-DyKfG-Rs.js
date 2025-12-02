import{l as w,D as N,c as P,Q as D,d as i,b as o,f as x,t as U,p as _,e as k,n as I,o as c,j as B,_ as z}from"./iframe-D8Qk9KI1.js";import{U as $}from"./UluButton-CfSPw0GR.js";import"./preload-helper-BJwshlQW.js";const O={class:"hidden-visually"},T={class:"progress-circle__chart"},F={class:"progress-circle__chart-svg",viewBox:"0 0 32 32"},A={key:0,class:"progress-circle__chart-value"},L={key:0,class:"progress-circle__value type-small-x"},n={__name:"UluProgressCircle",props:{label:{type:String,default:"Progress"},percentage:{type:Number,default:0},formatValue:{type:Function,default:a=>`${a}%`},noValue:Boolean,small:Boolean,outside:Boolean,outsideBelow:Boolean,status:{type:String,default:""},pieStyle:Boolean,noMask:Boolean,duration:{type:Number,default:1e3},easing:{type:String,default:"ease-in"}},setup(a){const e=a,l=w(null),h=t=>t===100?101:t,C=(t=0)=>{if(!l.value||!l.value.animate)return;const s={strokeDasharray:[`${t} 100`,V.value]};l.value.animate(s,{duration:e.duration,easing:e.easing,fill:"forwards"})};N(()=>e.percentage,(t,s)=>{t!==s&&C(h(s))});const V=P(()=>`${h(e.percentage)} 100`),S=P(()=>e.outside||e.outsideBelow||e.small),M=P(()=>{const t={"progress-circle":!0,"progress-circle--small":e.small,"progress-circle--pie":e.pieStyle,"progress-circle--outside":S.value,"progress-circle--outside-below":e.outsideBelow,"progress-circle--no-mask":e.noMask};return e.status&&(t[`progress-circle--${e.status}`]=!0),t});return D(()=>{C()}),(t,s)=>(c(),i("div",{class:I(M.value)},[o("strong",O,U(a.label),1),o("div",T,[(c(),i("svg",F,[s[0]||(s[0]=o("circle",{class:"progress-circle__chart-track",r:"16",cx:"16",cy:"16"},null,-1)),o("circle",{class:"progress-circle__chart-pie",ref_key:"pie",ref:l,r:"16",cx:"16",cy:"16",style:_({strokeDasharray:V.value})},null,4),s[1]||(s[1]=o("circle",{class:"progress-circle__chart-mask",cx:"16",cy:"16"},null,-1))])),!S.value&&!a.noValue?(c(),i("strong",A,[k(t.$slots,"value",{value:a.percentage},()=>[B(U(a.formatValue(a.percentage)),1)])])):x("",!0)]),S.value&&!a.noValue?(c(),i("strong",L,[k(t.$slots,"value",{value:a.percentage},()=>[B(U(a.formatValue(a.percentage)),1)])])):x("",!0)],2))}};n.__docgenInfo={exportName:"default",displayName:"UluProgressCircle",description:"",tags:{},props:[{name:"label",description:"The label for accessibility (visually hidden).",type:{name:"string"},defaultValue:{func:!1,value:'"Progress"'}},{name:"percentage",description:"The progress percentage (0-100).",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"formatValue",description:`A function to format the percentage value.
Takes the number as input and should return a string.`,type:{name:"func"},defaultValue:{func:!0,value:"(value) => `${ value }%`"}},{name:"noValue",description:"Hides the percentage value display.",type:{name:"boolean"}},{name:"small",description:"Renders a smaller version of the component.",type:{name:"boolean"}},{name:"outside",description:"Displays the percentage value outside (to the side) of the circle.",type:{name:"boolean"}},{name:"outsideBelow",description:"Displays the percentage value below the circle.",type:{name:"boolean"}},{name:"status",description:"Sets the status color of the progress circle (e.g., 'low', 'incomplete', 'complete').",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"pieStyle",description:"Renders the component as a solid pie chart instead of a donut.",type:{name:"boolean"}},{name:"noMask",description:"Removes the center mask, filling the entire circle.",type:{name:"boolean"}},{name:"duration",description:"The duration of the animation in milliseconds.",type:{name:"number"},defaultValue:{func:!1,value:"1000"}},{name:"easing",description:"The easing function for the animation.",type:{name:"string"},defaultValue:{func:!1,value:'"ease-in"'}}],slots:[{name:"value",scoped:!0,bindings:[{name:"value",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/visualizations/UluProgressCircle.vue"]};const W={component:n,tags:["autodocs"],argTypes:{percentage:{control:{type:"range",min:0,max:100,step:1},description:"The progress percentage (0-100)."},status:{control:"select",options:["","low","incomplete","complete"],description:"Sets the status color of the progress circle."},small:{control:"boolean"},outside:{control:"boolean"},outsideBelow:{control:"boolean"},pieStyle:{control:"boolean"},noMask:{control:"boolean"},noValue:{control:"boolean"},formatValue:{table:{disable:!0}}}},r={args:{label:"Progress",percentage:75}},u={args:{...r.args,label:"No Value",percentage:60,noValue:!0}},p={args:{...r.args,label:"Formatted Value",percentage:80,formatValue:a=>`${a}/100`}},m={render:a=>({components:{UluProgressCircle:n,UluIcon:z},setup(){return{args:a}},template:`
      <UluProgressCircle v-bind="args">
        <template #value="{ value }">
          <div style="text-align: center; line-height: 1;">
            <UluIcon icon="type:success" style="font-size: 1.2em;" />
            <div style="font-size: 0.7em; margin-top: 2px;">{{ value }}%</div>
          </div>
        </template>
      </UluProgressCircle>
    `}),args:{...r.args,label:"Custom Value via Slot",percentage:90}},g={args:{...r.args,outside:!0}},d={args:{...r.args,percentage:45,small:!0}},v={render:()=>({components:{UluProgressCircle:n},template:`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Low Status" :percentage="25" status="low" />
          <p style="text-align: center; margin-top: 0.5rem;">Low</p>
        </div>
        <div>
          <UluProgressCircle label="Incomplete Status" :percentage="75" status="incomplete" />
          <p style="text-align: center; margin-top: 0.5rem;">Incomplete</p>
        </div>
        <div>
          <UluProgressCircle label="Complete Status" :percentage="100" status="complete" />
          <p style="text-align: center; margin-top: 0.5rem;">Complete</p>
        </div>
      </div>
    `})},y={args:{...r.args,percentage:60,pieStyle:!0}},f={render:()=>({components:{UluProgressCircle:n},template:`
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
    `})},b={render:a=>({components:{UluProgressCircle:n,UluButton:$},setup(){const e=w(10);return{args:a,percentage:e,increase:()=>{e.value=Math.min(100,e.value+10)},decrease:()=>{e.value=Math.max(0,e.value-10)}}},template:`
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    outside: true
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    percentage: 45,
    small: true
  }
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      UluProgressCircle
    },
    template: \`
      <div style="display: flex; gap: 2rem; align-items: center; padding: 1rem;">
        <div>
          <UluProgressCircle label="Low Status" :percentage="25" status="low" />
          <p style="text-align: center; margin-top: 0.5rem;">Low</p>
        </div>
        <div>
          <UluProgressCircle label="Incomplete Status" :percentage="75" status="incomplete" />
          <p style="text-align: center; margin-top: 0.5rem;">Incomplete</p>
        </div>
        <div>
          <UluProgressCircle label="Complete Status" :percentage="100" status="complete" />
          <p style="text-align: center; margin-top: 0.5rem;">Complete</p>
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
}`,...b.parameters?.docs?.source}}};const H=["Default","NoValue","FormattedValue","CustomValueSlot","WithValueOutside","Small","Statuses","PieStyle","Customizations","Animated"];export{b as Animated,m as CustomValueSlot,f as Customizations,r as Default,p as FormattedValue,u as NoValue,y as PieStyle,d as Small,v as Statuses,g as WithValueOutside,H as __namedExportsOrder,W as default};
