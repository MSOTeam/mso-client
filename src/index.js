import "./index.css";

import { GlobalStyle } from "./styles/base";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { app } from "./modules";
import axios from "axios";
import configureStore from "./configureStore";
import { createBrowserHistory } from "history";
import registerServiceWorker from "./registerServiceWorker";
import { routerMiddleware } from "react-router-redux";

const history = createBrowserHistory();

const store = configureStore({
  mware: routerMiddleware(history),
});

axios.defaults.baseURL = "http://localhost:5000/";

const Index = () => (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <app.App>
        <Routes history={history} />
      </app.App>
    </Provider>
  </>
);

ReactDOM.render(<Index />, document.getElementById("root"));
registerServiceWorker();
