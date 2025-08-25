import{E as d}from"./iframe-2q_AV0vf.js";import"./preload-helper-BJwshlQW.js";const u={component:d,tags:["autodocs"]},r=t=>({components:{UluFacets:d},setup(){return{args:t}},template:`
    <UluFacets v-bind="args">
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #item="{ item }">
        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
          <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
          <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
        </div>
      </template>
      <template #empty>
        <div style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  `}),l=[{name:"Category",uid:"category",open:!0,children:[{uid:"cat1",label:"Design"},{uid:"cat2",label:"Development"},{uid:"cat3",label:"Marketing"},{uid:"cat4",label:"Business"},{uid:"cat5",label:"Lifestyle"},{uid:"cat6",label:"Technology"}]},{name:"Author",uid:"author",open:!0,children:[{uid:"jane-doe",label:"Jane Doe"},{uid:"john-smith",label:"John Smith"},{uid:"peter-jones",label:"Peter Jones"}]}],c=[{id:1,title:"The Art of UI Design",description:"A deep dive into creating beautiful user interfaces.",category:["cat1","cat2"],author:["jane-doe"],date:new Date(2023,5,15)},{id:2,title:"Vue.js for Beginners",description:"Getting started with the popular JavaScript framework.",category:["cat2","cat6"],author:["john-smith"],date:new Date(2023,8,22)},{id:3,title:"Content Marketing Strategies",description:"How to attract and retain customers with great content.",category:["cat3"],author:["peter-jones"],date:new Date(2022,11,10)},{id:4,title:"Startup Funding 101",description:"A guide to raising capital for your new venture.",category:["cat4"],author:["jane-doe"],date:new Date(2024,1,5)},{id:5,title:"Minimalist Living",description:"Declutter your life and find more happiness.",category:["cat5"],author:["john-smith"],date:new Date(2023,3,30)},{id:6,title:"The Future of AI",description:"Exploring the impact of artificial intelligence on society.",category:["cat6"],author:["peter-jones"],date:new Date(2024,0,1)},{id:7,title:"Advanced CSS Techniques",description:"Take your styling skills to the next level.",category:["cat1","cat2"],author:["jane-doe"],date:new Date(2023,10,18)},{id:8,title:"Building a Scalable API",description:"Best practices for designing and implementing APIs.",category:["cat2","cat6"],author:["john-smith"],date:new Date(2023,7,3)},{id:9,title:"Social Media for Business",description:"Leveraging social platforms for growth.",category:["cat3"],author:["peter-jones"],date:new Date(2022,9,14)},{id:10,title:"Negotiation and Deal Making",description:"Master the art of getting what you want.",category:["cat4"],author:["jane-doe"],date:new Date(2023,6,25)},{id:11,title:"Healthy Eating Habits",description:"A guide to a balanced and nutritious diet.",category:["cat5"],author:["john-smith"],date:new Date(2024,2,12)},{id:12,title:"Quantum Computing Explained",description:"A simple introduction to a complex topic.",category:["cat6"],author:["peter-jones"],date:new Date(2023,9,9)}],e=r.bind({});e.args={initialFacets:l,items:c,searchPlaceholder:"Search articles...",maxVisible:5};const n=r.bind({});n.args={...e.args,initialSortType:"newest",extraSortTypes:{newest:{text:"Date (Newest)",sort:t=>t.sort((o,s)=>s.date-o.date)},oldest:{text:"Date (Oldest)",sort:t=>t.sort((o,s)=>o.date-s.date)}}};const a=r.bind({});a.args={...e.args,initialFacets:[{name:"Category",uid:"category",open:!0,children:[{uid:"cat1",label:"Design"},{uid:"cat2",label:"Development",selected:!0},{uid:"cat3",label:"Marketing"},{uid:"cat4",label:"Business"},{uid:"cat5",label:"Lifestyle"},{uid:"cat6",label:"Technology"}]},{name:"Author",uid:"author",open:!0,children:[{uid:"jane-doe",label:"Jane Doe"},{uid:"john-smith",label:"John Smith"},{uid:"peter-jones",label:"Peter Jones"}]}]};const i=r.bind({});i.args={...e.args,items:[]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacets
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluFacets v-bind="args">
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #item="{ item }">
        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
          <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
          <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
        </div>
      </template>
      <template #empty>
        <div style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  \`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacets
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluFacets v-bind="args">
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #item="{ item }">
        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
          <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
          <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
        </div>
      </template>
      <template #empty>
        <div style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  \`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacets
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluFacets v-bind="args">
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #item="{ item }">
        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
          <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
          <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
        </div>
      </template>
      <template #empty>
        <div style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  \`
})`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    UluFacets
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <UluFacets v-bind="args">
      <template #header="{ count }">
        <h2>Found {{ count }} items</h2>
      </template>
      <template #item="{ item }">
        <div style="border: 1px solid #eee; padding: 1rem; margin-bottom: 1rem; border-radius: 4px;">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p v-if="item.category"><strong>Category:</strong> {{ item.category.join(', ') }}</p>
          <p v-if="item.author"><strong>Author:</strong> {{ item.author.join(', ') }}</p>
          <p v-if="item.date"><strong>Date:</strong> {{ item.date.toLocaleDateString() }}</p>
        </div>
      </template>
      <template #empty>
        <div style="padding: 2rem; text-align: center;">
          <p>No matching items found. Try clearing some filters.</p>
        </div>
      </template>
    </UluFacets>
  \`
})`,...i.parameters?.docs?.source}}};const g=["Default","WithCustomSort","PreSelectedFilter","NoResults"];export{e as Default,i as NoResults,a as PreSelectedFilter,n as WithCustomSort,g as __namedExportsOrder,u as default};
