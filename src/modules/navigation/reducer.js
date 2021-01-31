import { handleActions } from 'redux-actions';

import {
  NAVIGATION_TOGGLE_MODAL,
} from './constants';

const initialState = {
  isOpen: false,
};

export default handleActions(
  {
    [NAVIGATION_TOGGLE_MODAL]: state => ({ ...state, isOpen: !state.isOpen }),
  },
  initialState,
);
