Need to setup mdx files and I think auto docs can take care of it like:

Looks like you have to create stories like this for each

```mdx
// src/utils.stories.mdx

import { Meta, Story, Docs, Source } from '@storybook/addon-docs';
import * as Utils from './utils.js'; // Import your functions

<Meta
  title="General JS Docs/Utils"
/>

# Utility Functions

<Source code={Utils.add.toString()} language="js" />

## `add(a, b)`

<Docs of={Utils.add} />
```