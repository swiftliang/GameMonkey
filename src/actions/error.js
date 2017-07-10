/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:54:07 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 10:17:37
 */
import logger from '../logger';
import {navToBootstrap} from '../navigators/navigation';
import {InputError, ApiHttpError} from '../error';

export const RESET_ERROR = 'reset_error';
export const RESET_ERROR_INPUT = 'reset_error_input';
export const ERROR_INPUT = 'error_input';
export const ERROR_FLASH = 'error_flash';

export function resetError() {
  return {
    type: RESET_ERROR,
  };
}

export function resetErrorInput(screenId) {
  return {
    type: RESET_ERROR_INPUT,
    screenId,
  };
}

export function errorInput(screenId, error) {
  return {
    type: ERROR_INPUT,
    screenId,
    error,
  };
}

export function errorFlash(error, duration = 3000) {
  return dispatch => {
    dispatch({
      type: ERROR_FLASH,
      error,
    });
    setTimeout(() => {
      dispatch({
        type: ERROR_FLASH,
        error: '',
      });
    }, duration);
  };
}

export function handleError(error) {
  return dispatch => {
    logger.debug(error);
    if (error instanceof ApiHttpError) {
      if (error.code == 401) {
        navToBootstrap();
        return;
      }
    } else if (error instanceof InputError) {
      dispatch(errorInput(error.screenId, error.error));
      return;
    } else if (error instanceof Error) {
      dispatch(errorFlash(error.message));
      return;
    } else if (error instanceof Object && error.hasOwnProperty('message')) {
      dispatch(errorFlash(error.message));
      return;
    } else {
      logger.error(error);
      return;
    }
  };
}