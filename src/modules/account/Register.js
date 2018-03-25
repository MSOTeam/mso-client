import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLogin from '../../components/FacebookLogin';

class Register extends Component {

  onFacebookLogin = (resp) => {
    console.log(resp);
  }

  onEmailRegistration = () => {

  }

  render() {
    return (
      <div>
        <div>
          <FacebookLogin
            onLogin={this.onFacebookLogin}
          />
        </div>
      </div>
    );
  }
}

Register.propTypes = {
};

export default connect()(Register);
