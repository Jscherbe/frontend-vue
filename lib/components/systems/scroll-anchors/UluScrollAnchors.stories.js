import UluPlaceholderText from "../../utils/UluPlaceholderText.vue";
import UluScrollAnchors from './UluScrollAnchors.vue';
import UluScrollAnchorsSection from './UluScrollAnchorsSection.vue';
import UluTag from "../../elements/UluTag.vue";

export default {
  component: UluScrollAnchors,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A system to automatically track scroll position of sections. This is the core component that provides the logic.'
      }
    }
  },
  argTypes: {
    firstItemActive: {
      control: 'boolean',
      description: 'Make the first item active by default'
    },
    observerOptions: {
      control: 'object',
      description: 'IntersectionObserver options'
    }
  }
};

const sections = [
  { title: "Section One" },
  { title: "Section Two" },
  { title: "Section Three" },
  { title: "Section Four" },
  { title: "Section Five" },
];

export const Default = {
  args: {
    firstItemActive: true,
  },
  render: (args) => ({
    components: { 
      UluScrollAnchors, 
      UluScrollAnchorsSection, 
      UluPlaceholderText,
      UluTag
    },
    setup() {
      return { args, sections };
    },
    template: `
      <UluScrollAnchors v-bind="args">
        <UluScrollAnchorsSection 
          v-for="section in sections" 
          :key="section.title" 
          :title="section.title"
          v-slot="{ section }"
        >
          <p>
            <UluTag 
              :text="section?.active ? 'Active' : 'Inactive'"
              :type="section?.active ? 'success' : null"
            />
          </p>
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Basic example of scroll anchors without navigation. The sections will become active as you scroll, but there is no visual indicator in this example (you can check the Vue devtools to see the `active` property change on the section instances).'
      }
    }
  }
};