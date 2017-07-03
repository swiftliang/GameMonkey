/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 15:13:17 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-30 15:13:17 
 */
'use strict'

export const RESET_LOADING = 'reset_loading';
export const LOADING_START = 'loading_start';
export const LOADING_END = 'loading_end';
export const ENABLE_LOADING = 'enable_loading';
export const DISABLE_LOADING = 'disable_loading';

export function resetLoading() {
  return {
    type: RESET_LOADING,
  };
}

export function loadingStart(prompt) {
  return {
    type: LOADING_START,
    prompt,
  };
}

export function loadingEnd() {
  return {
    type: LOADING_END,
  };
}

export function enableLoading() {
  return {
    type: ENABLE_LOADING,
  };
}

export function disableLoading() {
  return {
    type: DISABLE_LOADING,
  };
}