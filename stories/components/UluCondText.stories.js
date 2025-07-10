import UluCondText from "../../lib/components/UluCondText.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/UluCondText',
  component: UluCondText,
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StringValue = {
  args: {
    text: "This text is set"
  }
};

export const NumberValue = {
  args: {
    text: 0
  }
};

export const NullValue = {
  args: {
    text: null
  }
};

export const UndefinedValue = {
  args: {
    text: undefined
  }
};

class toStringObject {
  constructor(text) {
    this.text = text;
  }
  toString() {
    return this.text;
  }
}

export const ObjectWithToString = {
  args: {
    text: new toStringObject("This is a class with toString")
  }
};

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
