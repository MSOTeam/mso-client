import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import * as actions from './actions';
import { color } from '../../styles/color';
import Email from '../../assets/email.svg';
import GoogleLogin from './GoogleLogin';
import FbLogin from './FbLogin';
import EmailLogin from './EmailLogin';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 2em;
  color: ${color.dark};
  font-weight: 300;
  padding: 20px 0 25px;
  letter-spacing: 1px;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 'select' };
  }

  handleGoogleLogin = (user) => {
    const { dispatch } = this.props;
    dispatch(actions.authGoogleUser(user));
  }

  handleFbLogin = (user) => {
    const { dispatch } = this.props;
    dispatch(actions.authFbUser(user));
  }

  handleEmailLogin = (login) => {
    const { dispatch } = this.props;
    dispatch(actions.login(login));
  }

  handleError = (error) => {
    console.log(error);
  }

  render() {
    const { step } = this.state;

    const selection = (
      <LoginWrapper>
        <H2>Welcome back</H2>
        <GoogleLogin handleLogin={this.handleGoogleLogin} handleError={this.handleError} />
        <FbLogin handleLogin={this.handleFbLogin} />
      </LoginWrapper>
    );

    switch (step) {
      case 'email':
        return (
          <EmailLogin
            handleLogin={this.handleEmailLogin}
          />
        );
      case 'google':
        return (
          <GoogleLogin handleLogin={this.handleGoogleLogin} handleError={this.handleError} />
        );
      case 'fb':
        return (
          <FbLogin handleLogin={this.handleFbLogin} />
        );
      default:
        return selection;
    }
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
