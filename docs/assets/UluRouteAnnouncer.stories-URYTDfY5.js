import{c as p,e as m}from"./iframe-DFeB4tIX.js";import{l as h,c as g,C as f,d as b,f as v,t as T,H as U,o as y}from"./fontawesome-DyrJdE5N.js";import{g as A}from"./router-B1jYtMfx.js";import{_ as k}from"./UluButton-zu_C2qC9.js";import"./preload-helper-BJwshlQW.js";import"./UluAction-CSWkOuPE.js";import"./props-DEaRQ31f.js";const l={__name:"UluRouteAnnouncer",props:{validator:{type:Function,default:()=>!0},exclude:{type:Array,default:()=>[]},getTitle:{type:Function,default:e=>A(e)}},setup(e){const t=e,o=p(),a=h(null),s=g(()=>{if(!o)return"";const n=t.getTitle(o);return n||console.warn("RouteAnnouncer: No page title!"),n});return o?f(()=>o.path,async(n,c)=>{if(o.hash)return;const i=t.validator(n,c,o),d=t.exclude.some(u=>u.endsWith("*")?n.startsWith(u.slice(0,u.length-1)):n===u);i&&!d&&(await U(),a.value?.focus())}):console.error("RouteAnnouncer: No route found (install vue-router)."),(n,c)=>s.value?(y(),b("p",{key:0,tabindex:"-1",class:"hidden-visually",ref_key:"el",ref:a},T(s.value),513)):v("",!0)}};l.__docgenInfo={exportName:"default",displayName:"UluRouteAnnouncer",description:"",tags:{},props:[{name:"validator",description:`Allow user to bypass this functionality
- Function should return true if the page should be announced
- Function is passed  (to, from, $route) => {}
  - to/from are path strings`,type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"exclude",description:`Array of paths to exclude
- Can be exact path "/about" 
- Or can be path with wildcard "/about/*" (match all paths under about)`,type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"getTitle",description:"Function to retrieve routes title",type:{name:"func"},defaultValue:{func:!0,value:"(route) => getRouteTitle(route)"}}],sourceFiles:["/Users/joescherben/Personal/Projects/ULU/frontend-vue/lib/components/utils/UluRouteAnnouncer.vue"]};const F={component:l,tags:["autodocs"],argTypes:{exclude:{control:"object"}},parameters:{docs:{description:{component:"Announces page titles to screen readers on route change. It renders a visually hidden paragraph that receives focus when the route changes. Requires `vue-router`."}}}},w=e=>e.path==="/about"?"About Us Page":e.path==="/"?"Home Page":`Page: ${e.path}`,r={render:e=>({components:{UluRouteAnnouncer:l,UluButton:k},setup(){const t=m();return{args:e,goToHome:()=>t.push("/"),goToAbout:()=>t.push("/about"),goToUnknown:()=>t.push("/some-other-page")}},template:`
      <div>
        <p>
          This component reacts to route changes. Click the buttons below to navigate (simulated).
          The "Announcer Output" box shows what a screen reader would see/hear (normally hidden).
        </p>
        
        <div style="display: flex; gap: 10px; margin: 20px 0;">
          <UluButton @click="goToHome">Go to Home (/)</UluButton>
          <UluButton @click="goToAbout">Go to About (/about)</UluButton>
          <UluButton @click="goToUnknown">Go to Other (/some-other-page)</UluButton>
        </div>
        
        <h3>Announcer Output:</h3>
        <div style="border: 1px solid #ccc; padding: 1rem;">
           <UluRouteAnnouncer v-bind="args" class="hidden-visually--disabled" />
        </div>
      </div>
    `}),args:{getTitle:w}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
          <UluButton @click="goToUnknown">Go to Other (/some-other-page)</UluButton>
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
}`,...r.parameters?.docs?.source}}};const C=["Default"];export{r as Default,C as __namedExportsOrder,F as default};
