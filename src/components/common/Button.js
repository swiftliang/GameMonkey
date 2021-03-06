/*
 * @Author: swiftliang 
 * @Date: 2017-06-29 16:06:49 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-29 16:09:55
 */
'use strict'

import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import flattenStyle from 'flattenStyle'

import {COLOR} from '../../constant/config'

export default ({text, onPress, containerStyle, textStyle}) => {
  let {fontSize} = flattenStyle(textStyle || styles.text)
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {padding: Math.round(fontSize / 2)},
        containerStyle]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLOR.theme,
    borderRadius: 5
  },
  text: {
    color: COLOR.theme,
    fontSize: 14
  }
})