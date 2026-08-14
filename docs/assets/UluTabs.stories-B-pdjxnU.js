import{as as Ue,x as q,h as S,v as M,a7 as ie,at as ge,V as B,F as de,ab as _,T as ce,c as P,I as re,J as Pe,a as C,w as R,b as L,o as W,r as H,m as V,p as K,u as ye,k as xe,D as we}from"./iframe-DN-QsxRd.js";import"./preload-helper-BJwshlQW.js";function Ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var ue;let Se=Symbol("headlessui.useid"),Ne=0;const pe=(ue=Ue)!=null?ue:function(){return q(Se,()=>`${++Ne}`)()};function h(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function A(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,A),a}var _e=Object.defineProperty,Ee=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t,n)=>(Ee(e,typeof t!="symbol"?t+"":t,n),n);let Oe=class{constructor(){se(this,"current",this.detect()),se(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ae=new Oe;function Le(e){if(Ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let je=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var w=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(w||{}),F=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(F||{}),Fe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Fe||{});function $e(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(je)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{}),Ge=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ge||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let De=["textarea","input"].join(",");function Me(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,De))!=null?n:!1}function O(e,t=n=>n){return e.slice().sort((n,a)=>{let l=t(n),s=t(a);if(l===null||s===null)return 0;let r=l.compareDocumentPosition(s);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:l=[]}={}){var s;let r=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e?.ownerDocument)!=null?s:document,o=Array.isArray(e)?n?O(e):e:$e(e);l.length>0&&o.length>1&&(o=o.filter(b=>!l.includes(b))),a=a??r.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(a))-1;if(t&4)return Math.max(0,o.indexOf(a))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),g=t&32?{preventScroll:!0}:{},d=0,p=o.length,T;do{if(d>=p||d+p<=0)return 0;let b=m+d;if(t&16)b=(b+p)%p;else{if(b<0)return 3;if(b>=p)return 1}T=o[b],T?.focus(g),d+=f}while(T!==r.activeElement);return t&6&&Me(T)&&T.select(),2}function oe(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Be(e,t){let n=S(oe(e.value.type,e.value.as));return M(()=>{n.value=oe(e.value.type,e.value.as)}),ie(()=>{var a;n.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((a=h(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),Ce=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ce||{});function j({visible:e=!0,features:t=0,ourProps:n,theirProps:a,...l}){var s;let r=fe(a,n),o=Object.assign(l,{props:r});if(e||t&2&&r.static)return J(o);if(t&1){let f=(s=r.unmount)==null||s?0:1;return A(f,{0(){return null},1(){return J({...l,props:{...r,hidden:!0,style:{display:"none"}}})}})}return J(o)}function J({props:e,attrs:t,slots:n,slot:a,name:l}){var s,r;let{as:o,...f}=ve(e,["unmount","static"]),m=(s=n.default)==null?void 0:s.call(n,a),g={};if(a){let d=!1,p=[];for(let[T,b]of Object.entries(a))typeof b=="boolean"&&(d=!0),b===!0&&p.push(T);d&&(g["data-headlessui-state"]=p.join(" "))}if(o==="template"){if(m=be(m??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[d,...p]=m??[];if(!Re(d)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(u=>u.trim()).filter((u,c,v)=>v.indexOf(u)===c).sort((u,c)=>u.localeCompare(c)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let T=fe((r=d.props)!=null?r:{},f,g),b=ge(d,T,!0);for(let u in T)u.startsWith("on")&&(b.props||(b.props={}),b.props[u]=T[u]);return b}return Array.isArray(m)&&m.length===1?m[0]:m}return B(o,Object.assign({},f,g),{default:()=>m})}function be(e){return e.flatMap(t=>t.type===de?be(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let l in a)l.startsWith("on")&&typeof a[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(a[l])):t[l]=a[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](l,...s){let r=n[a];for(let o of r){if(l instanceof Event&&l.defaultPrevented)return;o(l,...s)}}});return t}function ve(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function Re(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var me=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(me||{});let he=_({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var a;let{features:l,...s}=e,r={"aria-hidden":(l&2)===2?!0:(a=s["aria-hidden"])!=null?a:void 0,hidden:(l&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(l&4)===4&&(l&2)!==2&&{display:"none"}}};return j({ourProps:r,theirProps:s,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});let We=_({props:{onFocus:{type:Function,required:!0}},setup(e){let t=S(!0);return()=>t.value?B(he,{as:"button",type:"button",features:me.Focusable,onFocus(n){n.preventDefault();let a,l=50;function s(){var r;if(l--<=0){a&&cancelAnimationFrame(a);return}if((r=e.onFocus)!=null&&r.call(e)){t.value=!1,cancelAnimationFrame(a);return}a=requestAnimationFrame(s)}a=requestAnimationFrame(s)}}):null}});var He=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(He||{}),Ye=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ye||{});let Te=Symbol("TabsContext");function Y(e){let t=q(Te,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return t}let Z=Symbol("TabsSSRContext"),qe=_({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){var l;let s=S((l=e.selectedIndex)!=null?l:e.defaultIndex),r=S([]),o=S([]),f=P(()=>e.selectedIndex!==null),m=P(()=>f.value?e.selectedIndex:s.value);function g(u){var c;let v=O(d.tabs.value,h),i=O(d.panels.value,h),U=v.filter(y=>{var x;return!((x=h(y))!=null&&x.hasAttribute("disabled"))});if(u<0||u>v.length-1){let y=A(s.value===null?0:Math.sign(u-s.value),{[-1]:()=>1,0:()=>A(Math.sign(u),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=A(y,{0:()=>v.indexOf(U[0]),1:()=>v.indexOf(U[U.length-1])});x!==-1&&(s.value=x),d.tabs.value=v,d.panels.value=i}else{let y=v.slice(0,u),x=[...v.slice(u),...y].find(X=>U.includes(X));if(!x)return;let N=(c=v.indexOf(x))!=null?c:d.selectedIndex.value;N===-1&&(N=d.selectedIndex.value),s.value=N,d.tabs.value=v,d.panels.value=i}}let d={selectedIndex:P(()=>{var u,c;return(c=(u=s.value)!=null?u:e.defaultIndex)!=null?c:null}),orientation:P(()=>e.vertical?"vertical":"horizontal"),activation:P(()=>e.manual?"manual":"auto"),tabs:r,panels:o,setSelectedIndex(u){m.value!==u&&a("change",u),f.value||g(u)},registerTab(u){var c;if(r.value.includes(u))return;let v=r.value[s.value];if(r.value.push(u),r.value=O(r.value,h),!f.value){let i=(c=r.value.indexOf(v))!=null?c:s.value;i!==-1&&(s.value=i)}},unregisterTab(u){let c=r.value.indexOf(u);c!==-1&&r.value.splice(c,1)},registerPanel(u){o.value.includes(u)||(o.value.push(u),o.value=O(o.value,h))},unregisterPanel(u){let c=o.value.indexOf(u);c!==-1&&o.value.splice(c,1)}};re(Te,d);let p=S({tabs:[],panels:[]}),T=S(!1);M(()=>{T.value=!0}),re(Z,P(()=>T.value?null:p.value));let b=P(()=>e.selectedIndex);return M(()=>{Pe([b],()=>{var u;return g((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),ie(()=>{if(!f.value||m.value==null||d.tabs.value.length<=0)return;let u=O(d.tabs.value,h);u.some((c,v)=>h(d.tabs.value[v])!==h(c))&&d.setSelectedIndex(u.findIndex(c=>h(c)===h(d.tabs.value[m.value])))}),()=>{let u={selectedIndex:s.value};return B(de,[r.value.length<=0&&B(We,{onFocus:()=>{for(let c of r.value){let v=h(c);if(v?.tabIndex===0)return v.focus(),!0}return!1}}),j({theirProps:{...n,...ve(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),Ve=_({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=Y("TabList");return()=>{let l={selectedIndex:a.selectedIndex.value},s={role:"tablist","aria-orientation":a.orientation.value};return j({ourProps:s,theirProps:e,slot:l,attrs:t,slots:n,name:"TabList"})}}}),Ke=_({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var l;let s=(l=e.id)!=null?l:`headlessui-tabs-tab-${pe()}`,r=Y("Tab"),o=S(null);a({el:o,$el:o}),M(()=>r.registerTab(o)),ce(()=>r.unregisterTab(o));let f=q(Z),m=P(()=>{if(f.value){let i=f.value.tabs.indexOf(s);return i===-1?f.value.tabs.push(s)-1:i}return-1}),g=P(()=>{let i=r.tabs.value.indexOf(o);return i===-1?m.value:i}),d=P(()=>g.value===r.selectedIndex.value);function p(i){var U;let y=i();if(y===F.Success&&r.activation.value==="auto"){let x=(U=Le(o))==null?void 0:U.activeElement,N=r.tabs.value.findIndex(X=>h(X)===x);N!==-1&&r.setSelectedIndex(N)}return y}function T(i){let U=r.tabs.value.map(y=>h(y)).filter(Boolean);if(i.key===I.Space||i.key===I.Enter){i.preventDefault(),i.stopPropagation(),r.setSelectedIndex(g.value);return}switch(i.key){case I.Home:case I.PageUp:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.First));case I.End:case I.PageDown:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.Last))}if(p(()=>A(r.orientation.value,{vertical(){return i.key===I.ArrowUp?E(U,w.Previous|w.WrapAround):i.key===I.ArrowDown?E(U,w.Next|w.WrapAround):F.Error},horizontal(){return i.key===I.ArrowLeft?E(U,w.Previous|w.WrapAround):i.key===I.ArrowRight?E(U,w.Next|w.WrapAround):F.Error}}))===F.Success)return i.preventDefault()}let b=S(!1);function u(){var i;b.value||(b.value=!0,!e.disabled&&((i=h(o))==null||i.focus({preventScroll:!0}),r.setSelectedIndex(g.value),Ie(()=>{b.value=!1})))}function c(i){i.preventDefault()}let v=Be(P(()=>({as:e.as,type:t.type})),o);return()=>{var i,U;let y={selected:d.value,disabled:(i=e.disabled)!=null?i:!1},{...x}=e,N={ref:o,onKeydown:T,onMousedown:c,onClick:u,id:s,role:"tab",type:v.value,"aria-controls":(U=h(r.panels.value[g.value]))==null?void 0:U.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:e.disabled?!0:void 0};return j({ourProps:N,theirProps:x,slot:y,attrs:t,slots:n,name:"Tab"})}}}),ze=_({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=Y("TabPanels");return()=>{let l={selectedIndex:a.selectedIndex.value};return j({theirProps:e,ourProps:{},slot:l,attrs:n,slots:t,name:"TabPanels"})}}}),Xe=_({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:a}){var l;let s=(l=e.id)!=null?l:`headlessui-tabs-panel-${pe()}`,r=Y("TabPanel"),o=S(null);a({el:o,$el:o}),M(()=>r.registerPanel(o)),ce(()=>r.unregisterPanel(o));let f=q(Z),m=P(()=>{if(f.value){let p=f.value.panels.indexOf(s);return p===-1?f.value.panels.push(s)-1:p}return-1}),g=P(()=>{let p=r.panels.value.indexOf(o);return p===-1?m.value:p}),d=P(()=>g.value===r.selectedIndex.value);return()=>{var p;let T={selected:d.value},{tabIndex:b,...u}=e,c={ref:o,id:s,role:"tabpanel","aria-labelledby":(p=h(r.tabs.value[g.value]))==null?void 0:p.id,tabIndex:d.value?b:-1};return!d.value&&e.unmount&&!e.static?B(he,{as:"span","aria-hidden":!0,...c}):j({ourProps:c,theirProps:u,slot:T,attrs:t,slots:n,features:Q.Static|Q.RenderStrategy,visible:d.value,name:"TabPanel"})}}});const ee={__name:"UluTab",setup(e){return(t,n)=>(W(),C(L(Ke),{class:"tabs__tab"},{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};ee.__docgenInfo={exportName:"default",displayName:"UluTab",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTab.vue"]};const te=Object.assign({inheritAttrs:!1},{__name:"UluTabGroup",props:{defaultIndex:Number,selectedIndex:Number,vertical:Boolean,sticky:Boolean,transparent:Boolean,modifiers:[String,Array,Object]},emits:["change"],setup(e){const t=e,{resolvedModifiers:n}=ye({props:t,baseClass:"tabs",internal:P(()=>({vertical:t.vertical,sticky:t.sticky,transparent:t.transparent}))});return(a,l)=>(W(),C(L(qe),{defaultIndex:e.defaultIndex,selectedIndex:e.selectedIndex,vertical:e.vertical,onChange:l[0]||(l[0]=s=>a.$emit("change",s))},{default:R(s=>[xe("div",we(a.$attrs,{class:["tabs",L(n)]}),[H(a.$slots,"default",V(K(s)))],16)]),_:3},8,["defaultIndex","selectedIndex","vertical"]))}});te.__docgenInfo={exportName:"default",displayName:"UluTabGroup",description:"",tags:{},props:[{name:"defaultIndex",description:"Active tab index by default (uncontrolled)",type:{name:"number"}},{name:"selectedIndex",description:"Actively selected tab index (controlled)",type:{name:"number"}},{name:"vertical",description:"Whether or not to use vertical layout",type:{name:"boolean"}},{name:"sticky",description:"Whether or not to use sticky modifier (tablist)",type:{name:"boolean"}},{name:"transparent",description:"Whether or not to use transparent modifier (tab panels)",type:{name:"boolean"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array|object"}}],events:[{name:"change"}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabGroup.vue"]};const ne={__name:"UluTabList",setup(e){return(t,n)=>(W(),C(L(Ve),{class:"tabs__tablist"},{default:R(()=>[H(t.$slots,"default")]),_:3}))}};ne.__docgenInfo={exportName:"default",displayName:"UluTabList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabList.vue"]};const ae={__name:"UluTabPanel",setup(e){return(t,n)=>(W(),C(L(Xe),{class:"tabs__tabpanel"},{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};ae.__docgenInfo={exportName:"default",displayName:"UluTabPanel",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanel.vue"]};const le={__name:"UluTabPanels",setup(e){return(t,n)=>(W(),C(L(ze),{as:"template"},{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};le.__docgenInfo={exportName:"default",displayName:"UluTabPanels",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanels.vue"]};const et={component:te,subcomponents:{UluTabList:ne,UluTab:ee,UluTabPanels:le,UluTabPanel:ae},tags:["autodocs"]},z=e=>({components:{UluTabGroup:te,UluTabList:ne,UluTab:ee,UluTabPanels:le,UluTabPanel:ae},setup(){return{args:e}},template:`
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
  `}),$=z.bind({});$.args={};const k=z.bind({});k.args={vertical:!0};const G=z.bind({});G.args={defaultIndex:2};const D=z.bind({});D.args={modifiers:["full-width"]};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => ({
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
})`,...$.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => ({
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
})`,...k.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`args => ({
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
})`,...G.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => ({
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
})`,...D.parameters?.docs?.source}}};const tt=["Default","Vertical","DefaultIndex","FullWidth"];export{$ as Default,G as DefaultIndex,D as FullWidth,k as Vertical,tt as __namedExportsOrder,et as default};
