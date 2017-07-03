/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:36:17 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-29 18:05:18
 */
'use strict'

import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import { DEFAULT_NAV_BAR_STYLE } from '../constant/config';

export default class ScreenLogin extends React.Component {
    static navigatorStyle = DEFAULT_NAV_BAR_STYLE;
    static navigatorButtons = {
        rightButtons: [
            {
                title: '重设密码',
                id: 'reset_password',
            },
        ],
    };
    render() {
        return (
            <Text>Login</Text>
        );
    }
}