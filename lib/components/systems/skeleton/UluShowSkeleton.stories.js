import UluShowSkeleton from "./UluShowSkeleton.vue";
import { ref } from "vue";

export default {
  component: UluShowSkeleton,
  tags: ["autodocs"],
  argTypes: {
    when: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "A wrapper component that shows its slot content or a skeleton state based on the `when` prop. `when=true` shows the skeleton, `when=false` shows the content. It relies on a globally available `SkeletonTextInline` component for the skeleton state."
      }
    }
  }
};

const Template = {
  render: (args) => ({
    components: { UluShowSkeleton },
    setup() {
      const when = ref(args.when);
      return { args, when };
    },
    template: `
      <div>
        <p class="margin-bottom-small">This component will show a skeleton when the 'when' prop is true, and the slotted content when it is false.</p>
        <button @click="when = !when" class="button button--primary margin-bottom-medium">Toggle Skeleton (current: {{ when }})</button>
        <hr class="margin-y-medium">
        <UluShowSkeleton :when="when">
          <div class="callout callout--info">
            <h3 class="h3">This is the real content</h3>
            <p>It is shown when the skeleton is not active.</p>
          </div>
        </UluShowSkeleton>
      </div>
    `,
  }),
};

export const SkeletonShown = {
  ...Template,
  args: {
    when: true,
  },
};

export const ContentShown = {
  ...Template,
  args: {
    when: false,
  },
};