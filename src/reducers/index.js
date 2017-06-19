/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:48:24 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-17 17:00:49
 */
'use strict'

import { combineReducers } from 'redux';

import network from './network';
import screen from './screen';
import store from './store';
import error from './error';

export default combineReducers({
    error,
    network,
    screen,
    store
});