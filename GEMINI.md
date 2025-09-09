## About the .ctx/ directory

- Files in the `.ctx/` directory are for reference and are not meant to be imported directly.
- They are copies of directories from `node_modules` for API and prop reference.
- The `.ctx/frontend/` directory contains the npm package "@ulu/frontend", which is the base SCSS styling library. The inner `scss`directory contains scss modules used by the files in `src/scss/` to create the global stylesheet. The inner `js` directory contains javascript utilities/modules (not as frequently used in this vue library)

## If creating or modifying stories.js files

- Always use the modern syntax, not Template.bind()
- If applying a custom icon (as a prop, etc) please use one of the following icon types (type:danger, type:warning, type:info, type:success, type:externalLink, type:close, type:expand, type:collapse, type:resizeHorizontal, type:resizeVertical, type:resizeBoth, type:ellipsis, type:pathSeparator, type:image, type:file)
- When importing storybook react components make sure to use blocks path like `import { Meta } from '@storybook/addon-docs/blocks';` and not `import { Meta } from '@storybook/addon-docs`
- Omit the "title" for new stories, we are using the directory/file structure for naming so it matches directory and export structure

## When writing javascript

- Add spaces between template literal and expression (ie. instead of  ``some string ${variable}`` format like ``some string ${ variable }``)