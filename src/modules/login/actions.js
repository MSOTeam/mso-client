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
  localStorage.setItem('firstName', user.firstName);
  localStorage.setItem('lastName', user.lastName);
  localStorage.setItem('setItem', user.email);
  localStorage.setItem('token', token);
  /* eslint-disable no-undef */
  const extensionId = 'ihpdjpomclgldlpgcinplplcibicbnjd';
  // const extensionId = 'amaagfbjejeplpphcpajlakcamieadlo';
  chrome.runtime.sendMessage(extensionId, token, resp => console.log({ resp }));
};

export const login = data => (dispatch) => {
  dispatch(loginRequest(data));
  axios
    .post('/auth/email', data)
    .then((response) => {
      const token = response.headers['x-auth-token'];
      const user = { email: data.email };
      setSession(user, token);
      dispatch(loginSuccess(user, token));
    }).then(() => {
      dispatch(toggleModal());
      dispatch(push('/'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};

const logoutUser = () => ({
  type: LOGOUT,
});

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch(logoutUser());
  dispatch(push('/'));
};

export const setUser = (user, token) => ({
  type: SET_USER,
  user,
  token,
});

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
      dispatch(push('/'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};

export const authFbUser = fbUser => (dispatch) => {
  const user = new FbUser(fbUser);
  dispatch(loginRequest(user.token));
  axios
    .post('/auth/fb', { access_token: user.token })
    .then((response) => {
      const token = response.headers['x-auth-token'];
      setSession(user, token);
      dispatch(loginSuccess(user, token));
    }).then(() => {
      dispatch(toggleModal());
      dispatch(push('/'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
