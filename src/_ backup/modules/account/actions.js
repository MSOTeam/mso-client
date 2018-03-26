import axios from 'axios';
import {
  REGISTER_SHOPPER_REQUEST,
  REGISTER_SHOPPER_SUCCESS,
  REGISTER_SHOPPER_FAILURE,
} from './constants';

export const registerShopperRequest = () => ({
  type: REGISTER_SHOPPER_REQUEST,
});

export const registerShopperSuccess = shopper => ({
  type: REGISTER_SHOPPER_SUCCESS,
  shopper,
});

export const registerShopperFailure = error => ({
  type: REGISTER_SHOPPER_FAILURE,
  error,
});

export const registerShopper = shopper => (dispatch) => {
  axios
    .post('/shopper', { shopper })
    .then((response) => {
      dispatch(registerShopperSuccess(response));
    })
    .catch((error) => {
      dispatch(registerShopperFailure(error));
    });
};
