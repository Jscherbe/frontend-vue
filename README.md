# @ulu/frontend-vue

Vue component library for the [Ulu frontend](https://jscherbe.github.io/frontend/) ecosystem.

This library provides a set of reusable, themeable, and accessible Vue 3 components. It is designed to be modular, allowing you to import only the components and features you need, ensuring your application remains lightweight and performant.

- [Documentation / Demos](https://jscherbe.github.io/frontend-vue/)
- [Change Log](CHANGELOG.md)
- [Installation](#installation)
- [General Usage](#usage)
  - [1. SCSS Setup](#1-scss-setup)
  - [2. Plugin Registration](#2-plugin-registration)
    - [Core Plugin (Required)](#core-plugin-required)
    - [Optional Plugins](#optional-plugins)
  - [3. Component Usage](#3-component-usage)
- [Resources](#resources)
  - [Snippets](#snippets)


## Installation

Install the library and its required peer dependencies.

```bash
npm install @ulu/frontend-vue
```

## Usage

Using the library involves three main steps: setting up the SCSS, registering the Vue plugins, and importing the components you need.

### 1. SCSS Setup

Import the main stylesheet into your project's primary SCSS file. This will bring in all the necessary styles for the components.

```scss
// Import Ulu Vue component styles
@use "@ulu/frontend-vue/scss" as ulu-vue;

// Configure
@include ulu-vue.plugin-toast-set((
  "background-color" : gray
));

// Output (plugins/component) stylesheets that you use
@include ulu-vue.plugin-toast-styles();
```

### 2. Plugin Registration

This library uses a plugin-based system to configure core features and functionality. You'll need to register them in your main application entry point (e.g., `src/main.js`).

#### Core Plugin (Required)

The `corePlugin` is **required** to set up the library's foundational settings, such as the icon system, which is used by many components. 

```javascript
// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Your vue-router instance

import { corePlugin } from '@ulu/frontend-vue';

const app = createApp(App);

app.use(router);

// Register the core plugin
app.use(corePlugin, {
  // Optional: You can override default settings here.
  // For example, to use FontAwesome's static CSS classes instead of the Vue component:
  // fontAwesomeStatic: true, 
});

app.mount('#app');
```

#### Optional Plugins

Other plugins for features like responsive breakpoints, global modals, and toast notifications can be registered as needed.

```javascript
// src/main.js
import { breakpointsPlugin, modalsPlugin, toastPlugin } from '@ulu/frontend-vue';

// ...
app.use(breakpointsPlugin);
app.use(modalsPlugin, { /* your global modal configurations */ });
app.use(toastPlugin, { /* default toast options */ });
// ...
```

### 3. Component Usage

Components are designed to be imported individually. This approach is highly recommended as it allows build tools like Vite or Webpack to **tree-shake** unused components, keeping your final application bundle as small as possible.

**Example:**
```vue
<script setup>
  import { UluButton, UluAlert } from '@ulu/frontend-vue';
</script>

<template>
  <UluAlert type="success" title="Success!">
    This is an alert component.
  </UluAlert>

  <UluButton primary to="/">Click Me</UluButton>
</template>
```


# Resources

## Snippets

- Snippets for vscode are available in the repo's at [/resources/vscode/](https://github.com/Jscherbe/frontend-vue/tree/main/resources/vscode)

## Resolver

Resolver for [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components/tree/main]) is available to use like:

```js
// vite.config.js

import { defineConfig } from "vite";
import Components from "unplugin-vue-components/vite";
import { UluUnpluginResolver } from "@ulu/frontend-vue/resolver";

export default defineConfig({
  plugins: [
    // ...
    Components({ 
      resolvers: [
        UluUnpluginResolver()
      ]
    }),
    // ...
  ],
  // ...
});
```