/*
 * @Author: swiftliang 
 * @Date: 2017-06-13 10:21:16 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-17 15:46:42
 */
'use strict'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TB_ICON_SIZE } from './constant/config';

export const GameTabBarIcon = ({ focused, tintColor }) => {
    return (
        <Icon
            style={{ paddingLeft: 4, paddingRight: 4 }}
            name={focused ? 'ios-game-controller-b' : 'ios-game-controller-b-outline'}
            size={TB_ICON_SIZE}
            color={tintColor}
        />
    );
}

export const FeedTabBarIcon = ({ focused, tintColor }) => {
    return (
        <Icon
            style={{ paddingLeft: 4, paddingRight: 4 }}
            name={focused ? 'ios-aperture' : 'ios-aperture-outline'}
            size={TB_ICON_SIZE}
            color={tintColor}
        />
    );
}

export const MeTabBarIcon = ({ focused, tintColor }) => {
    return (
        <Icon
            style={{ paddingLeft: 4, paddingRight: 4 }}
            name={focused ? 'ios-person' : 'ios-person-outline'}
            size={TB_ICON_SIZE}
            color={tintColor}
        />
    );
}