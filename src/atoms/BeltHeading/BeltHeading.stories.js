import React from 'react';
import BeltHeading from '.';
import { colors } from '../../tokens';

export default {
  title: 'atoms/BeltHeading',
  component: BeltHeading,
  argTypes: {
    color: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
  }
}

const Template = (args) => <BeltHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: colors.sensei,
  text: 'Data Types'
}
