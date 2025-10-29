import UluScrollAnchors from './UluScrollAnchors.vue';
import UluScrollAnchorsSection from './UluScrollAnchorsSection.vue';
import UluScrollAnchorsNav from './UluScrollAnchorsNav.vue';

export default {
  component: UluScrollAnchorsNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Standard navigation for the Scroll Anchors system.'
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

const containerStyles = {
  height: '700px',
  overflow: 'auto',
  backgroundColor: "teal",
  padding: '1rem'
};

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gap: '2rem',
  alignItems: 'start',
  backgroundColor: "white"
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
    components: { UluScrollAnchors, UluScrollAnchorsSection, UluScrollAnchorsNav },
    setup() {
      return { args, sections, lipsum, gridStyles, navStyle, containerStyles };
    },
    template: `
      <style>
        .scroll-anchors__nav a.is-active {
          color: black;
        }
      </style>
      <UluScrollAnchors :firstItemActive="args.firstItemActive" :style="containerStyles">
        <div :style="gridStyles">
          <div :style="navStyle">
            <UluScrollAnchorsNav />
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
