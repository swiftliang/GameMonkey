/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 17:31:10 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 15:29:52
 */
'use strict'

import { Dimensions } from 'react-native';

export const VERSION = '0.0.1';
export const DEBUG = __DEV__;
export const IN_DEBUGGER = DEBUG && !!window.navigator.userAgent;

let { height, width } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const NAV_BAR_HEIGHT = 45;
export const TAB_BAR_HEIGHT = 42;
export const TB_ICON_SIZE = 25;

export const COLOR = {
    theme: '#fa5914',
    screengb: '#ffffff',
    tabBarColor: '#f7f7f7',
    titleColor: '#ffffff',
    textEmpha: '#212121',
    backgroundDarker: '#D6D6D6'
};

export const HIDDEN_NAV_BAR_STYLE = {
  navBarHidden: true,
  statusBarHidden: true,
  statusBarHideWithNavBar: true,
  screenBackgroundColor: 'white'
};

export const TAB_BAR_STYLE = {
  tabBarBackgroundColor: COLOR.backgroundDarker,
  tabBarButtonColor: COLOR.textEmpha,
  tabBarSelectedButtonColor: COLOR.theme,
  navBarTitleTextCentered: true,
  navBarBackgroundColor: COLOR.theme,
  navBarTextColor: COLOR.titleColor
};