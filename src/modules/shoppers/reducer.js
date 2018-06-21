import { handleActions } from 'redux-actions';

import {
  FIND_SHOPPERS_REQUEST,
  FIND_SHOPPERS_SUCCESS,
  FIND_SHOPPERS_FAILURE,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  step: '',
};

export default handleActions(
  {
    [FIND_SHOPPERS_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [FIND_SHOPPERS_SUCCESS]: (state, { shoppers }) => ({ ...state, shoppers }),
    [FIND_SHOPPERS_FAILURE]: (state, { error }) => ({ ...state, error }),
  },
  initialState,
);
