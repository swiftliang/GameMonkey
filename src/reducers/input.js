/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 12:08:57 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-30 12:50:34
 */
'use strict'

import * as actions from '../actions';

const initialState = {
  Login: {
    account: '',
    password: '',
  },
  ResetPassword: {
    account: '',
    password: '',
    code: '',
  },
  ScreenReg: {
    mobile: '',
    password: '',
  }
};

export default (state = initialState, action) => {
  if (action.type == actions.INPUT) {
    let {screenId, input} = action;
    return {
      ...state,
      [screenId]: Object.assign({}, state[screenId], input),
    };
  } else if (action.type == actions.RESET_INPUT) {
    let {screenId} = action;
    if (screenId === undefined) {
      return initialState;
    } else {
      return {
        ...state,
        [screenId]: initialState[screenId],
      };
    }
  } else if (action.type == actions.RESET) {
    return initialState;
  } else {
    return state;
  }
};