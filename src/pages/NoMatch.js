import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for&nbsp;
        <code>
          {location.pathname}
        </code>
        &nbsp;
        <Link to="/">
          Back to login page
        </Link>
      </h3>
      <img
        width="100%"
        height="100%"
        src={`${process.env.PUBLIC_URL}/Images/backgrounds/underground.jpg`}
        alt="404 message"
      />
    </div>
  );
}

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

export default NoMatch;
