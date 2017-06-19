/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 15:39:21 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 11:40:10
 */
'use strict'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLOR } from './constant/config';

const icons = {
    'tabbar-game': ['ios-game-controller-b-outline', 26, COLOR.textEmpha, Ionicons],
    'tabbar-game-selected': ['ios-game-controller-b', 26, COLOR.theme, Ionicons],
    'tabbar-feed': ['ios-aperture-outline', 26, COLOR.textEmpha, Ionicons],
    'tabbar-feed-selected': ['ios-aperture', 26, COLOR.theme, Ionicons],
    'tabbar-me': ['ios-person-outline', 26, COLOR.textEmpha, Ionicons],
    'tabbar-me-selected': ['ios-person', 26, COLOR.theme, Ionicons],
}

let iconImages = {};

export function loadIconImages() {
    return new Promise((resolve, reject) => {
        const iconNames = Object.keys(icons);
        Promise.all(
            iconNames.map(iconName => {
                let [name, size, color, vendor] = icons[iconName];
                return vendor.getImageSource(name, size, color);
            })
        ).then(source => {
            iconNames.forEach(
                (iconName, index) => { iconImages[iconName] = source[index]; }
            );
            resolve(iconImages);
        });
    });
}

export default iconImages;