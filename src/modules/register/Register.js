import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import * as actions from './actions';
import { authGoogleUser, authFbUser } from '../login/actions';
import { color } from '../../styles/color';
import Email from '../../assets/email.svg';
import EmailRegistration from './EmailRegistration';
import RegisterSuccess from './RegisterSuccess';
import GoogleRegistration from './GoogleRegistration';
import FbRegistration from './FbRegistration';

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

const ScLogin = styled.p`
  border: 1px #E0E0E0 solid;
  border-radius: 4px;
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  cursor:pointer;
  align-items: center;
  ${props => props.email && css`
    &:before {
      content:url(${Email});
      margin-right: 20px;
      width: 20px;
    }
  `}
`;


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 'select',
    };
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
    console.log(this.props);
    const selection = (
      <>
        <LoginWrapper>
          <H2>Join tagit</H2>
          <GoogleRegistration handleRegister={this.handleGoogleRegistration} handleError={this.handleError} />
          <FbRegistration google onClick={() => this.setState({ step: 'google' })} />
          {/* <ScLogin bottom email handleRegister={this.handleEmailRegistration}>Sign up with Email</ScLogin> */}
        </LoginWrapper>
      </>
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
};

export default connect()(Register);
