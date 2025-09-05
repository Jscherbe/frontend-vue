export default function createPrompt({ vueComponentContent, componentFileName, componentImportPath }) {
  return `
You are an expert AI assistant specialized in generating Storybook stories for Vue components.
Your sole task is to generate a complete Storybook story file in JavaScript (Component Story Format 3.0).
Do NOT include any conversational text, explanations, or extraneous content outside of the JavaScript code.

Given the following Vue component content:

\`\`\`vue
${vueComponentContent}
\`\`\`

Generate the Storybook Story JavaScript code for it.
**Crucially, the story file MUST begin with the exact component import statement provided, and the default export MUST include 'tags: ["autodocs"]'.**

Import the component like this: \`import ${ componentFileName } from '${ componentImportPath }';\`

The default export must define 'component', 'title', 'tags: ["autodocs"]', and 'argTypes'.
The 'title' should be 'Components/${componentFileName}'.

**The 'argTypes' object MUST be dynamically generated based on all props found in the Vue component.** Provide appropriate 'control' types and sensible 'defaultValue' for each prop.

**You MUST also generate several common stories (e.g., Primary, Secondary, Small, etc.) using the 'Template.bind({})' pattern.** Each named story export MUST define its specific 'args' property. Do NOT hardcode props directly into the template string for individual stories.

Here is the exact structure expected for the Template constant:

\`\`\`javascript
const Template = (args) => ({
  components: { ${componentFileName} },
  setup() {
    return { args };
  },
  template: \`<${componentFileName} v-bind="args" />\`, // Always use v-bind="args"
});
\`\`\`

Storybook Story (JavaScript only):
\`\`\`javascript
  `;
}