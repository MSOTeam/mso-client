import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { register } from './modules';

export default ({ initialState = {}, mware }) => {

  const appReducer = combineReducers({
    router: routerReducer,
    register: register.reducer,
  });

  const rootReducer = (state, action) => appReducer(state, action);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, createLogger({ collapsed: true }), mware),
  );
  return store;
};
