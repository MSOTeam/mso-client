import { handleActions } from 'redux-actions';

import { SIDEBAR_TOGGLE } from './constants';

const initialState = {
  isOpen: false,
};

export default handleActions(
  {
    [SIDEBAR_TOGGLE]: state => ({ ...state, isOpen: !state.isOpen }),
  },
  initialState,
);
