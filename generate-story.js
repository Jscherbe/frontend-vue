// Import necessary Node.js modules
import { readFile, writeFile } from "fs/promises"; 
import path from "path";
import ollama from "ollama";  
import createPrompt from "./generate-story-prompts/version-1.js";

const OLLAMA_MODEL = 'codellama:34b-instruct';
const MODEL_OPTIONS = {
  temperature: 0.2, // Lower temperature for more deterministic/consistent output
  top_k: 40,
  top_p: 0.9,
  num_gpu: -1, // Use all available GPU layers if possible
};

/**
 * Node.js script to generate Storybook stories from Vue components using Ollama and Code Llama.
 *
 * Usage:
 * node generate-story.js <path_to_vue_component.vue> [output_file_name.js]
 *
 * Example:
 * node generate-story.js ./MyButton.vue
 * node generate-story.js ./src/components/MyComponent.vue ./stories/MyComponent.stories.js
 */

async function generateStory() {
    const vueFilePath = process.argv[2];
    const outputFilePath = process.argv[3]; 

    if (!vueFilePath) {
      console.error("Usage: node generateStory.js <path_to_vue_component.vue> [output_file_name.js]");
      console.error("Example: node generateStory.js ./MyButton.vue ./stories/MyButton.stories.js");
      process.exit(1);
    }

    console.log(`Attempting to generate Storybook story for: ${ vueFilePath }`);
    console.log(`Using Ollama model: ${ OLLAMA_MODEL}`);

    try {
      const absoluteVueFilePath = path.resolve(vueFilePath);
      console.log(`Reading Vue component from: ${ absoluteVueFilePath }`);

      const vueComponentContent = await readFile(absoluteVueFilePath, 'utf8');

      // Extract component name from file path
      const componentFileName = path.basename(vueFilePath, '.vue');

      // Determine the relative import path for the Vue component based on outputFilePath
      let componentImportPath;
      if (outputFilePath) {
        // If outputFilePath is provided, calculate the relative path from the output directory
        const absoluteOutputDirectory = path.dirname(path.resolve(outputFilePath));
        componentImportPath = path.relative(absoluteOutputDirectory, absoluteVueFilePath);
        
        // Ensure leading dot-slash for relative paths if missing (e.g., 'component.vue' -> './component.vue')
        if (!componentImportPath.startsWith('.')) {
          componentImportPath = './' + componentImportPath;
        }
      } else {
        // If outputFilePath is NOT SET, use the default relative path logic:
        let relativeToRootVuePath = vueFilePath.startsWith('./') ? vueFilePath.substring(2) : vueFilePath;
        componentImportPath = `../../${ relativeToRootVuePath }`;
      }


      console.log("Sending request to Ollama...");
      const response = await ollama.generate({
        model: OLLAMA_MODEL,
        prompt: createPrompt({ 
          vueComponentContent, 
          componentFileName, 
          componentImportPath 
        }),
        stream: false,
        options: MODEL_OPTIONS,
      });

      let generatedStory = response.response || "No response found.";
      const codePrefix = "```javascript";
      const codeSuffix = "```"

      // Clean up markdown code block delimiters if present
      if (generatedStory.startsWith(codePrefix)) {
        generatedStory = generatedStory.substring(codePrefix.length);
      }
      if (generatedStory.endsWith(codeSuffix)) {
        generatedStory = generatedStory.substring(0, generatedStory.length - codeSuffix.length);
      }
      generatedStory = generatedStory.trim();

      // Output
      if (outputFilePath) {
        const absoluteOutputFilePath = path.resolve(outputFilePath);
        const aiComment = "// Generated automatically with ./generate-story.js\n\n";
        await writeFile(absoluteOutputFilePath, aiComment + generatedStory, 'utf8');
        console.log(`\nStorybook story saved to: ${ absoluteOutputFilePath }`);
      } else {
        console.log('\n--- Generated Storybook Story ---');
        console.log(generatedStory);
        console.log('-------------------------------');
      }

      console.log('\nStorybook story generated successfully!');

    } catch (error) {
      console.error('\nError generating Storybook story:');
      console.error(error);
      process.exit(1);
    }
}

// Execute the main function
generateStory();
