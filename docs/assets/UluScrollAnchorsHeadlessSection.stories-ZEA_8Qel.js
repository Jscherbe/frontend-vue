import{ag as t,y as s,H as l,ae as n}from"./iframe-sn1yWKrl.js";import"./preload-helper-BJwshlQW.js";const a={component:t,tags:["autodocs"],parameters:{docs:{description:{component:"A headless scroll anchor section that provides its state via a scoped slot, allowing for complete control over the markup."}}},argTypes:{title:{control:"text",description:"The title of the section."},customTitleId:{control:"text",description:"A custom ID for the anchor link."}}},c=[{title:"Section One"},{title:"Section Two"},{title:"Section Three"},{title:"Section Four"},{title:"Section Five"}],e={render:o=>({components:{UluScrollAnchors:n,UluScrollAnchorsHeadlessSection:t,UluPlaceholderText:l,UluTag:s},setup(){return{args:o,sections:c}},template:`
      <UluScrollAnchors style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsHeadlessSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
          v-slot="{ isActive, titleId }"
        >
          <h2 :id="titleId">{{ item.title }}</h2>
          <p>
            <UluTag 
              :text="isActive ? 'Active' : 'Inactive'"
              :type="isActive ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsHeadlessSection>
      </UluScrollAnchors>
    `}),parameters:{docs:{description:{story:"This story demonstrates the `UluScrollAnchorsHeadlessSection` which allows for a custom layout within each section via a scoped slot."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      UluScrollAnchors,
      UluScrollAnchorsHeadlessSection,
      UluPlaceholderText,
      UluTag
    },
    setup() {
      return {
        args,
        sections
      };
    },
    template: \`
      <UluScrollAnchors style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsHeadlessSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
          v-slot="{ isActive, titleId }"
        >
          <h2 :id="titleId">{{ item.title }}</h2>
          <p>
            <UluTag 
              :text="isActive ? 'Active' : 'Inactive'"
              :type="isActive ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsHeadlessSection>
      </UluScrollAnchors>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the \`UluScrollAnchorsHeadlessSection\` which allows for a custom layout within each section via a scoped slot.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,a as default};
