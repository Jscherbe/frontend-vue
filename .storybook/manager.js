import { addons } from 'storybook/manager-api';
import uluStorybookTheme from './preview-theme/ulu-storybook-theme.js'; 

addons.setConfig({
  theme: uluStorybookTheme,
});