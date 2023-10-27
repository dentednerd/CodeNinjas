import React from 'react';
import Avatar from '.';

export default {
  title: 'atoms/Avatar',
  component: Avatar,
  argTypes: {
    user: {
      type: 'object'
    }
  }
}

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: {
    "_id": "653678fcd4f3c7b4de53f38d",
    "name": "Donatello",
    "level": 0,
    "username": "DonatelloDoesMachines",
    "avatar": "https://s3.amazonaws.com/comicgeeks/characters/avatars/11018.jpg",
    "__v": 0
    }
}
