import React from 'react';
import sensei from '../../assets/images/Sensei1.jpeg';

const Loading = () => {
  return (
    <div className="loading">
      <img src={sensei} alt="Sensei" />
      <p>Please be patient! Sensei is preparing the training dojo.</p>
    </div>
  );
};

export default Loading;
