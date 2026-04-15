import{u as g,c as f,d,e as u,f as h,n as U,l as v,o as l,j as b,t as y}from"./iframe-Cd2AvOWl.js";import{_ as c}from"./UluImage-BhD6-YTx.js";import"./preload-helper-BJwshlQW.js";const C={key:0,class:"captioned-figure__caption"},r={__name:"UluCaptionedFigure",props:{caption:{type:String,default:""},position:String,modifiers:[String,Array]},setup(e){const o=e,{resolvedModifiers:m}=g({props:o,baseClass:"captioned-figure",internal:f(()=>({traditional:!o.position,[o.position]:o.position}))});return(s,F)=>(l(),d("figure",{class:U(["captioned-figure",v(m)])},[u(s.$slots,"default"),e.caption||s.$slots.caption?(l(),d("figcaption",C,[u(s.$slots,"caption",{},()=>[b(y(e.caption),1)])])):h("",!0)],2))}};r.__docgenInfo={exportName:"default",displayName:"UluCaptionedFigure",description:"",tags:{},props:[{name:"caption",description:"The text content for the caption.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"position",description:"Positioning (e.g., 'bottom', 'center', 'right') else defaults to traditional",type:{name:"string"}},{name:"modifiers",description:"Modifiers for styling and positioning (e.g., 'bottom', 'center', 'right', 'traditional').",type:{name:"string|array"}}],slots:[{name:"default"},{name:"caption"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluCaptionedFigure.vue"]};const S={component:r,tags:["autodocs"],argTypes:{caption:{control:"text"},modifiers:{control:"text"}}},p=e=>({components:{UluCaptionedFigure:r,UluImage:c},setup(){return{args:e}},template:`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1018/800/600" 
          alt="A beautiful landscape" 
        />
      </UluCaptionedFigure>
    </div>
  `}),t=p.bind({});t.args={caption:"This is a standard caption placed at the bottom.",modifiers:"bottom"};const n=p.bind({});n.args={caption:"This is a centered overlay caption.",modifiers:"bottom center"};const a=p.bind({});a.args={caption:"A traditional, statically positioned caption outside the image area.",modifiers:"traditional"};const i=e=>({components:{UluCaptionedFigure:r,UluImage:c},setup(){return{args:e}},template:`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1015/800/600" 
          alt="River valley" 
          style="display: block; width: 100%; height: auto;"
        />
        <template #caption>
          <strong>River Valley:</strong> <em>Photo taken in 2023</em>
        </template>
      </UluCaptionedFigure>
    </div>
  `});i.args={modifiers:"bottom right"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCaptionedFigure,
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1018/800/600" 
          alt="A beautiful landscape" 
        />
      </UluCaptionedFigure>
    </div>
  \`
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCaptionedFigure,
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1018/800/600" 
          alt="A beautiful landscape" 
        />
      </UluCaptionedFigure>
    </div>
  \`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCaptionedFigure,
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1018/800/600" 
          alt="A beautiful landscape" 
        />
      </UluCaptionedFigure>
    </div>
  \`
})`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluCaptionedFigure,
    UluImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="max-width: 600px; margin: 0 auto; padding: 2rem; background: #f0f0f0;">
      <UluCaptionedFigure v-bind="args">
        <UluImage 
          src="https://picsum.photos/id/1015/800/600" 
          alt="River valley" 
          style="display: block; width: 100%; height: auto;"
        />
        <template #caption>
          <strong>River Valley:</strong> <em>Photo taken in 2023</em>
        </template>
      </UluCaptionedFigure>
    </div>
  \`
})`,...i.parameters?.docs?.source}}};const _=["Default","CenteredOverlay","Traditional","WithSlot"];export{n as CenteredOverlay,t as Default,a as Traditional,i as WithSlot,_ as __namedExportsOrder,S as default};
