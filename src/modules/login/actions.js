import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
      dispatch(push('/search'));
      dispatch(toggleModal());
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
