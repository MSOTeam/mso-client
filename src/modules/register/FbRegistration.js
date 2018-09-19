import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';

const FbRegistration = ({ handleRegister }) => {
  const callback = (resp) => {
    handleRegister(resp);
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

FbRegistration.propTypes = {
  handleRegister: PropTypes.func.isRequired,
};

export default FbRegistration;
