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
  step: 'select',
};

export default handleActions(
  {
    [REGISTER_SHOPPER_REQUEST]: state => ({ ...state, isFetching: true }),
    [REGISTER_SHOPPER_SUCCESS]: (state, { shopper }) => ({ ...state, shopper }),
    [REGISTER_SHOPPER_FAILURE]: (state, { error }) => ({ ...state, error }),
    [REGISTER_SET_STEP]: (state, { step }) => ({ ...state, step }),
  },
  initialState,
);
