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
  articles,
} from './modules';

const Routes = props => (
  <ConnectedRouter history={props.history}>
    <div>
      <Route exact path="/" component={main.Main} />
      <routes.AuthRoute path="/articles" component={articles.Articles} />
      <routes.AuthRoute path="/articles/:tag" component={articles.Articles} />
      <routes.AuthRoute path="/article/:id" component={articles.Article} />
      <routes.AuthRoute path="/settings" component={settings.Settings} />
    </div>

  </ConnectedRouter>
);


Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
