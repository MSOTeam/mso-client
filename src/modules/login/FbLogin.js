import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import styled from 'styled-components';
import Facebook from '../../assets/facebook.svg';

const ScLogin = styled.button`
  border: 1px #a9a9a9 solid;
  border-radius: 4px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  cursor: pointer;
    &:before {
      display: block;
      content:url(${Facebook});
      margin-right: 20px;
      height: 18px;
    }
`;

const FbLogin = ({ handleLogin }) => {
  const callback = (resp) => {
    handleLogin(resp);
  };

  return (
    <FacebookLogin
      appId="327203661179854"
      callback={callback}
      render={renderProps => (
        <ScLogin onClick={renderProps.onClick}>Sign in with Facebook</ScLogin>
      )}
    />
  );
};

FbLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default FbLogin;
