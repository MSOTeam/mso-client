import { handleActions } from 'redux-actions';

// const initialState = {
//   status: false,
// };

// const initialState = {
//   isOpen: false,
// };

// function reducer (state = initialState, action) {
//   switch (action.type) {
//     case 'CLOSED':
//       return {
//         status: false,
//       };
//     case 'OPEN':
//       return {
//         status: true,
//       };
//     default:
//       return state;
//   }
// }

import { NAVIGATION_TOGGLE_MODAL } from './constants';

const initialState = {
  isOpen: false,
};

export default handleActions(
  {
    [NAVIGATION_TOGGLE_MODAL]: state => ({ ...state, isOpen: !state.isOpen }),
  },
  initialState,
);
