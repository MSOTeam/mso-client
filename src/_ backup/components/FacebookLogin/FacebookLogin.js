import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebook = ({ onLogin }) => (

  <FacebookLogin
    appId="393780347762107"
    autoLoad
    callback={onLogin}
    render={renderProps => (
      <button onClick={renderProps.onClick}>Sign up with Facebook</button>
    )}
  />
);


Facebook.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Facebook;
