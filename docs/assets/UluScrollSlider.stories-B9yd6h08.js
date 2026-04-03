import{q as g,A as V,V as _,a0 as N,a as R,o as p,w as $,e as h,d as b,f as U,n as i,b as c,s as w,_ as B,r as T,u as E,z as P,B as D,l as I,F as j,h as M}from"./iframe-CQDi--w5.js";import{_ as W}from"./UluCard-Zp6CqvUv.js";import"./preload-helper-BJwshlQW.js";import"./UluImage-Sw4o7Qw7.js";const z=["aria-controls","disabled"],F=["aria-controls","disabled"],O={__name:"UluOverflowScroller",props:{element:{type:String,default:"div"},controls:{type:Boolean,default:!0},trackId:{type:String,default:null},scrollAmount:{type:[Number,String],default:"auto"},scrollBehavior:{type:String,default:"smooth"},namespace:{type:String,default:"OverflowScroller"},controlsClass:{type:String,default:""},buttonClasses:{type:Array,default:()=>["button","button--icon"]},iconClassPrevious:{type:String,default:"type:previous"},iconClassNext:{type:String,default:"type:next"},offsetStart:{type:Number,default:10},offsetEnd:{type:Number,default:10}},setup(e){const n=e,a=g(null),d=g(!1),m=g(!1),y=t=>{a.value=t},r=()=>{if(!a.value)return;const{scrollLeft:t,scrollWidth:s,clientWidth:o}=a.value;d.value=t>n.offsetStart,m.value=Math.ceil(t+o)<s-n.offsetEnd},v=()=>{r()},S=t=>{if(!a.value)return;const{clientWidth:s}=a.value;let o=n.scrollAmount;o==="auto"&&(o=s),a.value.scrollBy({left:t==="right"?o:-o,behavior:n.scrollBehavior})},l=()=>S("left"),f=()=>S("right");return V(()=>{_(()=>{r()}),window.addEventListener("resize",r)}),N(()=>{window.removeEventListener("resize",r)}),(t,s)=>(p(),R(T(e.element),null,{default:$(()=>[h(t.$slots,"default",{setTrackRef:y,onScroll:v,canScrollLeft:d.value,canScrollRight:m.value}),e.controls?(p(),b("ul",{key:0,class:i([`${e.namespace}__controls`,e.controlsClass])},[c("li",{class:i([`${e.namespace}__controls-item`,`${e.namespace}__controls-item--previous`,{[`${e.namespace}__controls-item--disabled`]:!d.value}])},[c("button",{class:i([`${e.namespace}__control-button`,`${e.namespace}__control-button--previous`,...e.buttonClasses]),"aria-label":"Scroll Left","aria-controls":e.trackId,onClick:l,disabled:!d.value},[h(t.$slots,"previous",{},()=>[s[0]||(s[0]=c("span",{class:"hidden-visually"},"Previous",-1)),w(B,{icon:e.iconClassPrevious,class:i(`${e.namespace}__control-icon`)},null,8,["icon","class"])])],10,z)],2),c("li",{class:i([`${e.namespace}__controls-item`,`${e.namespace}__controls-item--next`,{[`${e.namespace}__controls-item--disabled`]:!m.value}])},[c("button",{class:i([`${e.namespace}__control-button`,`${e.namespace}__control-button--next`,...e.buttonClasses]),"aria-label":"Scroll Right","aria-controls":e.trackId,onClick:f,disabled:!m.value},[h(t.$slots,"next",{},()=>[s[1]||(s[1]=c("span",{class:"hidden-visually"},"Next",-1)),w(B,{icon:e.iconClassNext,class:i(`${e.namespace}__control-icon`)},null,8,["icon","class"])])],10,F)],2)],2)):U("",!0)]),_:3}))}};O.__docgenInfo={exportName:"default",displayName:"UluOverflowScroller",description:"",tags:{},props:[{name:"element",description:"The HTML element to use as the root wrapper.",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"controls",description:"Show previous/next controls.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"trackId",description:"The ID of the track element, used for aria-controls.",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"scrollAmount",description:`Scroll amount (in pixels) for the next/prev buttons.
If 'auto', it scrolls by the visible width of the track.`,type:{name:"number|string"},defaultValue:{func:!1,value:"'auto'"}},{name:"scrollBehavior",description:"Scroll behavior ('smooth' or 'auto').",type:{name:"string"},defaultValue:{func:!1,value:"'smooth'"}},{name:"namespace",description:"CSS class namespace for controls.",type:{name:"string"},defaultValue:{func:!1,value:"'OverflowScroller'"}},{name:"controlsClass",description:"Additional class to apply to the controls container.",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttonClasses",description:"Button classes to apply.",type:{name:"array"},defaultValue:{func:!1,value:"['button', 'button--icon']"}},{name:"iconClassPrevious",description:"Icon definition for previous button.",type:{name:"string"},defaultValue:{func:!1,value:"'type:previous'"}},{name:"iconClassNext",description:"Icon definition for next button.",type:{name:"string"},defaultValue:{func:!1,value:"'type:next'"}},{name:"offsetStart",description:'Offset threshold to consider "at start" (disables previous button).',type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"offsetEnd",description:'Offset threshold to consider "at end" (disables next button).',type:{name:"number"},defaultValue:{func:!1,value:"10"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"setTrackRef",title:"binding"},{name:"onScroll",title:"binding"},{name:"canScrollLeft",title:"binding"},{name:"canScrollRight",title:"binding"}]},{name:"previous"},{name:"next"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluOverflowScroller.vue"]};const q={class:"scroll-slider__track-crop"},H=["id","onScroll"],G={key:0,class:"scroll-slider__slide scroll-slider__slide--empty",role:"presentation"},J={key:1,class:"scroll-slider__slide scroll-slider__slide--empty",role:"presentation"},A={__name:"UluScrollSlider",props:{items:{type:Array,required:!0},controls:{type:Boolean,default:!0},scrollAmount:{type:[Number,String],default:"auto"},scrollBehavior:{type:String,default:"smooth"},emptySlides:{type:Boolean,default:!0},observerOptions:{type:Object,default:()=>({threshold:.1})},modifiers:[String,Array]},setup(e){const n=e,{resolvedModifiers:a}=E({props:n,baseClass:"scroll-slider"}),d=P("ulu-scroll-slider-track"),m=g(null),y=g([]),r=g([]);let v=null;const S=(l,f)=>{l&&(y.value[f]=l)};return V(()=>{_(()=>{v=new IntersectionObserver(l=>{l.forEach(f=>{const t=y.value.findIndex(s=>s===f.target);t>-1&&(f.isIntersecting?r.value.includes(t)||r.value.push(t):r.value=r.value.filter(s=>s!==t))})},{...n.observerOptions,root:m.value}),y.value.forEach(l=>{l&&v.observe(l)})})}),N(()=>{v&&v.disconnect()}),(l,f)=>(p(),b("div",{class:i(["scroll-slider",I(a)])},[w(O,{class:"scroll-slider__control-context",controlsClass:"scroll-slider__controls",controls:e.controls,scrollAmount:e.scrollAmount,scrollBehavior:e.scrollBehavior,trackId:I(d)},D({default:$(({setTrackRef:t,onScroll:s})=>[c("div",q,[c("ul",{class:"scroll-slider__track",id:I(d),ref:o=>{m.value=o,t(o)},onScroll:s},[e.emptySlides?(p(),b("li",G," ")):U("",!0),(p(!0),b(j,null,M(e.items,(o,x)=>(p(),b("li",{key:x,class:"scroll-slider__slide",ref_for:!0,ref:L=>S(L,x)},[h(l.$slots,"slide",{item:o,index:x,isIntersecting:r.value.includes(x)})]))),128)),e.emptySlides?(p(),b("li",J," ")):U("",!0)],40,H)])]),_:2},[l.$slots.previous?{name:"previous",fn:$(()=>[h(l.$slots,"previous")]),key:"0"}:void 0,l.$slots.next?{name:"next",fn:$(()=>[h(l.$slots,"next")]),key:"1"}:void 0]),1032,["controls","scrollAmount","scrollBehavior","trackId"])],2))}};A.__docgenInfo={exportName:"default",displayName:"UluScrollSlider",description:"",tags:{},props:[{name:"items",description:"Array of items to render.",type:{name:"array"},required:!0},{name:"controls",description:"Show previous/next controls.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"scrollAmount",description:`Scroll amount (in pixels) for the next/prev buttons.
If not provided, it defaults to the visible width of the track.`,type:{name:"number|string"},defaultValue:{func:!1,value:"'auto'"}},{name:"scrollBehavior",description:"Scroll behavior ('smooth' or 'auto').",type:{name:"string"},defaultValue:{func:!1,value:"'smooth'"}},{name:"emptySlides",description:"Include empty start and end slides (needed for correct margin collapsing with some styles).",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"observerOptions",description:'Options passed to the IntersectionObserver (determines when a slide is considered "intersecting").',type:{name:"object"},defaultValue:{func:!1,value:`{
  threshold: 0.1
}`}},{name:"modifiers",description:"Base class modifiers.",type:{name:"string|array"}}],slots:[{name:"slide",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"isIntersecting",title:"binding"}]},{name:"previous"},{name:"next"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluScrollSlider.vue"]};const ee={component:A,tags:["autodocs"],argTypes:{items:{control:"object"},controls:{control:"boolean"},scrollAmount:{control:"number"},scrollBehavior:{control:"select",options:["smooth","auto"]},modifiers:{control:"text"}}},K=Array.from({length:10}).map((e,n)=>({id:n+1,title:`Card Title ${n+1}`,image:{src:`https://picsum.photos/seed/${n+50}/400/225`,alt:`Placeholder image for card ${n+1}`},bodyContent:`This is a short description for card number ${n+1}. It provides some context about the image above.`})),u={args:{items:K,modifiers:"cards"},render:e=>({components:{UluScrollSlider:A,UluCard:W},setup(){return{args:e}},template:`
      <UluScrollSlider 
        v-bind="args" 
        style="max-width: 1200px; margin: 0 auto; outline: 1px dashed #ccc; padding: 0;"
      >
        <template #slide="{ item, isIntersecting, index }">
          <UluCard 
            :title="item.title"
            :image="item.image"
          >
            <template #body>
              <p>{{ item.bodyContent }}</p>
            </template>
          </UluCard>
        </template>
      </UluScrollSlider>
    `})},C={args:{...u.args,scrollAmount:450},render:u.render},k={args:{...u.args,controls:!1},render:u.render};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    modifiers: 'cards' // Use the 'cards' modifier from _scroll-slider.scss
  },
  render: args => ({
    components: {
      UluScrollSlider,
      UluCard
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluScrollSlider 
        v-bind="args" 
        style="max-width: 1200px; margin: 0 auto; outline: 1px dashed #ccc; padding: 0;"
      >
        <template #slide="{ item, isIntersecting, index }">
          <UluCard 
            :title="item.title"
            :image="item.image"
          >
            <template #body>
              <p>{{ item.bodyContent }}</p>
            </template>
          </UluCard>
        </template>
      </UluScrollSlider>
    \`
  })
}`,...u.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    scrollAmount: 450 // Approximate width of a card + margin to scroll one at a time
  },
  render: Default.render
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    controls: false
  },
  render: Default.render
}`,...k.parameters?.docs?.source}}};const te=["Default","CustomScrollAmount","WithoutControls"];export{C as CustomScrollAmount,u as Default,k as WithoutControls,te as __namedExportsOrder,ee as default};
