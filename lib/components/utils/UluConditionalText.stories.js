import UluConditionalText from "./UluConditionalText.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: UluConditionalText,
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