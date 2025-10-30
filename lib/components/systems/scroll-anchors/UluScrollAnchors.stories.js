import UluPlaceholderText from "../../utils/UluPlaceholderText.vue";
import UluScrollAnchors from './UluScrollAnchors.vue';
import UluScrollAnchorsSection from './UluScrollAnchorsSection.vue';

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
      UluPlaceholderText
    },
    setup() {
      return { args, sections };
    },
    template: `
      <UluScrollAnchors v-bind="args" style="height: 400px; overflow-y: auto; padding: 1rem;">
        <UluScrollAnchorsSection 
          v-for="item in sections" 
          :key="item.title" 
          :title="item.title"
        >
          <UluPlaceholderText/>
          <UluPlaceholderText/>
        </UluScrollAnchorsSection>
      </UluScrollAnchors>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'This is a basic example of the scroll anchors system using the standard `UluScrollAnchorsSection`. The container has a fixed height and is scrollable.'
      }
    }
  }
};