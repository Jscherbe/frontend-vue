import{aV as T,aW as h,aX as f,aw as g,a1 as c,aY as v,aF as y,aZ as b,a_ as w,aL as x,a2 as R,a4 as M,a$ as d,a5 as m,as as C,ap as D}from"./iframe-CmsGqXpF.js";import"./preload-helper-BJwshlQW.js";function p(t,o,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let e;if(o&&(e=o(n,t)),Array.isArray(e))return e.map(s=>p(s,o));if(e?.constructor===Object){const s={};for(const i of Object.keys(e))s[i]=p(e[i],o,i);return s}return e}const U=(t,o)=>h(o)?T(o):o,k="usehead";function H(){if(f()){const t=g(k);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function F(t,o={}){const n=o.head||H();return n.ssr?n.push(t||{},o):P(n,t,o)}function P(t,o,n={}){const a=c(!1);let e;return v(()=>{const i=a.value?{}:p(o,U);e?e.patch(i):e=t.push(i,n)}),x()&&(y(()=>{e.dispose()}),b(()=>{a.value=!0}),w(()=>{a.value=!1})),e}function j(t={}){const{titleTemplate:o="%s | My Awesome Site",useRoute:n=R,useHead:a=F}=t,e=n(),s=M(()=>{const i=d[e.path],r=e.meta.title;let l=i||r;return typeof l=="function"&&(l=l(e)),l?o.replace("%s",l):"My Awesome Site"});a({title:s})}const A={title:"Composables/useDocumentTitle"},u={name:"Interactive Demo",render:()=>({setup(){const t=c(""),o=r=>{m(r.title,l=>{t.value=l},{immediate:!0})},n=c({path:"/story-route",meta:{title:"Default Meta Title"}}),a=()=>n.value;j({titleTemplate:"Test Title: %s",useRoute:a,useHead:o});const e=c(""),s=c("Default Meta Title"),i={setup:()=>D(e,{useRoute:a}),template:'<div style="font-size: 12px; color: #666; margin-top: 10px;">(This component is actively setting a page title via usePageTitle)</div>'};return m(s,r=>{n.value={path:"/story-route",meta:{title:r}}}),C(()=>{delete d["/story-route"]}),{pageTitleFromComponent:e,routeMetaTitle:s,headTitle:t,componentUnderTest:i}},template:`
      <div>
        <p>This story demonstrates the behavior of <code>useDocumentTitle</code>.</p>
        <div style="border: 1px solid #ccc; padding: 10px; border-radius: 4px; margin-bottom: 20px;">
          <p><strong>Resulting Document Title (from mock <code>useHead</code>):</strong></p>
          <pre style="font-weight: bold; color: #1e88e5;">{{ headTitle }}</pre>
        </div>

        <p><strong>Controls:</strong></p>
        <div style="margin-bottom: 15px;">
          <label for="meta-title">Route Meta Title:</label><br/>
          <input v-model="routeMetaTitle" id="meta-title" style="width: 250px;" />
        </div>
        <div>
          <label for="component-title">Title from Component (via usePageTitle):</label><br/>
          <input v-model="pageTitleFromComponent" id="component-title" style="width: 250px;" />
          <p style="font-size: 12px; color: #666;">(This will override the meta title)</p>
        </div>
        
        <!-- This component calls usePageTitle -->
        <component :is="componentUnderTest" v-if="pageTitleFromComponent" />
      </div>
    `})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Interactive Demo",
  render: () => ({
    setup() {
      // --- Mocks for this story ---
      const headTitle = ref('');
      const mockUseHead = payload => {
        watch(payload.title, newTitle => {
          headTitle.value = newTitle;
        }, {
          immediate: true
        });
      };
      const mockRoute = ref({
        path: '/story-route',
        meta: {
          title: 'Default Meta Title'
        }
      });
      const mockUseRoute = () => mockRoute.value;
      // --- End Mocks ---

      // Call the composable under test with dependencies injected
      useDocumentTitle({
        titleTemplate: 'Test Title: %s',
        useRoute: mockUseRoute,
        useHead: mockUseHead
      });

      // --- Story Controls ---
      const pageTitleFromComponent = ref('');
      const routeMetaTitle = ref('Default Meta Title');

      // This simulates a component calling usePageTitle
      const componentUnderTest = {
        setup: () => usePageTitle(pageTitleFromComponent, {
          useRoute: mockUseRoute
        }),
        template: '<div style="font-size: 12px; color: #666; margin-top: 10px;">(This component is actively setting a page title via usePageTitle)</div>'
      };

      // This simulates the route changing
      watch(routeMetaTitle, newMeta => {
        mockRoute.value = {
          path: '/story-route',
          meta: {
            title: newMeta
          }
        };
      });

      // Cleanup pageTitles state between story re-renders
      onUnmounted(() => {
        delete pageTitles['/story-route'];
      });
      return {
        pageTitleFromComponent,
        routeMetaTitle,
        headTitle,
        componentUnderTest
      };
    },
    template: \`
      <div>
        <p>This story demonstrates the behavior of <code>useDocumentTitle</code>.</p>
        <div style="border: 1px solid #ccc; padding: 10px; border-radius: 4px; margin-bottom: 20px;">
          <p><strong>Resulting Document Title (from mock <code>useHead</code>):</strong></p>
          <pre style="font-weight: bold; color: #1e88e5;">{{ headTitle }}</pre>
        </div>

        <p><strong>Controls:</strong></p>
        <div style="margin-bottom: 15px;">
          <label for="meta-title">Route Meta Title:</label><br/>
          <input v-model="routeMetaTitle" id="meta-title" style="width: 250px;" />
        </div>
        <div>
          <label for="component-title">Title from Component (via usePageTitle):</label><br/>
          <input v-model="pageTitleFromComponent" id="component-title" style="width: 250px;" />
          <p style="font-size: 12px; color: #666;">(This will override the meta title)</p>
        </div>
        
        <!-- This component calls usePageTitle -->
        <component :is="componentUnderTest" v-if="pageTitleFromComponent" />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const E=["InteractiveDemo"];export{u as InteractiveDemo,E as __namedExportsOrder,A as default};
