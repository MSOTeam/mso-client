import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const FbLogin = ({ handleLogin }) => {
  const callback = (resp) => {
    handleLogin(resp);
  };

  return (
    <FacebookLogin
      appId="327203661179854"
      autoLoad
      callback={callback}
      render={renderProps => (
        <button onClick={renderProps.onClick}>Login</button>
      )}
    />
  );
};

FbLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default FbLogin;
