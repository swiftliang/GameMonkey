/*
 * @Author: swiftliang 
 * @Date: 2017-06-17 16:19:58 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 14:59:58
 */
'use strict'

import { Provider } from 'react-redux';
import compareVersions from 'compare-versions';
import coordtransform from 'coordtransform';

import { loadIconImages } from './iconImages';
import { registerScreens, navToBootstrap, navToTab } from './navigation';
import { createPersistAppStore } from './store';
import * as actions from './actions';
import logger from './logger';
import { VERSION } from './constant/config';

export default function setup() {
  console.log('setup start');
  loadIconImages()
  .then(() => createPersistAppStore())
  .then(({store,state}) => {
      console.log('setup');
      let {dispatch, getState} = store;
      let version = state.store ? state.store.version : undefined;
      if (version === undefined || compareVersions(version, VERSION) < 0) {
        dispatch(actions.reset());
        dispatch(actions.setStoreVersion(VERSION));
      }
      dispatch(actions.resetScreenLastRefreshTime());
      
      registerScreens(store, Provider);
      navToBootstrap();
    })
    .catch(error => logger.warn(error));
}