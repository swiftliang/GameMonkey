/*
 * @Author: swiftliang 
 * @Date: 2017-06-12 11:38:49 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 10:11:46
 */
'use strict'

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FeedList from '../../components/feed/FeedList';

//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';
//import * as actions from '../actions';

class ScreenFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sent: false,
            barVisible: false,
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log('new props ' + this.props.id + ' : ' + nextProps.id);
        if (nextProps.id == this.props.id) return;
        this.setState({ sent: nextProps.sent, barVisible: true });
        if (nextProps.sent) {
            this.timer = setTimeout(() => {
                this.setState({ sent: false, barVisible: false })
            },
                1000);
        }
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
  
    render() {
        return (
            <View style={styles.container}>
                {this.state.barVisible && (!this.state.sent ?
                    <View style={{ height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(251, 189, 8, 0.8)' }}>
                        <Text style={{ color: 'white' }}>发送中...</Text>
                    </View> :
                    <View style={{ height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00B5AD', }}>
                        <Text style={{ color: 'white' }}>已发送</Text>
                    </View>
                )
                }
                <FeedList {...this.props} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(251, 189, 8, 0.8)',
    }
});

/*function mapStateToProps(state) {
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFeed);*/

export default ScreenFeed;