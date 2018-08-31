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
  articles,
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
      <Route path="/shoppers" component={shoppers.Shoppers} />
      <Route path="/articles" component={articles.Articles} />
      <Route path="/article/:id" component={articles.Article} />
      <routes.AuthRoute path="/settings" component={settings.Settings} />
      <routes.AuthRoute path="/shopper/profile" component={register.ShopperProfile} />
    </div>

  </ConnectedRouter>
);


Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
