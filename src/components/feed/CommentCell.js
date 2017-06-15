/*
 * @Author: swiftliang 
 * @Date: 2017-06-14 13:26:31 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-15 08:59:31
 */
'use strict'

import React from 'react';
import URLConf from '../../apis/URLConf';
import { getToken } from '../../utils/Secret';

import {
    ListView,
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    Modal,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';


export default class CommentCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginRegPageVisible: false,
        }
    }

    renderAuthorName(comment) {
        if (comment.comment_parent_author_name != undefined && comment.comment_parent_author_name != null) {
            return (
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.username}>{commnet.comment_author_name}</Text>
                    <Text style={{ fontSize: 12, color: '#9B9B9B' }}> 回复 </Text>
                    <Text style={styles.username}>{comment.comment_parent_author_name}</Text>
                </View>
            );
        } else {
            return (<Text style={styles.username}>{this.props.comment_author_name}</Text>);
        }
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.commentBox}>
                    <Image style={styles.avatar} source={{ uri: URLConf.IMG_BASE_URL + this.props.comment.comment_author_avatar + avatar_thumbnail }} />
                    <View>
                        {this.renderAuthorName(this.props.comment).bind(this)}
                        <Text style={styles.comment}>{this.props.comment.comment_content}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    commentBox: {
        flex: 1,
        flexDirection: 'row',
        //borderColor: 'black',
        //borderWidth: 1,
        padding: 10,
    },
    avatar: {
        borderRadius: 16,
        width: 32,
        height: 32,
        marginRight: 10,
    },
    username: {
        fontSize: 12,
        color: '#00B5AD',
        lineHeight: 13,
        marginBottom: 5,
    },
    commentTime: {

    },
    comment: {
        fontSize: 14,
        marginRight: 30,
        color: '#030303',
        lineHeight: 18,
    },
});
