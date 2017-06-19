/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:36:15 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 10:58:04
 */
'use strict'

import React from 'react';
import { Text, Image } from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ScreenGame extends React.Component {
    render() {
        return(
            <Image source={{uri:'http://imgsrc.baidu.com/imgad/pic/item/caef76094b36acaf0accebde76d98d1001e99ce7.jpg'}} style={{width: 100, height: 100}}/>
        );
    }
}

function mapStateToProps(state) {
    return {state: state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenGame);

//export default ScreenGame;