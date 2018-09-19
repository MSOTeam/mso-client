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

export const login = data => (dispatch) => {
  dispatch(loginRequest(data));
  axios
    .post('auth/login', data)
    .then((response) => {
      const { user, token } = response.data;
      dispatch(loginSuccess(user, token));
      sessionStorage.setItem('token', token);
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
  dispatch(setUser(user, user.token));
};
