/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 11:28:19 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-19 11:28:19 
 */
export const RESET_DEVICE = 'reset_device';
export const SET_KEYBOARD = 'set_keyboard';

export function resetDevice() {
  return {
    type: RESET_DEVICE,
  };
}

export function setKeyboard({coords}) {
  return {
    type: SET_KEYBOARD,
    coords,
  };
}