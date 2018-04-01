import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './constants';


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
      // dispatch(push('/'));
    })
    .catch((error) => {
      dispatch(loginFailure(error));
    });
};
