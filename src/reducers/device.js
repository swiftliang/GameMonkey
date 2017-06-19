/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 11:28:57 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-19 11:28:57 
 */
import * as actions from '../actions';

const initialState = {
  keyboard: {
    coords: undefined,
  },
};

export default (state = initialState, action) => {
  if (action.type == actions.SET_KEYBOARD) {
    let {coords} = action;
    return {
      ...state,
      keyboard: {
        ...state.keyboard,
        coords,
      },
    };
  } else if (action.type == actions.RESET_DEVICE) {
    return initialState;
  } else {
    return state;
  }
};