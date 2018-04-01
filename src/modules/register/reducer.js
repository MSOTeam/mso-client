import { handleActions } from 'redux-actions';

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
};

export default handleActions(
  {
    [REGISTER_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [REGISTER_SUCCESS]: (state, { shopper }) => ({ ...state, shopper }),
    [REGISTER_FAILURE]: (state, { error }) => ({ ...state, error }),
  },
  initialState,
);
