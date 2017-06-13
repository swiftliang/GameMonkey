/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:48:24 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-12 11:53:03
 */
'use strict'

import { combineReducers } from 'redux';
import RootNavigator from '../RootNavigator';

const navReducer = (state, action) => {
    const newState = RootNavigator.router.getStateForAction(action, state);
    return newState || state;
};

export default combineReducers({
    navReducer
});