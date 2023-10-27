import React from 'react';
import Accordion from '.';
import ninjas from '../../assets/ninjas';

export default {
  title: 'atoms/Accordion',
  component: Accordion,
  argTypes: {
    user: {
      type: 'object'
    }
  }
}

const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      lvlNum: 0,
      lvlName: 'Data Types',
      lvlColor: '#CCCC99',
      description: 'New ninjas learn about data in JavaScript. How many types of data are there?',
      lvlNinja: ninjas.ninja,
      lvlBelt: 'no',
      nextLvlBelt: 'white',
    },
    {
      lvlNum: 1,
      lvlName: 'Variables',
      lvlColor: '#BBBBBB',
      description: 'White-belt ninjas will learn about variables - what they are, how they work, and how we can use them in JavaScript.',
      lvlNinja: ninjas.white,
      lvlBelt: 'white',
      nextLvlBelt: 'yellow'
    },
    {
      lvlNum: 2,
      lvlName: 'Operators',
      lvlColor: '#BAB957',
      description: 'Yellow-belt ninjas will learn about operators in JavaScript, and how they can help us with logic.',
      lvlNinja: ninjas.yellow,
      lvlBelt: 'yellow',
      nextLvlBelt: 'orange',
    },
  ]
}
