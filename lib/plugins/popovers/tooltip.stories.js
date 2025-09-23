import { ref } from 'vue';
import UluModal from '../../components/collapsible/UluModal.vue';
import StoryTooltipComponent from './tests/StoryTooltipComponent.vue';

export default {
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The text to display in the tooltip.',
    },
  },
};

export const Basic = (args) => ({
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="args.content">
        Hover over me
      </span>
    </div>
  `,
});
Basic.args = {
  content: 'This is a basic tooltip!',
};

export const ReactiveContent = (args) => ({
  setup() {
    const count = ref(1);
    const content = ref(`This is a reactive tooltip. Count: ${count.value}`);
    
    const updateCount = () => {
      count.value++;
      content.value = `The count has been updated to: ${count.value}`;
    };

    return { args, content, updateCount };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <p>
        Hover over the button and click it to increment
      </p>
      <button @click="updateCount" class="button" v-ulu-tooltip="content">Update Tooltip Content</button>
    </div>
  `,
});
ReactiveContent.parameters = {
  docs: {
    description: {
      story: 'The tooltip directive is fully reactive. If the value passed to it changes while the tooltip is visible, the tooltip will update its content automatically.',
    },
  },
};

export const HtmlContent = (args) => ({
  setup() {
    const htmlContent = {
      isHtml: true,
      content: 'This tooltip contains <strong>HTML</strong> content with an <em style="color: blue;">emphasis</em>.'
    };
    return { args, htmlContent };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="htmlContent">
        Hover for HTML
      </span>
    </div>
  `,
});
HtmlContent.parameters = {
  docs: {
    description: {
      story: 'You can render HTML inside a tooltip by passing an object with `isHtml: true` and a `content` string.',
    },
  },
};

export const ComponentContent = (args) => ({
  setup() {
    const componentContent = {
      component: StoryTooltipComponent,
      componentProps: { 
        title: 'Component Tooltip (prop)'
      }
    };
    return { args, componentContent };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <span tabindex="0" v-ulu-tooltip="componentContent">
        Hover for a Component
      </span>
    </div>
  `,
});
ComponentContent.parameters = {
  docs: {
    description: {
      story: 'You can also render a full Vue component inside a tooltip. Pass an object with a `component` key and optional `componentProps`.',
    },
  },
};

export const InModal = (args) => ({
  components: { UluModal },
  setup() {
    const isModalOpen = ref(false);
    const openModal = () => isModalOpen.value = true;
    const tooltipContent = {
      teleportTo: '.modal',
      content: 'This tooltip is inside a modal!'
    };
    return { args, isModalOpen, openModal, tooltipContent };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <button class="button" @click="openModal">Open Modal</button>
      <UluModal v-model="isModalOpen" title="Modal with Tooltip">
        <p>This is a modal dialog.</p>
        <p>
          Hover over this 
          <span 
            tabindex="0" 
            v-ulu-tooltip="tooltipContent" 
            style="color: blue; text-decoration: underline;"
          >
            text with a tooltip
          </span>.
        </p>
      </UluModal>
    </div>
  `,
});
InModal.parameters = {
  docs: {
    description: {
      story: 'This example shows a tooltip working correctly inside of a modal. It also shows how to teleport the tooltip to a different element.',
    },
  },
};