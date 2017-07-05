/*
 * @Author: swiftliang 
 * @Date: 2017-07-01 17:02:35 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-05 10:29:21
 */
'use strict'

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {COLOR} from '../../constant/config';

function ErrorFlash({error, containerStyle}) {
  error = error.flash;
  if (!error) {
    return null;
  }

  return (
    <Animatable.View 
      animation="fadeIn" 
      style={[styles.container, containerStyle]}
    >
      <Text style={styles.error}>{error}</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLOR.backgroundNotice,
  },
  error: {
    fontSize: 12,
    color: COLOR.textEmpha,
  },
});

function mapStateToProps(state) {
  let {error} = state;
  return {
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorFlash);
