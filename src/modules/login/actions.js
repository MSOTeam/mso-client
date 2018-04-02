import axios from 'axios';
import { push } from 'react-router-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';
import { toggleModal } from '../navigation/actions';


export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
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
      dispatch(loginSuccess(response));
      sessionStorage.setItem('token', response.data.token);      
    }).then(() => {
      dispatch(push('/shoppers'));
      dispatch(toggleModal());
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
