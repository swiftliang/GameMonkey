/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:52:23 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-17 16:52:23 
 */
export const RESET_SCREEN_STATE = 'reset_screen_state';
export const RESET_SCREEN_LAST_REFRESH_TIME = 'reset_screen_last_refresh_time';
export const SET_SCREEN_STATE = 'set_screen_state';
export const SET_SCREEN_LAST_REFRESH_TIME = 'set_screen_last_refresh_time';

export function resetScreenState(screenId) {
  return {
    type: RESET_SCREEN_STATE,
    screenId,
  };
}

export function resetScreenLastRefreshTime() {
  return {
    type: RESET_SCREEN_LAST_REFRESH_TIME,
  };
}

export function setScreenState(screenId, screenState) {
  return {
    type: SET_SCREEN_STATE,
    screenId,
    screenState,
  };
}

export function setScreenLastRefreshTime({screenId, lastRefreshTime, 
  objectId = ''}) {
  lastRefreshTime = lastRefreshTime || new Date();
  return {
    type: SET_SCREEN_LAST_REFRESH_TIME,
    screenId,
    lastRefreshTime,
    objectId,
  };
}
