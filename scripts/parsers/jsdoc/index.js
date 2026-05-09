import jsdoc2md from "jsdoc-to-markdown";
import { urlize } from "@ulu/utils/string.js";
import fs from "fs-extra";
import path from "path";
import { glob } from "glob";

const src = path.resolve("./lib/");
const dist = path.resolve("./generated/");
const tmpDir = path.resolve("./.temp/jsdoc_conversion/");

export async function processJSDoc() {
  const files = await glob('lib/**/*.js', { ignore: ['**/*.stories.js', '**/*.story.js', '**/tests/**'] });
  
  fs.mkdirSync(tmpDir, { recursive: true });

  const tmpFiles = [];
  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Aggressively sanitize JSDoc types to prevent catharsis parser errors
    content = content.replace(/@(param|returns?|typedef|type|property)\s+\{\{[\s\S]*?\}\}/g, '@$1 {Object}');
    content = content.replace(/@(param|returns?|typedef|type|property)\s+\{([^}]+)\}/g, (match, tag, typeBlock) => {
       if (typeBlock.includes('=>') || typeBlock.includes('import(') || typeBlock.includes('<') || typeBlock.includes('|') || typeBlock.includes('\n')) {
         return `@${tag} {any}`;
       }
       return match;
    });
    
    const tmpPath = path.join(tmpDir, file);
    fs.mkdirSync(path.dirname(tmpPath), { recursive: true });
    fs.writeFileSync(tmpPath, content);
    tmpFiles.push(tmpPath);
  }

  // get template data
  const templateData = await jsdoc2md.getTemplateData({ files: tmpFiles });

  // reduce templateData to an array of class names
  const moduleNames = templateData.reduce((moduleNames, identifier) => {
    if (identifier.kind === "module") {
      moduleNames.push(identifier.name);
    }
    return moduleNames;
  }, []);

  // create a documentation file for each class
  for (const moduleName of moduleNames) {
    const template = `{{#module name="${ moduleName }"}}{{>docs}}{{/module}}`;
    const markdown = await jsdoc2md.render({ 
      data: templateData, 
      template: template,
      "heading-depth" : 2
    });
    
    const moduleData = templateData.find(d => d.kind === 'module' && d.name === moduleName);
    let originalFilePath = '';
    if (moduleData && moduleData.meta && moduleData.meta.path) {
       originalFilePath = moduleData.meta.path.replace(tmpDir, process.cwd());
    }

    if (originalFilePath) {
      // Retain structure: e.g. lib/utils/router.js -> generated/lib/utils/router.generated.story.mdx
      const relativePath = path.relative(process.cwd(), originalFilePath);
      const outputDir = path.join(dist, relativePath);
      fs.mkdirSync(outputDir, { recursive: true });

      const filename = `${ urlize(moduleName) }.generated.story.mdx`;
      const filepath = path.join(outputDir, filename);
      const metaTitle = `API/JS/${moduleName}`;
      const content = `import { Meta } from '@storybook/addon-docs/blocks';\n\n<Meta title="${metaTitle}" />\n\n# ${moduleName}\n\n${markdown}`;
      
      fs.writeFileSync(filepath, content);
    }
  }

  fs.removeSync(tmpDir);

  return templateData; // Return AST data for MCP
}
