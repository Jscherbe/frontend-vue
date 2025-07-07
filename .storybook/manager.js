import { addons } from 'storybook/manager-api';
import uluTheme from './ulu-theme.js'; // Import your custom theme file

addons.setConfig({
  theme: uluTheme,
});