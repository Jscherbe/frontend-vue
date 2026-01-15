import { useRouter } from 'vue-router';
import UluRouteAnnouncer from './UluRouteAnnouncer.vue';
import UluButton from '../elements/UluButton.vue';

export default {
  component: UluRouteAnnouncer,
  tags: ['autodocs'],
  argTypes: {
    exclude: { control: 'object' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Announces page titles to screen readers on route change. It renders a visually hidden paragraph that receives focus when the route changes. Requires `vue-router`.'
      }
    }
  }
};

/**
 * Because the default Storybook router setup (in `preview.js`) might not have titles defined in route meta,
 * we provide a custom `getTitle` function prop to resolve titles based on the path.
 */
const mockGetTitle = (route) => {
  if (route.path === '/about') return 'About Us Page';
  if (route.path === '/') return 'Home Page';
  return `Page: ${route.path}`;
};

export const Default = {
  render: (args) => ({
    components: { UluRouteAnnouncer, UluButton },
    setup() {
      const router = useRouter();
      // Define navigation helpers for the story
      const goToHome = () => router.push('/');
      const goToAbout = () => router.push('/about');
      const goToUnknown = () => router.push('/some-other-page');
      
      return { args, goToHome, goToAbout, goToUnknown };
    },
    template: `
      <div>
        <p>
          This component reacts to route changes. Click the buttons below to navigate (simulated).
          The "Announcer Output" box shows what a screen reader would see/hear (normally hidden).
        </p>
        
        <div style="display: flex; gap: 10px; margin: 20px 0;">
          <UluButton @click="goToHome">Go to Home (/)</UluButton>
          <UluButton @click="goToAbout">Go to About (/about)</UluButton>
          <UluButton @click="goToUnknown">Go to Other (/some-other-page)</UluButton>
        </div>
        
        <h3>Announcer Output:</h3>
        <div style="border: 1px solid #ccc; padding: 1rem;">
           <UluRouteAnnouncer v-bind="args" class="hidden-visually--disabled" />
        </div>
      </div>
    `
  }),
  args: {
    getTitle: mockGetTitle
  }
};
