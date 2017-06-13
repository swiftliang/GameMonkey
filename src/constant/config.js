/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 17:31:10 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-13 11:17:34
 */
'use strict'

import { Dimensions } from 'react-native';

export const VERSION = '0.0.1';

let { height, width } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const NAV_BAR_HEIGHT = 45;
export const TAB_BAR_HEIGHT = 42;
export const TB_ICON_SIZE = 25;

export const COLOR = {
    theme: '#fa5914',//006633
    screengb: '#ffffff',
    tabBarColor: '#f7f7f7',
    titleColor: '#ffffff'
};