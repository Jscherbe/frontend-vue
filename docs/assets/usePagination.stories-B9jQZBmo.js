import{ref as p}from"vue";import{u}from"./usePagination-DJ-KEASQ.js";import{_ as g}from"./UluPager-CcJGh7wq.js";import"vue-router";import"./iframe-DYOmpgae.js";import"./preload-helper-BJwshlQW.js";import"@floating-ui/vue";import"@ulu/utils/templating.js";import"@ulu/utils/browser/dom.js";import"@ulu/frontend";const C={parameters:{chromatic:{disableSnapshot:!0},notes:"This story demonstrates the `usePagination` composable. It requires a `vue-router` instance to be provided to the application, as it interacts with the route query to manage the page state. If the pager links do not work, it is because the router is not configured in Storybook."}},l={components:{UluPager:g},props:{itemsPerPage:{type:Number,default:10}},template:`
    <div>
      <p>Current Page: {{ currentPage }}</p>
      <p>Total Pages: {{ totalPages }}</p>
      <ul>
        <li v-for="(item, index) in paginatedItems" :key="index">{{ item.name }}</li>
      </ul>
      <UluPager
        v-if="totalPages > 1"
        :items="pagerItems"
        :current="currentPage"
        :ellipses="pagerEllipses"
        class="mt-4"
      />
    </div>
  `,setup(t){const a=p(Array.from({length:50},(c,r)=>({id:r+1,name:`Item ${r+1}`}))),{currentPage:o,totalPages:s,paginatedItems:n,pagerItems:i,pagerEllipses:m}=u(a,t.itemsPerPage);return{currentPage:o,totalPages:s,paginatedItems:n,pagerItems:i,pagerEllipses:m}}},e=t=>({components:{DemoComponent:l},setup(){return{args:t}},template:'<DemoComponent v-bind="args" />'});e.args={itemsPerPage:5};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DemoComponent
  },
  setup() {
    return {
      args
    };
  },
  template: '<DemoComponent v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,C as default};
