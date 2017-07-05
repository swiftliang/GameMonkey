/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:36:17 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-05 10:38:10
 */
'use strict'

import React from 'react';
import { View } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { DEFAULT_NAV_BAR_STYLE } from '../constant/config';
import { navToTab } from '../navigation';
import * as actions from '../actions';

import * as components from '../components';

class ScreenLogin extends React.Component {
    static navigatorStyle = DEFAULT_NAV_BAR_STYLE;
    static navigatorButtons = {
        rightButtons: [
            {
                title: '重设密码',
                id: 'reset_password',
            },
        ],
    };

    constructor(props) {
        super(props);

        let { navigator } = props;
        navigator.setOnNavigatorEvent(event => this.onNavigatorEvent(event));

        this.screenId = props.screenId || 'Login';
    }

    onNavigatorEvent(event) {
        let { navigator } = this.props;
        if (event.type == 'NavBarButtonPress') {
            if (event.id == 'reset_password') {
                navigator.push({ screen: 'zqc.ResetPassword', title: '重设密码' });
            }
        }
    }

    submit() {
        let { navigator, input, validateInput, login } = this.props;
        validateInput(this.screenId, input[this.screenId], () => {
            let { account, password } = input[this.screenId];
            let username, mobile, email;
            if (account.match(/^\d+$/) !== null) {
                mobile = account;
            } else if (account.match(/^.+@.+$/) !== null) {
                email = account;
            } else {
                username = account;
            }
            login({
                username,
                mobile,
                email,
                password,
                cbOk: user => {
                    navToTab();
                },
            });
        });
    }

    render() {
        let { input, saveInput } = this.props;
        let { account, password } = input[this.screenId];

        return (
            <components.Layout screenId={this.screenId}>
                <components.Form>
                    <components.FormItem
                        icon="account-circle"
                        containerStyle={{ borderTopWidth: 0 }}
                    >
                        <components.TextInput
                            placeholder="输入手机号或绑定邮箱"
                            returnKeyType="next"
                            defaultValue={account}
                            maxLength={50}
                            onChangeText={text => saveInput(this.screenId,
                                { account: text.trim() })}
                            onSubmitEditing={() => this.refPassword.focus()}
                        />
                    </components.FormItem>
                    <components.FormItem icon="lock">
                        <components.TextInput
                            placeholder="输入密码"
                            returnKeyType="done"
                            secureTextEntry
                            defaultValue={password}
                            maxLength={20}
                            onRef={ref => { this.refPassword = ref; }}
                            onChangeText={text => saveInput(this.screenId,
                                { password: text.trim() })}
                            onSubmitEditing={() => {
                                dismissKeyboard();
                                this.submit();
                            }}
                        />
                    </components.FormItem>
                </components.Form>
                <components.ButtonWithBg
                    text="登录"
                    onPress={() => {
                        dismissKeyboard();
                        this.submit();
                    }}
                    textStyle={{ fontSize: 16 }}
                />
            </components.Layout>
        );
    }
}

function mapStateToProps(state) {
    let { input } = state;
    return {
        input,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLogin);
