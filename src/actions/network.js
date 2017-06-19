/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:53:20 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-17 16:53:20 
 */
export const RESET_NETWORK = 'reset_network';
export const SET_NETWORK = 'set_network';

export function resetNetwork() {
  return {
    type: RESET_NETWORK,
  };
}

export function setNetwork(state) {
  return {
    type: SET_NETWORK,
    ...state,
  };
}