/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:18:20 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 11:20:46
 */
'use strict'

import React from 'react';
import { Text, AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as components from '../../components';
import { navToBootstrap } from '../../navigators/navigation';

class ScreenMe extends React.Component {
    logout() {
        AsyncStorage.removeItem('token')
        navToBootstrap({isReset:true});
    }
    render() {
        return (
            <components.Button
                    text='退出当前账号'
                    containerStyle={{ marginTop: 100 }}
                    onPress = {() => this.logout()}
                    textStyle={{ fontSize: 16 }}
                />
        );
    }
}

function mapStateToProps(state) {
    let { screen, object, account } = state
    return {
        screen,
        object,
        account
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMe);

//export default ScreenMe;