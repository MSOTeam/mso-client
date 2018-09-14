import axios from 'axios';
import { push } from 'react-router-redux';
import { login } from '../login/actions';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_SET_STEP,
} from './constants';

const registerRequest = request => ({
  type: REGISTER_REQUEST,
  request,
});

const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  user,
});

const registerFailure = error => ({
  type: REGISTER_FAILURE,
  error,
});

export const register = data => (dispatch) => {
  dispatch(registerRequest(data));
  axios
    .post('register', data)
    .then((response) => {
      dispatch(registerSuccess(response));
      dispatch(login(data));
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
};

export const setStep = step => ({
  type: REGISTER_SET_STEP,
  step,
});