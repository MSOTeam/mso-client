import axios from 'axios';
import { push } from 'react-router-redux';
import { login } from '../login/actions';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  // REGISTER_SHOPPER_REQUEST,
  // REGISTER_SHOPPER_SUCCESS,
  // REGISTER_SHOPPER_FAILURE,
  REGISTER_SET_STEP,
} from './constants';

const registerRequest = request => ({
  type: REGISTER_REQUEST,
  request,
});

const registerSuccess = shopper => ({
  type: REGISTER_SUCCESS,
  shopper,
});

const registerFailure = error => ({
  type: REGISTER_FAILURE,
  error,
});

export const register = (type, data) => (dispatch) => {
  dispatch(registerRequest(data));
  axios
    .post(type, data)
    .then((response) => {
      dispatch(registerSuccess(response));
      dispatch(login(data));
      dispatch(push('/shopper/profile'));
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
};

export const setStep = step => ({
  type: REGISTER_SET_STEP,
  step,
});
