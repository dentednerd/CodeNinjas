import React from 'react';
import Article from '.';
import { colors } from '../../tokens';

export default {
  title: 'molecules/Article',
  component: Article,
  argTypes: {
    color: {
      type: 'string'
    },
    children: {
      type: 'object'
    }
  }
}

const Template = (args) => (
  <Article {...args}>
    <p>I am?? ...Groot???</p>
  </Article>
);

export const Default = Template.bind({});
Default.args = {
  color: colors.sensei,
  title: "I am Groot",
  subtitle: "Groot?",
  hasAvatar: false
}
