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
      clientId="317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default GoogleRegistration;