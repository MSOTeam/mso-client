import axios from 'axios';
import {
  FIND_SHOPPERS_REQUEST,
  FIND_SHOPPERS_SUCCESS,
  FIND_SHOPPERS_FAILURE,
} from './constants';

export const findShoppersRequest = request => ({
  type: FIND_SHOPPERS_REQUEST,
  request,
});

const findShoppersSuccess = shoppers => ({
  type: FIND_SHOPPERS_SUCCESS,
  shoppers,
});

const findShoppersFailure = error => ({
  type: FIND_SHOPPERS_FAILURE,
  error,
});

export const findShoppers = data => (dispatch) => {
  dispatch(findShoppersRequest(data));
  axios
    .get('shopper', data)
    .then((response) => {
      dispatch(findShoppersSuccess(response));
      console.log(response);
    })
    .catch((error) => {
      dispatch(findShoppersFailure(error));
    });
};
