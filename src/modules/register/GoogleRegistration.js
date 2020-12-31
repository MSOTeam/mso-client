import Google from '../../assets/google.svg';
import GoogleLogin from 'react-google-login';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const GoogleButton = styled.div`
  border: 1px #a9a9a9 solid;
  background: white;
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
      render={renderProps => (
        <GoogleButton onClick={renderProps.onClick}>Sign up with Google</GoogleButton>
      )}
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