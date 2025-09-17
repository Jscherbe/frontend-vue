import { ref } from 'vue';
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
      <span class="dotted-underline" v-ulu-tooltip="args.content">
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
      <span class="dotted-underline" v-ulu-tooltip="htmlContent">
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
        title: 'Component Tooltip'
      }
    };
    return { args, componentContent };
  },
  template: `
    <div style="padding: 5rem; text-align: center;">
      <span class="dotted-underline" v-ulu-tooltip="componentContent">
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