import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))O(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&O(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function O(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="modulepreload",m=function(_){return"/frontend-vue/"+_},a={},r=function(i,s,O){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(o=>{if(o=m(o),o in a)return;a[o]=!0;const c=o.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!O)for(let l=t.length-1;l>=0;l--){const d=t[l];if(d.href===o&&(!c||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const n=document.createElement("link");if(n.rel=c?"stylesheet":f,c||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),c)return new Promise((l,d)=>{n.addEventListener("load",l),n.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>i()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:p}=__STORYBOOK_MODULE_PREVIEW_API__,E=R({page:"preview"});p.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const P={"./stories/components/UluPlaceholderImage.stories.js":async()=>r(()=>import("./UluPlaceholderImage.stories-pWml7M5d.js"),__vite__mapDeps([0,1,2])),"./stories/components/UluText.stories.js":async()=>r(()=>import("./UluText.stories-AoeUwEyG.js"),__vite__mapDeps([3,1,2]))};async function w(_){return P[_]()}const{composeConfigs:T,PreviewWeb:L,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,S=async()=>{const _=await Promise.all([r(()=>import("./entry-preview-Mgf9WPNx.js"),__vite__mapDeps([4,1])),r(()=>import("./entry-preview-docs-q-83c6DQ.js"),__vite__mapDeps([5,6,7,1])),r(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([8,9])),r(()=>import("./preview-M9bxt9OK.js"),__vite__mapDeps([])),r(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([10,11])),r(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([12,11])),r(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([])),r(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([13,11])),r(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([])),r(()=>import("./preview-37XjEtlT.js"),__vite__mapDeps([14,7])),r(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]))]);return T(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:w,getProjectAnnotations:S});export{r as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/UluPlaceholderImage.stories-pWml7M5d.js","assets/vue.esm-bundler-Dkw2Vf-e.js","assets/_plugin-vue_export-helper-x3n3nnut.js","assets/UluText.stories-AoeUwEyG.js","assets/entry-preview-Mgf9WPNx.js","assets/entry-preview-docs-q-83c6DQ.js","assets/index-lXit2Ocd.js","assets/_commonjsHelpers-5-cIlDoe.js","assets/preview-VI2eoWmp.js","assets/index-ogXoivrg.js","assets/preview-OnO0tzRj.js","assets/index-PPLHz8o0.js","assets/preview-FekBEZxm.js","assets/preview-u8M_OEO2.js","assets/preview-37XjEtlT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}