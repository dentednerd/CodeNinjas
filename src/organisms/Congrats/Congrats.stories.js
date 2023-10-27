import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Congrats from '.';

export default {
  title: 'organisms/Congrats',
  component: Congrats,
  decorators: [(Story) => (
      <Routes>
        <Route path="/levels/:level" element={<Story />} />
      </Routes>
  )]
};

export const Default = () => <Congrats />