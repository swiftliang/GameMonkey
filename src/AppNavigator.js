/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:09:56 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-12 11:16:17
 */
'use strict'

import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './RootNavigator';

class AppNavigatorState extends React.Component {
    render() {
        return (
            <RootNavigator
                navigation = {addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav 
                })}
            />  
        );
    }
}

export default connect(state => ({
    nav: state.navReducer
}))(AppNavigatorState);