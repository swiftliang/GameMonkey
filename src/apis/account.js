/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 14:26:58 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-01 16:04:37
 */
'use strict'

import { getApi, postApi } from './common';

export function regsiter(moblie, password) {
    return postApi('/regsiter', {moblie, password})
}

export function login(moblie, password) {
    return getApi('/login', {moblie, password})
}