import React from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import styled, { css, keyframes } from 'styled-components';
import Facebook from '../../assets/facebook.svg';

const Modallogin = styled(FacebookLogin)`
  border: 1px #5649CF solid;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  padding: 17px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 100;
  display: flex;
  align-items: center;
  cursor:pointer;
  ${props => props.top && css `
    margin-top: 50px;
  `}
  ${props => props.bottom && css `
    margin-bottom: 50px;
  `}
  ${props => props.facebook && css `
    &:before {
      content:url(${Facebook});
      margin-right: 20px;
    }
  `}
`;

const FbLogin = ({ handleLogin }) => {
  const callback = (resp) => {
    handleLogin(resp);
  };

  return (
    <Modallogin
      appId="327203661179854"
      callback={callback}
      render={renderProps => (
        <div></div>
      )}
    />
  );
};

FbLogin.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

export default FbLogin;
