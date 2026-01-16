import{U as p}from"./UluPlaceholderText-i13r_vR-.js";import{u as h,_ as v}from"./UluScrollAnchors-SwFaUz9B.js";import{c as S,a as f,w as g,n as A,q as e,r as U,o as y,e as T}from"./iframe-BAOMv0fj.js";import{_}from"./UluTag-Ci6_fk2t.js";import"./preload-helper-BJwshlQW.js";const l={__name:"UluScrollAnchorsHeadlessSection",props:{title:{type:String,required:!0},customTitleId:String,element:{type:String,default:"div"}},setup(t){const r=t,{sectionRef:a,titleId:u,isActive:n,inactiveFrom:s,activeFrom:i,section:d}=h(r),c=S(()=>{if(n.value){if(i.value)return`enter-${i.value}`}else if(s.value)return`exit-${s.value}`;return null});return(m,I)=>(y(),f(U(t.element),{class:A(["scroll-anchors__section",{"is-active":e(n)}]),"data-scrollpoint-state":c.value,ref_key:"sectionRef",ref:a},{default:g(()=>[T(m.$slots,"default",{isActive:e(n),titleId:e(u),section:e(d),inactiveFrom:e(s),activeFrom:e(i),sectionState:c.value})]),_:3},8,["class","data-scrollpoint-state"]))}};l.__docgenInfo={exportName:"default",displayName:"UluScrollAnchorsHeadlessSection",description:"",tags:{},props:[{name:"title",description:"The title of the section, used for navigation and generating a default ID",type:{name:"string"},required:!0},{name:"customTitleId",description:"A custom ID to use for the section anchor, overriding the auto-generated one",type:{name:"string"}},{name:"element",description:"Element to use",type:{name:"string"},defaultValue:{func:!1,value:'"div"'}}],slots:[{name:"default",scoped:!0,bindings:[{name:"isActive",title:"binding"},{name:"titleId",title:"binding"},{name:"section",title:"binding"},{name:"inactiveFrom",title:"binding"},{name:"activeFrom",title:"binding"},{name:"sectionState",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/systems/scroll-anchors/UluScrollAnchorsHeadlessSection.vue"]};const k={component:l,tags:["autodocs"],parameters:{docs:{description:{component:"A headless scroll anchor section that provides its state via a scoped slot, allowing for complete control over the markup."}}},argTypes:{title:{control:"text",description:"The title of the section."},customTitleId:{control:"text",description:"A custom ID for the anchor link."}}},x=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],o={render:t=>({components:{UluScrollAnchors:v,UluScrollAnchorsHeadlessSection:l,UluPlaceholderText:p,UluTag:_},setup(){return{args:t,sections:x}},template:`
      <UluScrollAnchors style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsHeadlessSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
          v-slot="{ isActive, titleId }"
        >
          <h2 :id="titleId">{{ item.title }}</h2>
          <p>
            <UluTag 
              :text="isActive ? 'Active' : 'Inactive'"
              :type="isActive ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsHeadlessSection>
      </UluScrollAnchors>
    `}),parameters:{docs:{description:{story:"This story demonstrates the `UluScrollAnchorsHeadlessSection` which allows for a custom layout within each section via a scoped slot."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsHeadlessSection,
      UluPlaceholderText,
      UluTag
    },
    setup() {
      return {
        args,
        sections
      };
    },
    template: \`
      <UluScrollAnchors style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsHeadlessSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
          v-slot="{ isActive, titleId }"
        >
          <h2 :id="titleId">{{ item.title }}</h2>
          <p>
            <UluTag 
              :text="isActive ? 'Active' : 'Inactive'"
              :type="isActive ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsHeadlessSection>
      </UluScrollAnchors>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`UluScrollAnchorsHeadlessSection\` which allows for a custom layout within each section via a scoped slot.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,k as default};
