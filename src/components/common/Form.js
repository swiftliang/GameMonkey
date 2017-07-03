/*
 * @Author: swiftliang 
 * @Date: 2017-06-30 10:01:12 
 * @Last Modified by:   swiftliang 
 * @Last Modified time: 2017-06-30 10:01:12 
 */
'use strict'

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {COLOR} from '../../constant/config';

export default ({children, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: COLOR.backgroundLighter,
    borderWidth: 1,
    borderColor: COLOR.lineNormal,
    borderRadius: 5,
  },
});