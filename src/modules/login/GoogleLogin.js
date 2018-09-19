import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin as Login } from 'react-google-login';

const GoogleLogin = ({ handleLogin, handleError }) => {

  const onSuccess = (resp) => {
    handleLogin(resp);
  };
  const onFailure = (error) => {
    handleError(error);
  };

  return (
    <Login
      clientId="317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

GoogleLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
};

export default GoogleLogin;
