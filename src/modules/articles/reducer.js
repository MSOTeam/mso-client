import { handleActions } from 'redux-actions';

import {
  FIND_ARTICLES_REQUEST,
  FIND_ARTICLES_SUCCESS,
  FIND_ARTICLES_FAILURE,
  FIND_ARTICLE_REQUEST,
  FIND_ARTICLE_SUCCESS,
  FIND_ARTICLE_FAILURE,
  UPDATE_ARTICLE_REQUEST,
  UPDATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_FAILURE,
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
    [FIND_ARTICLE_REQUEST]: (state, request) => ({ ...state, request, isFetching: true }),
    [FIND_ARTICLE_SUCCESS]: (state, { article }) => ({ ...state, article }),
    [FIND_ARTICLE_FAILURE]: (state, { error }) => ({ ...state, error }),
    [UPDATE_ARTICLE_REQUEST]: (state, { id, article }) => ({ ...state, id, article }),
    [UPDATE_ARTICLE_SUCCESS]: (state, { response }) => ({ ...state, response }),
    [UPDATE_ARTICLE_FAILURE]: (state, { error }) => ({ ...state, error }),
  },
  initialState,
);
