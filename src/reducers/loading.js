/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 15:13:57 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-30 15:14:21
 */
'use strict'

import * as actions from '../actions';

const initialState = {
  loadingCount: 0,
  prompt: undefined,
  enabled: true,
};

export default (state = initialState, action) => {
  if (action.type == actions.LOADING_START) {
    let {prompt} = action;
    return {
      ...state,
      loadingCount: (state.loadingCount + 1),
      prompt: prompt,
    };
  } else if (action.type == actions.LOADING_END) {
    return {
      ...state,
      loadingCount: (state.loadingCount - 1),
      prompt: undefined,
    };
  } else if (action.type == actions.ENABLE_LOADING) {
    return {
      ...state,
      enabled: true,
    };
  } else if (action.type == actions.DISABLE_LOADING) {
    return {
      ...state,
      enabled: false,
    };
  } else if (action.type == actions.RESET || 
    action.type == actions.RESET_LOADING) {
    return initialState;
  } else {
    return state;
  }
};