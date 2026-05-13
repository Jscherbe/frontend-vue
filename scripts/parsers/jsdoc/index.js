import jsdoc2md from "jsdoc-to-markdown";
import { urlize } from "@ulu/utils/string.js";
import fs from "fs-extra";
import path from "path";
import { glob } from "glob";

const src = path.resolve("./lib/");
const dist = path.resolve("./.storybook/generated-docs/");
const jsdocConfigPath = path.resolve("./scripts/parsers/jsdoc/jsdoc.json");

export async function processJSDoc() {
  const files = await glob('lib/**/*.js', { ignore: ['**/*.stories.js', '**/*.story.js', '**/tests/**'] });
  
  // get template data using the jsdoc config file
  const templateData = await jsdoc2md.getTemplateData({ 
    files,
    configure: jsdocConfigPath
  });

  // reduce templateData to an array of class names
  const moduleNames = templateData.reduce((moduleNames, identifier) => {
    if (identifier.kind === "module") {
      moduleNames.push(identifier.name);
    }
    return moduleNames;
  }, []);

  // create a documentation file for each class
  for (const moduleName of moduleNames) {
    // Keep the full name for the internal JSDoc template matching
    const template = `{{#module name="${ moduleName }"}}{{>docs}}{{/module}}`;
    let markdown = await jsdoc2md.render({ 
      data: templateData, 
      template: template,
      "heading-depth" : 2,
      configure: jsdocConfigPath
    });
    
    // MDX strictly parses { and } as JS expressions, and < > as JSX tags if they are inside HTML.
    // JSDoc generates <code> tags. We convert these to Markdown inline code blocks (backticks)
    // which safely bypass MDX parsing.
    markdown = markdown.replace(/<code>([\s\S]*?)<\/code>/g, (match, content) => {
      // Decode HTML entities JSDoc added, since backticks want raw text
      const plainText = content
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#123;/g, '{')
        .replace(/&#125;/g, '}');
      return `\`${plainText}\``;
    });
    
    const moduleData = templateData.find(d => d.kind === 'module' && d.name === moduleName);
    let originalFilePath = '';
    if (moduleData && moduleData.meta && moduleData.meta.path) {
       originalFilePath = path.join(moduleData.meta.path, moduleData.meta.filename);
    }

    if (originalFilePath) {
      // Clean the module name for file paths and meta titles (remove descriptions/newlines)
      const cleanName = moduleName.split(/[\s\n]+/)[0];

      // Retain structure: e.g. lib/utils/router.js -> .storybook/generated-docs/lib/utils/router.story.mdx
      const relativePath = path.relative(process.cwd(), originalFilePath);
      const outputDir = path.dirname(path.join(dist, relativePath));
      fs.mkdirSync(outputDir, { recursive: true });

      const filename = `${ urlize(cleanName) }.story.mdx`;
      const filepath = path.join(outputDir, filename);
      const metaTitle = `API/JS/${cleanName}`;
      const content = `import { Meta } from '@storybook/addon-docs/blocks';\n\n<Meta title="${metaTitle}" />\n\n# ${cleanName}\n\n${markdown}`;
      
      fs.writeFileSync(filepath, content);
    }
  }

  return templateData; // Return AST data for MCP
}
