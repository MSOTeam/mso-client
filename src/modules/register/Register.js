import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import * as actions from './actions';
import { authGoogleUser, authFbUser } from '../login/actions';
import { color } from '../../styles/color';
import Facebook from '../../assets/img/facebook.svg';
import Google from '../../assets/img/google.svg';
import Email from '../../assets/img/email.svg';
import EmailRegistration from './EmailRegistration';
import RegisterSuccess from './RegisterSuccess';
import GoogleRegistration from './GoogleRegistration';
import FbRegistration from './FbRegistration';

const Modalhead = styled.h1`
  font-size: 30px;
  font-weight: 680;
  text-align: center;
  padding: 25px;
  letter-spacing: 3px;
`;

const Modalpara = styled.p`
  width: 80%;
  text-align: center;
  line-height: 25px;
  margin: auto;
  margin-top: 9px;
  font-weight: 100;
`;

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

const Signin = styled.span`
  font-weight: 700;
  cursor: pointer;
`;

const Terms = styled.p`
  font-weight: 100;
  cursor: pointer;
  font-size: 12px;
  color: #03CEA4;
  text-align: center;
  margin-top: 50px;
`;

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { step: 'select' };
  }

  handleEmailRegistration = (user) => {
    const { dispatch } = this.props;
    dispatch(actions.register(user));
  }

  handleGoogleRegistration = (user) => {
    const { dispatch } = this.props;
    dispatch(authGoogleUser(user));
  }

  handleFbRegistration = (user) => {
    const { dispatch } = this.props;
    dispatch(authFbUser(user));
  }

  handleError = (error) => {
    console.log(error);
  }

  render() {
    const { step } = this.state;
    const selection = (
      <Flex flexDirection="column">
        <Modallogin top facebook onClick={() => this.setState({ step: 'fb' })}>Sign up with Facebook</Modallogin>
        <Modallogin google onClick={() => this.setState({ step: 'google' })}>Sign up with Google</Modallogin>
        <Modallogin bottom email onClick={() => this.setState({ step: 'email' })}>Sign up with Email</Modallogin>
        <Modalpara>Already have an account? <Signin>Sign in</Signin></Modalpara>
        <Terms>Terms of service</Terms>
      </Flex>
    );

    switch (step) {
      case 'email':
        return (
          <EmailRegistration
            handleRegister={this.handleEmailRegistration}
          />
        );
      case 'google':
        return (
          <GoogleRegistration
            handleRegister={this.handleGoogleRegistration}
            handleError={this.handleError}
          />
        );
      case 'fb':
        return (
          <FbRegistration
            handleRegister={this.handleFbRegistration}
          />
        );
      case 'success':
        return <RegisterSuccess />;
      default:
        return selection;
    }
  }
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
};

export default connect()(Register);
