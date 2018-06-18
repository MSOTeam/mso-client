import { handleActions } from 'redux-actions';

import {
  REGISTER_SHOPPER_REQUEST,
  REGISTER_SHOPPER_SUCCESS,
  REGISTER_SHOPPER_FAILURE,
  REGISTER_SET_STEP,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  step: '',
};

export default handleActions(
  {
    [REGISTER_SHOPPER_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [REGISTER_SHOPPER_SUCCESS]: (state, { shopper }) => ({ ...state, shopper, step: 'success' }),
    [REGISTER_SHOPPER_FAILURE]: (state, { error }) => ({ ...state, error }),
    [REGISTER_SET_STEP]: (state, { step }) => ({ ...state, step, isFetching: false }),
  },
  initialState,
);
