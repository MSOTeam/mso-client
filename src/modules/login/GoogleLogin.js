import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin as Login } from 'react-google-login';
import styled from 'styled-components';
import Google from '../../assets/google.svg';

const ScLogin = styled(Login)`
  border: 1px #E0E0E0 solid;
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
  cursor:pointer;
    &:before {
      display: block;
      content:url(${Google});
      margin-right: 20px;
      height: 18px;
    }
`;

const GoogleLogin = ({ handleLogin, handleError }) => {
  const onSuccess = (resp) => {
    handleLogin(resp);
  };
  const onFailure = (error) => {
    handleError(error);
  };

  return (
    <ScLogin
      clientId="317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com"
      buttonText="Sign in with Google"
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
