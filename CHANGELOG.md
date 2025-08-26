# Change Log

## 0.1.0-beta.8

- Make new composable for required injects (so user will be able to understand the failure and install plugin)
  - Add new meta module with injectRegistry for lookup
  - Can be used with external or site specific inject
  - If plugin will tell user the missing plugin
- Refactor layout components UluAdaptiveLayout.vue, UluWhenBreakpoint.vue to use this and to composition API

## 0.1.0-beta.7

- Expose generated typescript types (from jsdoc comments in lib) for IDE support/annotations

## 0.1.0-beta.6

- Redesign icon system API (so that Ulu icon only has one defining prop) to make it easier for components to support icon customization while also supporting both by type or specific icons
  - Now UluIcon has one prop "icon" which if passed a string with "type:" prefix will be resolved as type from configuration in core plugin (ie. "type:settings", "type:resizerBoth")
  - This is to make internal templating and props passed between templates and UluIcon more ergonomic

## 0.1.0-beta.5

- Refactor settings.js to core plugin (issues with different versions of module in build/bundle when testing, prefer centralized plugin that provide/injects)

## 0.1.0-beta.4

- Change lodash dependency to module lodash-es 

## 0.1.0-beta.3

- Change lodash dependency to module lodash.cloneDeep module

## 0.1.0-beta.2

- Add lodash dependency