import axios from 'axios';
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

export const findArticles = tag => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(findArticlesRequest(token));
  axios
    .get('article?tag=test', { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      dispatch(findArticlesSuccess(response.data.articles));
    })
    .catch((error) => {
      dispatch(findArticlesFailure(error));
    });
};

export const findArticleRequest = request => ({
  type: FIND_ARTICLE_REQUEST,
  request,
});

const findArticleSuccess = article => ({
  type: FIND_ARTICLE_SUCCESS,
  article,
});

const findArticleFailure = error => ({
  type: FIND_ARTICLE_FAILURE,
  error,
});

export const findArticle = id => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(findArticleRequest({}));
  axios
    .get(`${'/article/'}${id}`, { headers: { Authorization: `Bearer ${token}` } })
    .then((response) => {
      dispatch(findArticleSuccess(response.data.article));
    })
    .catch((error) => {
      dispatch(findArticleFailure(error));
    });
};

const updateRequest = (id, content) => ({
  type: UPDATE_ARTICLE_REQUEST,
  id,
  content,
});

const updateSuccess = response => ({
  type: UPDATE_ARTICLE_SUCCESS,
  response,
});

const updateFailure = error => ({
  type: UPDATE_ARTICLE_FAILURE,
  error,
});

export const updateArticle = (id, content) => (dispatch) => {
  const token = localStorage.getItem('token');
  dispatch(updateRequest(id, content));
  axios
    .put(`${'/article'}`, { id, content }, { headers: { Authorization: `Bearer ${token}` } })
    .then(response => dispatch(updateSuccess(response)))
    .catch(ex => dispatch(updateFailure(ex)));
};
