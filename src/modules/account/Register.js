import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

class Register extends Component {

  onFacebookLogin = (resp) => {
    console.log(resp);
  }

  render() {
    return (
      <FacebookLogin
        appId="393780347762107"
        autoLoad
        callback={this.onFacebookLogin}
        render={renderProps => (
          <button onClick={renderProps.onClick}>Sign in with Facebook</button>
        )}
      />
    );
  }
}

Register.propTypes = {
};

export default connect()(Register);
