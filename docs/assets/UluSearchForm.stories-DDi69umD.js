import{c as h,d as b,b as r,t as S,e as v,N as f,o as g,m as y,B as V,l as c}from"./fontawesome-DyrJdE5N.js";import{n as _}from"./iframe-DFeB4tIX.js";import{_ as U}from"./UluButton-zu_C2qC9.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-CSWkOuPE.js";import"./props-DEaRQ31f.js";const x={class:"input-group input-group--joined"},F={class:"input-group__item input-group__item--field"},P=["for"],B=["id","placeholder","value"],I={class:"input-group__item"},l={__name:"UluSearchForm",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:"Titles, keyword…"},label:{type:String,default:"Search"},submitButtonProps:{type:Object,default:()=>({type:"submit",primary:!0,icon:"type:search",ariaLabel:"Submit Search"})},id:String},emits:["update:modelValue","submit"],setup(e,{emit:t}){const n=e,a=t,u=h(()=>n.id||_()),p=()=>{a("submit",n.modelValue)};return(i,m)=>(g(),b("form",{class:"form-theme",onSubmit:f(p,["prevent"])},[r("div",x,[r("div",F,[r("label",{for:u.value,class:"hidden-visually"},S(e.label),9,P),r("input",{type:"search",id:u.value,class:"input-group__input",placeholder:e.placeholder,value:e.modelValue,onInput:m[0]||(m[0]=d=>i.$emit("update:modelValue",d.target.value))},null,40,B)]),r("div",I,[v(i.$slots,"submit",{},()=>[y(U,V({class:"input-group__button"},e.submitButtonProps),null,16)])])])],32))}};l.__docgenInfo={exportName:"default",displayName:"UluSearchForm",description:"",tags:{},props:[{name:"modelValue",description:"The search input value (for v-model).",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"placeholder",description:"The placeholder text for the search input.",type:{name:"string"},defaultValue:{func:!1,value:'"Titles, keyword…"'}},{name:"label",description:"The visually hidden label for the search input.",type:{name:"string"},defaultValue:{func:!1,value:'"Search"'}},{name:"submitButtonProps",description:`Props to pass to the default UluButton component (used for submit button)
- Alternately use 'submit' slot`,type:{name:"object"},defaultValue:{func:!1,value:`{
  type: "submit",
  primary: true,
  icon: "type:search",
  ariaLabel: "Submit Search"
}`}},{name:"id",description:"Optional ID for the input element. If not provided, a unique ID is generated.",type:{name:"string"}}],events:[{name:"update:modelValue"},{name:"submit"}],slots:[{name:"submit"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/forms/UluSearchForm.vue"]};const k={component:l,tags:["autodocs"],argTypes:{modelValue:{control:"text",description:"The search value (for v-model)."},placeholder:{control:"text"},label:{control:"text"},submitButtonProps:{control:"object"},id:{control:"text"}}},o={render:e=>({components:{UluSearchForm:l},setup(){const t=c("");return{args:e,searchValue:t,onSubmit:a=>{alert(`Submitted search: ${a}`)}}},template:`
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    `}),args:{placeholder:"Search the site..."}},s={render:e=>({components:{UluSearchForm:l},setup(){const t=c(e.modelValue);return{args:e,searchValue:t,onSubmit:a=>{alert(`Submitted search: ${a}`)}}},template:`
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    `}),args:{placeholder:"Search the site...",modelValue:"Initial search query"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSearchForm
    },
    setup() {
      const searchValue = ref("");
      const onSubmit = value => {
        alert(\`Submitted search: \${value}\`);
      };
      return {
        args,
        searchValue,
        onSubmit
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    \`
  }),
  args: {
    placeholder: "Search the site..."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluSearchForm
    },
    setup() {
      const searchValue = ref(args.modelValue);
      const onSubmit = value => {
        alert(\`Submitted search: \${value}\`);
      };
      return {
        args,
        searchValue,
        onSubmit
      };
    },
    template: \`
      <div style="max-width: 400px;">
        <UluSearchForm v-bind="args" v-model="searchValue" @submit="onSubmit" />
        <p style="margin-top: 1rem;">Current value: {{ searchValue }}</p>
      </div>
    \`
  }),
  args: {
    placeholder: "Search the site...",
    modelValue: "Initial search query"
  }
}`,...s.parameters?.docs?.source}}};const C=["Default","Prepopulated"];export{o as Default,s as Prepopulated,C as __namedExportsOrder,k as default};
