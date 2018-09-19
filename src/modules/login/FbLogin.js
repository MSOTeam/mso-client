import React from 'react';
import FacebookLogin from 'react-facebook-login';

const FbLogin = () => {
  const callback = (response) => {
    console.log(response);
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

export default FbLogin;
