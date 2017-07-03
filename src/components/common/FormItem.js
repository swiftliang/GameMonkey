/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 10:12:57 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-30 10:13:56
 */
'use strict'

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {COLOR} from '../../constant/config';
import Icon from './Icon';

export default ({icon, children, containerStyle, iconStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon 
        ? <Icon name={icon} style={[styles.icon, iconStyle]} /> 
        : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: COLOR.linePrompt,
  },
  icon: {
    width: 30,
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.textEmpha,
  },
});