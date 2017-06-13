/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:19:38 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-13 11:17:06
 */
'use strict'

import { TabView, TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import { Platform } from 'react-native';
import ScreenGame from './screen/ScreenGame';
import ScreenFeed from './screen/ScreenFeed';
import ScreenMe from './screen/ScreenMe';

import { COLOR, NAV_BAR_HEIGHT, TAB_BAR_HEIGHT } from './constant/config';
import { GameTabBarIcon, FeedTabBarIcon, MeTabBarIcon } from './TabBarIcon';

const RootNavigator = TabNavigator({
    Game: { screen: ScreenGame, navigationOptions: { title: '游戏', tabBarLabel: '游戏', tabBarIcon: GameTabBarIcon } },
    Feed: { screen: ScreenFeed, navigationOptions: { title: '动态', tabBarLabel: '动态', tabBarIcon: FeedTabBarIcon } },
    Me: { screen: ScreenMe, navigationOptions: {title: '我', tabBarLabel: '我', tabBarIcon: MeTabBarIcon} }
},
{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    initialRouteName: 'Game',
    tabBarOptions: {
        style: {
            backgroundColor: '#f7f7f7',
            borderTopWidth: 0.5,
            borderTopColor: 'rgba(0, 0, 0, 0.2)',
            paddingTop: (Platform.OS === 'ios') ? 10 : 3,
            paddingBottom: 3,
            height: TAB_BAR_HEIGHT,
            justifyContent: 'flex-end'
        },
        showIcon: true,
        activeTintColor: COLOR.theme,//'#fd5617'
        inactiveTintColor: 'rgba(0, 0, 0, 0.6)',
        labelStyle: {
            fontSize: 10,
            fontWeight: '300'
        },
    }
});

const RootStack = StackNavigator({
    tabs: { 
        screen: RootNavigator,
        navigationOptions: {
            headerTintColor: COLOR.titleColor,
            headerStyle: {
                backgroundColor: COLOR.theme,//'#fa5914'
                height: NAV_BAR_HEIGHT
            },
            headerTitleStyle: {
                alignSelf: 'center'
            },
        }
    }
});

export default RootStack;