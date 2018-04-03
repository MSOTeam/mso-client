import { handleActions } from 'redux-actions';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
};

export default handleActions(
  {
    [LOGIN_REQUEST]: state => ({ ...state, isFetching: true }),
    [LOGIN_SUCCESS]: (state, { token, user }) => ({ ...state, token, user }),
    [LOGIN_FAILURE]: (state, { error }) => ({ ...state, error, isFetching: false }),
    [LOGOUT]: state => ({ ...state, token: null, user: null }),
  },
  initialState,
);
