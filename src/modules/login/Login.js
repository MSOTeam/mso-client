import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import * as actions from './actions';
import { color } from '../../styles/color';
import Facebook from '../../assets/img/facebook.svg';
import Google from '../../assets/img/google.svg';
import Email from '../../assets/img/email.svg';
import GoogleLogin from './GoogleLogin';
import FbLogin from './FbLogin';
import EmailLogin from './EmailLogin';

const Modallogin = styled.p`
  border: 2px ${color.lightgrey} solid;
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
  ${props => props.google && css `
    &:before {
      content:url(${Google});
      margin-right: 20px;
      width: 20px;
    }
  `}
  ${props => props.email && css `
    &:before {
      content:url(${Email});
      margin-right: 20px;
      width: 20px;
    }
  `}
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
    dispatch(actions.setFbUser(user));
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
      <Flex flexDirection="column">
        <Modallogin top facebook onClick={() => this.setState({ step: 'fb' })}>Facebook</Modallogin>
        <Modallogin google onClick={() => this.setState({ step: 'google' })}>Google</Modallogin>
        <Modallogin bottom email onClick={() => this.setState({ step: 'email' })}>Email</Modallogin>
      </Flex>
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
          <GoogleLogin
            handleLogin={this.handleGoogleLogin}
            handleError={this.handleError}
          />
        );
      case 'fb':
        return (
          <FbLogin
            handleLogin={this.handleFbLogin}
          />
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
