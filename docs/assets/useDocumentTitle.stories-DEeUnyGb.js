import{watchEffect as h,unref as v,reactive as g,onUnmounted as b,computed as y,ref as a,defineComponent as M,h as x,watch as d}from"vue";import{useHead as D}from"@unhead/vue";import{useRoute as R}from"vue-router";import{g as k}from"./router-D1unVVBp.js";const p=g({});function T(o={}){const{title:n,titleTemplate:i="%s",useRoute:l=R,useHead:s=D}=o,e=l(),r=e.path;if(n!==void 0){h(()=>{p[r]=v(n)}),b(()=>{delete p[r]});return}const t=y(()=>{const m=p[e.path],f=k(e,e),u=m||f;return u?i.replace("%s",u):"App"});s({title:t})}const U={title:"Composables/useDocumentTitle"},c={name:"Interactive Demo",render:()=>({setup(){const o=a(""),n=t=>{d(t.title,m=>{o.value=m},{immediate:!0})},i=a({path:"/story-route",meta:{title:"Default Meta Title"}}),l=()=>i.value;T({titleTemplate:"Test Title: %s",useRoute:l,useHead:n});const s=a(""),e=a("Default Meta Title"),r=M({setup:()=>(T({title:s,useRoute:l}),()=>x("div",{style:"font-size: 12px; color: #666; margin-top: 10px;"}," "))});return d(e,t=>{i.value={path:"/story-route",meta:{title:t}}}),{componentTitle:s,routeMetaTitle:e,headTitle:o,MockPageComponent:r}},template:`
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
}`,...c.parameters?.docs?.source}}};const A=["InteractiveDemo"];export{c as InteractiveDemo,A as __namedExportsOrder,U as default};
