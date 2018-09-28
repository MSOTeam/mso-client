import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';


class AuthRoute extends Component {

 componentWillMount = () => {
   const { dispatch } = this.props;
   if (!localStorage.token) {
     dispatch(push('/'));
   }
 }

 render() {
   const { path, component } = this.props;
   return (
     <Route path={path} component={component} />
   );
 }
}

AuthRoute.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withRouter(connect()(AuthRoute));
