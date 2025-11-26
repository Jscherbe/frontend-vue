import{createElementBlock as u,openBlock as m,createElementVNode as l,toDisplayString as v,ref as p}from"vue";import{U as g}from"./iframe-B-E22KK1.js";import"./preload-helper-BJwshlQW.js";import"vue-router";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const h={style:{"text-align":"center"}},C={style:{margin:"0 0 0.5rem 0","font-size":"1rem"}},c={__name:"StoryTooltipComponent",props:{title:String},setup(t){return(n,e)=>(m(),u("div",h,[l("h4",C,v(t.title||"no title"),1),e[0]||(e[0]=l("p",{style:{margin:"0","font-size":"0.875rem"}},"This is a Vue component being rendered inside a tooltip.",-1))]))}};c.__docgenInfo={exportName:"default",displayName:"StoryTooltipComponent",description:"",tags:{},props:[{name:"title",type:{name:"string"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/popovers/tests/StoryTooltipComponent.vue"]};const _={tags:["autodocs"],argTypes:{content:{control:"text",description:"The text to display in the tooltip."}}},o=t=>({setup(){return{args:t}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="args.content">
        Hover over me
      </span>
    </div>
  `});o.args={content:"This is a basic tooltip!"};const a=t=>({setup(){const n=p(1),e=p(`This is a reactive tooltip. Count: ${n.value}`);return{args:t,content:e,updateCount:()=>{n.value++,e.value=`The count has been updated to: ${n.value}`}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <p>
        Hover over the button and click it to increment
      </p>
      <button @click="updateCount" class="button" v-ulu-tooltip="content">Update Tooltip Content</button>
    </div>
  `});a.parameters={docs:{description:{story:"The tooltip directive is fully reactive. If the value passed to it changes while the tooltip is visible, the tooltip will update its content automatically."}}};const s=t=>({setup(){return{args:t,htmlContent:{isHtml:!0,content:'This tooltip contains <strong>HTML</strong> content with an <em style="color: blue;">emphasis</em>.'}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="htmlContent">
        Hover for HTML
      </span>
    </div>
  `});s.parameters={docs:{description:{story:"You can render HTML inside a tooltip by passing an object with `isHtml: true` and a `content` string."}}};const i=t=>({setup(){return{args:t,componentContent:{component:c,componentProps:{title:"Component Tooltip (prop)"}}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="componentContent">
        Hover for a Component
      </span>
    </div>
  `});i.parameters={docs:{description:{story:"You can also render a full Vue component inside a tooltip. Pass an object with a `component` key and optional `componentProps`."}}};const r=t=>({components:{UluModal:g},setup(){const n=p(!1);return{args:t,isModalOpen:n,openModal:()=>n.value=!0,tooltipContent:{teleportTo:".modal",content:"This tooltip is inside a modal!"}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <button class="button" @click="openModal">Open Modal</button>
      <UluModal v-model="isModalOpen" title="Modal with Tooltip">
        <p>This is a modal dialog.</p>
        <p>
          Hover over this 
          <span 
            tabindex="0" 
            v-ulu-tooltip="tooltipContent" 
            style="color: blue; text-decoration: underline;"
          >
            text with a tooltip
          </span>.
        </p>
      </UluModal>
    </div>
  `});r.parameters={docs:{description:{story:"This example shows a tooltip working correctly inside of a modal. It also shows how to teleport the tooltip to a different element."}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="args.content">
        Hover over me
      </span>
    </div>
  \`
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    const count = ref(1);
    const content = ref(\`This is a reactive tooltip. Count: \${count.value}\`);
    const updateCount = () => {
      count.value++;
      content.value = \`The count has been updated to: \${count.value}\`;
    };
    return {
      args,
      content,
      updateCount
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <p>
        Hover over the button and click it to increment
      </p>
      <button @click="updateCount" class="button" v-ulu-tooltip="content">Update Tooltip Content</button>
    </div>
  \`
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    const htmlContent = {
      isHtml: true,
      content: 'This tooltip contains <strong>HTML</strong> content with an <em style="color: blue;">emphasis</em>.'
    };
    return {
      args,
      htmlContent
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="htmlContent">
        Hover for HTML
      </span>
    </div>
  \`
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  setup() {
    const componentContent = {
      component: StoryTooltipComponent,
      componentProps: {
        title: 'Component Tooltip (prop)'
      }
    };
    return {
      args,
      componentContent
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="componentContent">
        Hover for a Component
      </span>
    </div>
  \`
})`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluModal
  },
  setup() {
    const isModalOpen = ref(false);
    const openModal = () => isModalOpen.value = true;
    const tooltipContent = {
      teleportTo: '.modal',
      content: 'This tooltip is inside a modal!'
    };
    return {
      args,
      isModalOpen,
      openModal,
      tooltipContent
    };
  },
  template: \`
    <div style="padding: 5rem; text-align: center;">
      <button class="button" @click="openModal">Open Modal</button>
      <UluModal v-model="isModalOpen" title="Modal with Tooltip">
        <p>This is a modal dialog.</p>
        <p>
          Hover over this 
          <span 
            tabindex="0" 
            v-ulu-tooltip="tooltipContent" 
            style="color: blue; text-decoration: underline;"
          >
            text with a tooltip
          </span>.
        </p>
      </UluModal>
    </div>
  \`
})`,...r.parameters?.docs?.source}}};const U=["Basic","ReactiveContent","HtmlContent","ComponentContent","InModal"];export{o as Basic,i as ComponentContent,s as HtmlContent,r as InModal,a as ReactiveContent,U as __namedExportsOrder,_ as default};
