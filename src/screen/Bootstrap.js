/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 14:20:05 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-19 15:22:02
 */
'use strict'

import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    InteractionManager
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {navToBootstrap, navToTab} from '../navigation';
import {COLOR, HIDDEN_NAV_BAR_STYLE} from '../constant/config';

class Bootstrap extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    componentDidMount() {
        this.timer1 = setTimeout(() => navToTab(), 2000);
    }

    componentWillUnmount() {
        this.timer1 && clearInterval(this.timer1);
    }
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={styles.logo} source={require('../../assets/imgs/timg.jpg') }></Image>
                <Text style={styles.title}>游戏猴</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    fontSize: 32,
    color: COLOR.textEmpha,
  },
  logo: {
      height: 100,
      width: 100
  }
});

function mapStateToProps(state) {
    return {state: state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);
//export default Bootstrap;