/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:57:45 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-17 16:57:45 
 */
import * as actions from '../actions';

const initialState = {
  version: undefined,
};

export default (state = initialState, action) => {
  if (action.type == actions.SET_STORE_VERSION) {
    let {version} = action;
    return {
      ...state,
      version,
    };
  } else if (action.type == actions.RESET || 
    action.type == actions.RESET_STORE) {
    return initialState;
  } else {
    return state;
  }
};