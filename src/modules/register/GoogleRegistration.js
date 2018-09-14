import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleRegistration = () => {
  const onSuccess = (resp) => {
    console.log(resp);
  };
  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <GoogleLogin
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleRegistration;