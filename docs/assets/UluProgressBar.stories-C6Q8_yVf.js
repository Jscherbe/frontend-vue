import{c as D,u as T,d as l,f as u,b as n,a as E,w as W,n as C,r as L,e as i,p as H,h as j,o,j as d,t as c,_ as N}from"./iframe-n9Uk3WRX.js";import"./preload-helper-BJwshlQW.js";const F={key:0,class:"progress-bar__header"},O={key:1,class:"progress-bar__value progress-bar__value--amount"},z={key:2,class:"progress-bar__icon"},M={class:"progress-bar__track"},R={key:1,class:"progress-bar__values"},x={class:"progress-bar__value progress-bar__value--amount"},q={key:0,class:"progress-bar__value progress-bar__value--deficit"},G={class:"progress-bar__value progress-bar__value--total"},U={__name:"UluProgressBar",props:{label:String,labelHidden:Boolean,classes:{type:Object,default:()=>({})},labelElement:{type:String,default:"strong"},amount:{type:Number,default:0},total:{type:Number,default:100},deficit:{type:Number,default:0},small:Boolean,positive:Boolean,negative:Boolean,loader:Boolean,rounded:Boolean,indeterminate:Boolean,noValues:Boolean,formatValue:{type:Function,default:(e,a)=>e},amountInHeader:Boolean,modifiers:[String,Array]},setup(e){const a=e,A=(t,r)=>`${r===0?0:t/r*100}%`,$=D(()=>a.indeterminate?null:A(a.amount,a.total)),k=D(()=>A(a.deficit,a.total)),{resolvedModifiers:w}=T({props:a,baseClass:"progress-bar",internal:D(()=>({small:a.small,positive:a.positive,negative:a.negative,loader:a.loader,rounded:a.rounded,indeterminate:a.indeterminate}))});return(t,r)=>(o(),l("div",{class:C(["progress-bar",[j(w),{"type-small":e.small}]])},[e.label||t.$slots.label||t.$slots.icon||e.amountInHeader?(o(),l("div",F,[e.label?(o(),E(L(e.labelElement),{key:0,class:C(["progress-bar__label",[e.classes.label,{"hidden-visually":e.labelHidden}]])},{default:W(()=>[i(t.$slots,"label",{},()=>[d(c(e.label),1)])]),_:3},8,["class"])):u("",!0),e.amountInHeader?(o(),l("div",O,[r[0]||(r[0]=n("strong",{class:"hidden-visually"},"Amount:",-1)),i(t.$slots,"valueAmount",{value:e.amount},()=>[d(c(e.formatValue(e.amount,"amount")),1)])])):u("",!0),t.$slots.icon?(o(),l("div",z,[i(t.$slots,"icon")])):u("",!0)])):u("",!0),n("div",M,[n("div",{class:"progress-bar__bar",style:H({width:$.value})},null,4),e.deficit>0?(o(),l("div",{key:0,class:"progress-bar__bar--deficit",style:H({width:k.value})},null,4)):u("",!0)]),!e.noValues&&!e.amountInHeader&&!e.loader&&!e.indeterminate?(o(),l("div",R,[n("div",x,[r[1]||(r[1]=n("strong",{class:"hidden-visually"},"Amount:",-1)),i(t.$slots,"valueAmount",{value:e.amount},()=>[d(c(e.formatValue(e.amount,"amount")),1)])]),e.deficit>0?(o(),l("div",q,[r[2]||(r[2]=n("strong",{class:"hidden-visually"},"Deficit: ",-1)),i(t.$slots,"valueDeficit",{value:e.deficit},()=>[d("-"+c(e.formatValue(e.deficit,"deficit")),1)])])):u("",!0),n("div",G,[r[3]||(r[3]=n("strong",{class:"hidden-visually"},"Total:",-1)),i(t.$slots,"valueTotal",{value:e.total},()=>[d(c(e.formatValue(e.total,"total")),1)])])])):u("",!0)],2))}};U.__docgenInfo={exportName:"default",displayName:"UluProgressBar",description:"",tags:{},props:[{name:"label",description:"The label to display above the progress bar. (or use label slot)",type:{name:"string"}},{name:"labelHidden",description:"Hides the label visually, but keeps it for screen readers.",type:{name:"boolean"}},{name:"classes",description:"Optional classes object (currently only allowing { label } class)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"labelElement",description:"Element to use for label",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"amount",description:"The current amount of progress.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"total",description:"The total amount that represents 100% progress.",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"deficit",description:"The amount of deficit to display on the bar.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"small",description:"Renders a smaller version of the progress bar.",type:{name:"boolean"}},{name:"positive",description:"Applies the 'positive' style (e.g., green).",type:{name:"boolean"}},{name:"negative",description:"Applies the 'negative' style (e.g., red).",type:{name:"boolean"}},{name:"loader",description:"Applies styles for use as a thin loader.",type:{name:"boolean"}},{name:"rounded",description:"Applies styles for use as a thin loader.",type:{name:"boolean"}},{name:"indeterminate",description:"Applies an indeterminate animation for unknown progress.",type:{name:"boolean"}},{name:"noValues",description:"Omit values from output (the numbers below the progress bar)",type:{name:"boolean"}},{name:"formatValue",description:`A function to format the numerical values (amount, deficit, total).
Takes the value and type ('amount', 'deficit', 'total') as input and should return a string.`,type:{name:"func"},defaultValue:{func:!0,value:"(value, type) => value"}},{name:"amountInHeader",description:"Will put the amount only in header (there is a headerValue slot it you want to format)",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"label"},{name:"valueAmount",scoped:!0,bindings:[{name:"value",title:"binding"}]},{name:"icon"},{name:"valueDeficit",scoped:!0,bindings:[{name:"value",title:"binding"}]},{name:"valueTotal",scoped:!0,bindings:[{name:"value",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/visualizations/UluProgressBar.vue"]};const X={component:U,tags:["autodocs"],argTypes:{amount:{control:{type:"range",min:0,max:100,step:1}},total:{control:{type:"number"}},deficit:{control:{type:"range",min:0,max:100,step:1}},labelElement:{control:"text"},noValues:{control:"boolean"},amountInHeader:{control:"boolean"},formatValue:{table:{disable:!0}},classes:{table:{disable:!0}},modifiers:{control:"text"}}},s={args:{label:"Default Progress",amount:50,total:100}},m={args:{...s.args,label:"Progress with Deficit",amount:60,deficit:20}},g={args:{...s.args,label:"Small Progress",amount:75,small:!0}},p={args:{...s.args,label:"Positive Style",amount:80,positive:!0}},b={args:{...s.args,label:"Negative Style",amount:25,negative:!0}},f={render:e=>({components:{UluProgressBar:U,UluIcon:N},setup(){return{args:e}},template:`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="type:success" />
        </template>
      </UluProgressBar>
    `}),args:{...p.args,label:"Completed with Icon",amount:100}},v={args:{label:null,amount:65,loader:!0}},y={args:{amount:30,rounded:!0,noValues:!0}},h={args:{label:"Indeterminate Loading",loader:!0,indeterminate:!0}},V={args:{...s.args,label:"Amount in Header",amount:65,amountInHeader:!0}},S={args:{...s.args,label:"No Values Displayed",amount:40,noValues:!0}},B={args:{...m.args,label:"Formatted Values (w/ type)",amount:85,deficit:5,formatValue:(e,a)=>a==="total"?`out of ${e}`:`${e}%`}},P={args:{...s.args,label:"Custom Label Element (h3)",labelElement:"h3"}},I={render:e=>({components:{UluProgressBar:U,UluIcon:N},setup(){return{args:e}},template:`
      <UluProgressBar v-bind="args">
        <template #valueAmount="{ value }">
          <strong>{{ value }}</strong> <UluIcon icon="type:image" />
        </template>
        <template #valueDeficit="{ value }">
          <span style="color: red;">-{{ value }}</span>
        </template>
        <template #valueTotal="{ value }">
          <em>{{ value }} Total</em>
        </template>
      </UluProgressBar>
    `}),args:{...m.args,label:"With Custom Value Slots"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Progress',
    amount: 50,
    total: 100
  }
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Progress with Deficit',
    amount: 60,
    deficit: 20
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Small Progress',
    amount: 75,
    small: true
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Positive Style',
    amount: 80,
    positive: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Negative Style',
    amount: 25,
    negative: true
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressBar,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="type:success" />
        </template>
      </UluProgressBar>
    \`
  }),
  args: {
    ...Positive.args,
    label: 'Completed with Icon',
    amount: 100
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: null,
    amount: 65,
    loader: true
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 30,
    rounded: true,
    noValues: true
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Loading',
    loader: true,
    indeterminate: true
  }
}`,...h.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Amount in Header',
    amount: 65,
    amountInHeader: true
  }
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'No Values Displayed',
    amount: 40,
    noValues: true
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithDeficit.args,
    label: 'Formatted Values (w/ type)',
    amount: 85,
    deficit: 5,
    formatValue: (value, type) => {
      if (type === 'total') return \`out of \${value}\`;
      return \`\${value}%\`;
    }
  }
}`,...B.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Custom Label Element (h3)',
    labelElement: 'h3'
  }
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluProgressBar,
      UluIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluProgressBar v-bind="args">
        <template #valueAmount="{ value }">
          <strong>{{ value }}</strong> <UluIcon icon="type:image" />
        </template>
        <template #valueDeficit="{ value }">
          <span style="color: red;">-{{ value }}</span>
        </template>
        <template #valueTotal="{ value }">
          <em>{{ value }} Total</em>
        </template>
      </UluProgressBar>
    \`
  }),
  args: {
    ...WithDeficit.args,
    label: 'With Custom Value Slots'
  }
}`,...I.parameters?.docs?.source}}};const Y=["Default","WithDeficit","Small","Positive","Negative","WithIcon","Loader","Rounded","Indeterminate","AmountInHeader","NoValues","FormattedValues","CustomLabel","CustomValueSlots"];export{V as AmountInHeader,P as CustomLabel,I as CustomValueSlots,s as Default,B as FormattedValues,h as Indeterminate,v as Loader,b as Negative,S as NoValues,p as Positive,y as Rounded,g as Small,m as WithDeficit,f as WithIcon,Y as __namedExportsOrder,X as default};
