/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 10:03:06 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-30 10:03:06 
 */
'use strict'

import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {COLOR} from '../../constant/config';

export default ({name, style, ...props}) => {
  return (
    <Icon {...props} name={name} style={[styles.icon, style]} />
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 12,
    color: COLOR.textNormal,
    backgroundColor: 'transparent',
  },
});
