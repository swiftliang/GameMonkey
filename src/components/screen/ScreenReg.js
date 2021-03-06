/*
 * @Author: swiftliang 
 * @Date: 2017-06-19 16:36:36 
 * @Last Modified by: swiftliang
 * @Last Modified time: 2017-07-10 10:18:28
 */
'use strict'

import React, { Component } from 'react';
import { View } from 'react-native';
import dismissKeyboard from 'dismissKeyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { DEFAULT_NAV_BAR_STYLE } from '../../constant/config';
import * as components from '../../components';
import { navToTab } from '../../navigators/navigation';

class ScreenReg extends React.Component {
    static navigatorStyle = DEFAULT_NAV_BAR_STYLE;

    constructor(props) {
        super(props);
        this.screenId = props.screenId || 'ScreenReg';
    }

    submit() {
        dismissKeyboard();

        let { navigator, input, validateInput, register } = this.props;
        validateInput(this.screenId, input[this.screenId], () => {
            let { mobile, password } = input[this.screenId];
            let code = 0;
            register({
                mobile,
                password,
                code,
                cbOk: () => {
                    navToTab();
                },
            });
        });
    }

    render() {
        let { input, saveInput } = this.props;
        let { mobile, password } = input[this.screenId];
        return (
            <components.Layout screenId={this.screenId}>
                <components.Form>
                    <components.FormItem
                        icon="account-circle"
                        containerStyle={{ borderTopWidth: 0 }}
                    >
                        <components.TextInput
                            placeholder="输入手机号"
                            keyboardType="numeric"
                            returnKeyType="next"
                            defaultValue={mobile}
                            maxLength={11}
                            onRef={ref => { this.refMobile = ref; }}
                            onChangeText={text => saveInput(this.screenId,
                                { mobile: text.trim() })}
                            onSubmitEditing={() => this.refPassword.focus()}
                        />
                    </components.FormItem>
                    <components.FormItem icon="lock">
                        <components.TextInput
                            placeholder="设置登录密码，不少于6位"
                            returnKeyType="done"
                            secureTextEntry
                            defaultValue={password}
                            maxLength={20}
                            onRef={ref => { this.refPassword = ref; }}
                            onChangeText={text => saveInput(this.screenId,
                                { password: text.trim() })}
                            onSubmitEditing={() => this.submit()}
                        />
                    </components.FormItem>
                </components.Form>
                <components.ButtonWithBg
                    text="下一步"
                    onPress={() => this.submit()}
                    textStyle={{ fontSize: 16 }}
                />
            </components.Layout>
        );
    }
}

function mapStateToProps(state) {
    let { input, screen } = state;
    return {
        input,
        screen,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenReg);
