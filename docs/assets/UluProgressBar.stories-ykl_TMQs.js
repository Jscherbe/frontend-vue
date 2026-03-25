import{c as w,u as N,d as l,f as u,b as s,a as E,w as L,n as C,r as j,e as i,p as H,h as F,o,j as c,t as d,_ as W}from"./iframe-ByDjlFW-.js";import"./preload-helper-BJwshlQW.js";const O={key:0,class:"progress-bar__header"},z={key:1,class:"progress-bar__value progress-bar__value--amount"},M={key:2,class:"progress-bar__icon"},R={class:"progress-bar__track"},x={key:1,class:"progress-bar__values"},q={class:"progress-bar__value progress-bar__value--amount"},G={key:0,class:"progress-bar__value progress-bar__value--deficit"},J={class:"progress-bar__value progress-bar__value--total"},P={__name:"UluProgressBar",props:{label:String,labelHidden:Boolean,classes:{type:Object,default:()=>({})},labelElement:{type:String,default:"strong"},amount:{type:Number,default:0},total:{type:Number,default:100},deficit:{type:Number,default:0},small:Boolean,success:Boolean,warning:Boolean,danger:Boolean,loader:Boolean,rounded:Boolean,indeterminate:Boolean,noValues:Boolean,formatValue:{type:Function,default:(e,a)=>e},amountInHeader:Boolean,modifiers:[String,Array]},setup(e){const a=e,A=(r,n)=>`${n===0?0:r/n*100}%`,$=w(()=>a.indeterminate?null:A(a.amount,a.total)),k=w(()=>A(a.deficit,a.total)),{resolvedModifiers:T}=N({props:a,baseClass:"progress-bar",internal:w(()=>({small:a.small,success:a.success,warning:a.warning,danger:a.danger,loader:a.loader,rounded:a.rounded,indeterminate:a.indeterminate}))});return(r,n)=>(o(),l("div",{class:C(["progress-bar",[F(T),{"type-small":e.small}]])},[e.label||r.$slots.label||r.$slots.icon||e.amountInHeader?(o(),l("div",O,[e.label?(o(),E(j(e.labelElement),{key:0,class:C(["progress-bar__label",[e.classes.label,{"hidden-visually":e.labelHidden}]])},{default:L(()=>[i(r.$slots,"label",{},()=>[c(d(e.label),1)])]),_:3},8,["class"])):u("",!0),e.amountInHeader?(o(),l("div",z,[n[0]||(n[0]=s("strong",{class:"hidden-visually"},"Amount:",-1)),i(r.$slots,"valueAmount",{value:e.amount},()=>[c(d(e.formatValue(e.amount,"amount")),1)])])):u("",!0),r.$slots.icon?(o(),l("div",M,[i(r.$slots,"icon")])):u("",!0)])):u("",!0),s("div",R,[s("div",{class:"progress-bar__bar",style:H({width:$.value})},null,4),e.deficit>0?(o(),l("div",{key:0,class:"progress-bar__bar--deficit",style:H({width:k.value})},null,4)):u("",!0)]),!e.noValues&&!e.amountInHeader&&!e.loader&&!e.indeterminate?(o(),l("div",x,[s("div",q,[n[1]||(n[1]=s("strong",{class:"hidden-visually"},"Amount:",-1)),i(r.$slots,"valueAmount",{value:e.amount},()=>[c(d(e.formatValue(e.amount,"amount")),1)])]),e.deficit>0?(o(),l("div",G,[n[2]||(n[2]=s("strong",{class:"hidden-visually"},"Deficit: ",-1)),i(r.$slots,"valueDeficit",{value:e.deficit},()=>[c("-"+d(e.formatValue(e.deficit,"deficit")),1)])])):u("",!0),s("div",J,[n[3]||(n[3]=s("strong",{class:"hidden-visually"},"Total:",-1)),i(r.$slots,"valueTotal",{value:e.total},()=>[c(d(e.formatValue(e.total,"total")),1)])])])):u("",!0)],2))}};P.__docgenInfo={exportName:"default",displayName:"UluProgressBar",description:"",tags:{},props:[{name:"label",description:"The label to display above the progress bar. (or use label slot)",type:{name:"string"}},{name:"labelHidden",description:"Hides the label visually, but keeps it for screen readers.",type:{name:"boolean"}},{name:"classes",description:"Optional classes object (currently only allowing { label } class)",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"labelElement",description:"Element to use for label",type:{name:"string"},defaultValue:{func:!1,value:'"strong"'}},{name:"amount",description:"The current amount of progress.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"total",description:"The total amount that represents 100% progress.",type:{name:"number"},defaultValue:{func:!1,value:"100"}},{name:"deficit",description:"The amount of deficit to display on the bar.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"small",description:"Renders a smaller version of the progress bar.",type:{name:"boolean"}},{name:"success",description:"Applies the 'success' style.",type:{name:"boolean"}},{name:"warning",description:"Applies the 'warning' style.",type:{name:"boolean"}},{name:"danger",description:"Applies the 'danger' style.",type:{name:"boolean"}},{name:"loader",description:"Applies styles for use as a thin loader.",type:{name:"boolean"}},{name:"rounded",description:"Applies styles for use as a thin loader.",type:{name:"boolean"}},{name:"indeterminate",description:"Applies an indeterminate animation for unknown progress.",type:{name:"boolean"}},{name:"noValues",description:"Omit values from output (the numbers below the progress bar)",type:{name:"boolean"}},{name:"formatValue",description:`A function to format the numerical values (amount, deficit, total).
Takes the value and type ('amount', 'deficit', 'total') as input and should return a string.`,type:{name:"func"},defaultValue:{func:!0,value:"(value, type) => value"}},{name:"amountInHeader",description:"Will put the amount only in header (there is a headerValue slot it you want to format)",type:{name:"boolean"}},{name:"modifiers",description:"Modifiers (to add any modifier classes based on base class [ie. 'tertiary'])",type:{name:"string|array"}}],slots:[{name:"label"},{name:"valueAmount",scoped:!0,bindings:[{name:"value",title:"binding"}]},{name:"icon"},{name:"valueDeficit",scoped:!0,bindings:[{name:"value",title:"binding"}]},{name:"valueTotal",scoped:!0,bindings:[{name:"value",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/visualizations/UluProgressBar.vue"]};const Y={component:P,tags:["autodocs"],argTypes:{amount:{control:{type:"range",min:0,max:100,step:1}},total:{control:{type:"number"}},deficit:{control:{type:"range",min:0,max:100,step:1}},labelElement:{control:"text"},noValues:{control:"boolean"},amountInHeader:{control:"boolean"},formatValue:{table:{disable:!0}},classes:{table:{disable:!0}},modifiers:{control:"text"}}},t={args:{label:"Default Progress",amount:50,total:100}},m={args:{...t.args,label:"Progress with Deficit",amount:60,deficit:20}},p={args:{...t.args,label:"Small Progress",amount:75,small:!0}},g={args:{...t.args,label:"Success Style",amount:80,success:!0}},b={args:{...t.args,label:"Warning Style",amount:60,warning:!0}},f={args:{...t.args,label:"Danger Style",amount:25,danger:!0}},v={render:e=>({components:{UluProgressBar:P,UluIcon:W},setup(){return{args:e}},template:`
      <UluProgressBar v-bind="args">
        <template #icon>
          <UluIcon icon="type:success" />
        </template>
      </UluProgressBar>
    `}),args:{...g.args,label:"Completed with Icon",amount:100}},y={args:{label:null,amount:65,loader:!0}},h={args:{amount:30,rounded:!0,noValues:!0}},S={args:{label:"Indeterminate Loading",loader:!0,indeterminate:!0}},V={args:{...t.args,label:"Amount in Header",amount:65,amountInHeader:!0}},B={args:{...t.args,label:"No Values Displayed",amount:40,noValues:!0}},D={args:{...m.args,label:"Formatted Values (w/ type)",amount:85,deficit:5,formatValue:(e,a)=>a==="total"?`out of ${e}`:`${e}%`}},I={args:{...t.args,label:"Custom Label Element (h3)",labelElement:"h3"}},U={render:e=>({components:{UluProgressBar:P,UluIcon:W},setup(){return{args:e}},template:`
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
    `}),args:{...m.args,label:"With Custom Value Slots"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Progress',
    amount: 50,
    total: 100
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Progress with Deficit',
    amount: 60,
    deficit: 20
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Small Progress',
    amount: 75,
    small: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Success Style',
    amount: 80,
    success: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Warning Style',
    amount: 60,
    warning: true
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Danger Style',
    amount: 25,
    danger: true
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    ...Success.args,
    label: 'Completed with Icon',
    amount: 100
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: null,
    amount: 65,
    loader: true
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    amount: 30,
    rounded: true,
    noValues: true
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Indeterminate Loading',
    loader: true,
    indeterminate: true
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Amount in Header',
    amount: 65,
    amountInHeader: true
  }
}`,...V.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'No Values Displayed',
    amount: 40,
    noValues: true
  }
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    label: 'Custom Label Element (h3)',
    labelElement: 'h3'
  }
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};const Z=["Default","WithDeficit","Small","Success","Warning","Danger","WithIcon","Loader","Rounded","Indeterminate","AmountInHeader","NoValues","FormattedValues","CustomLabel","CustomValueSlots"];export{V as AmountInHeader,I as CustomLabel,U as CustomValueSlots,f as Danger,t as Default,D as FormattedValues,S as Indeterminate,y as Loader,B as NoValues,h as Rounded,p as Small,g as Success,b as Warning,m as WithDeficit,v as WithIcon,Z as __namedExportsOrder,Y as default};
