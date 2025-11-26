const o = [
  "UluModalsDisplay",
  "UluTooltipDisplay",
  "UluPopover",
  "UluToast",
  "UluToastDisplay"
];
function t({ excluded: u = [] } = {}) {
  const e = [...o, ...u];
  return {
    type: "component",
    resolve: (l) => {
      if (l.startsWith("Ulu") && !e.includes(l))
        return {
          name: l,
          from: "@ulu/frontend-vue"
        };
    }
  };
}
export {
  t as UluUnpluginResolver
};
