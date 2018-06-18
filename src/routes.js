import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import {
  app,
  register,
  login,
  main,
  search,
  settings,
  routes,
  shoppers,
} from './modules';

const Routes = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route exact path="/" component={main.Main} />
      <Route path="/search" component={search.Search} />

      {/* <Route path="/signup" component={app.SignUp} /> */}
      {/* <Route path="/register" component={register.Register} />
      <Route path="/login" component={login.Login} /> */}

      <Route path="/registered" component={register.RegisterSuccess} />
      <routes.AuthRoute path="/settings" component={settings.Settings} />
      <routes.AuthRoute path="/shoppers" component={shoppers.Shoppers} />
      <routes.AuthRoute path="/shopperinfo" component={register.ShopperInfo} />
    </div>

  </ConnectedRouter>
);


Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
