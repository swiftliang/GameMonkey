/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 15:33:26 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 11:10:48
 */
'use strict'

import { Navigation } from 'react-native-navigation';

import { TAB_BAR_STYLE } from '../constant/config';
import iconImages from '../iconImages';

import * as screens from '../components/screen';

export function registerScreens(store, Provider) {
    let reg = (id, contaniner) => Navigation.registerComponent(
        id,
        () => contaniner,
        store,
        Provider
    );

    reg('gm.Game', screens.ScreenGame);
    reg('gm.Feed', screens.ScreenFeed);
    reg('gm.Me', screens.ScreenMe);
    reg('gm.bootstrap', screens.BootStrap);
    reg('gm.ad', screens.ScreenAd);
    reg('gm.perlogin', screens.PerLogin);
    reg('gm.login', screens.Login);
    reg('gm.reg', screens.Register);
}

export function navToBootstrap({isReset = false} = {}) {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'gm.bootstrap',
        },
        passProps: {
            isReset,
        },
        portraitOnlyMode: true,
    });
}

export function navToTab() {
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '游戏',
                screen: 'gm.Game',
                icon: iconImages['tabbar-game'],
                selectedIcon: iconImages['tabbar-game-selected'],
                title: '游戏',
            },
            {
                label: '动态',
                screen: 'gm.Feed',
                icon: iconImages['tabbar-feed'],
                selectedIcon: iconImages['tabbar-feed-selected'],
                title: '动态',
            },
            {
                label: '我',
                screen: 'gm.Me',
                icon: iconImages['tabbar-me'],
                selectedIcon: iconImages['tabbar-me-selected'],
                title: '我',
            }
        ],
        tabsStyle: TAB_BAR_STYLE,
        appStyle: TAB_BAR_STYLE,
        animationType: 'fade',
        portraitOnlyMode: true,
    });
}