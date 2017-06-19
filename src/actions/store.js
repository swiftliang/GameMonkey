/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:51:50 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-17 16:51:50 
 */
export const RESET = 'reset';
export const RESET_STORE = 'reset_store';
export const SET_STORE_VERSION = 'set_store_version';

export function reset() {
  return {
    type: RESET,
  };
}

export function resetStore() {
  return {
    type: RESET_STORE,
  };
}

export function setStoreVersion(version) {
  return {
    type: SET_STORE_VERSION,
    version,
  };
}