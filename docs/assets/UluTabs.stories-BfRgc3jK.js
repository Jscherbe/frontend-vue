import{ap as Te,J as q,l as S,T as G,a4 as oe,aq as Ue,S as M,F as ie,a3 as _,P as de,c as P,ae as le,H as ge,a as B,w as C,h as L,o as R,e as H,s as Y,v as V,u as Pe,b as ye,m as xe}from"./iframe-BmUNP_tL.js";import"./preload-helper-BJwshlQW.js";function we(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var re;let Ie=Symbol("headlessui.useid"),Se=0;const ce=(re=Te)!=null?re:function(){return q(Ie,()=>`${++Se}`)()};function h(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function A(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,A),a}var Ne=Object.defineProperty,_e=(e,t,n)=>t in e?Ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);let Ee=class{constructor(){ue(this,"current",this.detect()),ue(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Oe=new Ee;function Ae(e){if(Oe.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let Le=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var w=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(w||{}),j=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(j||{}),$e=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($e||{});function je(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Le)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{}),ke=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(ke||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let De=["textarea","input"].join(",");function Ge(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,De))!=null?n:!1}function O(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),s=t(a);if(r===null||s===null)return 0;let l=r.compareDocumentPosition(s);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:r=[]}={}){var s;let l=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e?.ownerDocument)!=null?s:document,o=Array.isArray(e)?n?O(e):e:je(e);r.length>0&&o.length>1&&(o=o.filter(f=>!r.includes(f))),a=a??l.activeElement;let b=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(a))-1;if(t&4)return Math.max(0,o.indexOf(a))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),g=t&32?{preventScroll:!0}:{},d=0,p=o.length,T;do{if(d>=p||d+p<=0)return 0;let f=m+d;if(t&16)f=(f+p)%p;else{if(f<0)return 3;if(f>=p)return 1}T=o[f],T?.focus(g),d+=b}while(T!==l.activeElement);return t&6&&Ge(T)&&T.select(),2}function se(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Me(e,t){let n=S(se(e.value.type,e.value.as));return G(()=>{n.value=se(e.value.type,e.value.as)}),oe(()=>{var a;n.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((a=h(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}var X=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(X||{}),Be=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Be||{});function $({visible:e=!0,features:t=0,ourProps:n,theirProps:a,...r}){var s;let l=fe(a,n),o=Object.assign(r,{props:l});if(e||t&2&&l.static)return z(o);if(t&1){let b=(s=l.unmount)==null||s?0:1;return A(b,{0(){return null},1(){return z({...r,props:{...l,hidden:!0,style:{display:"none"}}})}})}return z(o)}function z({props:e,attrs:t,slots:n,slot:a,name:r}){var s,l;let{as:o,...b}=be(e,["unmount","static"]),m=(s=n.default)==null?void 0:s.call(n,a),g={};if(a){let d=!1,p=[];for(let[T,f]of Object.entries(a))typeof f=="boolean"&&(d=!0),f===!0&&p.push(T);d&&(g["data-headlessui-state"]=p.join(" "))}if(o==="template"){if(m=pe(m??[]),Object.keys(b).length>0||Object.keys(t).length>0){let[d,...p]=m??[];if(!Ce(d)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(b).concat(Object.keys(t)).map(u=>u.trim()).filter((u,c,v)=>v.indexOf(u)===c).sort((u,c)=>u.localeCompare(c)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let T=fe((l=d.props)!=null?l:{},b,g),f=Ue(d,T,!0);for(let u in T)u.startsWith("on")&&(f.props||(f.props={}),f.props[u]=T[u]);return f}return Array.isArray(m)&&m.length===1?m[0]:m}return M(o,Object.assign({},b,g),{default:()=>m})}function pe(e){return e.flatMap(t=>t.type===ie?pe(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let r in a)r.startsWith("on")&&typeof a[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(a[r])):t[r]=a[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](r,...s){let l=n[a];for(let o of l){if(r instanceof Event&&r.defaultPrevented)return;o(r,...s)}}});return t}function be(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function Ce(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ve=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ve||{});let me=_({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var a;let{features:r,...s}=e,l={"aria-hidden":(r&2)===2?!0:(a=s["aria-hidden"])!=null?a:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return $({ourProps:l,theirProps:s,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});let Re=_({props:{onFocus:{type:Function,required:!0}},setup(e){let t=S(!0);return()=>t.value?M(me,{as:"button",type:"button",features:ve.Focusable,onFocus(n){n.preventDefault();let a,r=50;function s(){var l;if(r--<=0){a&&cancelAnimationFrame(a);return}if((l=e.onFocus)!=null&&l.call(e)){t.value=!1,cancelAnimationFrame(a);return}a=requestAnimationFrame(s)}a=requestAnimationFrame(s)}}):null}});var He=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(He||{}),We=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(We||{});let he=Symbol("TabsContext");function W(e){let t=q(he,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,W),n}return t}let J=Symbol("TabsSSRContext"),qe=_({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){var r;let s=S((r=e.selectedIndex)!=null?r:e.defaultIndex),l=S([]),o=S([]),b=P(()=>e.selectedIndex!==null),m=P(()=>b.value?e.selectedIndex:s.value);function g(u){var c;let v=O(d.tabs.value,h),i=O(d.panels.value,h),U=v.filter(y=>{var x;return!((x=h(y))!=null&&x.hasAttribute("disabled"))});if(u<0||u>v.length-1){let y=A(s.value===null?0:Math.sign(u-s.value),{[-1]:()=>1,0:()=>A(Math.sign(u),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=A(y,{0:()=>v.indexOf(U[0]),1:()=>v.indexOf(U[U.length-1])});x!==-1&&(s.value=x),d.tabs.value=v,d.panels.value=i}else{let y=v.slice(0,u),x=[...v.slice(u),...y].find(K=>U.includes(K));if(!x)return;let N=(c=v.indexOf(x))!=null?c:d.selectedIndex.value;N===-1&&(N=d.selectedIndex.value),s.value=N,d.tabs.value=v,d.panels.value=i}}let d={selectedIndex:P(()=>{var u,c;return(c=(u=s.value)!=null?u:e.defaultIndex)!=null?c:null}),orientation:P(()=>e.vertical?"vertical":"horizontal"),activation:P(()=>e.manual?"manual":"auto"),tabs:l,panels:o,setSelectedIndex(u){m.value!==u&&a("change",u),b.value||g(u)},registerTab(u){var c;if(l.value.includes(u))return;let v=l.value[s.value];if(l.value.push(u),l.value=O(l.value,h),!b.value){let i=(c=l.value.indexOf(v))!=null?c:s.value;i!==-1&&(s.value=i)}},unregisterTab(u){let c=l.value.indexOf(u);c!==-1&&l.value.splice(c,1)},registerPanel(u){o.value.includes(u)||(o.value.push(u),o.value=O(o.value,h))},unregisterPanel(u){let c=o.value.indexOf(u);c!==-1&&o.value.splice(c,1)}};le(he,d);let p=S({tabs:[],panels:[]}),T=S(!1);G(()=>{T.value=!0}),le(J,P(()=>T.value?null:p.value));let f=P(()=>e.selectedIndex);return G(()=>{ge([f],()=>{var u;return g((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),oe(()=>{if(!b.value||m.value==null||d.tabs.value.length<=0)return;let u=O(d.tabs.value,h);u.some((c,v)=>h(d.tabs.value[v])!==h(c))&&d.setSelectedIndex(u.findIndex(c=>h(c)===h(d.tabs.value[m.value])))}),()=>{let u={selectedIndex:s.value};return M(ie,[l.value.length<=0&&M(Re,{onFocus:()=>{for(let c of l.value){let v=h(c);if(v?.tabIndex===0)return v.focus(),!0}return!1}}),$({theirProps:{...n,...be(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),Ye=_({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=W("TabList");return()=>{let r={selectedIndex:a.selectedIndex.value},s={role:"tablist","aria-orientation":a.orientation.value};return $({ourProps:s,theirProps:e,slot:r,attrs:t,slots:n,name:"TabList"})}}}),Ve=_({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var r;let s=(r=e.id)!=null?r:`headlessui-tabs-tab-${ce()}`,l=W("Tab"),o=S(null);a({el:o,$el:o}),G(()=>l.registerTab(o)),de(()=>l.unregisterTab(o));let b=q(J),m=P(()=>{if(b.value){let i=b.value.tabs.indexOf(s);return i===-1?b.value.tabs.push(s)-1:i}return-1}),g=P(()=>{let i=l.tabs.value.indexOf(o);return i===-1?m.value:i}),d=P(()=>g.value===l.selectedIndex.value);function p(i){var U;let y=i();if(y===j.Success&&l.activation.value==="auto"){let x=(U=Ae(o))==null?void 0:U.activeElement,N=l.tabs.value.findIndex(K=>h(K)===x);N!==-1&&l.setSelectedIndex(N)}return y}function T(i){let U=l.tabs.value.map(y=>h(y)).filter(Boolean);if(i.key===I.Space||i.key===I.Enter){i.preventDefault(),i.stopPropagation(),l.setSelectedIndex(g.value);return}switch(i.key){case I.Home:case I.PageUp:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.First));case I.End:case I.PageDown:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.Last))}if(p(()=>A(l.orientation.value,{vertical(){return i.key===I.ArrowUp?E(U,w.Previous|w.WrapAround):i.key===I.ArrowDown?E(U,w.Next|w.WrapAround):j.Error},horizontal(){return i.key===I.ArrowLeft?E(U,w.Previous|w.WrapAround):i.key===I.ArrowRight?E(U,w.Next|w.WrapAround):j.Error}}))===j.Success)return i.preventDefault()}let f=S(!1);function u(){var i;f.value||(f.value=!0,!e.disabled&&((i=h(o))==null||i.focus({preventScroll:!0}),l.setSelectedIndex(g.value),we(()=>{f.value=!1})))}function c(i){i.preventDefault()}let v=Me(P(()=>({as:e.as,type:t.type})),o);return()=>{var i,U;let y={selected:d.value,disabled:(i=e.disabled)!=null?i:!1},{...x}=e,N={ref:o,onKeydown:T,onMousedown:c,onClick:u,id:s,role:"tab",type:v.value,"aria-controls":(U=h(l.panels.value[g.value]))==null?void 0:U.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:e.disabled?!0:void 0};return $({ourProps:N,theirProps:x,slot:y,attrs:t,slots:n,name:"Tab"})}}}),Ke=_({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=W("TabPanels");return()=>{let r={selectedIndex:a.selectedIndex.value};return $({theirProps:e,ourProps:{},slot:r,attrs:n,slots:t,name:"TabPanels"})}}}),ze=_({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:a}){var r;let s=(r=e.id)!=null?r:`headlessui-tabs-panel-${ce()}`,l=W("TabPanel"),o=S(null);a({el:o,$el:o}),G(()=>l.registerPanel(o)),de(()=>l.unregisterPanel(o));let b=q(J),m=P(()=>{if(b.value){let p=b.value.panels.indexOf(s);return p===-1?b.value.panels.push(s)-1:p}return-1}),g=P(()=>{let p=l.panels.value.indexOf(o);return p===-1?m.value:p}),d=P(()=>g.value===l.selectedIndex.value);return()=>{var p;let T={selected:d.value},{tabIndex:f,...u}=e,c={ref:o,id:s,role:"tabpanel","aria-labelledby":(p=h(l.tabs.value[g.value]))==null?void 0:p.id,tabIndex:d.value?f:-1};return!d.value&&e.unmount&&!e.static?M(me,{as:"span","aria-hidden":!0,...c}):$({ourProps:c,theirProps:u,slot:T,attrs:t,slots:n,features:X.Static|X.RenderStrategy,visible:d.value,name:"TabPanel"})}}});const Q={__name:"UluTab",setup(e){return(t,n)=>(R(),B(L(Ve),null,{default:C(a=>[H(t.$slots,"default",Y(V(a)))]),_:3}))}};Q.__docgenInfo={exportName:"default",displayName:"UluTab",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTab.vue"]};const Z=Object.assign({inheritAttrs:!1},{__name:"UluTabGroup",props:{defaultIndex:Number,vertical:Boolean,modifiers:[String,Array]},setup(e){const t=e,{resolvedModifiers:n}=Pe({props:t,baseClass:"tabs"});return(a,r)=>(R(),B(L(qe),{defaultIndex:e.defaultIndex,vertical:e.vertical},{default:C(s=>[ye("div",xe(a.$attrs,{class:["tabs",[L(n),{"tabs--vertical":e.vertical}]]}),[H(a.$slots,"default",Y(V(s)))],16)]),_:3},8,["defaultIndex","vertical"]))}});Z.__docgenInfo={exportName:"default",displayName:"UluTabGroup",description:"",tags:{},props:[{name:"defaultIndex",description:"Active tab index by default",type:{name:"number"}},{name:"vertical",description:"Whether or not to use vertical layout",type:{name:"boolean"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabGroup.vue"]};const ee={__name:"UluTabList",setup(e){return(t,n)=>(R(),B(L(Ye),{class:"tabs__tablist"},{default:C(()=>[H(t.$slots,"default")]),_:3}))}};ee.__docgenInfo={exportName:"default",displayName:"UluTabList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabList.vue"]};const te={__name:"UluTabPanel",setup(e){return(t,n)=>(R(),B(L(ze),null,{default:C(a=>[H(t.$slots,"default",Y(V(a)))]),_:3}))}};te.__docgenInfo={exportName:"default",displayName:"UluTabPanel",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanel.vue"]};const ne={__name:"UluTabPanels",setup(e){return(t,n)=>(R(),B(L(Ke),null,{default:C(a=>[H(t.$slots,"default",Y(V(a)))]),_:3}))}};ne.__docgenInfo={exportName:"default",displayName:"UluTabPanels",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanels.vue"]};const Ze={component:Z,subcomponents:{UluTabList:ee,UluTab:Q,UluTabPanels:ne,UluTabPanel:te},tags:["autodocs"]},ae=e=>({components:{UluTabGroup:Z,UluTabList:ee,UluTab:Q,UluTabPanels:ne,UluTabPanel:te},setup(){return{args:e}},template:`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  `}),F=ae.bind({});F.args={};const k=ae.bind({});k.args={vertical:!0};const D=ae.bind({});D.args={defaultIndex:2};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...F.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluTabGroup,
    UluTabList,
    UluTab,
    UluTabPanels,
    UluTabPanel
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluTabGroup v-bind="args">
      <UluTabList>
        <UluTab>Profile</UluTab>
        <UluTab>Settings</UluTab>
        <UluTab>Notifications</UluTab>
      </UluTabList>
      <UluTabPanels>
        <UluTabPanel>
          <h3>User Profile</h3>
          <p>This is where your profile information will be displayed.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Account Settings</h3>
          <p>Manage your account preferences here.</p>
        </UluTabPanel>
        <UluTabPanel>
          <h3>Your Notifications</h3>
          <p>You have 3 new notifications.</p>
        </UluTabPanel>
      </UluTabPanels>
    </UluTabGroup>
  \`
})`,...D.parameters?.docs?.source}}};const et=["Default","Vertical","DefaultIndex"];export{F as Default,D as DefaultIndex,k as Vertical,et as __namedExportsOrder,Ze as default};
