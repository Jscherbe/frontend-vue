import{h,c as m,L as f,J as b,M as d,e as v,d as T,t as U,a3 as y,a0 as A,o as k}from"./iframe-D0eEfClq.js";import{g as w}from"./router-B1jYtMfx.js";import{_ as R}from"./UluButton-EdM1LbeT.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-B-PfIb2X.js";import"./props-DEaRQ31f.js";const i={__name:"UluRouteAnnouncer",props:{validator:{type:Function,default:()=>!0},exclude:{type:Array,default:()=>[]},getTitle:{type:Function,default:e=>w(e)},debug:Boolean},setup(e){const t=e,n=f(),l=d(),c=h(null),u=m(()=>{if(!n||n.matched.length===0)return"";const o=t.getTitle(n);return o||console.warn("RouteAnnouncer: No page title!"),o});return l?b(l.currentRoute,async(o,r)=>{if(r===y||r.matched.length===0||o.hash)return;const p=t.validator(o,r),g=t.exclude.some(a=>a.endsWith("*")?o.path.startsWith(a.slice(0,a.length-1)):o.path===a);u.value&&p&&!g&&(t.debug&&console.log("RouteAnnouncer: Focused title:",u.value),await A(),c.value?.focus())}):console.error("RouteAnnouncer: No route found (install vue-router)."),(o,r)=>u.value?(k(),v("p",{key:0,tabindex:"-1",class:"hidden-visually",ref_key:"el",ref:c},U(u.value),513)):T("",!0)}};i.__docgenInfo={exportName:"default",displayName:"UluRouteAnnouncer",description:"",tags:{},props:[{name:"validator",description:`Allow user to bypass this functionality
- Function should return true if the page should be announced
- Function is passed (to, from) => {}
  - to/from are RouteLocationNormalizedLoaded objects`,type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"exclude",description:`Array of paths to exclude
- Can be exact path "/about" 
- Or can be path with wildcard "/about/*" (match all paths under about)`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"getTitle",description:"Function to retrieve routes title",type:{name:"func"},defaultValue:{func:!0,value:"(route) => getRouteTitle(route)"}},{name:"debug",description:"Enable debug logging",type:{name:"boolean"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluRouteAnnouncer.vue"]};const F={component:i,tags:["autodocs"],argTypes:{exclude:{control:"object"}},parameters:{docs:{description:{component:"Announces page titles to screen readers on route change. It renders a visually hidden paragraph that receives focus when the route changes. Requires `vue-router`."}}}},x=e=>e.path==="/about"?"About Us Page":e.path==="/"?"Home Page":`Page: ${e.path}`,s={render:e=>({components:{UluRouteAnnouncer:i,UluButton:R},setup(){const t=d();return{args:e,goToHome:()=>t.push("/"),goToAbout:()=>t.push("/about"),goToUnknown:()=>t.push("/some-other-page")}},template:`
      <div>
        <p>
          This component reacts to route changes. Click the buttons below to navigate (simulated).
          The "Announcer Output" box shows what a screen reader would see/hear (normally hidden).
        </p>
        
        <div style="display: flex; gap: 10px; margin: 20px 0;">
          <UluButton @click="goToHome">Go to Home (/)</UluButton>
          <UluButton @click="goToAbout">Go to About (/about)</UluButton>
          <UluButton @click="goToUnknown">Go to Unknown (/some-other-page)</UluButton>
        </div>
        
        <h3>Announcer Output:</h3>
        <div style="border: 1px solid #ccc; padding: 1rem;">
           <UluRouteAnnouncer v-bind="args" class="hidden-visually--disabled" />
        </div>
      </div>
    `}),args:{getTitle:x}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluRouteAnnouncer,
      UluButton
    },
    setup() {
      const router = useRouter();
      // Define navigation helpers for the story
      const goToHome = () => router.push('/');
      const goToAbout = () => router.push('/about');
      const goToUnknown = () => router.push('/some-other-page');
      return {
        args,
        goToHome,
        goToAbout,
        goToUnknown
      };
    },
    template: \`
      <div>
        <p>
          This component reacts to route changes. Click the buttons below to navigate (simulated).
          The "Announcer Output" box shows what a screen reader would see/hear (normally hidden).
        </p>
        
        <div style="display: flex; gap: 10px; margin: 20px 0;">
          <UluButton @click="goToHome">Go to Home (/)</UluButton>
          <UluButton @click="goToAbout">Go to About (/about)</UluButton>
          <UluButton @click="goToUnknown">Go to Unknown (/some-other-page)</UluButton>
        </div>
        
        <h3>Announcer Output:</h3>
        <div style="border: 1px solid #ccc; padding: 1rem;">
           <UluRouteAnnouncer v-bind="args" class="hidden-visually--disabled" />
        </div>
      </div>
    \`
  }),
  args: {
    getTitle: mockGetTitle
  }
}`,...s.parameters?.docs?.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,F as default};
