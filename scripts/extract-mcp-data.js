import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import * as docgen from 'vue-docgen-api';
import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import jsx from 'acorn-jsx';

// Extend acorn with JSX support just in case stories have JSX snippets
const Parser = acorn.Parser.extend(jsx());

const OUTPUT_FILE = 'mcp-data.json'; 

const data = {
  name: "@ulu/frontend-vue",
  prefix: "vue",
  snippets: {},
  configuration: {},
  reference: {}
};

async function processVueComponents() {
  const vueFiles = await glob('lib/**/*.vue');
  for (const file of vueFiles) {
    try {
      const parsed = await docgen.parse(file);
      const componentName = parsed.displayName;
      
      if (!componentName) continue;

      // Configuration
      const properties = (parsed.props || []).map(p => ({
        name: p.name,
        type: p.type?.name || 'unknown',
        default: p.defaultValue?.value || undefined,
        description: p.description || ''
      }));

      const events = (parsed.events || []).map(e => ({
        name: e.name,
        description: e.description || ''
      }));

      const slots = (parsed.slots || []).map(s => ({
        name: s.name,
        description: s.description || ''
      }));

      data.configuration[componentName] = {
        description: parsed.description || `Vue Component Props, Emits, and Slots for ${componentName}`,
        properties,
        events,
        slots
      };

      // Reference
      data.reference[componentName] = {
        raw_ast_dump: parsed
      };

    } catch (e) {
      console.error(`Error parsing ${file}:`, e.message);
    }
  }
}

async function processStorybookFiles() {
  const storyFiles = await glob('lib/**/*.stories.js');
  
  for (const file of storyFiles) {
    const code = fs.readFileSync(file, 'utf-8');
    try {
      const ast = Parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module'
      });

      // Find component name from default export
      let componentName = null;
      walk.simple(ast, {
        ExportDefaultDeclaration(node) {
          if (node.declaration && node.declaration.type === 'ObjectExpression') {
             const compProp = node.declaration.properties.find(p => p.key && p.key.name === 'component');
             if (compProp && compProp.value && compProp.value.name) {
               componentName = compProp.value.name;
             }
          }
        }
      });
      
      // If no component explicitly defined, try to guess from filename
      if (!componentName) {
        componentName = path.basename(file, '.stories.js');
      }

      if (!data.snippets[componentName]) {
        data.snippets[componentName] = [];
      }

      // Find story args
      walk.simple(ast, {
        AssignmentExpression(node) {
          if (
            node.left.type === 'MemberExpression' &&
            node.left.property.name === 'args' &&
            node.left.object.type === 'Identifier'
          ) {
            const storyName = node.left.object.name;
            const argsNode = node.right;
            
            if (argsNode.type === 'ObjectExpression') {
               const args = {};
               argsNode.properties.forEach(prop => {
                 if (prop.key && prop.key.name) {
                   // Handle literals
                   if (prop.value.type === 'Literal') {
                     args[prop.key.name] = prop.value.value;
                   } else {
                     args[prop.key.name] = '{...}'; // Placeholder for complex objects
                   }
                 }
               });

               // Generate HTML snippet
               let propsString = Object.entries(args).map(([k, v]) => {
                  if (k === 'text' || k === 'content' || k === 'children') return ''; // Usually slots
                  if (typeof v === 'boolean' && v) return k;
                  if (typeof v === 'boolean' && !v) return `:${k}="false"`;
                  if (typeof v === 'string') return `${k}="${v}"`;
                  return `:${k}="${v}"`;
               }).filter(Boolean).join(' ');

               const slotContent = args.text || args.content || args.children || 'Content';
               const codeSnippet = `<${componentName} ${propsString}>${slotContent}</${componentName}>`;

               data.snippets[componentName].push({
                 title: storyName,
                 description: `${storyName} variation`,
                 code: codeSnippet.replace(/ >/, '>')
               });
            }
          }
        }
      });

    } catch (e) {
       // Silently ignore or log if acorn fails on some complex files, but keep going.
       // console.error(`Error parsing with acorn ${file}:`, e.message);
    }
  }
}

async function processMdxFiles() {
  const mdxFiles = await glob('lib/**/*.story.mdx');
  for (const file of mdxFiles) {
     const content = fs.readFileSync(file, 'utf-8');
     const name = path.basename(file, '.story.mdx');
     
     data.reference[name] = {
       raw_markdown: content
     };

     if (!data.snippets[name]) {
       data.snippets[name] = [];
     }

     // Regex to extract code blocks
     const codeBlockRegex = /```(js|vue|html)\n([\s\S]*?)```/g;
     let match;
     let counter = 1;
     while ((match = codeBlockRegex.exec(content)) !== null) {
       data.snippets[name].push({
         title: `${name} Example ${counter++}`,
         description: `Code example extracted from markdown.`,
         code: match[2].trim()
       });
     }
  }
}

async function main() {
  console.log('Extracting Vue Components...');
  await processVueComponents();
  console.log('Extracting Storybook Files...');
  await processStorybookFiles();
  console.log('Extracting MDX Files...');
  await processMdxFiles();

  const outDir = path.join(process.cwd(), 'dist', 'mcp');
  fs.mkdirSync(outDir, { recursive: true });
  
  const targetPath = path.join(outDir, OUTPUT_FILE);
  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
  console.log(`Successfully generated MCP data at ${targetPath}`);
}

main().catch(console.error);