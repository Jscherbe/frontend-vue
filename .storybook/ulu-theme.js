import { create } from 'storybook/theming';

const colors = {
  accent: "#683894",
  lightGray: "#f3f3f4",
};

const whiteAlpha = alpha => `rgba(255,255,255,${ alpha })`;

export default create({
  base: 'light', // or 'dark' depending on your preference for the base theme
  brandTitle: 'ULU | Vue Library', // The text title
  brandTarget: '_self',                       // '_self' to open in same tab, '_blank' for new tab
  colorPrimary: colors.accent,
  // colorSecondary: '#585C6D',
  appBg: colors.lightGray,
  // appBorderColor: '#EAEAEA',
  // appBorderRadius: 4,
  // textColor: '#333333',
  // barTextColor: '#999999',
  // barSelectedColor: '#3A10E5',
  // inputBg: '#FFFFFF',
  // inputBorder: '#EAEAEA',
  // inputTextColor: '#333333',
  // inputBorderRadius: 4,
  barBg: colors.accent,
  barTextColor: whiteAlpha(0.9),
  barHoverColor: whiteAlpha(0.6),
  barSelectedColor: whiteAlpha(1),
});