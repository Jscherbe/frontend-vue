import{$ as p,P as u}from"./iframe---2PRveq.js";import{u as g}from"./usePagination-D0w7885q.js";import"./preload-helper-BJwshlQW.js";const h={parameters:{chromatic:{disableSnapshot:!0},notes:"This story demonstrates the `usePagination` composable. It requires a `vue-router` instance to be provided to the application, as it interacts with the route query to manage the page state. If the pager links do not work, it is because the router is not configured in Storybook."}},l={components:{UluPager:p},props:{itemsPerPage:{type:Number,default:10}},template:`
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
  `,setup(t){const r=u(Array.from({length:50},(c,a)=>({id:a+1,name:`Item ${a+1}`}))),{currentPage:s,totalPages:o,paginatedItems:n,pagerItems:i,pagerEllipses:m}=g(r,t.itemsPerPage);return{currentPage:s,totalPages:o,paginatedItems:n,pagerItems:i,pagerEllipses:m}}},e=t=>({components:{DemoComponent:l},setup(){return{args:t}},template:'<DemoComponent v-bind="args" />'});e.args={itemsPerPage:5};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    DemoComponent
  },
  setup() {
    return {
      args
    };
  },
  template: '<DemoComponent v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,h as default};
