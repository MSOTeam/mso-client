import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import Authenticated from './Authenticated';
import { loginSuccess } from '../login/actions';

class App extends Component {
  componentWillMount = () => {
    const { dispatch, authenticated } = this.props;
    const { token } = localStorage;
    if (token && !authenticated) {
      dispatch(loginSuccess('', token));
    }
  }

  render() {
    const { children, authenticated } = this.props;
    return authenticated ? (<Authenticated>{ children }</Authenticated>) :
      (<SignUp>{ children }</SignUp>);
  }
}

App.defaultProps = {
  authenticated: false,
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  authenticated: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const authenticated = (state.login.token);
  return {
    authenticated,
  };
}

export default connect(mapStateToProps)(App);
