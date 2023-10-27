import React from 'react';
import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    color: {
      type: 'string'
    },
    children: {
      type: 'object'
    }
  }
}

const Template = (args) =>  (
  <Button {...args}>
    {args.children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  color: '$sensei',
  children: 'Button'
}
