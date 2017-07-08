'use strict';

import React from 'react';
import {AsyncStorage} from 'react-native';
import URLConf from '../apis/URLConf';
import Md5 from './Md5';
import PoplarEnv from './PoplarEnv';

// const token = '6b6478dd-33ab-492e-b06d-05b7f1106c47';
const token = '';
const secret = 'osf';

export default {
  token, secret
}


export function isLogin(callback) {
  AsyncStorage.getItem('token', (err, result) => {
    console.log('token : '+result);
    if(typeof(result) == 'string') {
      callback(true, result);
    }
  });
}

export function getToken(callback) {
  AsyncStorage.getItem('token', (err, result) => {
    console.log(result);
    callback(result);
  });
}

export function getUserInfo(callback) {
  //AsyncStorage.clear();
  AsyncStorage.multiGet(['userId', 'userName', 'avatar'], (err, data) => {
    console.log('user info :' + data);
    var user = {};
    user.userId = data[0][1];
    user.userName = data[1][1];
    user.avatar = data[2][1];
    console.log('user info: '+ user.userName);
    callback(user);
  });
}