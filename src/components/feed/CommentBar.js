/*
 * @Author: swiftliang 
 * @Date: 2017-06-14 13:26:20 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-06-14 23:49:06
 */
'use strict'

import React from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import KeyboardSpacer from 'react-native-keyboard-spacer';
import { SCREEN_WIDTH } from '../../constant/config';
import { reply } from '../api/CommentAPI';

export default class CommentBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        margin: 50,
      }
    }

    hide() {
      this.props.hideCommentBar();
    }

    componentDidMount() {
      this.refs.commentBar.focus();
    }

    comment() {
    // var comment = { id: 19,
    //  comment_object_type: 2,
    //  comment_object_id: 77,
    //  comment_author: 23,
    //  comment_author_name: 'lw',
    //  comment_author_avatar: '5245526e-9b78-4c69-9a99-4bd454f015a0.jpeg',
    //  comment_ts: 1465097153000,
    //  comment_content: '呵呵hhhhhh',
    //  comment_parent: 0,
    //  comment_parent_author: 0,
    //  comment_parent_author_name: null };

     var commentParent = null;
     if(this.props.commentParent) {
       //comment.comment_parent_author_name = this.props.commentParent.comment_author_name;
       commentParent = this.props.commentParent.id;
       console.log('commentParent:' + commentParent);
     }
     reply(this.props.commentObjectType, this.props.commentObjectId, this.state.text, commentParent, (comment) => {
       this.props.pushNewComment2List(comment);
     });
     console.log('call back');
     this.hide();
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TextInput
              ref='commentBar'
              style={styles.input}
              placeholder={this.props.commentParent ? '回复 ' + this.props.commentParent.comment_author_name + ' :' : '回复:'}
              keyboardType='web-search'
              autoFocus={this.props.visible}
              onBlur={this.hide}
              onChangeText={(text) => this.setState({ text })}
            />
            <TouchableOpacity onPress={this.comment} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={styles.commentBtn}>回复</Text>
            </TouchableOpacity>
          </View>
          <KeyboardSpacer />
        </View>

      );
    }
}

var styles = StyleSheet.create({
    container: {
      flex:1,
      //flexDirection: 'column',
      //justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'white',
      width:windowWidth,
      height: 40,
      paddingLeft:20,
      paddingRight: 20,
      paddingTop: 5,
      paddingBottom: 5,
    },
    input: {
      height: 30,
      flex: 9,
      borderRadius: 2,
      backgroundColor: '#F3F3F3',
      paddingLeft: 5,
      marginRight:10,
    },
    commentBtn: {
      flex: 1,
      marginTop: 5,
      color: '#00B5AD',
    }
});