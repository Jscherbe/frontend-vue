import{ai as g,aj as y,ak as b,G as x,l as r,a4 as h,$ as w,al as M,am as R,Z as D,C as k,q as C,J as H,N as E,c as U,D as f,a3 as A,P as j}from"./iframe-fc0isZdR.js";import{g as I}from"./router-B1jYtMfx.js";import"./preload-helper-BJwshlQW.js";function p(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let o;if(e&&(o=e(n,t)),Array.isArray(o))return o.map(s=>p(s,e));if(o?.constructor===Object){const s={};for(const i of Object.keys(o))s[i]=p(o[i],e,i);return s}return o}const P=(t,e)=>y(e)?g(e):e,O="usehead";function S(){if(b()){const t=x(O);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function z(t,e={}){const n=e.head||S();return n.ssr?n.push(t||{},e):_(n,t,e)}function _(t,e,n={}){const a=r(!1);let o;return h(()=>{const i=a.value?{}:p(e,P);o?o.patch(i):o=t.push(i,n)}),D()&&(w(()=>{o.dispose()}),M(()=>{a.value=!0}),R(()=>{a.value=!1})),o}const m=H({});function T(t={}){const{title:e,titleTemplate:n="%s",useRoute:a=k,useHead:o=z}=t,s=a(),i=s.path;if(e!==void 0){h(()=>{m[i]=C(e)}),E(()=>{delete m[i]});return}const l=U(()=>{const u=m[s.path],v=I(s,s),d=u||v;return d?n.replace("%s",d):"App"});o({title:l})}const N={title:"Composables/useDocumentTitle"},c={name:"Interactive Demo",render:()=>({setup(){const t=r(""),e=l=>{f(l.title,u=>{t.value=u},{immediate:!0})},n=r({path:"/story-route",meta:{title:"Default Meta Title"}}),a=()=>n.value;T({titleTemplate:"Test Title: %s",useRoute:a,useHead:e});const o=r(""),s=r("Default Meta Title"),i=A({setup:()=>(T({title:o,useRoute:a}),()=>j("div",{style:"font-size: 12px; color: #666; margin-top: 10px;"}," "))});return f(s,l=>{n.value={path:"/story-route",meta:{title:l}}}),{componentTitle:o,routeMetaTitle:s,headTitle:t,MockPageComponent:i}},template:`
      <div>
        <p>This story demonstrates the unified <code>useDocumentTitle</code> composable.</p>
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
          <label for="component-title">Title from Component:</label><br/>
          <input v-model="componentTitle" id="component-title" style="width: 250px;" />
          <p style="font-size: 12px; color: #666;">(This will override the meta title)</p>
        </div>
        
        <!-- This component calls useDocumentTitle in "setter" mode -->
        <component :is="MockPageComponent" />
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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

      // 1. MANAGER MODE: Simulates the call in App.vue
      useDocumentTitle({
        titleTemplate: 'Test Title: %s',
        useRoute: mockUseRoute,
        useHead: mockUseHead
      });

      // --- Story Controls ---
      const componentTitle = ref('');
      const routeMetaTitle = ref('Default Meta Title');

      // 2. SETTER MODE: A mock component that calls useDocumentTitle to set a title.
      const MockPageComponent = defineComponent({
        setup: () => {
          useDocumentTitle({
            title: componentTitle,
            useRoute: mockUseRoute
          });
          return () => h('div', {
            style: 'font-size: 12px; color: #666; margin-top: 10px;'
          }, ' ');
        }
      });

      // Watch for changes in story controls
      watch(routeMetaTitle, newMeta => {
        mockRoute.value = {
          path: '/story-route',
          meta: {
            title: newMeta
          }
        };
      });
      return {
        componentTitle,
        routeMetaTitle,
        headTitle,
        MockPageComponent
      };
    },
    template: \`
      <div>
        <p>This story demonstrates the unified <code>useDocumentTitle</code> composable.</p>
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
          <label for="component-title">Title from Component:</label><br/>
          <input v-model="componentTitle" id="component-title" style="width: 250px;" />
          <p style="font-size: 12px; color: #666;">(This will override the meta title)</p>
        </div>
        
        <!-- This component calls useDocumentTitle in "setter" mode -->
        <component :is="MockPageComponent" />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const V=["InteractiveDemo"];export{c as InteractiveDemo,V as __namedExportsOrder,N as default};
