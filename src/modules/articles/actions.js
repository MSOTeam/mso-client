import axios from 'axios';
import {
  FIND_ARTICLES_REQUEST,
  FIND_ARTICLES_SUCCESS,
  FIND_ARTICLES_FAILURE,
} from './constants';

export const findArticlesRequest = request => ({
  type: FIND_ARTICLES_REQUEST,
  request,
});

const findArticlesSuccess = articles => ({
  type: FIND_ARTICLES_SUCCESS,
  articles,
});

const findArticlesFailure = error => ({
  type: FIND_ARTICLES_FAILURE,
  error,
});

export const findArticles = data => (dispatch) => {
  dispatch(findArticlesRequest(data));
  axios
    .get('article', data)
    .then((response) => {
      dispatch(findArticlesSuccess(response.data.articles));
    })
    .catch((error) => {
      dispatch(findArticlesFailure(error));
    });
};
