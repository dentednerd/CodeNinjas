import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NoMatch = ({ location }) => {
  return (
    <div>
      <h3>No match for <code>{location.pathname}</code><Link to="/"> Back to login page</Link></h3>
    </div>
  );
};

NoMatch.propTypes = {
  location: PropTypes.string,
};

export default NoMatch;
