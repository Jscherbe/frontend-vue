import UluSkipLink from './UluSkipLink.vue';
import UluMain from '../elements/UluMain.vue';

export default {
  component: UluSkipLink,
};

const Template = (args) => ({
  components: { UluSkipLink, UluMain },
  setup() {
    return { args };
  },
  template: `
    <div>
      <UluSkipLink v-bind="args" />
      <header style="padding: 1rem; background: #f0f0f0;">
        <p>This is a simulated header area with navigation.</p>
        <nav>
          <a href="#" style="margin-right: 1rem;">Home</a>
          <a href="#" style="margin-right: 1rem;">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <UluMain style="padding: 1rem;">
        <h2>Example Main Content</h2>
        <p>When you click the skip link, focus should jump here.</p>
        <p>The skip link is visually hidden until it is focused. Try tabbing from the browser's address bar to see it appear.</p>
        <p>example main content</p>
      </UluMain>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
