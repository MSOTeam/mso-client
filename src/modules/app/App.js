import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Authenticated from './Authenticated';
import { loginSuccess } from '../login/actions';

class App extends Component {

  componentWillMount = () => {
    const { dispatch, authenticated } = this.props;
    const { user, token } = localStorage;
    if (user && token && !authenticated) {
      dispatch(loginSuccess(user, token));
    }
  }

  render() {
    const { children, authenticated } = this.props;
    return authenticated ? (<Authenticated>{ children }</Authenticated>) :
      (<SignUp>{ children }</SignUp>);
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const authenticated = (state.login.token) || localStorage.getItem('token');
  return {
    authenticated,
  };
}

export default connect(mapStateToProps)(App);
