/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:18:20 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 10:20:16
 */
'use strict'

import React from 'react';
import { Text } from 'react-native';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
import * as actions from '../actions';

class ScreenMe extends React.Component {
    render() {
        return(
            <Text>this is Me screen</Text>
        );
    }
}

/*function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMe);*/

export default ScreenMe;