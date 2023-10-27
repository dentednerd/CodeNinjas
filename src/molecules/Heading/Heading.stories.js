import React from 'react';
import Heading from '.';

export default {
  title: 'molecules/Heading',
  component: Heading,
  argTypes: {
    avatar: {
      type: 'boolean'
    },
    title: {
      type: 'string'
    },
    subtitle: {
      type: 'string'
    }
  }
}

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasAvatar: false,
  title: "This is a title.",
  subtitle: "Subtitle"
}

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  hasAvatar: true,
  title: "This has an avatar.",
}