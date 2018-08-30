import { handleActions } from 'redux-actions';

import {
  FIND_ARTICLES_REQUEST,
  FIND_ARTICLES_SUCCESS,
  FIND_ARTICLES_FAILURE,
} from './constants';

const initialState = {
  isFetching: false,
  error: '',
  step: '',
};

export default handleActions(
  {
    [FIND_ARTICLES_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [FIND_ARTICLES_SUCCESS]: (state, { articles }) => ({ ...state, articles }),
    [FIND_ARTICLES_FAILURE]: (state, { error }) => ({ ...state, error }),
  },
  initialState,
);
