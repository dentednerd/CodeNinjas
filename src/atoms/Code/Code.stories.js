import React from 'react';
import Code from '.';

export default {
  title: 'atoms/Code',
  component: Code,
  argTypes: {
    children: {
      type: 'array'
    }
  }
}

const Template = (args) =>  (
  <Code {...args}>
    {args.children}
  </Code>
);

export const Default = Template.bind({});
Default.args = {
  children: 'let phrase = "cowabunga";\n// pizza is life'
}
