import UluPlaceholderText from "../../utils/UluPlaceholderText.vue";
import UluScrollAnchors from './UluScrollAnchors.vue';
import UluScrollAnchorsHeadlessSection from './UluScrollAnchorsHeadlessSection.vue';
import UluTag from "../../elements/UluTag.vue";

export default {
  component: UluScrollAnchorsHeadlessSection,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A headless scroll anchor section that provides its state via a scoped slot, allowing for complete control over the markup.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the section.'
    },
    customTitleId: {
      control: 'text',
      description: 'A custom ID for the anchor link.'
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
  render: (args) => ({
    components: { 
      UluScrollAnchors, 
      UluScrollAnchorsHeadlessSection, 
      UluPlaceholderText,
      UluTag
    },
    setup() {
      return { args, sections };
    },
    template: `
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
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the `UluScrollAnchorsHeadlessSection` which allows for a custom layout within each section via a scoped slot.'
      }
    }
  }
};