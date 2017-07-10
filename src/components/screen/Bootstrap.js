/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 14:20:05 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 12:29:35
 */
'use strict'

import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet,
    InteractionManager,
    StatusBar,
    Platform
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { navToBootstrap, navToTab } from '../../navigators/navigation';
import { COLOR, HIDDEN_NAV_BAR_STYLE } from '../../constant/config';
import * as components from '../../components'

class Bootstrap extends React.Component {
    static navigatorStyle = HIDDEN_NAV_BAR_STYLE;
    constructor(props) {
        super(props)
        this.screenId = props.screenId || 'Bootstrap'
    }

    componentDidMount() {
        let {navigator, isReset} = this.props;
        if(!isReset) {
            this.timer1 = setTimeout(() => navigator.resetTo({ screen: 'gm.ad', title: '' }), 1000);
        } else {
             navigator.resetTo({screen: 'gm.perlogin', title: ''})
        }
    }

    componentWillUnmount() {
        this.timer1 && clearInterval(this.timer1);
    }
    render() {
        return (
            <components.Layout
                screenId={this.screenId}
                containerStyle={{
                    marginTop: (Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0)
                }}
            >
                <StatusBar barStyle='dark-content' />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <components.Image
                        source={require('../../../assets/imgs/timg.jpg')}
                        style={{ borderRadius: 15 }}
                    />
                    <Text style={styles.title}>在球场</Text>
                </View>
            </components.Layout>
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
    return { state: state };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);
//export default Bootstrap;