import { handleActions } from 'redux-actions';

import {
  REGISTER_SHOPPER_REQUEST,
  REGISTER_SHOPPER_SUCCESS,
  REGISTER_SHOPPER_FAILURE,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
};

export default handleActions(
  {
    [REGISTER_SHOPPER_REQUEST]: state => ({ ...state, isFetching: true }),
    [REGISTER_SHOPPER_SUCCESS]: (state, { shopper }) => ({ ...state, shopper }),
    [REGISTER_SHOPPER_FAILURE]: (state, { error }) => ({ ...state, error })
  },
  initialState,
);
