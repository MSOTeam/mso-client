import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';

const GoogleRegistration = ({ handleRegister, handleError }) => {
  const onSuccess = (resp) => {
    handleRegister(resp);
  };
  const onFailure = (error) => {
    handleError(error);
  };

  return (
    <GoogleLogin
      clientId="317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

GoogleRegistration.propTypes = {
  handleRegister: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
}

export default GoogleRegistration;