import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import axios from 'axios';
import './index.css';
import baseStyles from './styles/base';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import Routes from './routes';

import { app } from './modules';

const history = createBrowserHistory();

const store = configureStore({
  mware: routerMiddleware(history),
});

axios.defaults.baseURL = 'https://tagit-api.herokuapp.com/';

const Index = () => (
  baseStyles(),
  (
    <Provider store={store}>
      <app.App>
        <Routes history={history} />
      </app.App>
    </Provider>
  )
);

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
