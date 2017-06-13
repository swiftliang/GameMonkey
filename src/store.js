/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:43:34 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-12 11:46:55
 */
'use strict'

import thunkMiddleWare from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const middleWare = [thunkMiddleWare];
const store = createStore(
    reducers,
    {},
    applyMiddleware(...middleWare)
);

export default store;