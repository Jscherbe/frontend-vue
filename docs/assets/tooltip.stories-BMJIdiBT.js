import{G as l,B as u,I as i,M as d,P as p}from"./iframe-CfzwUndu.js";import"./preload-helper-BJwshlQW.js";const m={style:{"text-align":"center"}},v={style:{margin:"0 0 0.5rem 0","font-size":"1rem"}},c={__name:"StoryTooltipComponent",props:{title:String},setup(t){return(n,e)=>(u(),l("div",m,[i("h4",v,d(t.title||"no title"),1),e[0]||(e[0]=i("p",{style:{margin:"0","font-size":"0.875rem"}},"This is a Vue component being rendered inside a tooltip.",-1))]))}};c.__docgenInfo={exportName:"default",displayName:"StoryTooltipComponent",description:"",tags:{},props:[{name:"title",type:{name:"string"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/plugins/popovers/tests/StoryTooltipComponent.vue"]};const y={tags:["autodocs"],argTypes:{content:{control:"text",description:"The text to display in the tooltip."}}},o=t=>({setup(){return{args:t}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="args.content">
        Hover over me
      </span>
    </div>
  `});o.args={content:"This is a basic tooltip!"};const s=t=>({setup(){const n=p(1),e=p(`This is a reactive tooltip. Count: ${n.value}`);return{args:t,content:e,updateCount:()=>{n.value++,e.value=`The count has been updated to: ${n.value}`}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <p>
        Hover over the button and click it to increment
      </p>
      <button @click="updateCount" class="button" v-ulu-tooltip="content">Update Tooltip Content</button>
    </div>
  `});s.parameters={docs:{description:{story:"The tooltip directive is fully reactive. If the value passed to it changes while the tooltip is visible, the tooltip will update its content automatically."}}};const a=t=>({setup(){return{args:t,htmlContent:{isHtml:!0,content:'This tooltip contains <strong>HTML</strong> content with an <em style="color: blue;">emphasis</em>.'}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="htmlContent">
        Hover for HTML
      </span>
    </div>
  `});a.parameters={docs:{description:{story:"You can render HTML inside a tooltip by passing an object with `isHtml: true` and a `content` string."}}};const r=t=>({setup(){return{args:t,componentContent:{component:c,componentProps:{title:"Component Tooltip (prop)"}}}},template:`
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="componentContent">
        Hover for a Component
      </span>
    </div>
  `});r.parameters={docs:{description:{story:"You can also render a full Vue component inside a tooltip. Pass an object with a `component` key and optional `componentProps`."}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
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
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
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
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...r.parameters?.docs?.source}}};const b=["Basic","ReactiveContent","HtmlContent","ComponentContent"];export{o as Basic,r as ComponentContent,a as HtmlContent,s as ReactiveContent,b as __namedExportsOrder,y as default};
