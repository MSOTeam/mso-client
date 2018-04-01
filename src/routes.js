import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { register, main, search } from './modules';

const Routes = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route exact path="/" component={main.Main} />
      <Route path="/search" component={search.Search} />
      <Route path="/register" component={register.Register} />
    </div>
  </ConnectedRouter>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
