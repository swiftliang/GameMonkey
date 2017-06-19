/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:58:14 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-17 16:58:14 
 */
import * as actions from '../actions';

const initialState = {
  reach: undefined,
  isConnected: undefined,
};

export default (state = initialState, action) => {
  if (action.type == actions.SET_NETWORK) {
    let {...newState} = action;
    delete newState.type;
    return Object.assign({}, state, newState);
  } else if (action.type == actions.RESET_NETWORK) {
    return initialState;
  } else {
    return state;
  }
};