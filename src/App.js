/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:01:56 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-17 18:05:24
 */
'use strict'

import React from 'react';
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';
import store from './store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}