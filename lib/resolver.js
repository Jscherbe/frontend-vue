const defaultExcluded = [
  "UluModalsDisplay",
  "UluTooltipDisplay",
  "UluPopover",
  "UluToast",
  "UluToastDisplay"
];

/**
 * Resolver for unplugin-vue-components.
 * @param {Object} options Options for resolver
 * @param {Array<String>} options.excluded User additional excluded components
 * @returns {import('unplugin-vue-components/types').ComponentResolver}
 */
export function UluUnpluginResolver({ excluded: userExcluded = [] } = {}) {
  const excluded = [ ...defaultExcluded, ...userExcluded ];
  return {
    type: 'component',
    resolve: (name) => {
      if (name.startsWith("Ulu") && !excluded.includes(name)) {
        return {
          name: name,
          from: '@ulu/frontend-vue',
        };
      }
    },
  };
}
