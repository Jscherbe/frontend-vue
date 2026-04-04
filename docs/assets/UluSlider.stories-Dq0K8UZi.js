import{z as re,q as l,u as le,c as ue,K as ce,A as de,V as H,a0 as me,d as g,b as m,f as J,l as F,F as Q,h as Y,e as E,n as L,o as y,s as Z,_ as ee,t as pe}from"./iframe-CNzkW0XZ.js";import"./preload-helper-BJwshlQW.js";const fe={class:"slider__control-context"},ve={class:"slider__track-crop",style:{overflow:"hidden"}},ge=["id","inert","aria-live"],ye=["id","aria-label","inert","aria-hidden"],be={key:0,class:"Slider__controls"},he={class:"Slider__controls-item Slider__controls-item--previous"},Se=["aria-controls","disabled"],_e={class:"Slider__controls-item Slider__controls-item--next"},ke=["aria-controls","disabled"],we={key:0,class:"Slider__nav"},xe=["onClick","aria-controls","aria-label","aria-current"],Ie={class:"hidden-visually"},A={__name:"UluSlider",props:{items:{type:Array,required:!0},transition:{type:String,default:"slide",validator:r=>["slide","fade","none"].includes(r)},duration:{type:Number,default:700},timingFunction:{type:String,default:"ease-in-out"},loop:{type:Boolean,default:!0},nav:{type:Boolean,default:!0},controls:{type:Boolean,default:!0},autoplay:{type:Number,default:0},reduceMotionFallback:{type:Boolean,default:!0},focusOptions:{type:Object,default:()=>({preventScroll:!0,focusVisible:!1})},modifiers:[String,Array]},emits:["change"],setup(r,{emit:te}){const a=r,ne=te,w=re("ulu-slider-track"),R=e=>`${w}-slide-${e}`,_=l(null),c=l([]),o=l(0),b=l(!1),j=l(!1),{resolvedModifiers:ie}=le({props:a,baseClass:"slider"}),O=ue(()=>a.transition==="none"?"none":a.reduceMotionFallback&&j.value?"fade":a.transition),ae=(e,i)=>{e&&(c.value[i]=e)},oe=e=>{if(!a.items||a.items.length===0)return!1;const i=o.value===a.items.length-1?0:o.value+1,t=o.value===0?a.items.length-1:o.value-1;return e===i||e===t},k=l(null),x=()=>{a.autoplay>0&&(I(),k.value=setInterval(()=>{X()},a.autoplay))},I=()=>{k.value&&(clearInterval(k.value),k.value=null)},P=()=>I(),z=()=>x();ce(()=>a.autoplay,()=>{x()}),l(0),l(0),l(null),l([]),l(!1);const h=(e,i)=>{c.value.forEach((t,n)=>{t&&(i?t.style.visibility="visible":t.style.visibility=n===e?"visible":"hidden")})},f=(e,i)=>{const t=_.value;t&&(t.style.transitionProperty="transform",t.style.transitionDuration=`${i}ms`,t.style.transitionTimingFunction=a.timingFunction,t.style.transform=`translateX(-${e}px)`)},T=(e,i,t)=>{const n=c.value[e];n&&(n.style.transitionProperty="opacity",n.style.transitionDuration=`${t}ms`,n.style.transitionTimingFunction=a.timingFunction,n.style.opacity=i)},S=(e,i)=>{const t=c.value[e];t&&(t.style.order=i)},U=e=>c.value[e]?.offsetLeft||0,M=(e,i)=>new Promise(t=>{if(i<=0||!e){t();return}let n=null,p=null;const d=()=>{clearTimeout(n),clearTimeout(p),e.removeEventListener("transitionrun",v),e.removeEventListener("transitionend",d),e.removeEventListener("transitioncancel",d),t()},v=()=>{clearTimeout(n),p=setTimeout(d,i+500)};e.addEventListener("transitionrun",v,{once:!0}),e.addEventListener("transitionend",d,{once:!0}),e.addEventListener("transitioncancel",d,{once:!0}),n=setTimeout(d,i+500)}),C=async(e,i="nav")=>{if(e===o.value||b.value||!a.items||a.items.length===0)return;b.value=!0,I();const t=o.value,n=a.items.length,p=i==="previous",d=n-1,v=e===0&&t===d,B=e===d&&t===0,W=O.value;if(W==="slide"){let s=null,G=1;t!==null&&!v&&!B&&(G=Math.abs(t-e)),n<3?v&&!p?s=t:B&&(s=p?e:t):v?s=t:B&&(s=e),h(null,!0),s!==null&&(S(s,"-1"),f(v?0:U(t),0));const K=a.duration*Math.min(G,n);_.value?.getBoundingClientRect(),f(U(e),K),await M(_.value,K),s!==null&&(S(s,"0"),f(U(e),0),await H(),_.value?.getBoundingClientRect()),h(e,!1)}else if(W==="fade"){const s=a.duration;h(null,!0),t!==null&&(T(t,"0",s),await M(c.value[t],s),S(t,"0")),f(0,0),S(e,"-1"),c.value[e]?.getBoundingClientRect(),T(e,"1",s),await M(c.value[e],s),h(e,!1)}else h(null,!0),t!==null&&(S(t,"0"),T(t,"1",0)),f(0,0),S(e,"-1"),T(e,"1",0),h(e,!1);if(o.value=e,b.value=!1,i!=="init"){const s=c.value[e];s&&s.focus&&s.focus(a.focusOptions),ne("change",{index:e,item:a.items[e]})}x()},q=e=>{if(!a.items)return;const i=a.items.length;if(i===0)return;const n=e==="next"?o.value+1:o.value-1;n>i-1?a.loop&&C(0,e):n<0?a.loop&&C(i-1,e):C(n,e)},X=()=>q("next"),se=()=>q("previous");return de(()=>{typeof window<"u"&&(j.value=window.matchMedia("(prefers-reduced-motion: reduce)").matches),H(()=>{const e=O.value==="slide";c.value.forEach((i,t)=>{i&&(i.style.visibility=t===o.value?"visible":"hidden",e?(i.style.opacity="1",i.style.order="0"):(i.style.opacity=t===o.value?"1":"0",i.style.order=t===o.value?"-1":"0"))}),f(e?U(o.value):0,0),x()})}),me(()=>{I()}),(e,i)=>(y(),g("div",{class:L(["slider",[F(ie),{"slider--transitioning":b.value}]]),onMouseenter:P,onMouseleave:z,onFocusin:P,onFocusout:z},[m("div",fe,[m("div",ve,[m("ul",{class:"slider__track",id:F(w),ref_key:"trackRef",ref:_,style:{display:"flex","list-style":"none",position:"relative",margin:"0",padding:"0"},inert:b.value,"aria-live":k.value?"off":"polite"},[(y(!0),g(Q,null,Y(r.items,(t,n)=>(y(),g("li",{key:n,id:R(n),class:L(["slider__slide",{"is-active":n===o.value}]),style:{flex:"0 0 100%",width:"100%",visibility:"hidden"},tabindex:"-1",role:"group","aria-roledescription":"slide","aria-label":`Slide ${n+1} of ${r.items.length}`,inert:!b.value&&n!==o.value,"aria-hidden":n!==o.value,ref_for:!0,ref:p=>ae(p,n)},[E(e.$slots,"slide",{item:t,index:n,active:n===o.value,upcoming:oe(n)})],10,ye))),128))],8,ge)]),r.controls?(y(),g("ul",be,[m("li",he,[m("button",{class:"Slider__control-button Slider__control-button--previous button button--icon","aria-label":"Previous Slide","aria-controls":F(w),onClick:i[0]||(i[0]=t=>se()),disabled:!r.loop&&o.value===0},[E(e.$slots,"previous",{},()=>[Z(ee,{icon:"type:previous",class:"Slider__control-icon"})])],8,Se)]),m("li",_e,[m("button",{class:"Slider__control-button Slider__control-button--next button button--icon","aria-label":"Next Slide","aria-controls":F(w),onClick:i[1]||(i[1]=t=>X()),disabled:!r.loop&&o.value===a.items.length-1},[E(e.$slots,"next",{},()=>[Z(ee,{icon:"type:next",class:"Slider__control-icon"})])],8,ke)])])):J("",!0)]),r.nav?(y(),g("ul",we,[(y(!0),g(Q,null,Y(r.items,(t,n)=>(y(),g("li",{key:n,class:"Slider__nav-item"},[m("button",{class:L(["Slider__nav-button",{"Slider__nav-button--active":n===o.value}]),onClick:p=>C(n,"nav"),"aria-controls":R(n),"aria-label":`Go to slide ${n+1}`,"aria-current":n===o.value?"true":null},[E(e.$slots,"nav",{item:t,index:n,active:n===o.value},()=>[m("span",Ie,"Item "+pe(n+1),1)])],10,xe)]))),128))])):J("",!0)],34))}};A.__docgenInfo={exportName:"default",displayName:"UluSlider",description:"",tags:{},props:[{name:"items",description:"Array of slide items.",type:{name:"array"},required:!0},{name:"transition",description:"Transition type: 'slide', 'fade', or 'none'.",type:{name:"string"},defaultValue:{func:!1,value:"'slide'"},values:["slide","fade","none"]},{name:"duration",description:"Transition duration in milliseconds.",type:{name:"number"},defaultValue:{func:!1,value:"700"}},{name:"timingFunction",description:"Easing function for the transition.",type:{name:"string"},defaultValue:{func:!1,value:"'ease-in-out'"}},{name:"loop",description:"Enable infinite looping.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"nav",description:"Show dot navigation.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"controls",description:"Show previous/next controls.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"autoplay",description:"Autoplay duration in ms. If > 0, autoplay is enabled.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"reduceMotionFallback",description:"Automatically switch to 'fade' transition if OS prefers reduced motion.",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"focusOptions",description:"Setting for element.focus() when navigating to a specific slide.",type:{name:"object"},defaultValue:{func:!1,value:`{
  preventScroll: true,
  focusVisible: false
}`}},{name:"modifiers",description:"Base class modifiers.",type:{name:"string|array"}}],events:[{name:"change"}],slots:[{name:"slide",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"},{name:"upcoming",title:"binding"}]},{name:"previous"},{name:"next"},{name:"nav",scoped:!0,bindings:[{name:"item",title:"binding"},{name:"index",title:"binding"},{name:"active",title:"binding"}]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/elements/UluSlider.vue"]};const Fe={component:A,tags:["autodocs"],argTypes:{items:{control:"object"},transition:{control:"select",options:["slide","fade","none"]},duration:{control:"number"},loop:{control:"boolean"},nav:{control:"boolean"},controls:{control:"boolean"},autoplay:{control:"number"}}},Te=[{id:1,title:"Slide 1",content:"First slide content",color:"#ffcccc"},{id:2,title:"Slide 2",content:"Second slide content",color:"#ccffcc"},{id:3,title:"Slide 3",content:"Third slide content",color:"#ccccff"},{id:4,title:"Slide 4",content:"Fourth slide content",color:"#ffffcc"}],u={args:{items:Te,transition:"slide"},render:r=>({components:{UluSlider:A},setup(){return{args:r}},template:`
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item, active, upcoming, index }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }">
            <h2 style="margin: 0 0 1rem 0;">{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <div style="margin-top: 2rem; font-size: 0.8rem; background: rgba(255,255,255,0.5); padding: 0.5rem; border-radius: 4px;">
              State: {{ active ? 'Active' : 'Inactive' }} | Upcoming: {{ upcoming }} | Index: {{ index }}
            </div>
          </div>
        </template>
      </UluSlider>
    `})},V={args:{...u.args,transition:"fade"},render:u.render},D={args:{...u.args,loop:!1},render:u.render},N={args:{...u.args,autoplay:3e3},render:u.render},$={args:{...u.args},render:r=>({components:{UluSlider:A},setup(){return{args:r}},template:`
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
            <h2>{{ item.title }}</h2>
          </div>
        </template>
        <template #nav="{ item, active }">
          <span :style="{ fontWeight: active ? 'bold' : 'normal', padding: '0.2rem', textDecoration: active ? 'underline' : 'none' }">
            {{ item.title }}
          </span>
        </template>
        <template #previous>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">PREV</span>
        </template>
        <template #next>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">NEXT</span>
        </template>
      </UluSlider>
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems,
    transition: 'slide'
  },
  render: args => ({
    components: {
      UluSlider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item, active, upcoming, index }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }">
            <h2 style="margin: 0 0 1rem 0;">{{ item.title }}</h2>
            <p>{{ item.content }}</p>
            <div style="margin-top: 2rem; font-size: 0.8rem; background: rgba(255,255,255,0.5); padding: 0.5rem; border-radius: 4px;">
              State: {{ active ? 'Active' : 'Inactive' }} | Upcoming: {{ upcoming }} | Index: {{ index }}
            </div>
          </div>
        </template>
      </UluSlider>
    \`
  })
}`,...u.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    transition: 'fade'
  },
  render: Default.render
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    loop: false
  },
  render: Default.render
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    autoplay: 3000
  },
  render: Default.render
}`,...N.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => ({
    components: {
      UluSlider
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <UluSlider v-bind="args" style="max-width: 800px; margin: 0 auto; height: 300px; outline: 1px solid #ccc;">
        <template #slide="{ item }">
          <div :style="{ backgroundColor: item.color, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
            <h2>{{ item.title }}</h2>
          </div>
        </template>
        <template #nav="{ item, active }">
          <span :style="{ fontWeight: active ? 'bold' : 'normal', padding: '0.2rem', textDecoration: active ? 'underline' : 'none' }">
            {{ item.title }}
          </span>
        </template>
        <template #previous>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">PREV</span>
        </template>
        <template #next>
          <span style="background: white; padding: 0.5rem; border: 1px solid black; cursor: pointer;">NEXT</span>
        </template>
      </UluSlider>
    \`
  })
}`,...$.parameters?.docs?.source}}};const Ee=["Default","FadeTransition","NoLoop","Autoplay","CustomNavigation"];export{N as Autoplay,$ as CustomNavigation,u as Default,V as FadeTransition,D as NoLoop,Ee as __namedExportsOrder,Fe as default};
