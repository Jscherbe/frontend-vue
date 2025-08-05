import { addons } from 'storybook/manager-api';
import uluStorybookTheme from './preview-assets/ulu-storybook-theme.js'; 

addons.setConfig({
  theme: uluStorybookTheme,
});