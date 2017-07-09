/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 14:26:58 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-09 12:21:02
 */
'use strict'

import { getApi, postApi } from './common';

export function regsiter({mobile, password}) {
    return postApi('/register', {mobile, password})
}

export function login({mobile, password}) {
    return getApi('/login', {mobile, password})
}

export function resetPassword({mobile = '', email = '', password = '', code}) {
  return getApi('/resetPassword', {mobile, email, password, code});
}

export function logout() {
  return getApi('/logout');
}

export function feed(token) {
  return getApi('api/feed', {}, { headers:{'Authorization':'Bearer '+ token}})
}

export function updateAccount(update, background = false) {
  let newUpdate = {};
  Object.entries(update).forEach(([k, v]) => {
    if (k == 'location') {
      let {longitude, latitude} = v;
      v = `${longitude},${latitude}`;
    }
    newUpdate[k] = v;
  });
  return postApi('/account/edit', newUpdate, {background});
}

export function updateAccountSettings(update) {
  let newUpdate = {};
  Object.entries(update).forEach(([k, v]) => {
    newUpdate[k] = JSON.stringify(v);
  });
  return postApi('/account/updateSettings', newUpdate);
}

export function accountInfo() {
  return getApi('/account/info');
}