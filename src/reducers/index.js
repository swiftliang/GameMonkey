/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:48:24 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-05 10:32:39
 */
'use strict'

import { combineReducers } from 'redux';

import network from './network';
import screen from './screen';
import store from './store';
import error from './error';
import input from './input';
import loading from './loading'
import account from './account';
import processing from './processing';

export default combineReducers({
    error,
    network,
    screen,
    store,
    input,
    loading,
    account,
    processing
});