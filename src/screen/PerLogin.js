/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:34:12 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-30 12:40:15
 */
'use strict'

import React from 'react';
import {
    Image,
    View
} from 'react-native';
import Button from '../components/common/Button';
import { COLOR, HIDDEN_NAV_BAR_STYLE } from '../constant/config';

export default class PerLogin extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    render() {
        return (
            <View>
                <Image
                    source={require('../../assets/imgs/timg.jpg')}
                    style={{ alignSelf: 'center', borderRadius: 15,height: 200, width: 200 }}
                />
                <Button
                    text='登录'
                    containerStyle={{ marginTop: 100 }}
                    onPress={() => this.props.navigator.push({screen: 'gm.login', title: '登陆'})}
                    textStyle={{ fontSize: 16 }}
                />
                <Button
                    text='注册'
                    onPress={() => this.props.navigator.push({screen: 'gm.reg', title: '注册'})}
                    containerStyle={{ marginTop: 30 }}
                    textStyle={{ fontSize: 16 }}
                />
            </View>
        );
    }
}