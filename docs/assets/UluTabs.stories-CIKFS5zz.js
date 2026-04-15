import{aq as Ue,k as q,q as S,A as M,a6 as ie,ar as Pe,V as B,F as de,a5 as _,T as ce,c as g,p as re,L as ge,a as C,w as R,l as L,o as W,e as H,v as V,x as K,u as ye,b as xe,G as we}from"./iframe-Cd2AvOWl.js";import"./preload-helper-BJwshlQW.js";function Ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}var ue;let Se=Symbol("headlessui.useid"),Ne=0;const pe=(ue=Ue)!=null?ue:function(){return q(Se,()=>`${++Ne}`)()};function T(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function A(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,A),a}var _e=Object.defineProperty,Ee=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t,n)=>(Ee(e,typeof t!="symbol"?t+"":t,n),n);let Oe=class{constructor(){se(this,"current",this.detect()),se(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},Ae=new Oe;function Le(e){if(Ae.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=T(e);if(t)return t.ownerDocument}return document}let Fe=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var w=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(w||{}),$=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))($||{}),$e=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))($e||{});function je(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Fe)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var ke=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ke||{}),Ge=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Ge||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let De=["textarea","input"].join(",");function Me(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,De))!=null?n:!1}function O(e,t=n=>n){return e.slice().sort((n,a)=>{let r=t(n),s=t(a);if(r===null||s===null)return 0;let l=r.compareDocumentPosition(s);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function E(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:r=[]}={}){var s;let l=(s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e?.ownerDocument)!=null?s:document,o=Array.isArray(e)?n?O(e):e:je(e);r.length>0&&o.length>1&&(o=o.filter(b=>!r.includes(b))),a=a??l.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(a))-1;if(t&4)return Math.max(0,o.indexOf(a))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),P=t&32?{preventScroll:!0}:{},d=0,p=o.length,h;do{if(d>=p||d+p<=0)return 0;let b=m+d;if(t&16)b=(b+p)%p;else{if(b<0)return 3;if(b>=p)return 1}h=o[b],h?.focus(P),d+=f}while(h!==l.activeElement);return t&6&&Me(h)&&h.select(),2}function oe(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Be(e,t){let n=S(oe(e.value.type,e.value.as));return M(()=>{n.value=oe(e.value.type,e.value.as)}),ie(()=>{var a;n.value||T(t)&&T(t)instanceof HTMLButtonElement&&!((a=T(t))!=null&&a.hasAttribute("type"))&&(n.value="button")}),n}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),Ce=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ce||{});function F({visible:e=!0,features:t=0,ourProps:n,theirProps:a,...r}){var s;let l=fe(a,n),o=Object.assign(r,{props:l});if(e||t&2&&l.static)return J(o);if(t&1){let f=(s=l.unmount)==null||s?0:1;return A(f,{0(){return null},1(){return J({...r,props:{...l,hidden:!0,style:{display:"none"}}})}})}return J(o)}function J({props:e,attrs:t,slots:n,slot:a,name:r}){var s,l;let{as:o,...f}=ve(e,["unmount","static"]),m=(s=n.default)==null?void 0:s.call(n,a),P={};if(a){let d=!1,p=[];for(let[h,b]of Object.entries(a))typeof b=="boolean"&&(d=!0),b===!0&&p.push(h);d&&(P["data-headlessui-state"]=p.join(" "))}if(o==="template"){if(m=be(m??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[d,...p]=m??[];if(!Re(d)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(u=>u.trim()).filter((u,c,v)=>v.indexOf(u)===c).sort((u,c)=>u.localeCompare(c)).map(u=>`  - ${u}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(u=>`  - ${u}`).join(`
`)].join(`
`));let h=fe((l=d.props)!=null?l:{},f,P),b=Pe(d,h,!0);for(let u in h)u.startsWith("on")&&(b.props||(b.props={}),b.props[u]=h[u]);return b}return Array.isArray(m)&&m.length===1?m[0]:m}return B(o,Object.assign({},f,P),{default:()=>m})}function be(e){return e.flatMap(t=>t.type===de?be(t.children):[t])}function fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let r in a)r.startsWith("on")&&typeof a[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(a[r])):t[r]=a[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(a=>[a,void 0])));for(let a in n)Object.assign(t,{[a](r,...s){let l=n[a];for(let o of l){if(r instanceof Event&&r.defaultPrevented)return;o(r,...s)}}});return t}function ve(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function Re(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var me=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(me||{});let Te=_({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var a;let{features:r,...s}=e,l={"aria-hidden":(r&2)===2?!0:(a=s["aria-hidden"])!=null?a:void 0,hidden:(r&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return F({ourProps:l,theirProps:s,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});let We=_({props:{onFocus:{type:Function,required:!0}},setup(e){let t=S(!0);return()=>t.value?B(Te,{as:"button",type:"button",features:me.Focusable,onFocus(n){n.preventDefault();let a,r=50;function s(){var l;if(r--<=0){a&&cancelAnimationFrame(a);return}if((l=e.onFocus)!=null&&l.call(e)){t.value=!1,cancelAnimationFrame(a);return}a=requestAnimationFrame(s)}a=requestAnimationFrame(s)}}):null}});var He=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(He||{}),Ye=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Ye||{});let he=Symbol("TabsContext");function Y(e){let t=q(he,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <TabGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Y),n}return t}let Z=Symbol("TabsSSRContext"),qe=_({name:"TabGroup",emits:{change:e=>!0},props:{as:{type:[Object,String],default:"template"},selectedIndex:{type:[Number],default:null},defaultIndex:{type:[Number],default:0},vertical:{type:[Boolean],default:!1},manual:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:t,attrs:n,emit:a}){var r;let s=S((r=e.selectedIndex)!=null?r:e.defaultIndex),l=S([]),o=S([]),f=g(()=>e.selectedIndex!==null),m=g(()=>f.value?e.selectedIndex:s.value);function P(u){var c;let v=O(d.tabs.value,T),i=O(d.panels.value,T),U=v.filter(y=>{var x;return!((x=T(y))!=null&&x.hasAttribute("disabled"))});if(u<0||u>v.length-1){let y=A(s.value===null?0:Math.sign(u-s.value),{[-1]:()=>1,0:()=>A(Math.sign(u),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0}),x=A(y,{0:()=>v.indexOf(U[0]),1:()=>v.indexOf(U[U.length-1])});x!==-1&&(s.value=x),d.tabs.value=v,d.panels.value=i}else{let y=v.slice(0,u),x=[...v.slice(u),...y].find(X=>U.includes(X));if(!x)return;let N=(c=v.indexOf(x))!=null?c:d.selectedIndex.value;N===-1&&(N=d.selectedIndex.value),s.value=N,d.tabs.value=v,d.panels.value=i}}let d={selectedIndex:g(()=>{var u,c;return(c=(u=s.value)!=null?u:e.defaultIndex)!=null?c:null}),orientation:g(()=>e.vertical?"vertical":"horizontal"),activation:g(()=>e.manual?"manual":"auto"),tabs:l,panels:o,setSelectedIndex(u){m.value!==u&&a("change",u),f.value||P(u)},registerTab(u){var c;if(l.value.includes(u))return;let v=l.value[s.value];if(l.value.push(u),l.value=O(l.value,T),!f.value){let i=(c=l.value.indexOf(v))!=null?c:s.value;i!==-1&&(s.value=i)}},unregisterTab(u){let c=l.value.indexOf(u);c!==-1&&l.value.splice(c,1)},registerPanel(u){o.value.includes(u)||(o.value.push(u),o.value=O(o.value,T))},unregisterPanel(u){let c=o.value.indexOf(u);c!==-1&&o.value.splice(c,1)}};re(he,d);let p=S({tabs:[],panels:[]}),h=S(!1);M(()=>{h.value=!0}),re(Z,g(()=>h.value?null:p.value));let b=g(()=>e.selectedIndex);return M(()=>{ge([b],()=>{var u;return P((u=e.selectedIndex)!=null?u:e.defaultIndex)},{immediate:!0})}),ie(()=>{if(!f.value||m.value==null||d.tabs.value.length<=0)return;let u=O(d.tabs.value,T);u.some((c,v)=>T(d.tabs.value[v])!==T(c))&&d.setSelectedIndex(u.findIndex(c=>T(c)===T(d.tabs.value[m.value])))}),()=>{let u={selectedIndex:s.value};return B(de,[l.value.length<=0&&B(We,{onFocus:()=>{for(let c of l.value){let v=T(c);if(v?.tabIndex===0)return v.focus(),!0}return!1}}),F({theirProps:{...n,...ve(e,["selectedIndex","defaultIndex","manual","vertical","onChange"])},ourProps:{},slot:u,slots:t,attrs:n,name:"TabGroup"})])}}}),Ve=_({name:"TabList",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:n}){let a=Y("TabList");return()=>{let r={selectedIndex:a.selectedIndex.value},s={role:"tablist","aria-orientation":a.orientation.value};return F({ourProps:s,theirProps:e,slot:r,attrs:t,slots:n,name:"TabList"})}}}),Ke=_({name:"Tab",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:t,slots:n,expose:a}){var r;let s=(r=e.id)!=null?r:`headlessui-tabs-tab-${pe()}`,l=Y("Tab"),o=S(null);a({el:o,$el:o}),M(()=>l.registerTab(o)),ce(()=>l.unregisterTab(o));let f=q(Z),m=g(()=>{if(f.value){let i=f.value.tabs.indexOf(s);return i===-1?f.value.tabs.push(s)-1:i}return-1}),P=g(()=>{let i=l.tabs.value.indexOf(o);return i===-1?m.value:i}),d=g(()=>P.value===l.selectedIndex.value);function p(i){var U;let y=i();if(y===$.Success&&l.activation.value==="auto"){let x=(U=Le(o))==null?void 0:U.activeElement,N=l.tabs.value.findIndex(X=>T(X)===x);N!==-1&&l.setSelectedIndex(N)}return y}function h(i){let U=l.tabs.value.map(y=>T(y)).filter(Boolean);if(i.key===I.Space||i.key===I.Enter){i.preventDefault(),i.stopPropagation(),l.setSelectedIndex(P.value);return}switch(i.key){case I.Home:case I.PageUp:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.First));case I.End:case I.PageDown:return i.preventDefault(),i.stopPropagation(),p(()=>E(U,w.Last))}if(p(()=>A(l.orientation.value,{vertical(){return i.key===I.ArrowUp?E(U,w.Previous|w.WrapAround):i.key===I.ArrowDown?E(U,w.Next|w.WrapAround):$.Error},horizontal(){return i.key===I.ArrowLeft?E(U,w.Previous|w.WrapAround):i.key===I.ArrowRight?E(U,w.Next|w.WrapAround):$.Error}}))===$.Success)return i.preventDefault()}let b=S(!1);function u(){var i;b.value||(b.value=!0,!e.disabled&&((i=T(o))==null||i.focus({preventScroll:!0}),l.setSelectedIndex(P.value),Ie(()=>{b.value=!1})))}function c(i){i.preventDefault()}let v=Be(g(()=>({as:e.as,type:t.type})),o);return()=>{var i,U;let y={selected:d.value,disabled:(i=e.disabled)!=null?i:!1},{...x}=e,N={ref:o,onKeydown:h,onMousedown:c,onClick:u,id:s,role:"tab",type:v.value,"aria-controls":(U=T(l.panels.value[P.value]))==null?void 0:U.id,"aria-selected":d.value,tabIndex:d.value?0:-1,disabled:e.disabled?!0:void 0};return F({ourProps:N,theirProps:x,slot:y,attrs:t,slots:n,name:"Tab"})}}}),ze=_({name:"TabPanels",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let a=Y("TabPanels");return()=>{let r={selectedIndex:a.selectedIndex.value};return F({theirProps:e,ourProps:{},slot:r,attrs:n,slots:t,name:"TabPanels"})}}}),Xe=_({name:"TabPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null},tabIndex:{type:Number,default:0}},setup(e,{attrs:t,slots:n,expose:a}){var r;let s=(r=e.id)!=null?r:`headlessui-tabs-panel-${pe()}`,l=Y("TabPanel"),o=S(null);a({el:o,$el:o}),M(()=>l.registerPanel(o)),ce(()=>l.unregisterPanel(o));let f=q(Z),m=g(()=>{if(f.value){let p=f.value.panels.indexOf(s);return p===-1?f.value.panels.push(s)-1:p}return-1}),P=g(()=>{let p=l.panels.value.indexOf(o);return p===-1?m.value:p}),d=g(()=>P.value===l.selectedIndex.value);return()=>{var p;let h={selected:d.value},{tabIndex:b,...u}=e,c={ref:o,id:s,role:"tabpanel","aria-labelledby":(p=T(l.tabs.value[P.value]))==null?void 0:p.id,tabIndex:d.value?b:-1};return!d.value&&e.unmount&&!e.static?B(Te,{as:"span","aria-hidden":!0,...c}):F({ourProps:c,theirProps:u,slot:h,attrs:t,slots:n,features:Q.Static|Q.RenderStrategy,visible:d.value,name:"TabPanel"})}}});const ee={__name:"UluTab",setup(e){return(t,n)=>(W(),C(L(Ke),null,{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};ee.__docgenInfo={exportName:"default",displayName:"UluTab",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTab.vue"]};const te=Object.assign({inheritAttrs:!1},{__name:"UluTabGroup",props:{defaultIndex:Number,vertical:Boolean,modifiers:[String,Array]},setup(e){const t=e,{resolvedModifiers:n}=ye({props:t,baseClass:"tabs"});return(a,r)=>(W(),C(L(qe),{defaultIndex:e.defaultIndex,vertical:e.vertical},{default:R(s=>[xe("div",we(a.$attrs,{class:["tabs",[L(n),{"tabs--vertical":e.vertical}]]}),[H(a.$slots,"default",V(K(s)))],16)]),_:3},8,["defaultIndex","vertical"]))}});te.__docgenInfo={exportName:"default",displayName:"UluTabGroup",description:"",tags:{},props:[{name:"defaultIndex",description:"Active tab index by default",type:{name:"number"}},{name:"vertical",description:"Whether or not to use vertical layout",type:{name:"boolean"}},{name:"modifiers",description:"Class modifiers (ie. 'transparent', 'secondary', etc)",type:{name:"string|array"}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabGroup.vue"]};const ne={__name:"UluTabList",setup(e){return(t,n)=>(W(),C(L(Ve),{class:"tabs__tablist"},{default:R(()=>[H(t.$slots,"default")]),_:3}))}};ne.__docgenInfo={exportName:"default",displayName:"UluTabList",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabList.vue"]};const ae={__name:"UluTabPanel",setup(e){return(t,n)=>(W(),C(L(Xe),null,{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};ae.__docgenInfo={exportName:"default",displayName:"UluTabPanel",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanel.vue"]};const le={__name:"UluTabPanels",setup(e){return(t,n)=>(W(),C(L(ze),{as:"template"},{default:R(a=>[H(t.$slots,"default",V(K(a)))]),_:3}))}};le.__docgenInfo={exportName:"default",displayName:"UluTabPanels",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/collapsible/UluTabPanels.vue"]};const et={component:te,subcomponents:{UluTabList:ne,UluTab:ee,UluTabPanels:le,UluTabPanel:ae},tags:["autodocs"]},z=e=>({components:{UluTabGroup:te,UluTabList:ne,UluTab:ee,UluTabPanels:le,UluTabPanel:ae},setup(){return{args:e}},template:`
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
  `}),j=z.bind({});j.args={};const k=z.bind({});k.args={vertical:!0};const G=z.bind({});G.args={defaultIndex:2};const D=z.bind({});D.args={modifiers:["full-width"]};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`args => ({
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
})`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => ({
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
})`,...D.parameters?.docs?.source}}};const tt=["Default","Vertical","DefaultIndex","FullWidth"];export{j as Default,G as DefaultIndex,D as FullWidth,k as Vertical,tt as __namedExportsOrder,et as default};
