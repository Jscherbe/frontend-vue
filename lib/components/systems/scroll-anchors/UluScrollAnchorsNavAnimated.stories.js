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
  },
  argTypes: {
    railWidth: {
      control: 'number',
      description: 'The width of the navigation rail in pixels.'
    },
    indicatorWidth: {
      control: 'number',
      description: 'The width of the indicator. Defaults to railWidth.'
    },
    indicatorHeight: {
      control: 'number',
      description: 'If set, creates a static height indicator.'
    },
    indicatorAlignment: {
      control: 'select',
      options: ['center', 'top'],
      description: 'Vertical alignment of the indicator.'
    },
    indicatorAlignmentOffset: {
      control: 'number',
      description: "Pixel offset for the indicator's vertical alignment."
    },
    debug: {
      control: 'boolean',
      description: 'Enable IntersectionObserver debugging to the console.'
    }
  }
};

const lipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const sections = [
  { title: "Introduction" },
  { title: "A Much Longer Title That Will Definitely Wrap to a Second Line" },
  { title: "Short" },
  { title: "Another Section" },
  { title: "This Title is Also Quite Long to Ensure Wrapping and Alignment Testing" },
  { title: "Conclusion" },
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
  top: '20px'
};

const render = (args) => ({
  components: { UluScrollAnchors, UluScrollAnchorsSection, UluScrollAnchorsNavAnimated },
  setup() {
    const { firstItemActive, debug, ...navArgs } = args;
    return { firstItemActive, debug, navArgs, sections, lipsum, gridStyles, navStyle, containerStyles };
  },
  template: `
    <UluScrollAnchors
      :firstItemActive="firstItemActive"
      :debug="debug"
      :style="containerStyles"
    >
      <div :style="gridStyles">
        <div :style="navStyle">
          <UluScrollAnchorsNavAnimated v-bind="navArgs" />
        </div>
        <div>
          <UluScrollAnchorsSection v-for="section in sections" :key="section.title" :title="section.title">
            <p>{{ lipsum }}</p>
            <p>{{ lipsum }}</p>
          </UluScrollAnchorsSection>
        </div>
      </div>
    </UluScrollAnchors>
  `,
});

export const BarIndicator = {
  name: "Bar Indicator (Default)",
  args: {
    firstItemActive: true,
    railWidth: 3,
    indicatorWidth: 3,
    indicatorHeight: null,
    indicatorAlignment: 'top',
    indicatorAlignmentOffset: 0
  },
  render,
};

export const StaticIndicator = {
  name: "Static Height Indicator",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 8,
    indicatorAlignment: 'center',
  },
  render,
};

export const StaticIndicatorWithTopAlignment = {
  name: "Static Indicator With Top Alignment",
  args: {
    ...BarIndicator.args,
    indicatorHeight: 12,
    indicatorWidth: 10,
    indicatorAlignment: 'top',
    indicatorAlignmentOffset: 4,
    debug: true
  },
  render,
};