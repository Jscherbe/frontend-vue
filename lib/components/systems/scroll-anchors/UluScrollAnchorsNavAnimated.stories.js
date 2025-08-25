import UluScrollAnchors from './UluScrollAnchors.vue';
import UluScrollAnchorsSection from './UluScrollAnchorsSection.vue';
import UluScrollAnchorsNavAnimated from './UluScrollAnchorsNavAnimated.vue';

export default {
  component: UluScrollAnchorsNavAnimated,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Animated navigation for the Scroll Anchors system.'
      }
    }
  }
};

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const sections = [
  { title: "Section One" },
  { title: "Section Two" },
  { title: "Section Three" },
  { title: "Section Four" },
  { title: "Section Five" },
];

const storyLayout = {
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '2rem',
  alignItems: 'start'
};

const navStyle = {
  position: 'sticky',
  top: '1rem'
};

export const Default = {
  args: {
    firstItemActive: true,
  },
  render: (args) => ({
    components: { UluScrollAnchors, UluScrollAnchorsSection, UluScrollAnchorsNavAnimated },
    setup() {
      return { args, sections, lipsum, storyLayout, navStyle };
    },
    template: `
      <UluScrollAnchors :firstItemActive="args.firstItemActive">
        <div :style="storyLayout">
          <div :style="navStyle">
            <UluScrollAnchorsNavAnimated />
          </div>
          <div>
            <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
              <p>{{ lipsum }}</p>
            </UluScrollAnchorsSection>
          </div>
        </div>
      </UluScrollAnchors>
    `,
  }),
};
