/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:17:10 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-29 16:19:29
 */
'use strict'

import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';
import { COLOR, HIDDEN_NAV_BAR_STYLE } from '../constant/config';
import { navToTab } from '../navigation';
import { isLogin } from '../utils/Secret'
import { Navigation } from 'react-native-navigation';

export default class Ad extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            token: ''
        }
    }
    componentDidMount() {
        isLogin((result, token) => {
            if (result) {
                this.setState({
                    isLogin: true,
                    token: token,
                });
            }
        });
        this.timer1 = setTimeout(() => {
            if(this.state.isLogin) {
                navToTab()
            } else {
                this.props.navigator.resetTo({screen: 'gm.perlogin', title: ''})
            }
        }, 3000);
    }

    componentWillUnmount() {
        this.timer1 && clearInterval(this.timer1);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>这是广告页</Text>
            </View>
        );
    }
}