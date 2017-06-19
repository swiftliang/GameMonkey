/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:17:10 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 16:26:16
 */
'use strict'

import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import {COLOR, HIDDEN_NAV_BAR_STYLE} from '../constant/config';
import {navToTab} from '../navigation';

export default class Ad extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    componentDidMount() {
        this.timer1 = setTimeout(() => navToTab(), 3000);
    }

    componentWillUnmount() {
        this.timer1 && clearInterval(this.timer1);
    }
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>这是广告页</Text>
            </View>
        );
    }
}