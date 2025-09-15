import UluSanityRichText from './UluSanityRichText.vue';

export default {
  component: UluSanityRichText,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'object'
    },
    noWrapper: {
      control: 'boolean'
    }
  }
};

const mockContent = [
  {
    _key: 'r1',
    _type: 'block',
    style: 'h2',
    children: [
      {
        _key: 'r1c1',
        _type: 'span',
        text: 'Hello, Sanity!'
      }
    ]
  },
  {
    _key: 'r2',
    _type: 'block',
    children: [
      {
        _key: 'r2c1',
        _type: 'span',
        text: 'This is a simple example of Portable Text being rendered by the '
      },
      {
        _key: 'r2c2',
        _type: 'span',
        text: 'UluSanityRichText',
        marks: ['strong']
      },
      {
        _key: 'r2c3',
        _type: 'span',
        text: ' component.'
      }
    ]
  }
];

export const WithWrapper = {
  args: {
    content: mockContent,
    noWrapper: false
  }
};

export const NoWrapper = {
  args: {
    content: mockContent,
    noWrapper: true
  }
};

export const Empty = {
  args: {
    content: []
  }
};