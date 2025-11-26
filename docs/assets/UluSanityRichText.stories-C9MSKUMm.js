import{createBlock as p,renderSlot as s,openBlock as c,resolveDynamicComponent as m,withCtx as l,createCommentVNode as y,createVNode as f,unref as g,h}from"vue";import{PortableText as _}from"@portabletext/vue";const i={__name:"UluConditionalWrapper",props:{is:{type:[String,Object,Function],default:"div"},unwrapped:{type:Boolean,default:!1}},setup(e){return(t,n)=>e.unwrapped?s(t.$slots,"default",{key:1}):(c(),p(m(e.is),{key:0},{default:l(()=>[s(t.$slots,"default")]),_:3}))}};i.__docgenInfo={exportName:"default",displayName:"UluConditionalWrapper",description:"",tags:{},props:[{name:"is",description:`The underlying component or HTML tag to render.
Can be a string like 'div' or an imported component object.`,type:{name:"string|object|func"},defaultValue:{func:!1,value:"'div'"}},{name:"unwrapped",description:`If true, the wrapper will not be rendered and the content
will be output directly.`,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluConditionalWrapper.vue"]};const u={__name:"UluSanityRichText",props:{content:Array,noWrapper:{type:Boolean,default:!1}},setup(e){const t={types:{image:({value:n})=>h("img",{src:`${n.imageUrl}?max-w=1100&fit=crop`,alt:n.imageAlt})}};return(n,b)=>e.content?.length?(c(),p(i,{key:0,class:"wysiwyg",unwrapped:e.noWrapper},{default:l(()=>[f(g(_),{value:e.content,components:t},null,8,["value"])]),_:1},8,["unwrapped"])):y("",!0)}};u.__docgenInfo={exportName:"default",displayName:"UluSanityRichText",description:"",tags:{},props:[{name:"content",description:"The array of Portable Text blocks to render.",type:{name:"array"}},{name:"noWrapper",description:"If true, the output will not be wrapped in a div with the 'wysiwyg' class.",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluSanityRichText.vue"]};const w={component:u,tags:["autodocs"],argTypes:{content:{control:"object"},noWrapper:{control:"boolean"}}},d=[{_key:"r1",_type:"block",style:"h2",children:[{_key:"r1c1",_type:"span",text:"Hello, Sanity!"}]},{_key:"r2",_type:"block",children:[{_key:"r2c1",_type:"span",text:"This is a simple example of Portable Text being rendered by the "},{_key:"r2c2",_type:"span",text:"UluSanityRichText",marks:["strong"]},{_key:"r2c3",_type:"span",text:" component."}]}],r={args:{content:d,noWrapper:!1}},o={args:{content:d,noWrapper:!0}},a={args:{content:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: mockContent,
    noWrapper: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: mockContent,
    noWrapper: true
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: []
  }
}`,...a.parameters?.docs?.source}}};const W=["WithWrapper","NoWrapper","Empty"];export{a as Empty,o as NoWrapper,r as WithWrapper,W as __namedExportsOrder,w as default};
