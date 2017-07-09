/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:34:12 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-09 13:33:31
 */
'use strict'

import React from 'react';
import {
    Image,
    View
} from 'react-native';

import * as components from '../components';
import { COLOR, HIDDEN_NAV_BAR_STYLE } from '../constant/config';

export default class PerLogin extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    render() {
        return (
            <components.Layout
                screenId={this.screenId}
                containerStyle={{ justifyContent: 'center' }}
            >
                <components.Image
                    source={require('../../assets/imgs/timg.jpg')}
                    //style={{ alignSelf: 'center', borderRadius: 15, height: 200, width: 200 }}
                    style={{alignSelf: 'center', borderRadius: 15}}
                />
                <components.Button
                    text='登录'
                    containerStyle={{ marginTop: 100 }}
                    onPress={() => this.props.navigator.push({ screen: 'gm.login', title: '登陆', animated: true, animationType: 'slide-horizontal' })}
                    textStyle={{ fontSize: 16 }}
                />
                <components.Button
                    text='注册'
                    onPress={() => this.props.navigator.push({ screen: 'gm.reg', title: '注册', animated: true, animationType: 'slide-horizontal' })}
                    containerStyle={{ marginTop: 30 }}
                    textStyle={{ fontSize: 16 }}
                />
            </components.Layout>
        );
    }
}