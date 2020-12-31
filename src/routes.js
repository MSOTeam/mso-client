import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';

import {
  main,
  settings,
  routes,
  articles,
} from './modules';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route exact path="/" component={main.Main} />
    <Route path="/login" component={main.Main} />
    <routes.AuthRoute path="/articles/:tag" component={articles.Articles} />
    <routes.AuthRoute path="/article/:id" component={articles.Article} />
    <routes.AuthRoute path="/settings" component={settings.Settings} />
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
