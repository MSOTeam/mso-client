import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import Google from '../../assets/google.svg';

const ScLogin = styled(GoogleLogin)`
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
    <ScLogin
      clientId="317827366745-tkf2ndf7ujaeur4mu26bvi5u4l2ts6li.apps.googleusercontent.com"
      buttonText="Sign up with Google"
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