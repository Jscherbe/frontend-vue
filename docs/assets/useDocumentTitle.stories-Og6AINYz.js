import{aV as T,aW as h,aX as f,aw as g,a1 as c,aY as v,aF as y,aZ as b,a_ as w,aL as x,a2 as R,a4 as C,a$ as d,a5 as m,as as D,ap as M}from"./iframe-Nq88G_pO.js";import"./preload-helper-BJwshlQW.js";function p(t,o,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let e;if(o&&(e=o(n,t)),Array.isArray(e))return e.map(s=>p(s,o));if(e?.constructor===Object){const s={};for(const a of Object.keys(e))s[a]=p(e[a],o,a);return s}return e}const U=(t,o)=>h(o)?T(o):o,k="usehead";function H(){if(f()){const t=g(k);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function F(t,o={}){const n=o.head||H();return n.ssr?n.push(t||{},o):P(n,t,o)}function P(t,o,n={}){const i=c(!1);let e;return v(()=>{const a=i.value?{}:p(o,U);e?e.patch(a):e=t.push(a,n)}),x()&&(y(()=>{e.dispose()}),b(()=>{i.value=!0}),w(()=>{i.value=!1})),e}function j(t={}){const{titleTemplate:o="%s",useRoute:n=R,useHead:i=F}=t,e=n(),s=C(()=>{const a=d[e.path],r=e.meta.title;let l=a||r;return typeof l=="function"&&(l=l(e)),l?o.replace("%s",l):"App"});i({title:s})}const _={title:"Composables/useDocumentTitle"},u={name:"Interactive Demo",render:()=>({setup(){const t=c(""),o=r=>{m(r.title,l=>{t.value=l},{immediate:!0})},n=c({path:"/story-route",meta:{title:"Default Meta Title"}}),i=()=>n.value;j({titleTemplate:"Test Title: %s",useRoute:i,useHead:o});const e=c(""),s=c("Default Meta Title"),a={setup:()=>M(e,{useRoute:i}),template:'<div style="font-size: 12px; color: #666; margin-top: 10px;">(This component is actively setting a page title via usePageTitle)</div>'};return m(s,r=>{n.value={path:"/story-route",meta:{title:r}}}),D(()=>{delete d["/story-route"]}),{pageTitleFromComponent:e,routeMetaTitle:s,headTitle:t,componentUnderTest:a}},template:`
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
}`,...u.parameters?.docs?.source}}};const z=["InteractiveDemo"];export{u as InteractiveDemo,z as __namedExportsOrder,_ as default};
