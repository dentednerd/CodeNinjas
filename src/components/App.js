import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';

const App = ({ children }) => {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
