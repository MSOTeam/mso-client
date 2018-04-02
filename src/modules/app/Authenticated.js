import React from 'react';
import PropTypes from 'prop-types';

const Authenticated = ({ children }) => (<div>{ children }</div>);

Authenticated.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Authenticated;
