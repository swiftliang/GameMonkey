/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:43:34 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 09:38:10
 */
'use strict'

import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';

import {IN_DEBUGGER} from './constant/config';
import reducers from './reducers';

export let store = null;

let middlewares = [thunk];
if (IN_DEBUGGER) {
  middlewares.push(createLogger({
    duration: true,
    collapsed: true,
  }));
}

export const createAppStore = compose(
  applyMiddleware(...middlewares),
)(createStore);

export function createPersistAppStore() {
  console.log('createPersistAppStore');
  return new Promise((resolve, reject) => {
    store = createAppStore(reducers, undefined, autoRehydrate());
    if (IN_DEBUGGER) {
      window.store = store;
    }

    persistStore(
      store,
      {
        storage: AsyncStorage, 
        blacklist: ['loading', 'processing', 'error', 'network', 'location', 
          'device'],
      },
      (error, state) => {
        if (error) {
          reject(error);
        } else {
          resolve({store, state});
        }
      },
    );
  });
}