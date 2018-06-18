import axios from 'axios';
import { push } from 'react-router-redux';
import { login } from '../login/actions';
import {
  REGISTER_SHOPPER_REQUEST,
  REGISTER_SHOPPER_SUCCESS,
  REGISTER_SHOPPER_FAILURE,
  REGISTER_SET_STEP,
} from './constants';

const registerShopperRequest = request => ({
  type: REGISTER_SHOPPER_REQUEST,
  request,
});

const registerShopperSuccess = shopper => ({
  type: REGISTER_SHOPPER_SUCCESS,
  shopper,
});

const registerShopperFailure = error => ({
  type: REGISTER_SHOPPER_FAILURE,
  error,
});

export const registerShopper = data => (dispatch) => {
  dispatch(registerShopperRequest(data));
  axios
    .post('shopper', data)
    .then((response) => {
      dispatch(registerShopperSuccess(response));
      dispatch(login(data));
      dispatch(push('/shopper/profile'));
    })
    .catch((error) => {
      dispatch(registerShopperFailure(error));
    });
};

export const setStep = step => ({
  type: REGISTER_SET_STEP,
  step,
});
