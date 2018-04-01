import axios from 'axios';
import { push } from 'react-router-redux';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './constants';

export const registerRequest = request => ({
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
      dispatch(push('/registered'));
    })
    .catch((error) => {
      dispatch(registerFailure(error));
    });
};

