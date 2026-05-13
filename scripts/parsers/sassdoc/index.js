import fs from "fs-extra";
import path from "path";
import { globSync } from "glob";
import { outputPages } from "@ulu/sassdoc-to-markdown";
import templates from "./templates/index.js";
import customAnnotations from "./annotations/index.js";

const cwd = path.resolve(".");
const src = path.resolve("./lib/");
const dist = path.resolve("./.storybook/generated-docs/");

export async function processSassDoc() {
  let mcpDataAccumulator = {};

  function getCleanMcpData(groups) {
    const clean = {};
    for (const [groupName, items] of Object.entries(groups)) {
      clean[groupName] = items.map(item => {
        const { $item, ...cleanData } = item.data;
        return {
          id: item.id,
          title: item.title,
          groupName: item.groupName,
          path: item.path,
          ...cleanData
        };
      });
    }
    return clean;
  }

  const commonConfig = {
    annotationTemplates: templates.annotations,
    pageTemplates: templates.page,
    customAnnotations,
    annotations: [
      "name",
      "description",
      "deprecated",
      "_code",
      "_meta",
      "property",
      "example",
      "parameter",
      "return",
      "output",
      "throw",
      "link",
      "since",
      "todo",
      "see",
      "require"
    ],
    byTypeOrder: [
      "body",
      "variables",
      "mixins",
      "functions",
      "CSS",
      "placeholders",
    ],
    hidePrivate: true,
    hidePrivateKeepGroup: true,
    compilerOptions: {
      additionalData: '@use "@ulu/frontend/lib/scss" as ulu; @use "sass:map"; @use "sass:math"; @use "sass:meta";',
      sassOptions: {
        loadPaths: [
          cwd,
          src,
          path.resolve('./node_modules')
        ]
      }
    },
    outputTemplate({ frontmatter, content }) {
      const metaTitle = `API/SCSS/${frontmatter.title}`;
      return `import { Meta } from '@storybook/addon-docs/blocks';\n\n<Meta title="${metaTitle}" />\n\n${content}`;
    },
    buildEnd: (data) => {
      if (data && data.groups) {
        Object.assign(mcpDataAccumulator, getCleanMcpData(data.groups));
      }
    }
  };

  const createConfig = (subdir, options) => ({
    ...commonConfig,
    dir: subdir ? path.resolve(src, subdir) : src,
    pathBase: subdir ? `lib/${ subdir }` : "lib/core/",
    dist,
    ...options
  });

  const configs = [
    createConfig(false, {
      sassdocOptions: {
        exclude: [
          "components/**",
          "composables/**",
          "plugins/**",
          "utils/**"
        ]
      }
    }),
    createConfig("components/"),
    createConfig("composables/"),
    createConfig("plugins/"),
    createConfig("utils/")
  ];

  for (const config of configs) {
    const scssFiles = globSync('**/*.scss', { cwd: config.dir, ignore: config.sassdocOptions?.exclude || [] });
    if (scssFiles.length === 0) {
      console.log(`Skipping SassDoc for ${config.dir} (no SCSS files found)`);
      continue;
    }

    const outputPath = path.join(config.dist, config.pathBase);
    if (fs.existsSync(outputPath)) {
      fs.removeSync(outputPath);
    }
    
    try {
      await outputPages(config);
      
      // Rename index.md to .story.mdx
      if (fs.existsSync(outputPath)) {
         const subDirs = fs.readdirSync(outputPath);
         for(const subDir of subDirs) {
            const indexPath = path.join(outputPath, subDir, 'index.md');
            if(fs.existsSync(indexPath)) {
               const newPath = path.join(outputPath, subDir, `${subDir}.story.mdx`);
               fs.renameSync(indexPath, newPath);
            }
         }
      }
    } catch (e) {
      console.error(`Error processing SassDoc for ${config.dir}:`, e.message);
    }
  }

  return mcpDataAccumulator;
}