import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: MyButton,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: '按鈕按下了' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: 'component-red', value: 'DarkRed' },
        { name: 'component-green', value: 'DarkGreen' },
      ],
    },    
  }
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
Primary.decorators = [() => ({ template: '<div style="margin: 10em;"><story/></div>' })]

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

Secondary.parameters = {
  backgrounds: {
    values: [
      {name: 'stroy-red', value: 'pink'}
    ]
  }
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
export const BlackOutline = Template.bind({});
BlackOutline.args = {
  label: 'Black Outline Button',
  outline: true,
  outlineColor: 'black',
};

export const GreenOutline = Template.bind({});
GreenOutline.args = {
  label: 'Green Outline Button',
  outline: true,
  outlineColor: 'green',
};