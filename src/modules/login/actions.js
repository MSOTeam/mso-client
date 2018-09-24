import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SET_USER,
} from './constants';
import { toggleModal } from '../navigation/actions';
import GoogleUser from './types/GoogleUser';
import FbUser from './types/FbUser';


const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  user,
  token,
});

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  error,
});

const setSession = (user, token) => {
  sessionStorage.setItem('user', user);
  sessionStorage.setItem('token', token);
};

export const login = data => (dispatch) => {
  dispatch(loginRequest(data));
  axios
    .post('auth/login', data)
    .then((response) => {
      const { user, token } = response.data;
      setSession(user, token);
      dispatch(loginSuccess(user, token));
    }).then(() => {
      dispatch(toggleModal());
      dispatch(push('/shopper/profile'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};

const logoutUser = () => ({
  type: LOGOUT,
});

export const logout = () => (dispatch) => {
  sessionStorage.clear();
  dispatch(logoutUser());
  dispatch(push('/'));
};

export const setUser = (user, token) => ({
  type: SET_USER,
  user,
  token,
});

export const setGoogleUser = googleUser => (dispatch) => {
  const user = new GoogleUser(googleUser);
  sessionStorage.setItem('token', user.token);
  setSession(user, user.token);
  dispatch(setUser(user, user.token));
};

export const setFbUser = fbUser => (dispatch) => {
  const user = new FbUser(fbUser);
  setSession(user, user.token);
  dispatch(setUser(user, user.token));
};

export const authGoogleUser = googleUser => (dispatch) => {
  const user = new GoogleUser(googleUser);
  dispatch(loginRequest(user.token));
  axios
    .post('/auth/google', { access_token: user.token })
    .then((response) => {
      const token = response.headers['x-auth-token'];
      setSession(user, token);
      dispatch(loginSuccess(user, token));
    }).then(() => {
      dispatch(toggleModal());
      dispatch(push('/articles'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
