import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from './constants';
import { toggleModal } from '../navigation/actions';


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
      sessionStorage.setItem('user', user);
    }).then(() => {
      dispatch(toggleModal());
      // dispatch(push('/search'));
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
